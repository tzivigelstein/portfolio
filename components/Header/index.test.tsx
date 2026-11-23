import { render, screen } from '@testing-library/react'
import Header from './index'
import fs from 'node:fs'
import path from 'node:path'
import { EMAIL, RESUMES } from '@/data/contact'
import { getDictionary, type Locale } from '@/lib/i18n'

const renderHeader = (lang: Locale = 'en') =>
  render(<Header dictionary={getDictionary(lang).common} lang={lang} />)

describe('Header', () => {
  test('has one heading that reads as a sentence', () => {
    renderHeader()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent?.replace(/\s+/g, ' ').trim()).toBe("I'm Tzivi Backend developer.")
  })

  test.each([['en', 'Resume'], ['es', 'Currículum']] as const)(
    'links to the %s resume only when there is one',
    (lang, name) => {
      renderHeader(lang)
      const link = screen.queryByRole('link', { name })
      const resume = RESUMES[lang]

      if (resume) expect(link).toHaveAttribute('href', resume)
      else expect(link).not.toBeInTheDocument()
    }
  )

  test('only lists resumes that are really in public/', () => {
    for (const resume of Object.values(RESUMES)) {
      expect(fs.existsSync(path.join(process.cwd(), 'public', resume))).toBe(true)
    }
  })

  test('has Github, Linkedin and mail links', () => {
    renderHeader()
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/tzivigelstein')
    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute('href', 'https://www.linkedin.com/in/tzivigelstein/')
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  test('links to the other language and marks the current one', () => {
    renderHeader('es')
    const switcher = screen.getByRole('navigation', { name: 'Elegir idioma' })

    expect(switcher).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'ES' })).toHaveAttribute('aria-current', 'page')
  })
})

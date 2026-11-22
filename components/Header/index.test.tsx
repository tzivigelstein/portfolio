import { render, screen } from '@testing-library/react'
import Header from './index'
import { EMAIL } from '@/data/contact'
import { getDictionary, type Locale } from '@/lib/i18n'

const renderHeader = (lang: Locale = 'en') =>
  render(<Header dictionary={getDictionary(lang).common} lang={lang} />)

describe('Header', () => {
  test('has one heading that reads as a sentence', () => {
    renderHeader()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent?.replace(/\s+/g, ' ').trim()).toBe("I'm Tzivi Backend developer.")
  })

  test('links to the resume in the current language', () => {
    renderHeader('en')
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_EN.pdf')
  })

  test('links to the Spanish resume in Spanish', () => {
    renderHeader('es')
    expect(screen.getByRole('link', { name: 'Currículum' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_ES.pdf')
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

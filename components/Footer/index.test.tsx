import { render, screen } from '@testing-library/react'
import Footer from './index'
import { EMAIL, RESUMES } from '@/data/contact'
import { getDictionary } from '@/lib/i18n'

describe('Footer', () => {
  test('links to the profiles and the mail', () => {
    render(<Footer dictionary={getDictionary('en').common} />)

    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute('href', 'https://www.linkedin.com/in/tzivigelstein/')
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/tzivigelstein')
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })

  test('links only to the resumes that exist', () => {
    render(<Footer dictionary={getDictionary('en').common} />)

    for (const [lang, name] of [['en', 'Resume in English'], ['es', 'Resume in Spanish']] as const) {
      const link = screen.queryByRole('link', { name })
      const path = RESUMES[lang]

      if (path) expect(link).toHaveAttribute('href', path)
      else expect(link).not.toBeInTheDocument()
    }
  })
})

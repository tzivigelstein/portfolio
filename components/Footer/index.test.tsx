import { render, screen } from '@testing-library/react'
import Footer from './index'
import { EMAIL } from '@/data/contact'
import { getDictionary } from '@/lib/i18n'

describe('Footer', () => {
  test('links to the profiles, the mail and both resumes', () => {
    render(<Footer dictionary={getDictionary('en').common} />)

    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute('href', 'https://www.linkedin.com/in/tzivigelstein/')
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/tzivigelstein')
    expect(screen.getByRole('link', { name: EMAIL })).toHaveAttribute('href', `mailto:${EMAIL}`)
    expect(screen.getByRole('link', { name: 'Resume in English' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_EN.pdf')
    expect(screen.getByRole('link', { name: 'Resume in Spanish' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_ES.pdf')
  })
})

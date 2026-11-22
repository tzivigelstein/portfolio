import React from 'react'
import { screen } from '@testing-library/react'
import renderWithI18n from '../../test/renderWithI18n'
import Header from './index'
import { EMAIL } from '../../data/contact'

describe('Header', () => {
  test('has one heading that reads as a sentence', () => {
    renderWithI18n(<Header />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent.replace(/\s+/g, ' ').trim()).toBe("I'm Tzivi Backend developer.")
  })

  test('links to the resume in the current language', () => {
    renderWithI18n(<Header />, 'en')
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_EN.pdf')
  })

  test('links to the Spanish resume in Spanish', () => {
    renderWithI18n(<Header />, 'es')
    expect(screen.getByRole('link', { name: 'Currículum' })).toHaveAttribute('href', '/resume/Tzivi_Gelstein_CV_ES.pdf')
  })

  test('has Github, Linkedin and mail links', () => {
    renderWithI18n(<Header />)
    expect(screen.getByRole('link', { name: 'Github' })).toHaveAttribute('href', 'https://github.com/tzivigelstein')
    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute('href', 'https://www.linkedin.com/in/tzivigelstein/')
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${EMAIL}`)
  })
})

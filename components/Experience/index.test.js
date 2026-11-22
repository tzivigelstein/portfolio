import React from 'react'
import { screen, within } from '@testing-library/react'
import renderWithI18n from '../../test/renderWithI18n'
import Experience from './index'

describe('Experience', () => {
  test('lists work, certification and education', () => {
    renderWithI18n(<Experience />)
    const titles = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)

    expect(titles).toEqual([
      'Creator & Developer, AC Hub',
      'EF Standard English Test (EF SET)',
      'Backend developer, Freelance',
      'Electronics Technician'
    ])
  })

  test('shows several lines as a bullet list', () => {
    renderWithI18n(<Experience />)
    const freelance = screen.getByRole('heading', { name: 'Backend developer, Freelance' }).closest('li')
    expect(within(freelance).getAllByRole('listitem')).toHaveLength(4)
  })

  test('shows a single line as plain text', () => {
    renderWithI18n(<Experience />)
    const school = screen.getByRole('heading', { name: 'Electronics Technician' }).closest('li')

    expect(within(school).queryByRole('list')).not.toBeInTheDocument()
    expect(within(school).getByText('2016 - 2021')).toBeInTheDocument()
  })

  test('links to AC Hub and to the certificate', () => {
    renderWithI18n(<Experience />)
    expect(screen.getByRole('link', { name: 'achub.pro' })).toHaveAttribute('href', 'https://achub.pro/')
    expect(screen.getByRole('link', { name: 'Certificate' })).toHaveAttribute('href', expect.stringContaining('efset.org'))
  })

  test('is translated', () => {
    renderWithI18n(<Experience />, 'es')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Experiencia y educación')
    expect(screen.getByRole('heading', { name: 'Técnico en Electrónica' })).toBeInTheDocument()
  })
})

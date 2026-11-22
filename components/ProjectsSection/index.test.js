import React from 'react'
import { screen } from '@testing-library/react'
import renderWithI18n from '../../test/renderWithI18n'
import ProjectsSection from './index'

describe('Projects section', () => {
  test('shows AC Hub first, then Scooch', () => {
    renderWithI18n(<ProjectsSection />)
    const titles = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
    expect(titles).toEqual(['AC Hub', 'Scooch'])
  })

  test('links to each site, and to the repository only when it is public', () => {
    renderWithI18n(<ProjectsSection />)

    expect(screen.getByRole('link', { name: 'Visit AC Hub' })).toHaveAttribute('href', 'https://achub.pro/')
    expect(screen.queryByRole('link', { name: 'Repository AC Hub' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Repository Scooch' })).toHaveAttribute('href', 'https://github.com/tzivigelstein/scooch')
  })

  test('describes the AC Hub image in the current language', () => {
    renderWithI18n(<ProjectsSection />, 'es')
    expect(screen.getByAltText('Landing de AC Hub con sus números de uso')).toBeInTheDocument()
  })
})

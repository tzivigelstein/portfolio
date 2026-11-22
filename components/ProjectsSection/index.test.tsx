import { render, screen } from '@testing-library/react'
import ProjectsSection from './index'
import { getDictionary, type Locale } from '@/lib/i18n'

const renderProjects = (lang: Locale = 'en') =>
  render(<ProjectsSection dictionary={getDictionary(lang).common} lang={lang} />)

describe('Projects section', () => {
  test('shows AC Hub first, then Scooch', () => {
    renderProjects()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)
    expect(titles).toEqual(['AC Hub', 'Scooch'])
  })

  test('links to each site, and to the repository only when it is public', () => {
    renderProjects()

    expect(screen.getByRole('link', { name: 'Visit AC Hub' })).toHaveAttribute('href', 'https://achub.pro/')
    expect(screen.queryByRole('link', { name: 'Repository AC Hub' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Repository Scooch' })).toHaveAttribute('href', 'https://github.com/tzivigelstein/scooch')
  })

  test('describes the AC Hub image in the current language', () => {
    renderProjects('es')
    expect(screen.getByAltText('Landing de AC Hub con sus números de uso')).toBeInTheDocument()
  })
})

import { render, screen, within } from '@testing-library/react'
import Experience from './index'
import { getDictionary, type Locale } from '@/lib/i18n'

const renderExperience = (lang: Locale = 'en') =>
  render(<Experience dictionary={getDictionary(lang)} lang={lang} />)

const entryOf = (name: string): HTMLElement => {
  const entry = screen.getByRole('heading', { name }).closest('li')
  if (!entry) throw new Error(`No entry titled ${name}`)
  return entry
}

describe('Experience', () => {
  test('lists work, certification and education', () => {
    renderExperience()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)

    expect(titles).toEqual([
      'Creator & Developer, AC Hub',
      'EF Standard English Test (EF SET)',
      'Backend developer, Freelance',
      'Electronics Technician'
    ])
  })

  test('shows several lines as a bullet list', () => {
    renderExperience()
    expect(within(entryOf('Backend developer, Freelance')).getAllByRole('listitem')).toHaveLength(4)
  })

  test('shows a single line as plain text', () => {
    renderExperience()
    const school = entryOf('Electronics Technician')

    expect(within(school).queryByRole('list')).not.toBeInTheDocument()
    expect(within(school).getByText('2016 - 2021')).toBeInTheDocument()
  })

  test('links to AC Hub and to the certificate', () => {
    renderExperience()
    expect(screen.getByRole('link', { name: 'achub.pro' })).toHaveAttribute('href', 'https://achub.pro/')
    expect(screen.getByRole('link', { name: 'Certificate' })).toHaveAttribute('href', expect.stringContaining('efset.org'))
  })

  test('is translated', () => {
    renderExperience('es')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Experiencia y educación')
    expect(screen.getByRole('heading', { name: 'Técnico en Electrónica' })).toBeInTheDocument()
  })
})

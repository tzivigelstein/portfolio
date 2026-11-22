import { render, screen } from '@testing-library/react'
import ProjectCard from './index'
import type { Project } from '@/data/projects'
import { getDictionary } from '@/lib/i18n'

const dictionary = getDictionary('en').common

const data: Project = {
  id: 'test',
  title: 'Project Title',
  subtitle: 'Project Subtitle',
  description: 'Project description',
  image: { src: '/images/Scooch.webp', width: 700, height: 980, alt: 'Project screenshot' },
  repository: 'https://github.com/tzivigelstein/tzivigelstein',
  site: 'https://www.tzivi.com/',
  category: 'web',
  active: true
}

const renderCard = (project: Project = data) =>
  render(<ProjectCard project={project} dictionary={dictionary} lang='en' />)

describe('Project Card', () => {
  test('has title, subtitle and description', () => {
    renderCard()
    expect(screen.getByRole('heading', { name: 'Project Title' })).toBeInTheDocument()
    expect(screen.getByText('Project Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Project description')).toBeInTheDocument()
  })

  test('does not nest links inside other links', () => {
    const { container } = renderCard()
    expect(container.querySelector('a a')).not.toBeInTheDocument()
  })

  test('has an image with its description', () => {
    renderCard()
    expect(screen.getByRole('img', { name: 'Project screenshot' })).toBeInTheDocument()
  })

  test('renders without image', () => {
    const { image, ...withoutImage } = data
    renderCard(withoutImage)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  test('has a repository link that opens in a new tab', () => {
    renderCard()
    const link = screen.getByRole('link', { name: 'Repository Project Title' })
    expect(link).toHaveAttribute('href', data.repository)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('has no repository link for private projects', () => {
    const { repository, ...withoutRepository } = data
    renderCard(withoutRepository)
    expect(screen.queryByTestId('repository-link')).not.toBeInTheDocument()
  })

  test('has an action link named after the project', () => {
    renderCard()
    const link = screen.getByRole('link', { name: 'Visit Project Title' })
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('offers a download for apps', () => {
    renderCard({ ...data, category: 'app' })
    expect(screen.getByRole('link', { name: 'Download Project Title' })).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectCard from './index'

describe('Project Card', () => {
  const data = {
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    description: 'Project description',
    image: 'https://via.placeholder.com/300x200',
    imageAlt: 'Project screenshot',
    repository: 'https://www.github.com/tzivigelstein/tzivigelstein',
    site: 'https://www.tzivi.com/',
    category: 'web'
  }

  const blankTarget = '_blank'
  const rel = 'noopener noreferrer'

  test('Should have title, subtitle and description', () => {
    const component = render(<ProjectCard project={data} />)
    component.getByText(data.title)
    component.getByText(data.subtitle)
    component.getByText(data.description)
  })

  test('Should not nest links inside other links', () => {
    const component = render(<ProjectCard project={data} />)
    expect(component.container.querySelector('a a')).not.toBeInTheDocument()
  })

  test('Should have image with source and alt', () => {
    render(<ProjectCard project={data} />)
    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('alt', data.imageAlt)
    expect(image).toHaveAttribute('src', data.image)
  })

  test('Should render without image', () => {
    const { image, ...withoutImage } = data
    render(<ProjectCard project={withoutImage} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  test('Should have repository link with href, target, and rel', () => {
    const component = render(<ProjectCard project={data} />)
    const link = component.getByTestId('repository-link')
    expect(link).toHaveAttribute('href', data.repository)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
    expect(link.getAttribute('aria-label')).toContain(data.title)
  })

  test('Should have no repository link for private projects', () => {
    const { repository, ...withoutRepository } = data
    const component = render(<ProjectCard project={withoutRepository} />)
    expect(component.queryByTestId('repository-link')).not.toBeInTheDocument()
  })

  test('Should have action link with href, target, and rel', () => {
    const component = render(<ProjectCard project={data} />)
    const link = component.getByTestId('action-link')
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
    expect(link.getAttribute('aria-label')).toContain(data.title)
  })
})

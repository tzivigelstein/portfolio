import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './index'

describe('Project Card', () => {
  const data = {
    theme: 'dark',
    color: '#f5f5f5',
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    image: 'https://via.placeholder.com/300x200',
    repository: 'https://www.github.com/tzivigelstein/tzivigelstein',
    site: 'https://www.tzivi.site/',
    category: 'web'
  }

  const blankTarget = '_blank'
  const rel = 'noopener noreferrer'

  test('Should have article with data-theme', () => {
    const component = render(<Card project={data} />)
    expect(component.container.querySelector('article[data-theme="dark"]')).toBeInTheDocument()
  })

  test('Should have anchor with href, target, and rel', () => {
    const component = render(<Card project={data} />)
    const link = component.getByLabelText('main-link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
  })

  test('Should have title', () => {
    const component = render(<Card project={data} />)
    component.getByText(data.title)
  })

  test('Should have subtitle', () => {
    const component = render(<Card project={data} />)
    component.getByText(data.subtitle)
  })

  test('Should have image with source and alt', () => {
    render(<Card project={data} />)
    const image = screen.getByRole('img')

    const base64URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', `${data.title} preview`)
    expect(image).toHaveAttribute('src', base64URL)
  })

  test('Should have repository link with href, target, and rel', () => {
    const component = render(<Card project={data} />)
    const link = component.getByLabelText('repository-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.repository)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
    expect(link).toHaveTextContent('Repository')
  })

  test('Should have action link with href, target, and rel', () => {
    const component = render(<Card project={data} />)
    const link = component.getByLabelText('action-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
  })
})

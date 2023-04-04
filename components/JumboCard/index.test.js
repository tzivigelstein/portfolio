import React from 'react'
import { render, screen } from '@testing-library/react'
import JumboCard from './index'

describe('Jumbo Card', () => {
  const data = {
    theme: 'dark',
    color: '#f5f5f5',
    title: 'Project Title',
    subtitle: 'Project Subtitle',
    image: 'https://via.placeholder.com/300x200',
    mobileImage: 'https://via.placeholder.com/200x200',
    repository: 'https://www.github.com/tzivigelstein/tzivigelstein',
    site: 'https://www.tzivi.com/',
    category: 'web'
  }

  const blankTarget = '_blank'
  const rel = 'noopener noreferrer'

  test('Should have article with data-theme', () => {
    const component = render(<JumboCard project={data} />)
    expect(component.container.querySelector('article[data-theme="dark"]')).toBeInTheDocument()
  })

  test('Should have anchor with href, target, and rel', () => {
    const component = render(<JumboCard project={data} />)
    const link = component.getByLabelText('main-link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
  })

  test('Should have title', () => {
    const component = render(<JumboCard project={data} />)
    component.getByText(data.title)
  })

  test('Should have subtitle', () => {
    const component = render(<JumboCard project={data} />)
    component.getByText(data.subtitle)
  })

  test('Should have image with source and alt', () => {
    render(<JumboCard project={data} />)
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', `${data.title} preview`)
    expect(image).toHaveAttribute('src', data.image)
  })

  test('Should have source with srcSet and media query', () => {
    render(<JumboCard project={data} />)
    const source = screen.getByRole('presentation')

    expect(source).toBeInTheDocument()
    expect(source).toHaveAttribute('srcset', data.mobileImage)
  })

  test('Should have repository link with href, target, and rel', () => {
    const component = render(<JumboCard project={data} />)
    const link = component.getByLabelText('repository-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.repository)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
    expect(link).toHaveTextContent('Repository')
  })

  test('Should have action link with href, target, and rel', () => {
    const component = render(<JumboCard project={data} />)
    const link = component.getByLabelText('action-link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', data.site)
    expect(link).toHaveAttribute('target', blankTarget)
    expect(link).toHaveAttribute('rel', rel)
  })
})

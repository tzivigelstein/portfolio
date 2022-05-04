import React from 'react'
import { render } from '@testing-library/react'
import Creator from './index'

describe('Creator', () => {
  const data = {
    name: 'Creator Name',
    image: 'https://via.placeholder.com/150',
    website: 'https://www.example.com'
  }

  const rel = 'noopener noreferrer'
  const blankTarget = '_blank'

  test('Should have a link with href, target and rel', () => {
    const component = render(<Creator creator={data} />)
    const link = component.getByRole('link')

    expect(link).toHaveAttribute('href', data.website)
    expect(link).toHaveAttribute('rel', rel)
    expect(link).toHaveAttribute('target', blankTarget)
  })

  test('Should have an image with src, title and alt', () => {
    const component = render(<Creator creator={data} />)
    const image = component.getByRole('img')

    const base64Image = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

    expect(image).toHaveAttribute('src', base64Image)
    expect(image).toHaveAttribute('alt', data.name)
    expect(image).toHaveAttribute('title', data.name)
  })

  test('Should have a name', () => {
    const component = render(<Creator creator={data} />)
    const name = component.getByText(data.name)

    expect(name).toBeInTheDocument()
  })
})

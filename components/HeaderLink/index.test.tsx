import { render, screen } from '@testing-library/react'
import HeaderLink from './index'

describe('Header link', () => {
  test('opens external links in a new tab', () => {
    render(<HeaderLink text='Github' link='https://github.com/tzivigelstein' />)
    const link = screen.getByRole('link', { name: 'Github' })

    expect(link).toHaveAttribute('href', 'https://github.com/tzivigelstein')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('keeps mail links in the same tab', () => {
    render(<HeaderLink text='Email' link='mailto:someone@example.com' newTab={false} />)
    const link = screen.getByRole('link', { name: 'Email' })

    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  test('names icon-only links after their text', () => {
    render(<HeaderLink text='Github' link='https://github.com' icon={<svg data-testid='icon' />} />)
    const link = screen.getByRole('link', { name: 'Github' })

    expect(link).toHaveAttribute('title', 'Github')
    expect(link).not.toHaveTextContent('Github')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})

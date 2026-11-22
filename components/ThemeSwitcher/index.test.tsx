import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import ThemeSwitcher from './index'

const renderSwitcher = () =>
  render(
    <ThemeProvider>
      <ThemeSwitcher label='Select a color scheme' />
    </ThemeProvider>
  )

describe('Theme switcher', () => {
  beforeEach(() => {
    window.localStorage.clear()
    // jsdom has no matchMedia, and next-themes reads the system setting.
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn()
    }))
  })

  test('offers light, dark and automatic', () => {
    renderSwitcher()
    expect(screen.getByRole('radiogroup', { name: 'Select a color scheme' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio').map((radio) => radio.getAttribute('value'))).toEqual(['light', 'dark', 'system'])
  })

  test('follows the system by default', () => {
    renderSwitcher()
    expect(screen.getByRole('radio', { name: 'Auto' })).toBeChecked()
  })

  test('remembers the chosen theme', () => {
    renderSwitcher()
    fireEvent.click(screen.getByRole('radio', { name: 'Dark' }))

    expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
    expect(window.localStorage.getItem('theme')).toBe('dark')
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
  })
})

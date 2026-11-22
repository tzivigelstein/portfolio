import { render, screen, fireEvent, act } from '@testing-library/react'
import ThemeSwitcher from './index'

// jsdom has no matchMedia. This one can be flipped to simulate the system.
const mockSystem = (dark: boolean) => {
  const listeners = new Set<() => void>()
  const query = {
    matches: dark,
    addEventListener: (_type: string, listener: () => void) => listeners.add(listener),
    removeEventListener: (_type: string, listener: () => void) => listeners.delete(listener)
  }
  window.matchMedia = jest.fn().mockReturnValue(query)

  return (nextDark: boolean) => {
    query.matches = nextDark
    listeners.forEach((listener) => listener())
  }
}

const renderSwitcher = () => render(<ThemeSwitcher label='Select a color scheme' />)
const root = document.documentElement

describe('Theme switcher', () => {
  beforeEach(() => {
    window.localStorage.clear()
    root.removeAttribute('data-theme')
    mockSystem(false)
  })

  test('offers light, dark and automatic', () => {
    renderSwitcher()

    expect(screen.getByRole('radiogroup', { name: 'Select a color scheme' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio').map((radio) => radio.getAttribute('value'))).toEqual(['light', 'dark', 'system'])
  })

  test('follows the system by default', () => {
    mockSystem(true)
    renderSwitcher()

    expect(screen.getByRole('radio', { name: 'Auto' })).toBeChecked()
    expect(root).toHaveAttribute('data-theme', 'dark')
  })

  test('starts from the saved theme', () => {
    window.localStorage.setItem('theme', 'dark')
    renderSwitcher()

    expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
    expect(root).toHaveAttribute('data-theme', 'dark')
  })

  test('applies and remembers the chosen theme', () => {
    renderSwitcher()
    fireEvent.click(screen.getByRole('radio', { name: 'Dark' }))

    expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
    expect(window.localStorage.getItem('theme')).toBe('dark')
    expect(root).toHaveAttribute('data-theme', 'dark')
    expect(root.style.colorScheme).toBe('dark')
  })

  test('keeps following the system while on automatic', () => {
    const setSystemDark = mockSystem(false)
    renderSwitcher()
    expect(root).toHaveAttribute('data-theme', 'light')

    act(() => setSystemDark(true))
    expect(root).toHaveAttribute('data-theme', 'dark')
  })

  test('ignores the system once a theme is chosen', () => {
    const setSystemDark = mockSystem(false)
    renderSwitcher()
    fireEvent.click(screen.getByRole('radio', { name: 'Light' }))

    act(() => setSystemDark(true))
    expect(root).toHaveAttribute('data-theme', 'light')
  })
})

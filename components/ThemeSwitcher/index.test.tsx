import { render, screen, fireEvent } from '@testing-library/react'
import { useTheme } from 'next-themes'
import ThemeSwitcher from './index'

// The switcher only talks to next-themes through this hook. The real
// provider renders a <script>, which React warns about outside a server.
jest.mock('next-themes', () => ({ useTheme: jest.fn() }))

const mockTheme = (theme: string | undefined) => {
  const setTheme = jest.fn()
  jest.mocked(useTheme).mockReturnValue({ theme, setTheme, themes: ['light', 'dark', 'system'] })
  return setTheme
}

const renderSwitcher = () => render(<ThemeSwitcher label='Select a color scheme' />)

describe('Theme switcher', () => {
  test('offers light, dark and automatic', () => {
    mockTheme('system')
    renderSwitcher()

    expect(screen.getByRole('radiogroup', { name: 'Select a color scheme' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio').map((radio) => radio.getAttribute('value'))).toEqual(['light', 'dark', 'system'])
  })

  test('marks the current theme', () => {
    mockTheme('dark')
    renderSwitcher()

    expect(screen.getByRole('radio', { name: 'Dark' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Light' })).not.toBeChecked()
  })

  test('marks nothing while the saved theme is still unknown', () => {
    mockTheme(undefined)
    renderSwitcher()

    screen.getAllByRole('radio').forEach((radio) => expect(radio).not.toBeChecked())
  })

  test('asks for the chosen theme', () => {
    const setTheme = mockTheme('system')
    renderSwitcher()

    fireEvent.click(screen.getByRole('radio', { name: 'Dark' }))
    expect(setTheme).toHaveBeenCalledWith('dark')
  })
})

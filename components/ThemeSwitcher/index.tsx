'use client'

import { useEffect, useState, type ChangeEvent } from 'react'
import styles from './index.module.css'
import {
  THEME_STORAGE_KEY,
  applyTheme,
  getStoredTheme,
  isTheme,
  storeTheme,
  systemPrefersDark,
  type Theme
} from '@/lib/theme'

const THEME_OPTIONS: { value: Theme, title: string }[] = [
  { value: 'light', title: 'Light' },
  { value: 'dark', title: 'Dark' },
  { value: 'system', title: 'Auto' }
]

export default function ThemeSwitcher ({ label }: { label: string }) {
  // The saved theme is only known in the browser, so nothing is marked
  // as selected until the component has mounted.
  const [theme, setTheme] = useState<Theme>()

  useEffect(() => {
    setTheme(getStoredTheme())

    // Keep other open tabs in step.
    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) setTheme(getStoredTheme())
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  useEffect(() => {
    if (!theme) return

    applyTheme(theme)
    if (theme !== 'system') return

    // On "Auto", follow the system when it changes.
    const query = systemPrefersDark()
    const handleChange = () => applyTheme('system')

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [theme])

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!isTheme(target.value)) return

    storeTheme(target.value)
    setTheme(target.value)
  }

  return (
    <div className={styles.content}>
      <div
        className={styles.colorSchemeToggle}
        role='radiogroup'
        tabIndex={0}
        aria-label={label}
      >
        {THEME_OPTIONS.map(({ value, title }) => (
          <label key={value}>
            <input
              className={styles.input}
              type='radio'
              value={value}
              name='option-theme'
              autoComplete='off'
              onChange={handleChange}
              checked={value === theme}
            />
            <div className={styles.text}>{title}</div>
          </label>
        ))}
      </div>
    </div>
  )
}

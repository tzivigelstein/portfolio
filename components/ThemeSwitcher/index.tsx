'use client'

import { useEffect, useState, type ChangeEvent } from 'react'
import { useTheme } from 'next-themes'
import styles from './index.module.css'

const THEME_OPTIONS = [
  { value: 'light', title: 'Light' },
  { value: 'dark', title: 'Dark' },
  { value: 'system', title: 'Auto' }
] as const

export default function ThemeSwitcher ({ label }: { label: string }) {
  const { theme, setTheme } = useTheme()
  // The saved theme is only known in the browser, so nothing is marked
  // as selected until the component has mounted.
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
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
              checked={mounted && value === theme}
            />
            <div className={styles.text}>{title}</div>
          </label>
        ))}
      </div>
    </div>
  )
}

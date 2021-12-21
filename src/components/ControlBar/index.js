import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { SunIcon, MoonIcon, LanguageIcon } from '../UICons'
import useApp from '../../hooks/useApp'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const ControlBar = () => {
  const { theme, setTheme } = useApp()
  const [isChecked, setChecked] = useState(theme === 'dark')
  const { lang } = useTranslation()

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  function handleKeyDown({ key }) {
    if (key === 'l') {
      setChecked(prev => !prev)
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  function handleCheckboxChange(e) {
    setChecked(e.target.checked)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function handleLanguageChange() {
    router.replace('/', undefined, { locale: lang === 'en' ? 'es' : 'en' })
  }

  return (
    <div className={styles.controlBarContainer}>
      <div>
        <input
          id="checkbox"
          type="checkbox"
          className={styles.checkBox}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox" className={styles.toggle}>
          <div className={styles.toggleIconContainer}>
            <SunIcon />
            <MoonIcon className={styles.moonIcon} />
          </div>
        </label>
      </div>
      <div onClick={handleLanguageChange} className={styles.barToggle}>
        <div className={styles.iconContainer}>
          <LanguageIcon className={styles.languageIcon} />
          <div className={styles.languageIndicator}>
            <span className={styles.languageIndicatorText}>{lang}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlBar

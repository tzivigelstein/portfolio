import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { SunIcon, MoonIcon, LanguageIcon } from '../UICons'
import useApp from '../../hooks/useApp'
import { useTranslation } from 'react-i18next'

const ControlBar = () => {
  const { theme, setTheme } = useApp()
  const [isChecked, setChecked] = useState(theme === 'dark')
  const [t, i18n] = useTranslation('', { useSuspense: false })

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
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
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
            <span className={styles.languageIndicatorText}>{i18n.language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlBar

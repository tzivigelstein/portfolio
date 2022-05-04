import { useEffect } from 'react'
import styles from './index.module.css'
import { SunIcon, MoonIcon, LanguageIcon } from '@components/Icons'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useTheme } from 'next-themes'

const isWindowAccessible = typeof window !== 'undefined'

const ControlBar = () => {
  const { theme, setTheme } = useTheme()
  const { lang } = useTranslation()

  const router = useRouter()

  useEffect(() => {
    isWindowAccessible && window.addEventListener('keydown', handleKeyDown)

    return () => isWindowAccessible && window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  function handleKeyDown ({ key }) {
    if (key === 'l') {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  function handleCheckboxChange () {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  function handleLanguageChange () {
    router.replace('/', undefined, { locale: lang === 'en' ? 'es' : 'en' })
  }

  return (
    <nav className={styles.controlBarContainer}>
      <div>
        <input
          id='checkbox'
          type='checkbox'
          className={styles.checkBox}
          checked={theme === 'dark'}
          onChange={handleCheckboxChange}
        />
        <label htmlFor='checkbox' className={styles.toggle}>
          <div className={styles.toggleIconContainer}>
            <SunIcon />
            <MoonIcon className={styles.moonIcon} />
          </div>
        </label>
      </div>
      <button onClick={handleLanguageChange} className={styles.barToggle}>
        <div className={styles.iconContainer}>
          <LanguageIcon className={styles.languageIcon} />
          <div className={styles.languageIndicator}>
            <span className={styles.languageIndicatorText}>{lang}</span>
          </div>
        </div>
      </button>
    </nav>
  )
}

export default ControlBar

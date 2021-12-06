import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { SunIcon, MoonIcon } from '../UICons'
import useApp from '../../hooks/useApp'

const ControlBar = () => {
  const { theme, setTheme } = useApp()
  const [isChecked, setChecked] = useState(theme === 'dark')

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

  return (
    <div className={styles.controlBarContainer}>
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
  )
}

export default ControlBar

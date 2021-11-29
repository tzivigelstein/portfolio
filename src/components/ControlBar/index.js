import React, { useState } from 'react'
import styles from './index.module.css'
import { SunIcon, MoonIcon } from '../UICons'
import useApp from '../../hooks/useApp'

const ControlBar = () => {
  const { theme, setTheme } = useApp()
  const [isChecked, setChecked] = useState(theme === 'dark')

  function handleCheckboxChange(e) {
    setChecked(e.target.checked)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className={styles.controlBarContainer}>
      <input
        checked={isChecked}
        onChange={handleCheckboxChange}
        id="checkbox"
        className={styles.checkBox}
        type="checkbox"
      />
      <label htmlFor="checkbox" className={styles.toggle}>
        <div className={styles.toggleIconContainer}>
          <SunIcon />
          <MoonIcon />
        </div>
      </label>
    </div>
  )
}

export default ControlBar

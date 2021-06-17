import React from 'react'
import MenuIcon from '../MenuIcon'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <h3 className={styles.navigationTitle}>Home | Tzivi</h3>
      <MenuIcon className={styles.navigationButton} />
    </nav>
  )
}

export default Nav

import React from 'react'
import styles from './header.module.css'
import HeaderMain from '../HeaderMain/HeaderMain'

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderMain />
    </header>
  )
}

export default Header

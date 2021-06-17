import React from 'react'
import styles from './header.module.css'
import Nav from '../Nav/Nav'
import HeaderMain from '../HeaderMain/HeaderMain'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Nav /> */}
      <HeaderMain />
    </header>
  )
}

export default Header

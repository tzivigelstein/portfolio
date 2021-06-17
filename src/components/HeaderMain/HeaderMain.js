import React from 'react'
import styles from './headermain.module.css'

const HeaderMain = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.headerTitleContainer}>
        <h1 className={styles.headerTitle}>
          ¡Hello! I'm Tzivi, Frontend developer.<span id="header-change-text"></span>
        </h1>
        <div className={styles.headerLinksContainer}>
          <a className={styles.headerLinkButton} href="https://github.com/tzivigelstein">
            Github
          </a>
          <a className={styles.headerLinkButton} href="https://www.linkedin.com/in/tzivigelstein/">
            Linkedin
          </a>
          <a className={styles.headerLinkButton} href="">
            Resume
          </a>
        </div>
      </div>
      <div className={styles.headerImageContainer}>
        <img className={styles.headerImage} src="images/me.png" alt="Tzivi Gelstein" />
      </div>
    </div>
  )
}

export default HeaderMain

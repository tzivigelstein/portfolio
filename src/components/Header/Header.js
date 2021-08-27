import React, { useState } from 'react'
import styles from './header.module.css'

const Header = () => {
  const [activeDownloadResume, setActiveDownloadResume] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headerTitle}>
            Hello! I'm Tzivi. Frontend developer.<span id="header-change-text"></span>
          </h1>
          <div className={styles.headerLinksContainer}>
            <a className={styles.headerLinkButton} href="https://github.com/tzivigelstein">
              Github
            </a>
            <a className={styles.headerLinkButton} href="https://www.linkedin.com/in/tzivigelstein/">
              Linkedin
            </a>
            <div className={styles.hiddenResumeDownloadContainer}>
              <p
                onClick={() => setActiveDownloadResume(!activeDownloadResume)}
                className={styles.headerLinkButtonResume}
              >
                Resume
              </p>
              <div
                className={`${styles.hiddenResumeDownload} ${
                  activeDownloadResume && styles.hiddenResumeDownloadActive
                }`}
              >
                <a className={styles.hiddenResumeDownloadLinks} href="./resume/Tzivi_Gelstein_CV_EN.pdf">
                  English 🇺🇸
                </a>
                <a className={styles.hiddenResumeDownloadLinks} href="./resume/Tzivi_Gelstein_CV_ES.pdf">
                  Spanish 🇪🇸
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img className={styles.headerImage} src="images/HeaderImage.png" alt="Tzivi Gelstein" />
        </div>
      </div>
    </header>
  )
}

export default Header

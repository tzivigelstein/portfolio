import React, { useState } from 'react'
import styles from './header.module.css'
import ControlBar from '../ControlBar'
import HeaderLinkButton from '../HeaderButton'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t] = useTranslation('', { useSuspense: false })
  const [activeDownloadResume, setActiveDownloadResume] = useState(false)

  return (
    <header className={styles.header}>
      <ControlBar />
      <div className={styles.headerMain}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headerTitle}>{t('headerTitle')}</h1>
          <div className={styles.headerLinksContainer}>
            <HeaderLinkButton text="Github" link="https://github.com/tzivigelstein" />
            <HeaderLinkButton text="Linkedin" link="https://www.linkedin.com/in/tzivigelstein/" />
            <div className={styles.hiddenResumeDownloadContainer}>
              <p
                onClick={() => setActiveDownloadResume(!activeDownloadResume)}
                className={styles.headerLinkButtonResume}
              >
                {t('headerResumeLink')}
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
          <img className={styles.headerImage} src="images/HeaderImage.webp" alt="Tzivi Gelstein" />
        </div>
      </div>
    </header>
  )
}

export default Header

import React, { useState } from 'react'
import styles from './header.module.css'
import HeaderLinkButton from '../HeaderLinkButton'
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
  const [activeDownloadResume, setActiveDownloadResume] = useState(false)

  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headerTitle}>{t('common:headerTitle')}</h1>
          <div className={styles.headerLinksContainer}>
            <HeaderLinkButton text='Github' link='https://github.com/tzivigelstein' />
            <HeaderLinkButton text='Linkedin' link='https://www.linkedin.com/in/tzivigelstein/' />
            <div className={styles.hiddenResumeDownloadContainer}>
              <p
                onClick={() => setActiveDownloadResume(!activeDownloadResume)}
                className={styles.headerLinkButtonResume}
              >
                {t('common:headerResumeLink')}
              </p>
              <div
                className={`${styles.hiddenResumeDownload} ${
                  activeDownloadResume && styles.hiddenResumeDownloadActive
                }`}
              >
                <a className={styles.hiddenResumeDownloadLinks} href='./resume/Tzivi_Gelstein_CV_EN.pdf'>
                  English 🇺🇸
                </a>
                <a className={styles.hiddenResumeDownloadLinks} href='./resume/Tzivi_Gelstein_CV_ES.pdf'>
                  Spanish 🇪🇸
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img className={styles.headerImage} src='images/HeaderImage.webp' alt='Tzivi Gelstein' />
        </div>
      </div>
    </header>
  )
}

export default Header

import styles from './index.module.css'
import HeaderLink from '@components/HeaderLink'
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headline}>{t('common:headline')}</h1>
          <h2 className={styles.subHeadline}>{t('common:subHeadline')}</h2>
          <div className={styles.headerLinksContainer}>
            <HeaderLink text='Github' link='https://github.com/tzivigelstein' />
            <HeaderLink text='Linkedin' link='https://www.linkedin.com/in/tzivigelstein/' />
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <img className={styles.headerImage} src='images/HeaderImage.webp' alt='Tzivi Gelstein' loading='eager' />
        </div>
      </div>
    </header>
  )
}

export default Header

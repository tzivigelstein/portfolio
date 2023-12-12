import styles from './index.module.css'
import HeaderLink from '@components/HeaderLink'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerTitleContainer}>
          <h1 className={styles.headline}>{t('common:headline')}
            <span className={styles.subHeadline}>{t('common:subHeadline')}</span>
          </h1>
          <div className={styles.headerLinksContainer}>
            <HeaderLink text='Github' link='https://github.com/tzivigelstein' />
            <HeaderLink text='Linkedin' link='https://www.linkedin.com/in/tzivigelstein/' />
          </div>
        </div>
        <div className={styles.headerImageContainer}>
          <Image
            src="/images/HeaderImage.webp"
            alt="Tzivi Gelstein"
            layout="fill"
            quality={100}
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </header>
  )
}

export default Header

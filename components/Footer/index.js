import styles from './index.module.css'
import { GithubIcon, LinkedinIcon, TwitterIcon, WhatsAppIcon, Resume, TelegramIcon } from '@components/Icons'
import useTranslation from 'next-translate/useTranslation'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h4>{t('common:footerFirstSubtitle')}</h4>
          <ul className={styles.socialList}>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/tzivigelstein/'
                className={styles.socialLink}
              >
                <LinkedinIcon className={styles.icon} fill='' />
                Linkedin
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/tzivigelstein'
                className={styles.socialLink}
              >
                <GithubIcon className={styles.icon} fill='' />
                Github
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/tzivigelstein'
                className={styles.socialLink}
              >
                <TwitterIcon className={styles.icon} fill='' />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h4>{t('common:footerSecondSubtitle')}</h4>
          <ul className={styles.socialList}>
            <li>
              <p className={styles.socialLink}>
                <Resume className={styles.icon} />
                {t('common:footerResumeLink')}
              </p>
              <div className={styles.resumesContainer}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.resumeLink}
                  href='./resume/Tzivi_Gelstein_CV_EN.pdf'
                >
                  English ????????
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.resumeLink}
                  href='./resume/Tzivi_Gelstein_CV_ES.pdf'
                >
                  Spanish ????????
                </a>
              </div>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://wa.me/541169708476'
                className={styles.socialLink}
              >
                <WhatsAppIcon className={styles.icon} fill='' />
                Whatsapp
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://t.me/tzivigelstein'
                className={styles.socialLink}
              >
                <TelegramIcon className={styles.icon} />
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

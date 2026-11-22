import styles from './index.module.css'
import HeaderLink from '@components/HeaderLink'
import ThemeSwitcher from '@components/ThemeSwitcher'
import LanguageSwitcher from '@components/LanguageSwitcher'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { EMAIL } from '@data/contact'
import { GithubIcon, LinkedinIcon, MailIcon } from '@components/Icons'

const Header = () => {
  const { t, lang } = useTranslation()
  const resume = `/resume/Tzivi_Gelstein_CV_${lang === 'es' ? 'ES' : 'EN'}.pdf`

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <div className={styles.headerMain}>
        {/* Wider screens: portrait next to the text. */}
        <div className={styles.photo}>
          <Image
            src="/images/HeaderImage.webp"
            alt="Tzivi Gelstein"
            layout="fill"
            sizes="176px"
            objectFit="cover"
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.headline}>
            <span className={styles.helloRow}>
              {/* Phones: small avatar on the same line as the greeting. */}
              <span className={styles.avatar}>
                <Image
                  src="/images/HeaderImage.webp"
                  alt=""
                  layout="fill"
                  sizes="48px"
                  priority
                  objectFit="cover"
                  objectPosition="50% 35%"
                />
              </span>
              <span className={styles.hello}>{t('common:headline')}</span>
            </span>{' '}
            <span className={styles.role}>{t('common:subHeadline')}</span>
          </h1>
          <p className={styles.intro}>{t('common:headerIntro')}</p>
          <div className={styles.actions}>
            <HeaderLink primary text={t('common:resumeButton')} link={resume} />
            <HeaderLink
              text='Github'
              link='https://github.com/tzivigelstein'
              icon={<GithubIcon aria-hidden='true' />}
            />
            <HeaderLink
              text='Linkedin'
              link='https://www.linkedin.com/in/tzivigelstein/'
              icon={<LinkedinIcon aria-hidden='true' />}
            />
            <HeaderLink
              text={t('common:emailButton')}
              link={`mailto:${EMAIL}`}
              icon={<MailIcon aria-hidden='true' />}
              newTab={false}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

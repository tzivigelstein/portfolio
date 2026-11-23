import Image from 'next/image'
import styles from './index.module.css'
import HeaderLink from '@/components/HeaderLink'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'
import { EMAIL, RESUMES } from '@/data/contact'
import type { Dictionary, Locale } from '@/lib/i18n'

interface HeaderProps {
  dictionary: Dictionary['common']
  lang: Locale
}

export default function Header ({ dictionary, lang }: HeaderProps) {
  // Without a résumé to offer, the mail takes its place as the main action.
  const resume = RESUMES[lang]

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <LanguageSwitcher lang={lang} label={dictionary.languageSwitcherLabel} />
        <ThemeSwitcher label={dictionary.themeSwitcherLabel} />
      </div>
      <div className={styles.headerMain}>
        {/* Wider screens: portrait next to the text. */}
        <div className={styles.photo}>
          <Image
            src='/images/HeaderImage.webp'
            alt='Tzivi Gelstein'
            fill
            sizes='176px'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.headline}>
            <span className={styles.helloRow}>
              {/* Phones: small avatar on the same line as the greeting. */}
              <span className={styles.avatar}>
                <Image
                  src='/images/HeaderImage.webp'
                  alt=''
                  fill
                  sizes='48px'
                  preload
                  style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
                />
              </span>
              <span className={styles.hello}>{dictionary.headline}</span>
            </span>{' '}
            <span className={styles.role}>{dictionary.subHeadline}</span>
          </h1>
          <p className={styles.intro}>{dictionary.headerIntro}</p>
          <div className={styles.actions}>
            {resume
              ? <HeaderLink primary text={dictionary.resumeButton} link={resume} />
              : (
                  <HeaderLink
                    primary
                    text={dictionary.emailButton}
                    link={`mailto:${EMAIL}`}
                    newTab={false}
                  />
                )}
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
            {resume && (
              <HeaderLink
                text={dictionary.emailButton}
                link={`mailto:${EMAIL}`}
                icon={<Mail aria-hidden='true' />}
                newTab={false}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

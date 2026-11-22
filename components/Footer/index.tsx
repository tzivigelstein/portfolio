import styles from './index.module.css'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/Icons'
import { EMAIL } from '@/data/contact'
import type { Dictionary } from '@/lib/i18n'

const SOCIAL_LINKS = [
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/tzivigelstein/', Icon: LinkedinIcon },
  { name: 'Github', href: 'https://github.com/tzivigelstein', Icon: GithubIcon },
  { name: 'X (Formerly Twitter)', href: 'https://x.com/tzivigelstein', Icon: XIcon }
]

export default function Footer ({ dictionary }: { dictionary: Dictionary['common'] }) {
  const resumes = [
    { name: dictionary.footerResumeEnglishLink, href: '/resume/Tzivi_Gelstein_CV_EN.pdf' },
    { name: dictionary.footerResumeSpanishLink, href: '/resume/Tzivi_Gelstein_CV_ES.pdf' }
  ]

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h2 className={styles.labelTitle}>{dictionary.footerFirstSubtitle}</h2>
          <ul className={styles.socialList}>
            {SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <li key={href}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={href}
                  className={styles.socialLink}
                >
                  <Icon className={styles.icon} width={16} height={16} aria-hidden='true' />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h2 className={styles.labelTitle}>{dictionary.footerSecondSubtitle}</h2>
          <ul className={styles.socialList}>
            <li>
              <a href={`mailto:${EMAIL}`} className={styles.socialLink}>
                {EMAIL}
              </a>
            </li>
            {resumes.map(({ name, href }) => (
              <li key={href}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={href}
                  className={styles.socialLink}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

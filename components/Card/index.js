import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { ChevronIcon } from '@components/Icons'

const Card = ({ project }) => {
  const { t } = useTranslation()

  const { theme, color, title, subtitle, image, repository, site, category } = project

  return (
    <li>
      <article data-theme={theme} style={{ background: color }} className={styles.card}>
        <a aria-label='main-link' className={styles.projectLink} href={site} target='_blank' rel='noopener noreferrer'>
          <header className={styles.cardHeader}>
            <span className={styles.helper}>{subtitle}</span>
            <p className={styles.title}>{title}</p>
          </header>
          <Image
            src={image}
            alt={`${title} preview`}
            layout='responsive'
            width='100%'
            height='100%'
            objectFit='cover'
          />
        </a>
        <footer className={styles.cardFooter}>
          <a
            aria-label='repository-link'
            className={styles.link}
            href={repository}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('common:cardRepositoryLink')}
            <ChevronIcon />
          </a>
          <a aria-label='action-link' href={site} target='_blank' rel='noopener noreferrer' className={styles.button}>
            {category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')}
          </a>
        </footer>
      </article>
    </li>
  )
}

export default Card

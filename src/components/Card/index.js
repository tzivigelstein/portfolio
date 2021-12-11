import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

const Card = ({ project }) => {
  const { theme, color, title, subtitle, image, repository, site, category } = project
  const [t] = useTranslation('', { useSuspense: false })

  return (
    <article theme={theme} style={{ background: color }} className={styles.card}>
      <a className={styles.projectLink} href={site} target="_blank" rel="noopener noreferrer">
        <header className={styles.cardHeader}>
          <span className={styles.helper}>{subtitle}</span>
          <p className={styles.title}>{title}</p>
        </header>
        <picture className={styles.cardPicture}>
          <img alt={`${title} preview`} loading="lazy" className={styles.cardImage} src={image} />
        </picture>
      </a>
      <footer className={styles.cardFooter}>
        <a className={styles.link} href={repository} target="_blank" rel="noopener noreferrer">
          {t('cardRepositoryLink')}
          <svg
            className={styles.chevronRight}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
        <a href={site} target="_blank" rel="noopener noreferrer" className={styles.button}>
          {category === 'web' ? t('cardSiteLink') : t('cardDownloadLink')}
        </a>
      </footer>
    </article>
  )
}

export default Card
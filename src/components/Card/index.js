import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'

const Card = ({ project }) => {
  const { t } = useTranslation()

  const { theme, color, title, subtitle, image, repository, site, category } = project

  return (
    <article data-theme={theme} style={{ background: color }} className={styles.card}>
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
          {t('common:cardRepositoryLink')}
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
        <a href={site} target="_blank" rel="noopener noreferrer" className={styles.button}>
          {category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')}
        </a>
      </footer>
    </article>
  )
}

export default Card

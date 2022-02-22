import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'

export default function JumboCard ({ project }) {
  const { theme, color, title, subtitle, image, mobileImage, repository, site, category } = project

  const { t } = useTranslation()

  return (
    <article data-theme={theme} style={{ background: color }} className={styles.jumboCard}>
      <a className={styles.projectLink} href={site} target='_blank' rel='noopener noreferrer'>
        <header className={styles.cardHeader}>
          <span className={styles.helper}>{subtitle}</span>
          <p className={styles.title}>{title}</p>
        </header>
        <picture className={styles.cardPicture}>
          <source media='(max-width: 480px)' srcSet={mobileImage} />
          <img alt={`${title} preview`} loading='lazy' className={styles.cardImage} src={image} />
        </picture>
      </a>
      <footer className={styles.cardFooter}>
        <a className={styles.link} href={repository} target='_blank' rel='noopener noreferrer'>
          {t('common:cardRepositoryLink')}
          <svg
            className={styles.chevronRight}
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='9 18 15 12 9 6' />
          </svg>
        </a>
        <a href={site} target='_blank' rel='noopener noreferrer' className={styles.button}>
          {category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')}
        </a>
      </footer>
    </article>
  )
}

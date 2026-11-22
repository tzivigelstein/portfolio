import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import { ChevronIcon } from '@components/Icons'
import localize from '../../lib/localize'

// One card style for every project. The first one is tinted with the accent.
export default function ProjectCard ({ project, featured = false }) {
  const { t, lang } = useTranslation()
  const { image, repository, site, category, wip } = project

  const title = localize(project.title, lang)
  const name = localize(project.shortTitle, lang) || title
  const subtitle = localize(project.subtitle, lang)
  const description = localize(project.description, lang)

  // The action link covers the whole card (see .button::after), so the
  // card is clickable without nesting links inside each other.
  const actionText =
    category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.body}>
        <p className={styles.label}>
          {subtitle}
          {wip && <span className={styles.wip}>{t('common:wipLabel')}</span>}
        </p>
        <h3 className={styles.title}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.links}>
          <a
            data-testid='action-link'
            aria-label={`${actionText} ${name}`}
            href={site}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.button}
          >
            {actionText}
          </a>
          {repository && (
            <a
              data-testid='repository-link'
              aria-label={`${t('common:cardRepositoryLink')} ${name}`}
              className={styles.link}
              href={repository}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t('common:cardRepositoryLink')}
              <ChevronIcon aria-hidden='true' />
            </a>
          )}
        </div>
      </div>
      {image && (
        <div className={styles.media}>
          <img alt='' loading='lazy' className={styles.image} src={image} />
        </div>
      )}
    </article>
  )
}

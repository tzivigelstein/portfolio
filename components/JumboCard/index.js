import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import { ChevronIcon } from '@components/Icons'
import useMediaQueries from 'hooks/useMediaQueries'
import localize from '../../lib/localize'

export default function JumboCard({ project }) {
  const {
    theme,
    color,
    image,
    jumboImage,
    mobileImage,
    repository,
    site,
    category,
    wip
  } = project

  const { t, lang } = useTranslation()

  const title = localize(project.title, lang)
  const shortTitle = localize(project.shortTitle, lang)
  const subtitle = localize(project.subtitle, lang)
  const description = localize(project.description, lang)
  const hasImage = Boolean(jumboImage ?? image)
  const { isMobile } = useMediaQueries()

  const name = shortTitle || title
  // The action link covers the whole card (see .button::after), so the
  // card is clickable without nesting links inside each other.
  const actionText =
    category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')

  return (
    <article
      data-theme={theme}
      style={{ background: color }}
      className={`${styles.jumboCard} ${hasImage ? '' : styles.noImage}`}
    >
      {wip && (
        <div className={styles.wipBadge}>
          <span className={styles.wipDot}></span>
          <span className={styles.wipText}>{t('common:wipLabel')}</span>
        </div>
      )}
      <div className={styles.projectLink}>
        <header className={styles.cardHeader}>
          <p className={styles.helper}>{subtitle}</p>
          <h3 className={styles.title}>
            {isMobile && shortTitle ? shortTitle : title}
          </h3>
          {description && <p className={styles.description}>{description}</p>}
          <div className={styles.cardLinks}>
            <a
              data-testid="action-link"
              aria-label={`${actionText} ${name}`}
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {actionText}
            </a>
            {repository && (
              <a
                data-testid="repository-link"
                aria-label={`${t('common:cardRepositoryLink')} ${name}`}
                className={styles.link}
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common:cardRepositoryLink')}
                <ChevronIcon />
              </a>
            )}
          </div>
        </header>
        {hasImage && (
          <picture className={styles.cardPicture}>
            <source
              media="(max-width: 480px)"
              srcSet={mobileImage ?? image ?? jumboImage}
            />
            <img
              alt={`${title} preview`}
              loading="lazy"
              className={styles.cardImage}
              src={jumboImage ?? image}
            />
          </picture>
        )}
      </div>
    </article>
  )
}

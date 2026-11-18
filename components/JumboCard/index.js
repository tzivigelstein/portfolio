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
  const { isMobile } = useMediaQueries()

  return (
    <article
      data-theme={theme}
      style={{ background: color }}
      className={styles.jumboCard}
    >
      {wip && (
        <div className={styles.wipBadge}>
          <span className={styles.wipDot}></span>
          <span className={styles.wipText}>{t('common:wipLabel')}</span>
        </div>
      )}
      <a
        aria-label="main-link"
        className={styles.projectLink}
        href={site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <header className={styles.cardHeader}>
          <h4 className={styles.helper}>{subtitle}</h4>
          <h3 className={styles.title}>
            {isMobile && shortTitle ? shortTitle : title}
          </h3>
          <div className={styles.cardLinks}>
            <a
              aria-label="action-link"
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {category === 'web'
                ? t('common:cardSiteLink')
                : t('common:cardDownloadLink')}
            </a>
            {repository && (
              <a
                aria-label="repository-link"
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
        <picture className={styles.cardPicture}>
          <source
            role="presentation"
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
      </a>
    </article>
  )
}

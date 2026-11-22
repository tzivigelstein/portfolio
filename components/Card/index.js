import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { ChevronIcon } from '@components/Icons'
import localize from '../../lib/localize'

const Card = ({ project }) => {
  const { t, lang } = useTranslation()

  const { theme, color, repository, site, category, wip } = project

  const title = localize(project.title, lang)
  const shortTitle = localize(project.shortTitle, lang)
  const subtitle = localize(project.subtitle, lang)

  const image = project?.image
  const component = project.component

  const name = shortTitle || title
  // The action link covers the whole card (see .button::after), so the
  // card is clickable without nesting links inside each other.
  const actionText =
    category === 'web' ? t('common:cardSiteLink') : t('common:cardDownloadLink')

  return (
    <li>
      <article
        data-theme={theme}
        style={{ background: color }}
        className={styles.card}
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
            <h3 className={styles.title}>{shortTitle || title}</h3>
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
          {image && (
            <Image
              src={image}
              alt={`${title} preview`}
              layout="responsive"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          )}
          {!image && component ? component : null}
        </div>
      </article>
    </li>
  )
}

export default Card

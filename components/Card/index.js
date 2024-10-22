import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { ChevronIcon } from '@components/Icons'

const Card = ({ project }) => {
  const { t } = useTranslation()

  const { theme, color, shortTitle, title, subtitle, repository, site, category, wip } =
    project

  const image = project?.image
  const component = project.component


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
        <a
          aria-label="main-link"
          className={styles.projectLink}
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          <header className={styles.cardHeader}>
            <h4 className={styles.helper}>{subtitle}</h4>
            <h3 className={styles.title}>{shortTitle || title}</h3>
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
        </a>
      </article>
    </li>
  )
}

export default Card

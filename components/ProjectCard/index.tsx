import Image from 'next/image'
import styles from './index.module.css'
import { ChevronIcon } from '@/components/Icons'
import localize from '@/lib/localize'
import type { Project } from '@/data/projects'
import type { Dictionary, Locale } from '@/lib/i18n'

interface ProjectCardProps {
  project: Project
  dictionary: Dictionary['common']
  lang: Locale
  // The first project is tinted with the accent.
  featured?: boolean
}

// One card style for every project.
export default function ProjectCard ({
  project,
  dictionary,
  lang,
  featured = false
}: ProjectCardProps) {
  const { image, repository, site, category, wip } = project

  const title = localize(project.title, lang)
  const name = localize(project.shortTitle, lang) ?? title
  const subtitle = localize(project.subtitle, lang)
  const description = localize(project.description, lang)
  const cover = image?.fit === 'cover'

  // The action link covers the whole card (see .button::after), so the
  // card is clickable without nesting links inside each other.
  const actionText =
    category === 'web' ? dictionary.cardSiteLink : dictionary.cardDownloadLink

  return (
    <article
      className={`${styles.card} ${featured ? styles.featured : ''} ${
        cover ? styles.stacked : ''
      }`}
    >
      <div className={styles.body}>
        <p className={styles.label}>
          {subtitle}
          {wip && <span className={styles.wip}>{dictionary.wipLabel}</span>}
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
              aria-label={`${dictionary.cardRepositoryLink} ${name}`}
              className={styles.link}
              href={repository}
              target='_blank'
              rel='noopener noreferrer'
            >
              {dictionary.cardRepositoryLink}
              <ChevronIcon aria-hidden='true' />
            </a>
          )}
        </div>
      </div>
      {image && (
        <div className={`${styles.media} ${cover ? styles.mediaCover : ''}`}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={localize(image.alt, lang) ?? ''}
            sizes='(min-width: 760px) 736px, 100vw'
            className={styles.image}
          />
        </div>
      )}
    </article>
  )
}

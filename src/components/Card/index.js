import React from 'react'
import styles from './index.module.css'

const Card = ({ project }) => {
  const { theme, color, title, subtitle, image, repository, site, category } = project

  console.log({ theme })

  return (
    <article theme={theme} style={{ background: color }} className={styles.card}>
      <header className={styles.cardHeader}>
        <span className={styles.helper}>{subtitle}</span>
        <p className={styles.title}>{title}</p>
      </header>
      <picture className={styles.cardPicture}>
        <img className={styles.cardImage} src={image} />
      </picture>
      <footer className={styles.cardFooter}>
        <a className={styles.link} href={repository} target="_blank" rel="noopener noreferer">
          Repository
          <svg
            className={styles.chevronRight}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
        <a href={site} target="_blank" rel="noopener noreferer" className={styles.button}>
          {category === 'web' ? 'Visit' : 'Download'}
        </a>
      </footer>
    </article>
  )
}

export default Card

import React from 'react'
import styles from './index.module.css'
import { GithubIcon } from '../SocialIcons'
import { SiteIcon, DownloadIcon } from '../UICons'

const ProjectCard = ({ project }) => {
  const { category, title, subtitle, image, repository, site, stack } = project

  return (
    <li className={styles.container}>
      <div className={styles.imageContainer}>
        <a className={styles.imageLink} target="_blank" rel="​noopener noreferrer" href={site}>
          <img className={styles.image} loading="lazy" src={image} alt={`${title}, ${subtitle}`} />
        </a>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.stackList}>
          {stack.map(({ id, name, color }) => (
            <li key={id} className={styles.stackTechContainer} style={{ backgroundColor: color }}>
              <span className={styles.stackTech}>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <a
            target="_blank"
            rel="​noopener noreferrer"
            className={`${styles.link} ${styles.githubLink}`}
            href={repository}
          >
            Repository
            <GithubIcon className={styles.linkIcon} width={18} height={18} fill="rgba(0,0,0,0.8)" />
          </a>
        </div>
        <div className={styles.linkContainer}>
          {category === 'web' ? (
            <a target="_blank" rel="​noopener noreferrer" className={`${styles.link} ${styles.siteLink}`} href={site}>
              Site
              <SiteIcon className={styles.linkIcon} width={18} height={18} stroke="rgba(0,0,0,0.8)" />
            </a>
          ) : (
            <a target="_blank" rel="​noopener noreferrer" className={`${styles.link} ${styles.siteLink}`} href={site}>
              Download
              <DownloadIcon className={styles.linkIcon} width={18} height={18} stroke="rgba(0,0,0,0.8)" />
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

export default ProjectCard

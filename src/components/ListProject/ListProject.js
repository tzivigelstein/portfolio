import React from 'react'
import styles from './listproject.module.css'
import { GithubIcon } from '../SocialIcons'
import { SiteIcon } from '../UICons'

const ListProject = ({ project }) => {
  const { title, subtitle, image, repository, site, stack } = project
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={`${title}, ${subtitle}`} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <ul className={styles.stackList}>
          {stack.map(({ id, name, color }) => (
            <span className={styles.stackTech} style={{ backgroundColor: color }} key={id}>
              {name}
            </span>
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
          <a target="_blank" rel="​noopener noreferrer" className={`${styles.link} ${styles.siteLink}`} href={site}>
            Site
            <SiteIcon className={styles.linkIcon} width={18} height={18} stroke="rgba(0,0,0,0.8)" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ListProject

import React, { useEffect, useState } from 'react'
import styles from './listproject.module.css'
import { GithubIcon } from '../SocialIcons'
import { SiteIcon, DownloadIcon } from '../UICons'
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator'

const url = 'http://192.168.0.10:4000/api/download/apk'

const ListProject = ({ project }) => {
  const { category, title, subtitle, image, repository, site, stack, apk } = project

  const [loading, setLoading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')

  useEffect(() => {
    apk && handleGetLink()
  }, [])

  async function handleGetLink() {
    setLoading(true)
    const res = await getLink()

    if (res.ok) {
      const json = await res.json()
      const { response } = json

      setDownloadUrl(response)
    } else {
      console.log('no link')
    }
    setLoading(false)
  }

  async function getLink() {
    try {
      const query = fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          package: apk,
        },
      })

      return await query
    } catch (error) {
      return error
    }
  }

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
          {category === 'web' ? (
            <a target="_blank" rel="​noopener noreferrer" className={`${styles.link} ${styles.siteLink}`} href={site}>
              Site
              <SiteIcon className={styles.linkIcon} width={18} height={18} stroke="rgba(0,0,0,0.8)" />
            </a>
          ) : (
            <a className={`${styles.link} ${styles.siteLink}`} href={downloadUrl}>
              {loading ? (
                <ActivityIndicator size="small" />
              ) : (
                <>
                  Download
                  <DownloadIcon className={styles.linkIcon} width={18} height={18} stroke="rgba(0,0,0,0.8)" />
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListProject

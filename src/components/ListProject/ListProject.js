import React, { useEffect, useState } from 'react'
import styles from './listproject.module.css'
import { GithubIcon } from '../SocialIcons'
import { SiteIcon, DownloadIcon, TimesIcon } from '../UICons'
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator'
import axiosClient from '../../config/axiosClient'

const ListProject = ({ project }) => {
  const { category, title, subtitle, image, repository, site, stack, apk } = project

  const [downloadUrl, setDownloadUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  console.log({ downloadUrl })
  useEffect(() => {
    if (apk) {
      handleGetLink()
    } else {
      setError(true)
    }
  }, [])

  async function handleGetLink() {
    setLoading(true)
    const query = await getLink()
    try {
      const { response } = query.data
      setDownloadUrl(response)
    } catch (error) {
      console.log(error)
      setError(true)
      console.log('entre al error links')
    }
    setLoading(false)
  }

  async function getLink() {
    try {
      const query = axiosClient('/api/download', {
        headers: {
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
              {loading && <ActivityIndicator size="small" />}
              {error && <TimesIcon width={18} height={18} />}
              {!error && !loading && (
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

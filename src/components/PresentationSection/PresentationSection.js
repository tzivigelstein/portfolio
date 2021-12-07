import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './presentation.module.css'

const PresentationSection = () => {
  const [t] = useTranslation('', { useSuspense: false })

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>{t('presentationSectionTitle')}</h2>
        <p className={styles.text}>{t('presentationSectionText')}</p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} loading="lazy" src="./images/previewed.webp" alt="Projects preview" />
      </div>
    </section>
  )
}

export default PresentationSection

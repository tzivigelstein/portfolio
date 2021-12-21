import styles from './presentation.module.css'
import useTranslation from 'next-translate/useTranslation'

const PresentationSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>{t('common:presentationSectionTitle')}</h2>
        <p className={styles.text}>{t('common:presentationSectionText')}</p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} loading="lazy" src="./images/previewed.webp" alt="Projects preview" />
      </div>
    </section>
  )
}

export default PresentationSection

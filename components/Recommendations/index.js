import styles from './index.module.css'
import Creator from '@components/Creator'
import Section from '@components/Section'
import CREATORS from '@data/creators'
import useTranslation from 'next-translate/useTranslation'

export default function Recommendations () {
  const { t } = useTranslation()

  return (
    <Section title={t('common:recommendationsTitle')}>
      <p className={styles.subtitle}>{t('common:recommendationsSubTitle')}</p>
      <ul className={styles.recommendationsContainer}>
        {CREATORS.map(creator => (
          <Creator key={creator.id} creator={creator} />
        ))}
      </ul>
    </Section>
  )
}

import styles from './index.module.css'
import Creator from '@components/Creator'
import { H2, H4 } from '@components/Heading'
import CREATORS from '@data/creators'
import useTranslation from 'next-translate/useTranslation'

export default function Recommendations () {
  const { t } = useTranslation()

  return (
    <div>
      <H2>{t('common:recommendationsTitle')}</H2>
      <H4>{t('common:recommendationsSubTitle')}</H4>
      <ul className={styles.recommendationsContainer}>
        {CREATORS.map(creator => (
          <Creator key={creator.id} creator={creator} />
        ))}
      </ul>
    </div>
  )
}

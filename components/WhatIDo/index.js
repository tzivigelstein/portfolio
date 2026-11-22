import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import Section from '@components/Section'

const ITEMS = [1, 2, 3]

export default function WhatIDo () {
  const { t } = useTranslation()

  return (
    <Section title={t('common:presentationSectionTitle')}>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li key={item} className={styles.item}>
            <h3 className={styles.title}>
              {t(`common:presentationSectionListItemTitle${item}`)}
            </h3>
            <p className={styles.text}>
              {t(`common:presentationSectionListItem${item}`)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

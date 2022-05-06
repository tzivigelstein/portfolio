import { TextEmoji } from '@components/Text'
import useTranslation from 'next-translate/useTranslation'
import styles from './index.module.css'

export default function SoftSkills () {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className={styles.subtitle}>
        {t('common:softSkillsTitle')} <TextEmoji>🦸‍♂️</TextEmoji>
      </h3>
      <div className={styles.goalsContainer}>
        <span className={styles.goal}>
          <TextEmoji>👉</TextEmoji> {t('common:softSkillsFirstTip')}
        </span>
        <span className={styles.goal}>
          <TextEmoji>👉</TextEmoji> {t('common:softSkillsSecondTip')}
        </span>
      </div>
    </div>
  )
}

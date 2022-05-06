import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import { ParagraphText, TextEmoji } from '@components/Text'
import Story from '@components/Story'
import ProfessionalSkills from '@components/ProfessionalSkills'
import SoftSkills from '@components/SoftSkills'
import Recommendations from '@components/Recommendations'

const AboutSection = ({ post }) => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('common:aboutSectionTitle')}</h2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <h3 className={styles.subtitle}>
              {t('common:experienceTitle')} <TextEmoji>👨‍🔬</TextEmoji>
            </h3>
            <ParagraphText>{t('common:experienceText')}</ParagraphText>
          </div>
          <div>
            <h3 className={styles.subtitle}>
              {t('common:goalsTitle')} <TextEmoji>✍</TextEmoji>
            </h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <TextEmoji>👆</TextEmoji> {t('common:goalsFirstTip')}
              </span>
              <span className={styles.goal}>
                <TextEmoji>💡</TextEmoji> {t('common:goalsSecondTip')}
              </span>
            </div>
          </div>
        </div>
        <div>
          <ProfessionalSkills />
          <SoftSkills />
        </div>
      </div>
      <Story post={post} />
      <Recommendations />
    </section>
  )
}

export default AboutSection

import styles from './aboutsection.module.css'
import TechIcon from '../TechIcon/TechIcon'
import technologies from '../technologies'
import useTranslation from 'next-translate/useTranslation'
import { H2, H3, H5 } from '../Heading'
import CREATORS from '../../creators'
import Creator from '../Creator'
import { ParagraphText } from '../Text'
import Story from '../Story'

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('common:aboutSectionTitle')}</h2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <h3 className={styles.subtitle}>
              {t('common:experienceTitle')} <span className={styles.icon}>👨‍🔬</span>
            </h3>
            <ParagraphText>{t('common:experienceText')}</ParagraphText>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('common:goalsTitle')} ✍</h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👆</span> {t('common:goalsFirstTip')}
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>💡</span> {t('common:goalsSecondTip')}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>
            {t('common:professionalTitle')} <span className={styles.icon}>👨‍💻</span>
          </h3>
          <div className={styles.skillsContainer}>
            {technologies.map(({ id, Icon, name, link, styles }) => (
              <TechIcon key={id} name={name} link={link} styles={styles}>
                <Icon />
              </TechIcon>
            ))}
          </div>
          <div>
            <h3 className={styles.subtitle}>
              {t('common:softSkillsTitle')} <span className={styles.icon}>🦸‍♂️</span>
            </h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> {t('common:softSkillsFirstTip')}
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> {t('common:softSkillsSecondTip')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Story />
      <div>
        <H2>{t('common:recommendationsTitle')}</H2>
        <H5>{t('common:recommendationsSubTitle')}</H5>
        <ul className={styles.recommendationsContainer}>
          {CREATORS.map(creator => (
            <Creator key={creator.id} creator={creator} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AboutSection

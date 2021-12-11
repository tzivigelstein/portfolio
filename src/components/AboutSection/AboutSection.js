import React from 'react'
import styles from './aboutsection.module.css'
import TechIcon from '../TechIcon/TechIcon'
import technologies from '../technologies'
import { useTranslation } from 'react-i18next'

const AboutSection = () => {
  const [t] = useTranslation('', { useSuspense: false })
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('aboutSectionTitle')}</h2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <h3 className={styles.subtitle}>
              {t('experienceTitle')} <span className={styles.icon}>👨‍🔬</span>
            </h3>
            <p className={styles.text}>{t('experienceText')}</p>
          </div>
          <div>
            <h3 className={styles.subtitle}>{t('goalsTitle')} ✍</h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👆</span> {t('goalsFirstTip')}
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>💡</span> {t('goalsSecondTip')}
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>
            {t('professionalTitle')} <span className={styles.icon}>👨‍💻</span>
          </h3>
          <div className={styles.skillsContainer}>
            {technologies.map(({ id, color, Icon, name, link }) => (
              <TechIcon key={id} backgroundColor={color} name={name} link={link}>
                <Icon />
              </TechIcon>
            ))}
          </div>
          <div>
            <h3 className={styles.subtitle}>
              {t('softSkillsTitle')} <span className={styles.icon}>🦸‍♂️</span>
            </h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> {t('softSkillsFirstTip')}
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> {t('softSkillsSecondTip')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

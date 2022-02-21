import styles from './aboutsection.module.css'
import TechIcon from '../TechIcon/TechIcon'
import technologies from '../technologies'
import useTranslation from 'next-translate/useTranslation'
import { H2, H3, H5 } from '../Heading'
import CREATORS from '../../creators'
import Creator from '../Creator'
import { ParagraphText } from '../Text'

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
      <div className={styles.storyContainer}>
        <H3>My story</H3>
        <div className={styles.textContainer}>
          <ParagraphText>
            I am Tzivi Gelstein and I was born at Béer Sheva, Israel. I grew up there until the age of 3, then my family
            and I moved back to Argentina where we live happily.
          </ParagraphText>
          <ParagraphText>
            I’ve been always a tech passionate, since I was young I enjoyed using the computer, gaming mainly 😅. But
            for me, the machine I had in front was in fact a whole mystery.
          </ParagraphText>
          <ParagraphText>
            A short time later, I started digging into a computer building, *What is a processor? What is a Motherboard?
            Why my data held on my hard disk? These are the questions I had that nobody could answer. Nobody but the
            internet.
          </ParagraphText>
          <ParagraphText>
            It was a complete year learning about computers, all about them. From the transistors inside all the
            components to the software. I learnt how to install an O.S. and how to configure it, I learnt (superficially
            😁) what were the drivers.
          </ParagraphText>
        </div>
      </div>
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

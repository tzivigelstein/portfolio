import styles from './index.module.css'
import TechIcon from '@components/TechIcon/TechIcon'
import technologies from '@data/technologies'
import useTranslation from 'next-translate/useTranslation'
import { TextEmoji } from '@components/Text'
import { Solidity, TypeScript } from '@components/Icons'

export default function ProfessionalSkills () {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className={styles.subtitle}>
        {t('common:professionalTitle')} <TextEmoji>👨‍💻</TextEmoji>
      </h3>
      <div className={styles.skillsContainer}>
        {technologies.map(({ id, Icon, name, link, styles }) => (
          <TechIcon key={id} name={name} link={link} styles={styles}>
            <Icon />
          </TechIcon>
        ))}
      </div>
      <h3 className={styles.subtitle}>
        {t('common:currentlyLearningTitle')} <TextEmoji>🤓</TextEmoji>
      </h3>
      <div className={styles.skillsContainer}>
        <TechIcon name='TypeScript' link='https://www.typescriptlang.org/' styles={{ backgroundColor: '#3178c6' }}>
          <TypeScript width={27} height={27} />
        </TechIcon>
        <TechIcon
          name='Solidity'
          link='https://solidity-es.readthedocs.io/es/latest/'
          styles={{ backgroundColor: '#fff' }}
        >
          <Solidity width={27} height={27} />
        </TechIcon>
      </div>
    </div>
  )
}

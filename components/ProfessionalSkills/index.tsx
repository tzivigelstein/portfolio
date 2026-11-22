import styles from './index.module.css'
import technologies from '@/data/technologies'
import { H3 } from '@/components/Heading'
import localize from '@/lib/localize'
import type { Dictionary, Locale } from '@/lib/i18n'

interface ProfessionalSkillsProps {
  dictionary: Dictionary['common']
  lang: Locale
}

export default function ProfessionalSkills ({ dictionary, lang }: ProfessionalSkillsProps) {
  return (
    <div>
      <H3>{dictionary.professionalTitle}</H3>
      <div className={styles.groups}>
        {technologies.map(({ id, title, items }) => (
          <div key={id}>
            <h4 className={styles.groupTitle}>{dictionary[title]}</h4>
            <ul className={styles.skillList}>
              {items.map((item) => {
                const name = localize(item, lang)
                return (
                  <li key={name} className={styles.skill}>
                    {name}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

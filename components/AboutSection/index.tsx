import styles from './index.module.css'
import { ParagraphText } from '@/components/Text'
import ProfessionalSkills from '@/components/ProfessionalSkills'
import Section from '@/components/Section'
import type { Dictionary, Locale } from '@/lib/i18n'

interface AboutSectionProps {
  dictionary: Dictionary['common']
  lang: Locale
}

export default function AboutSection ({ dictionary, lang }: AboutSectionProps) {
  return (
    <Section title={dictionary.aboutSectionTitle}>
      <div className={styles.text}>
        {dictionary.experienceText.split('\n\n').map((paragraph) => (
          <ParagraphText key={paragraph}>{paragraph}</ParagraphText>
        ))}
      </div>
      <div className={styles.skills}>
        <ProfessionalSkills dictionary={dictionary} lang={lang} />
      </div>
    </Section>
  )
}

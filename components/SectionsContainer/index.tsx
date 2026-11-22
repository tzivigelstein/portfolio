import styles from './index.module.css'
import ProjectsSection from '@/components/ProjectsSection'
import Experience from '@/components/Experience'
import AboutSection from '@/components/AboutSection'
import Story from '@/components/Story'
import type { Dictionary, Locale } from '@/lib/i18n'

interface SectionsContainerProps {
  dictionary: Dictionary
  lang: Locale
}

// Order follows what a recruiter looks for: what I built, where I worked,
// what I know, and only then the personal part.
export default function SectionsContainer ({ dictionary, lang }: SectionsContainerProps) {
  const { common } = dictionary

  return (
    <main id='main' className={styles.sectionsContainer}>
      <ProjectsSection dictionary={common} lang={lang} />
      <Experience dictionary={dictionary} lang={lang} />
      <AboutSection dictionary={common} lang={lang} />
      <Story title={common.storyTitle} lang={lang} />
    </main>
  )
}

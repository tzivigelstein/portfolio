import styles from './index.module.css'
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import Section from '@/components/Section'
import type { Dictionary, Locale } from '@/lib/i18n'

interface ProjectsSectionProps {
  dictionary: Dictionary['common']
  lang: Locale
}

export default function ProjectsSection ({ dictionary, lang }: ProjectsSectionProps) {
  const activeProjects = projects.filter(({ active }) => active)

  return (
    <Section title={dictionary.projectsSectionWebTitle}>
      <ul className={styles.projectList}>
        {activeProjects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard
              project={project}
              dictionary={dictionary}
              lang={lang}
              featured={index === 0}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}

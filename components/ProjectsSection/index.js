import styles from './index.module.css'
import projects from '@data/projects'
import ProjectCard from '@components/ProjectCard'
import Section from '@components/Section'
import useTranslation from 'next-translate/useTranslation'

export default function ProjectsSection () {
  const { t } = useTranslation()

  const activeProjects = projects.filter(({ active }) => active)

  return (
    <Section title={t('common:projectsSectionTitle')}>
      <ul className={styles.projectList}>
        {activeProjects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} featured={index === 0} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

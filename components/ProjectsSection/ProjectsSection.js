import styles from './projectsection.module.css'
import projects from '@data/projects'
import Card from '@components/Card'
import JumboCard from '@components/JumboCard'
import useTranslation from 'next-translate/useTranslation'

const ProjectsSection = () => {
  const { t } = useTranslation()

  const webs = projects.filter(({ category }) => category === 'web')
  const jumbo = webs.shift()
  const apps = projects.filter(({ category }) => category === 'app')

  return (
    <section className={styles.container}>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>{t('common:projectsSectionWebTitle')}</h2>
        <ul className={styles.projectList}>
          <JumboCard jumbo key={jumbo.id} project={jumbo} />
          {webs.map(project => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>{t('common:projectsSectionAppTitle')}</h2>
        <ul className={styles.projectList}>
          {apps.map(project => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default ProjectsSection

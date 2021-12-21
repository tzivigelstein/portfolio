import styles from './projectsection.module.css'
import projects from '../../projects'
import Card from '../Card'
import useTranslation from 'next-translate/useTranslation'

const ProjectsSection = () => {
  const { t } = useTranslation()

  const webs = projects.filter(({ category }) => category === 'web')
  const apps = projects.filter(({ category }) => category === 'app')

  return (
    <section className={styles.container}>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>{t('common:projectsSectionWebTitle')}</h2>
        <ul className={styles.projectList}>
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

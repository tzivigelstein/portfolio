import styles from './index.module.css'
import projects from '@data/projects'
import Card from '@components/Card'
import JumboCard from '@components/JumboCard'
import useTranslation from 'next-translate/useTranslation'
import { H2 } from '@components/Heading'

export default function ProjectsSection() {
  const { t } = useTranslation()

  const activeProjects = projects.filter(({ active }) => active)

  const webs = activeProjects.filter(({ category }) => category === 'web')
  const jumbo = webs.shift()
  const apps = activeProjects.filter(({ category }) => category === 'app')

  return (
    <section className={styles.container}>
      <section className={styles.secondarySection}>
        <H2>{t('common:projectsSectionWebTitle')}</H2>
        <JumboCard project={jumbo} />
        <ul className={styles.projectList}>
          {webs.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
      {apps.length !== 0 && (
        <section className={styles.secondarySection}>
          <h2 className={styles.sectionTitle}>
            {t('common:projectsSectionAppTitle')}
          </h2>
          {apps.length === 1 ? (
            <JumboCard project={apps[0]} />
          ) : (
            <ul className={styles.projectList}>
              {apps.map((project) => (
                <Card key={project.id} project={project} />
              ))}
            </ul>
          )}
        </section>
      )}
    </section>
  )
}


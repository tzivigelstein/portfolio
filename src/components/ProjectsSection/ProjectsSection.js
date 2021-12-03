import React from 'react'
import styles from './projectsection.module.css'
import projects from '../../projects'
import Card from '../Card'

const ProjectsSection = () => {
  const webs = projects.filter(({ category }) => category === 'web')
  const apps = projects.filter(({ category }) => category === 'app')

  return (
    <section className={styles.container}>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>Web Projects</h2>
        <ul className={styles.projectList}>
          {webs.map(project => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>App Projects</h2>
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

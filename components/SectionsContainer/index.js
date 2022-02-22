import styles from './index.module.css'
import PresentationSection from '../PresentationSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import AboutSection from '../AboutSection/AboutSection'

const SectionsContainer = () => {
  return (
    <main className={styles.sectionsContainer}>
      <PresentationSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  )
}

export default SectionsContainer

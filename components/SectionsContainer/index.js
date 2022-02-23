import styles from './index.module.css'
import PresentationSection from '@components/PresentationSection'
import ProjectsSection from '@components/ProjectsSection'
import AboutSection from '@components/AboutSection'

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

import styles from './sections.module.css'
import PresentationSection from '../PresentationSection/PresentationSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import AboutSection from '../AboutSection/AboutSection'

const Sections = () => {
  return (
    <div className={styles.sectionsContainer}>
      <PresentationSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  )
}

export default Sections

import styles from './index.module.css'
import ProjectsSection from '@components/ProjectsSection'
import Experience from '@components/Experience'
import AboutSection from '@components/AboutSection'
import Story from '@components/Story'

// Order follows what a recruiter looks for: what I built, where I worked,
// what I know, and only then the personal part.
const SectionsContainer = ({ post }) => {
  return (
    <main id="main" className={styles.sectionsContainer}>
      <ProjectsSection />
      <Experience />
      <AboutSection />
      <Story post={post} />
    </main>
  )
}

export default SectionsContainer

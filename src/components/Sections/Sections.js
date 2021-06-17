import React from 'react'
import styles from './sections.module.css'
import PresentationSection from '../PresentationSection/PresentationSection'
import ProjectsSection from '../ProjectsSection/ProjectsSection'
import ContactSection from '../ContactSection/ContactSection'
import AboutSection from '../AboutSection/AboutSection'

const Sections = () => {
  return (
    <div className={styles.sectionsContainer}>
      <PresentationSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Sections

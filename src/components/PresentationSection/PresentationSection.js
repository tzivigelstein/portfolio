import React from 'react'
import styles from './presentation.module.css'

const PresentationSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.text}>
          Over the course of 2 years I have worked on different personal projects such as web applications, mobile
          applications and web designs, in order to practice the skills learned during my learning.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} loading="lazy" src="./images/previewed.webp" alt="Projects preview" />
      </div>
    </section>
  )
}

export default PresentationSection

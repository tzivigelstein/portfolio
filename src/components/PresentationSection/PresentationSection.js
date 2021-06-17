import React from 'react'
import styles from './presentation.module.css'

const PresentationSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores consequatur perferendis dolorem
          expedita veritatis consectetur adipisci error? Est vel doloribus numquam iusto quod in perspiciatis, unde
          animi at earum!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="./images/previewed.png" alt="Projects preview" />
      </div>
    </section>
  )
}

export default PresentationSection

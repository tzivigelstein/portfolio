import React from 'react'
import styles from './techicon.module.css'

const TechIcon = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor,
      }}
      className={styles.skill}
    >
      {children}
    </div>
  )
}

export default TechIcon

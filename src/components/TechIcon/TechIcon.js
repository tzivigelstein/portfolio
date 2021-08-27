import React from 'react'
import styles from './techicon.module.css'

const TechIcon = ({ children, backgroundColor, name }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          backgroundColor,
        }}
        className={styles.skill}
      >
        {children}
      </div>
      <div className={styles.skillTooltip}>{name}</div>
    </div>
  )
}

export default TechIcon

import styles from './techicon.module.css'

const TechIcon = ({ children, name, link, styles: iconStyles }) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' style={{ position: 'relative' }}>
      <div style={iconStyles} className={styles.skill}>
        {children}
      </div>
      <div translate='no' className={styles.skillTooltip}>
        <span>{name}</span>
      </div>
    </a>
  )
}

export default TechIcon

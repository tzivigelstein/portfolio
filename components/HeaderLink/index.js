import styles from './index.module.css'

const HeaderLink = ({ text, link }) => {
  return (
    <a className={styles.headerLink} href={link} target='_blank' rel='noopener noreferrer'>
      {text}
    </a>
  )
}

export default HeaderLink

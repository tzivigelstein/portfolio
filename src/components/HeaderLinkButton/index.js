import styles from './index.module.css'

const HeaderLinkButton = ({ text, link }) => {
  return (
    <a className={styles.headerLinkButton} href={link} target='_blank' rel='noopener noreferrer'>
      {text}
    </a>
  )
}

export default HeaderLinkButton

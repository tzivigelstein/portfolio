import styles from './index.module.css'

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container

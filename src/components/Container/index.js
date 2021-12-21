import styles from './index.module.css'

const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>
}

export default Container

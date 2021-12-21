import useApp from '../../hooks/useApp'
import styles from './index.module.css'

const Container = ({ children }) => {
  const { theme } = useApp()

  return (
    <main className={styles.container} data-theme={theme}>
      {children}
    </main>
  )
}

export default Container

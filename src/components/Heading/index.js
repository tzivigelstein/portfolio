import styles from './index.module.css'

export const H1 = ({ children, ...props }) => (
  <h1 className={styles.h1} {...props}>
    {children}
  </h1>
)
export const H2 = ({ children, ...props }) => (
  <h2 className={styles.h2} {...props}>
    {children}
  </h2>
)
export const H3 = ({ children, ...props }) => (
  <h3 className={styles.h3} {...props}>
    {children}
  </h3>
)
export const H4 = ({ children, ...props }) => (
  <h4 className={styles.h4} {...props}>
    {children}
  </h4>
)

export const H5 = ({ children, ...props }) => (
  <h5 className={styles.h5} {...props}>
    {children}
  </h5>
)

import styles from './index.module.css'

export const ParagraphText = ({ children, ...props }) => <p className={styles.paragraphText}>{children}</p>

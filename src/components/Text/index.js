import styles from './index.module.css'

export const ParagraphText = ({ children, ...props }) => <p className={styles.paragraphText}>{children}</p>
export const ParagraphTextBig = ({ children, ...props }) => (
  <p className={`${styles.paragraphTextBig} ${styles.paragraphText}`}>{children}</p>
)

export const TextBold = ({ children, ...props }) => <span className={styles.textBold}>{children}</span>

export const TextLink = ({ children, ...props }) => (
  <a rel='noopener noreferrer' target='_blank' className={styles.textLink} {...props}>
    {children}
  </a>
)

export const TextItalic = ({ children, ...props }) => (
  <span className={styles.textItalic} {...props}>
    {children}
  </span>
)

export const TextEmoji = ({ children, ...props }) => <span className={styles.textEmoji}>{children}</span>

export const TextListItem = ({ children, ...props }) => <p className={styles.textListItem}>{children}</p>

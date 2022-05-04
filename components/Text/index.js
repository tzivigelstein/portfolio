import styles from './index.module.css'

export const ParagraphText = ({ children }) => <p className={styles.paragraphText}>{children}</p>
export const ParagraphTextBig = ({ children }) => (
  <p className={`${styles.paragraphTextBig} ${styles.paragraphText}`}>{children}</p>
)

export const TextBold = ({ children }) => <span className={styles.textBold}>{children}</span>

export const TextLink = ({ children, href }) => (
  <a rel='noopener noreferrer' target='_blank' className={styles.textLink} href={href}>
    {children}
  </a>
)

export const TextItalic = ({ children, ...props }) => (
  <span className={styles.textItalic} {...props}>
    {children}
  </span>
)

export const TextEmoji = ({ children }) => <span className={styles.textEmoji}>{children}</span>

export const TextListItem = ({ children }) => {
  return (
    <li>
      <span className={styles.textListItem}>{children}</span>
    </li>
  )
}

export const List = ({ children }) => <ul className={styles.list}>{children}</ul>

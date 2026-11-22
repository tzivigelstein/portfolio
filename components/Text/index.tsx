import type { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

export const ParagraphText = ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
  <p {...props} className={styles.paragraphText}>
    {children}
  </p>
)

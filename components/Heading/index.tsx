import type { ComponentPropsWithoutRef } from 'react'
import styles from './index.module.css'

export const H2 = ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
  <h2 className={styles.h2} {...props}>
    {children}
  </h2>
)

export const H3 = ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
  <h3 className={styles.h3} {...props}>
    {children}
  </h3>
)

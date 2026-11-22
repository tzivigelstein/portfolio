import type { ReactNode } from 'react'
import styles from './index.module.css'

export default function Container ({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>
}

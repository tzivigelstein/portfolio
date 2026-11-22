import styles from './index.module.css'
import { H2 } from '@components/Heading'

// Every block of the page uses this wrapper, so spacing, width and the
// separator line are the same everywhere.
export default function Section ({ title, children }) {
  return (
    <section className={styles.section}>
      <H2>{title}</H2>
      {children}
    </section>
  )
}

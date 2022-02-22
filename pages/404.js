import Link from 'next/link'
import styles from './styles/404.module.css'

export default function NotFound (props) {
  console.log({ props })
  return (
    <div className={styles.container}>
      <h1>Oooooops... That page couldn't be found 🔎</h1>
      <Link href='/' replace><a className={styles.homeLink}>Go back to home</a></Link>
    </div>
  )
}

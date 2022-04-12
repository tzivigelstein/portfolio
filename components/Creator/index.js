import styles from './index.module.css'
import Image from 'next/image'

export default function Creator ({ creator }) {
  const { name, image, website } = creator

  return (
    <li className={styles.recommendationContainer}>
      <a rel='noopener noreferrer' target='_blank' href={website}>
        <Image src={image} title={name} alt={name} layout='responsive' width='100%' height='100%' objectFit='cover' />
      </a>
      <span className={styles.recommendationName}>{name}</span>
    </li>
  )
}

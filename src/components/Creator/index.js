import styles from './index.module.css'

export default function Creator ({ creator }) {
  const { name, image, website } = creator

  return (
    <li className={styles.recommendationContainer}>
      <a rel='noopener noreferrer' target='_blank' href={website}>
        <img loading='lazy' className={styles.recommendationImage} title={name} src={image} alt={name} />
      </a>
      <span className={styles.recommendationName}>{name}</span>
    </li>
  )
}

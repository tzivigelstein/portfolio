import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import styles from './styles/404.module.css'

export default function NotFound () {
  const { t } = useTranslation()

  return (
    <main className={styles.container}>
      <h1>
        {t('common:notFoundTitle')} <span aria-hidden='true'>🔎</span>
      </h1>
      <Link href='/' replace>
        <a className={styles.homeLink}>{t('common:notFoundLink')}</a>
      </Link>
    </main>
  )
}

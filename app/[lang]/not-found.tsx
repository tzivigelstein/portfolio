import Link from 'next/link'
import { lang } from 'next/root-params'
import { defaultLocale, getDictionary, hasLocale, localePath } from '@/lib/i18n'
import styles from './not-found.module.css'

// Known limit: because the root layout lives under [lang], Next.js sends
// this page with a 404 status but renders its content in the browser.
export default async function NotFound () {
  const param = await lang()
  const locale = hasLocale(param) ? param : defaultLocale
  const { common } = getDictionary(locale)

  return (
    <main className={styles.container}>
      <title>{common.notFoundMetaTitle}</title>
      <h1>
        {common.notFoundTitle} <span aria-hidden='true'>🔎</span>
      </h1>
      <Link href={localePath(locale)} className={styles.homeLink}>
        {common.notFoundLink}
      </Link>
    </main>
  )
}

import Link from 'next/link'
import { locales, localePath, type Locale } from '@/lib/i18n'
import styles from './index.module.css'

interface LanguageSwitcherProps {
  lang: Locale
  label: string
}

// Each language is its own URL, so the switcher is plain navigation.
export default function LanguageSwitcher ({ lang, label }: LanguageSwitcherProps) {
  return (
    <nav className={styles.content} aria-label={label}>
      <div className={styles.colorSchemeToggle}>
        {locales.map((locale) => (
          <Link
            key={locale}
            href={localePath(locale)}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === lang ? 'page' : undefined}
            className={`${styles.text} ${locale === lang ? styles.current : ''}`}
          >
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  )
}

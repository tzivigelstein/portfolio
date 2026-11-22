import type { MetadataRoute } from 'next'
import { locales, localePath } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'

const absolute = (path: string): string => new URL(path, SITE_URL).toString()

// Both language versions, each pointing at the other.
export default function sitemap (): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((locale) => [locale, absolute(localePath(locale))])),
    'x-default': absolute(localePath('en'))
  }

  return locales.map((locale) => ({
    url: absolute(localePath(locale)),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: { languages }
  }))
}

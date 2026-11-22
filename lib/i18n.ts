import enCommon from '@/locales/en/common.json'
import enTimeline from '@/locales/en/timeline.json'
import enChristmas from '@/locales/en/christmas.json'
import esCommon from '@/locales/es/common.json'
import esTimeline from '@/locales/es/timeline.json'
import esChristmas from '@/locales/es/christmas.json'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

const en = { common: enCommon, timeline: enTimeline, christmas: enChristmas }

// English is the reference: Spanish must have exactly the same keys,
// otherwise this file does not compile.
export type Dictionary = typeof en

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es: { common: esCommon, timeline: esTimeline, christmas: esChristmas }
}

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale]

// English lives at the root, every other language under its own prefix.
export const localePath = (locale: Locale): string =>
  locale === defaultLocale ? '/' : `/${locale}`

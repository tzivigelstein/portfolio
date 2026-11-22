import type { Locale } from './i18n'

// Copy can be a plain string or an object keyed by language.
export type LocalizedText = string | { en: string, es?: string }

export default function localize (value: LocalizedText, lang: Locale): string
export default function localize (value: LocalizedText | undefined, lang: Locale): string | undefined
export default function localize (value: LocalizedText | undefined, lang: Locale): string | undefined {
  if (value === undefined || typeof value === 'string') return value
  return value[lang] ?? value.en
}

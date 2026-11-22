import type { Dictionary, Locale } from '@/lib/i18n'
import events, { type TimelineEvent } from './events'

export interface TimelineEntry {
  id: string
  type: TimelineEvent['type']
  title: string
  // One item per line of the translated description.
  lines: string[]
  date: string
  link?: string
  linkText?: string
}

const formatDate = (date: Date, lang: Locale, yearOnly = false): string =>
  new Intl.DateTimeFormat(
    lang,
    yearOnly ? { year: 'numeric' } : { year: 'numeric', month: 'short' }
  ).format(date)

// Newest first, with dates and texts ready to render.
export default function getTimeline (
  dictionary: Dictionary['timeline'],
  lang: Locale
): TimelineEntry[] {
  const text = (key: TimelineEvent['title']): string => {
    const value = dictionary[key]
    return typeof value === 'string' ? value : ''
  }

  return [...events]
    .sort((a, b) => b.from.getTime() - a.from.getTime())
    .map(({ id, type, title, description, from, to, yearOnly, link, linkText }) => {
      const end =
        to === 'present'
          ? dictionary.present
          : to === 'never'
            ? dictionary.noExpiryDate
            : formatDate(to, lang, yearOnly)

      return {
        id,
        type,
        title: text(title),
        lines: text(description)
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean),
        date: `${formatDate(from, lang, yearOnly)} - ${end}`,
        link,
        linkText
      }
    })
}

import fs from 'node:fs'
import path from 'node:path'
import { getDictionary, locales } from '@/lib/i18n'

// Flattens nested translations into "a.b" keys.
const flatten = (object: object, prefix = ''): Record<string, string> =>
  Object.entries(object).reduce<Record<string, string>>((result, [key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key
    return typeof value === 'object' && value !== null
      ? { ...result, ...flatten(value, name) }
      : { ...result, [name]: String(value) }
  }, {})

const visibleText = (): string[] => {
  const translations = locales.flatMap((lang) => Object.values(flatten(getDictionary(lang))))
  const posts = locales.map((lang) =>
    fs
      .readFileSync(path.join(process.cwd(), 'posts', `my-story-${lang}.mdx`), 'utf8')
      .replace(/^---[\s\S]*?---/, '')
  )
  return [...translations, ...posts]
}

describe('Translations', () => {
  test('have the same keys in English and Spanish', () => {
    const english = Object.keys(flatten(getDictionary('en'))).sort()
    const spanish = Object.keys(flatten(getDictionary('es'))).sort()
    expect(spanish).toEqual(english)
  })

  test('have no empty texts', () => {
    for (const lang of locales) {
      for (const [key, value] of Object.entries(flatten(getDictionary(lang)))) {
        expect(`${lang}:${key}=${value.trim()}`).not.toBe(`${lang}:${key}=`)
      }
    }
  })

  test('never mention how the freelance work is contracted', () => {
    for (const text of visibleText()) {
      expect(text).not.toMatch(/subcontract|subcontratista|confidential|confidencial/i)
    }
  })

  test('have no "topic: detail" colons in the middle of a sentence', () => {
    for (const text of visibleText()) {
      expect(text).not.toMatch(/[\p{L})]: \p{L}/u)
    }
  })
})

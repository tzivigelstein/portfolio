import fs from 'fs'
import path from 'path'

const NAMESPACES = ['common', 'timeline', 'christmas']
const load = (lang, namespace) =>
  JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'locales', lang, `${namespace}.json`), 'utf8')
  )

// Flattens nested translations into "a.b" keys.
const flatten = (object, prefix = '') =>
  Object.entries(object).reduce((result, [key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key
    return typeof value === 'object'
      ? { ...result, ...flatten(value, name) }
      : { ...result, [name]: value }
  }, {})

const visibleText = () => {
  const translations = ['en', 'es'].flatMap((lang) =>
    NAMESPACES.flatMap((namespace) => Object.values(flatten(load(lang, namespace))))
  )
  const posts = ['en', 'es'].map((lang) =>
    fs.readFileSync(path.join(__dirname, '..', 'posts', `my-story-${lang}.mdx`), 'utf8')
      .replace(/^---[\s\S]*?---/, '')
  )
  return [...translations, ...posts]
}

describe('Translations', () => {
  test.each(NAMESPACES)('%s has the same keys in English and Spanish', (namespace) => {
    const english = Object.keys(flatten(load('en', namespace))).sort()
    const spanish = Object.keys(flatten(load('es', namespace))).sort()
    expect(spanish).toEqual(english)
  })

  test.each(NAMESPACES)('%s has no empty texts', (namespace) => {
    for (const lang of ['en', 'es']) {
      for (const [key, value] of Object.entries(flatten(load(lang, namespace)))) {
        expect(`${lang}:${key}=${String(value).trim()}`).not.toBe(`${lang}:${key}=`)
      }
    }
  })

  test('never mentions how the freelance work is contracted', () => {
    for (const text of visibleText()) {
      expect(text).not.toMatch(/subcontract|subcontratista|confidential|confidencial/i)
    }
  })

  test('has no "topic: detail" colons in the middle of a sentence', () => {
    for (const text of visibleText()) {
      expect(text).not.toMatch(/[\p{L})]: \p{L}/u)
    }
  })
})

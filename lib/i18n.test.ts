import { getDictionary, hasLocale, localePath } from './i18n'

describe('i18n', () => {
  test('knows which languages exist', () => {
    expect(hasLocale('en')).toBe(true)
    expect(hasLocale('es')).toBe(true)
    expect(hasLocale('fr')).toBe(false)
  })

  test('serves English at the root and Spanish under /es', () => {
    expect(localePath('en')).toBe('/')
    expect(localePath('es')).toBe('/es')
  })

  test('returns the texts of each language', () => {
    expect(getDictionary('en').common.subHeadline).toBe('Backend developer.')
    expect(getDictionary('es').common.subHeadline).toBe('Desarrollador backend.')
  })
})

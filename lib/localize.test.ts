import localize from './localize'

describe('localize', () => {
  test('returns plain values as they are', () => {
    expect(localize('AC Hub', 'es')).toBe('AC Hub')
    expect(localize(undefined, 'es')).toBeUndefined()
  })

  test('picks the value for the language', () => {
    expect(localize({ en: 'Projects', es: 'Proyectos' }, 'es')).toBe('Proyectos')
  })

  test('falls back to English', () => {
    expect(localize({ en: 'Projects' }, 'es')).toBe('Projects')
  })
})

/**
 * @jest-environment node
 */
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'

describe('Sitemap', () => {
  test('lists both languages, each pointing at the other', () => {
    const entries = sitemap()

    expect(entries.map(({ url }) => url)).toEqual([
      'https://www.tzivi.com/',
      'https://www.tzivi.com/es'
    ])

    for (const entry of entries) {
      expect(entry.alternates?.languages).toEqual({
        en: 'https://www.tzivi.com/',
        es: 'https://www.tzivi.com/es',
        'x-default': 'https://www.tzivi.com/'
      })
    }
  })
})

describe('Robots', () => {
  test('allows everything and points to the sitemap over https', () => {
    expect(robots()).toEqual({
      rules: { userAgent: '*', allow: '/' },
      sitemap: 'https://www.tzivi.com/sitemap.xml'
    })
  })
})

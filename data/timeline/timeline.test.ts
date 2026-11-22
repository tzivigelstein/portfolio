import getTimeline from './timeline'
import { getDictionary } from '@/lib/i18n'

describe('Timeline', () => {
  const entries = getTimeline(getDictionary('en').timeline, 'en')
  const find = (title: string) => {
    const entry = entries.find((candidate) => candidate.title === title)
    if (!entry) throw new Error(`No entry titled ${title}`)
    return entry
  }

  test('lists the newest entry first', () => {
    expect(entries.map(({ title }) => title)).toEqual([
      'Creator & Developer, AC Hub',
      'EF Standard English Test (EF SET)',
      'Backend developer, Freelance',
      'Electronics Technician'
    ])
  })

  test('shows ongoing work as present', () => {
    expect(find('Creator & Developer, AC Hub').date).toBe('Feb 2026 - present')
  })

  test('shows certifications without an end date', () => {
    const certificate = find('EF Standard English Test (EF SET)')
    expect(certificate.date).toBe('Jan 2023 - no expiry date')
    expect(certificate.link).toMatch(/^https:\/\//)
  })

  test('shows only the years when the months are not known', () => {
    expect(find('Electronics Technician').date).toBe('2016 - 2021')
  })

  test('splits the description into lines', () => {
    expect(find('Backend developer, Freelance').lines).toHaveLength(4)
    expect(find('Electronics Technician').lines).toHaveLength(1)
  })

  test('formats dates in the given language', () => {
    const spanish = getTimeline(getDictionary('es').timeline, 'es')
    const freelance = spanish.find(({ title }) => title === 'Desarrollador backend, Freelance')
    expect(freelance?.date).toBe('jun 2022 - presente')
  })
})

import Timeline from './timeline'

describe('Timeline', () => {
  const t = (key) => key
  const { events } = new Timeline(t, 'en')

  test('lists the newest entry first', () => {
    const starts = events.map(({ from }) => from.getTime())
    expect(starts).toEqual([...starts].sort((a, b) => b - a))
  })

  test('shows ongoing work as present', () => {
    const acHub = events.find(({ title }) => title === 'timeline:title4')
    expect(acHub.date).toBe('Feb 2026 - timeline:present')
  })

  test('shows certifications without an end date', () => {
    const certificate = events.find(({ type }) => type === 'certification')
    expect(certificate.date).toBe('Jan 2023 - timeline:noExpiryDate')
    expect(certificate.link).toMatch(/^https:\/\//)
  })

  test('shows only the years when the months are not known', () => {
    const school = events.find(({ type }) => type === 'education')
    expect(school.date).toBe('2016 - 2021')
  })

  test('formats dates in the given language', () => {
    const spanish = new Timeline(t, 'es')
    const freelance = spanish.events.find(({ title }) => title === 'timeline:title1')
    expect(freelance.date).toBe('jun 2022 - timeline:present')
  })
})

import { CHRISTMAS, SEASON_ATTRIBUTE, seasonScript } from './season'

const runAt = (date: string) => {
  document.documentElement.removeAttribute(SEASON_ATTRIBUTE)
  jest.useFakeTimers().setSystemTime(new Date(date))
  // The script is plain text that the page runs before the first paint.
  // eslint-disable-next-line no-new-func
  new Function(seasonScript)()
  jest.useRealTimers()
  return document.documentElement.getAttribute(SEASON_ATTRIBUTE)
}

describe('Season script', () => {
  test.each([
    ['2026-12-01T00:30:00', CHRISTMAS],
    ['2026-12-25T12:00:00', CHRISTMAS],
    ['2027-01-08T23:00:00', CHRISTMAS],
    ['2027-01-09T00:30:00', null],
    ['2026-11-30T23:00:00', null],
    ['2026-07-15T12:00:00', null]
  ])('on %s the season is %s', (date, expected) => {
    expect(runAt(date)).toBe(expected)
  })
})

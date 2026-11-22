import { themeScript } from './theme'

const run = (stored: string | null, systemDark: boolean) => {
  window.localStorage.clear()
  if (stored !== null) window.localStorage.setItem('theme', stored)
  window.matchMedia = jest.fn().mockReturnValue({ matches: systemDark })
  document.documentElement.removeAttribute('data-theme')

  // The script is plain text that the page runs before the first paint.
  // eslint-disable-next-line no-new-func
  new Function(themeScript)()
  return document.documentElement.getAttribute('data-theme')
}

describe('Theme script', () => {
  test.each([
    [null, false, 'light'],
    [null, true, 'dark'],
    ['system', true, 'dark'],
    ['system', false, 'light'],
    ['dark', false, 'dark'],
    ['light', true, 'light'],
    ['something-else', true, 'dark']
  ])('saved %s with system dark %s gives %s', (stored, systemDark, expected) => {
    expect(run(stored, systemDark)).toBe(expected)
  })

  test('sets the color scheme for native controls', () => {
    run('dark', false)
    expect(document.documentElement.style.colorScheme).toBe('dark')
  })
})

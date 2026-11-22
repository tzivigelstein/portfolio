export const THEMES = ['light', 'dark', 'system'] as const
export type Theme = (typeof THEMES)[number]

export const THEME_STORAGE_KEY = 'theme'
export const THEME_ATTRIBUTE = 'data-theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

export const isTheme = (value: unknown): value is Theme =>
  typeof value === 'string' && (THEMES as readonly string[]).includes(value)

// The saved choice, or "system" when there is none.
export const getStoredTheme = (): Theme => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(stored) ? stored : 'system'
  } catch {
    return 'system'
  }
}

export const storeTheme = (theme: Theme): void => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be blocked; the theme still applies for this visit.
  }
}

export const systemPrefersDark = (): MediaQueryList => window.matchMedia(DARK_QUERY)

// Writes the theme on <html>, where the CSS variables read it.
export const applyTheme = (theme: Theme): void => {
  const dark = theme === 'dark' || (theme === 'system' && systemPrefersDark().matches)
  const resolved = dark ? 'dark' : 'light'
  const root = document.documentElement

  root.setAttribute(THEME_ATTRIBUTE, resolved)
  root.style.colorScheme = resolved
}

// Same logic as applyTheme, as text. It runs before the first paint, so
// the page never flashes in the wrong theme.
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark"||(t!=="light"&&matchMedia("${DARK_QUERY}").matches);var r=d?"dark":"light";var e=document.documentElement;e.setAttribute("${THEME_ATTRIBUTE}",r);e.style.colorScheme=r}catch(e){}})()`

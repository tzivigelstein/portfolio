import '@testing-library/jest-dom'

// jsdom has no matchMedia. Tests that care about the system theme replace it.
if (typeof window !== 'undefined') {
  window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  })
}

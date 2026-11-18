// Project copy can be a plain string or a { en, es } object keyed by locale.
export default function localize (value, lang) {
  if (value === null || typeof value !== 'object') return value
  return value[lang] ?? value.en
}

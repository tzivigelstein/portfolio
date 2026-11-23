import type { Locale } from '@/lib/i18n'

export const EMAIL = 'gelsteintzivisantiago@gmail.com'

// Where each résumé lives under public/, by language. While this is empty
// the site shows no résumé links. To bring them back, add the PDFs to
// public/resume/ and list them here, for example
// { en: '/resume/Tzivi_Gelstein_CV_EN.pdf', es: '/resume/Tzivi_Gelstein_CV_ES.pdf' }
export const RESUMES: Partial<Record<Locale, string>> = {}

import { locales } from '@/lib/i18n'
import { renderSocialImage, SOCIAL_IMAGE_SIZE } from '@/lib/socialImage'

export const alt = 'Tzivi Gelstein'
export const size = SOCIAL_IMAGE_SIZE
export const contentType = 'image/png'

// One image per language, drawn at build time.
export function generateStaticParams () {
  return locales.map((lang) => ({ lang }))
}

export default async function Image ({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return renderSocialImage(lang)
}

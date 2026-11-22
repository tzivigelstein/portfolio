import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { defaultLocale, getDictionary, hasLocale } from './i18n'

export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 }

// Same values as the light theme in app/globals.css.
const COLORS = { background: '#f7f5f1', text: '#1c1b1a', muted: '#625f59', accent: '#1456c4' }

// Literal paths, so the bundler knows exactly which files are read.
const FONTS = join(process.cwd(), 'node_modules/@fontsource/inter/files')
const loadMedium = () => readFile(join(FONTS, 'inter-latin-500-normal.woff'))
const loadBold = () => readFile(join(FONTS, 'inter-latin-700-normal.woff'))
const loadPhoto = () => readFile(join(process.cwd(), 'assets/og-photo.jpg'))

// The card shown when the site is shared: it is drawn from the same texts
// as the header, so it never goes out of date.
export async function renderSocialImage (lang: string): Promise<ImageResponse> {
  const { common } = getDictionary(hasLocale(lang) ? lang : defaultLocale)
  const [medium, bold, photo] = await Promise.all([loadMedium(), loadBold(), loadPhoto()])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 96px',
          backgroundColor: COLORS.background,
          color: COLORS.text,
          fontFamily: 'Inter'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 640 }}>
          <div style={{ fontSize: 34, fontWeight: 500, color: COLORS.muted }}>
            {common.headline}
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.045em'
            }}
          >
            {common.subHeadline}
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.4, color: COLORS.muted }}>
            {common.socialImageTagline}
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginTop: 34,
              padding: '12px 26px',
              borderRadius: 999,
              backgroundColor: COLORS.accent,
              color: '#fff',
              fontSize: 24,
              fontWeight: 700
            }}
          >
            tzivi.com
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo.toString('base64')}`}
          width={300}
          height={375}
          style={{ borderRadius: 28 }}
        />
      </div>
    ),
    {
      ...SOCIAL_IMAGE_SIZE,
      fonts: [
        { name: 'Inter', data: medium, weight: 500, style: 'normal' },
        { name: 'Inter', data: bold, weight: 700, style: 'normal' }
      ]
    }
  )
}

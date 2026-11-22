import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { defaultLocale, hasLocale, locales } from '@/lib/i18n'
import { seasonScript } from '@/lib/season'
import { themeScript } from '@/lib/theme'
import { SITE_URL } from '@/lib/site'
import '../globals.css'

// Served from this site: no request to Google and no text shift on load.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

// Base for every relative URL in the metadata, such as the social image.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL)
}

export const viewport: Viewport = {
  themeColor: '#fff'
}

export function generateStaticParams () {
  return locales.map((lang) => ({ lang }))
}

interface RootLayoutProps {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export default async function RootLayout ({ children, params }: RootLayoutProps) {
  const { lang } = await params
  // An unknown language only gets here on its way to the 404 page.
  const locale = hasLocale(lang) ? lang : defaultLocale

  return (
    // The theme and the season are set on <html> by inline scripts before
    // React takes over, hence suppressHydrationWarning.
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: seasonScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

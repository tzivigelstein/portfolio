import type { ReactNode } from 'react'
import type { Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Providers from '@/components/Providers'
import { defaultLocale, hasLocale, locales } from '@/lib/i18n'
import { seasonScript } from '@/lib/season'
import '../globals.css'

// Served from this site: no request to Google and no text shift on load.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
})

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
        <script dangerouslySetInnerHTML={{ __html: seasonScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

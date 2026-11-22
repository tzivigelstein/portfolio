import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Container from '@/components/Container'
import Header from '@/components/Header'
import SectionsContainer from '@/components/SectionsContainer'
import Footer from '@/components/Footer'
import ChristmasSeason from '@/components/ChristmasSeason'
import { getDictionary, hasLocale, localePath, type Locale } from '@/lib/i18n'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const SOCIAL_COVER = { url: '/images/SocialCover.png', width: 1200, height: 630 }

const OPEN_GRAPH_LOCALES: Record<Locale, string> = { en: 'en_US', es: 'es_AR' }

interface PageProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata ({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}

  const { metaTitle: title, metaDescription: description } = getDictionary(lang).common
  // Absolute, so the root keeps its trailing slash like in the sitemap.
  const absolute = (path: string): string => new URL(path, SITE_URL).toString()
  const url = absolute(localePath(lang))

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absolute(localePath('en')),
        es: absolute(localePath('es')),
        'x-default': absolute(localePath('en'))
      }
    },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: OPEN_GRAPH_LOCALES[lang],
      title,
      description,
      images: [SOCIAL_COVER]
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tzivigelstein',
      title,
      description,
      images: [SOCIAL_COVER.url]
    },
    icons: { icon: '/favicon.png', apple: '/favicon.png' },
    manifest: '/manifest.json'
  }
}

export default async function Home ({ params }: PageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dictionary = getDictionary(lang)
  const { common } = dictionary

  // Tells search engines who this site is about.
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: new URL(localePath(lang), SITE_URL).toString(),
    image: `${SITE_URL}/images/HeaderImage.webp`,
    jobTitle: common.metaJobTitle,
    description: common.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Buenos Aires',
      addressCountry: 'AR'
    },
    sameAs: [
      'https://github.com/tzivigelstein',
      'https://www.linkedin.com/in/tzivigelstein/',
      'https://x.com/tzivigelstein'
    ]
  }

  return (
    <Container>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c')
        }}
      />
      <a href='#main' className='skipLink'>
        {common.skipToContent}
      </a>
      <Header dictionary={common} lang={lang} />
      <SectionsContainer dictionary={dictionary} lang={lang} />
      <Footer dictionary={common} />
      <ChristmasSeason dictionary={dictionary.christmas} />
    </Container>
  )
}

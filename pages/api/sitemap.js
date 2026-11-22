const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

const SITE_URL = 'https://www.tzivi.com'

// Both language versions, each pointing at the other.
const alternates = [
  { lang: 'en', url: `${SITE_URL}/` },
  { lang: 'es', url: `${SITE_URL}/es` },
  { lang: 'x-default', url: `${SITE_URL}/` }
]

export default async (req, res) => {
  const links = [
    { url: '/', changefreq: 'weekly', priority: 1, links: alternates },
    { url: '/es', changefreq: 'weekly', priority: 1, links: alternates }
  ]

  const stream = new SitemapStream({ hostname: SITE_URL })

  res.writeHead(200, { 'Content-Type': 'application/xml' })

  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString())

  res.end(xmlString)
}

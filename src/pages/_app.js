import Head from 'next/head'
import '../index.css'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#6ec2f7" />
      //Primary metatags
      <title>Tzivi | Portfolio</title>
      <meta name="title" content="Tzivi | Portfolio" />
      <meta
        name="description"
        content="I'm Tzivi and this is my portfolio 👨‍💻. Come on in and find out more about me 🤗."
      />
      //Open Graph / Facebook
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tzivi.site/" />
      <meta property="og:title" content="Tzivi | Portfolio" />
      <meta
        property="og:description"
        content="I'm Tzivi and this is my portfolio 👨‍💻. Come on in and find out more about me 🤗."
      />
      <meta property="og:image" content="./images/SocialCover.webp" />
      //Twitter
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.tzivi.site/" />
      <meta property="twitter:title" content="Tzivi | Portfolio" />
      <meta property="twitter:creator" content="@tzivigelstein" />
      <meta
        property="twitter:description"
        content="I'm Tzivi and this is my portfolio 👨‍💻. Come on in and find out more about me 🤗."
      />
      <meta property="twitter:image" content="/images/SocialCover.webp" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp

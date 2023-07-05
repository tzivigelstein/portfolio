import Head from "next/head";
import "./styles/index.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />

      <link rel="alternate" hrefLang="es" href="https://www.tzivi.com/es" />
      <link rel="alternate" hrefLang="en" href="https://www.tzivi.com/" />

      <title>Tzivi Gelstein | React developer</title>
      <meta name="title" content="Tzivi | Portfolio" />
      <meta
        name="description"
        content="As a React/Node developer and Platzi student, I'm dedicated to delivering frontend technologies that prioritize performant user experiences. With critical thinking and a focus on quality assurance, I collaborate with teams to develop high-performing API features."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.tzivi.com/" />
      <meta property="og:title" content="Tzivi | Portfolio" />
      <meta
        property="og:description"
        content="As a React/Node developer and Platzi student, I'm dedicated to delivering frontend technologies that prioritize performant user experiences. With critical thinking and a focus on quality assurance, I collaborate with teams to develop high-performing API features."
      />
      <meta
        property="og:image"
        content="https://www.tzivi.com/images/SocialCover.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.tzivi.com/" />
      <meta name="twitter:title" content="Tzivi | Portfolio" />
      <meta name="twitter:creator" content="@tzivigelstein" />
      <meta
        name="twitter:description"
        content="As a React/Node developer and Platzi student, I'm dedicated to delivering frontend technologies that prioritize performant user experiences. With critical thinking and a focus on quality assurance, I collaborate with teams to develop high-performing API features."
      />
      <meta
        name="twitter:image"
        content="https://www.tzivi.com/images/SocialCover.png"
      />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  </>
);

export default MyApp;

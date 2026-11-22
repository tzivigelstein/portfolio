import Head from "next/head";
import "./styles/index.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import useTranslation from "next-translate/useTranslation";

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  const description = t("common:metaDescription");

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />

        <link rel="alternate" hrefLang="es" href="https://www.tzivi.com/es" />
        <link rel="alternate" hrefLang="en" href="https://www.tzivi.com/" />

        <title>{t("common:metaTitle")}</title>
        <meta name="title" content="Tzivi | Portfolio" />
        <meta
          name="description"
          content={description}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tzivi.com/" />
        <meta property="og:title" content="Tzivi | Portfolio" />
        <meta
          property="og:description"
          content={description}
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
          content={description}
        />
        <meta
          name="twitter:image"
          content="https://www.tzivi.com/images/SocialCover.png"
        />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

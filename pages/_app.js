import Head from "next/head";
import "./styles/index.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const SITE_URL = "https://www.tzivi.com";

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation();
  const { locale, pathname } = useRouter();

  const isNotFound = pathname === "/404";
  const title = t(isNotFound ? "common:notFoundMetaTitle" : "common:metaTitle");
  const description = t("common:metaDescription");
  const url = locale === "es" ? `${SITE_URL}/es` : `${SITE_URL}/`;

  // Tells search engines who this site is about.
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tzivi Gelstein",
    url,
    image: `${SITE_URL}/images/HeaderImage.webp`,
    jobTitle: t("common:metaJobTitle"),
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: [
      "https://github.com/tzivigelstein",
      "https://www.linkedin.com/in/tzivigelstein/",
      "https://x.com/tzivigelstein",
    ],
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff" />

        <title>{title}</title>
        <meta name="title" content={title} />
        <meta
          name="description"
          content={description}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tzivi Gelstein" />
        <meta property="og:locale" content={locale === "es" ? "es_AR" : "en_US"} />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content="https://www.tzivi.com/images/SocialCover.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@tzivigelstein" />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content="https://www.tzivi.com/images/SocialCover.png"
        />
        {isNotFound ? (
          <meta name="robots" content="noindex" />
        ) : (
          <>
            <link rel="canonical" href={url} />
            <link rel="alternate" hrefLang="en" href={`${SITE_URL}/`} />
            <link rel="alternate" hrefLang="es" href={`${SITE_URL}/es`} />
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
            <meta property="og:url" content={url} />
            <meta name="twitter:url" content={url} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
          </>
        )}
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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

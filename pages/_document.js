import { Html, Head, Main, NextScript } from "next/document";

// Local override to preview the season at any date. It only works with
// `yarn dev`: set NEXT_PUBLIC_FORCE_CHRISTMAS=true in .env.local.
const forceChristmasSeason =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_FORCE_CHRISTMAS === "true";

// Runs before the first paint, so the seasonal colors never flash in.
// From December 1st to January 8th, in the visitor's local time.
const seasonScript = `(function(){try{var d=new Date(),m=d.getMonth();if(${forceChristmasSeason}||m===11||(m===0&&d.getDate()<=8)){document.documentElement.setAttribute("data-season","christmas")}}catch(e){}})()`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: seasonScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

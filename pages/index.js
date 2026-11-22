import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Container from "@components/Container";
import Header from "@components/Header";
import Sections from "@components/SectionsContainer";
import Footer from "@components/Footer";
import { getFileBySlug } from "lib/mdx";

// Loaded on demand, only during the season (snowfall and music player).
const ChristmasSeason = dynamic(() => import("@components/ChristmasSeason"), {
  ssr: false,
});

export default function Home({ post }) {
  const [isChristmasSeason, setIsChristmasSeason] = useState(false);

  useEffect(() => {
    // The season is decided in pages/_document.js, before the first paint.
    setIsChristmasSeason(
      document.documentElement.getAttribute("data-season") === "christmas"
    );
  }, []);

  return (
    <Container>
      <Header />
      <Sections post={post} />
      <Footer />
      {isChristmasSeason && <ChristmasSeason />}
    </Container>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  const post = await getFileBySlug({
    slug: `my-story-${locale === "es" ? "es" : "en"}`,
  });

  return { props: { post } };
}

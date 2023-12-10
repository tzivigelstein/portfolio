import { useEffect, useState } from "react";
import Snowfall from "@components/Snowfall";
import Container from "@components/Container";
import Header from "@components/Header";
import Sections from "@components/SectionsContainer";
import Footer from "@components/Footer";
import { getFileBySlug } from "lib/mdx";
import MusicPlayer from "@components/MusicPlayer";
import songs from "@data/songs";

export default function Home({ post }) {
  const [stopSnowfall, setStopSnowfall] = useState(false);
  const [isChristmasSeason, setIsChristmasSeason] = useState(false);

  useEffect(() => {
    const currentDate = new Date();

    const isWithinDateRange =
      (currentDate.getMonth() === 11 && currentDate.getDate() >= 1) ||
      (currentDate.getMonth() === 0 && currentDate.getDate() <= 8);


    setIsChristmasSeason(isWithinDateRange);
  }, []);

  return (
    <Container>
      <Header />
      <Sections post={post} />
      <Footer />
      {isChristmasSeason && (
        <>
          <MusicPlayer
            songs={songs}
            stopSnowfall={stopSnowfall}
            setStopSnowfall={setStopSnowfall}
          />
          <Snowfall stopSnowfall={stopSnowfall} />
        </>
      )}
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

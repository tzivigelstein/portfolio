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
    // Get the current date
    const currentDate = new Date();

    // Check if the current date is within the specified range (December 1st to January 8th)
    const isWithinDateRange =
      currentDate.getMonth() === 11 && // 11 corresponds to December (months are 0-indexed)
      currentDate.getDate() >= 1 &&
      currentDate.getDate() <= 8;

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

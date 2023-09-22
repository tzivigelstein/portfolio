import { useEffect, useState } from "react";

const useMediaQueries = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleMediaChange = (mediaQueryList) => {
      if (mediaQueryList.matches) {
        setIsMobile(mediaQueryList.media === "(max-width: 480px)");
        setIsTablet(
          mediaQueryList.media === "(min-width: 481px) and (max-width: 768px)"
        );
        setIsDesktop(mediaQueryList.media === "(min-width: 769px)");
      }
    };

    const mobileMediaQueryList = window.matchMedia("(max-width: 480px)");
    const tabletMediaQueryList = window.matchMedia(
      "(min-width: 481px) and (max-width: 768px)"
    );
    const desktopMediaQueryList = window.matchMedia("(min-width: 769px)");

    mobileMediaQueryList.addListener(handleMediaChange);
    tabletMediaQueryList.addListener(handleMediaChange);
    desktopMediaQueryList.addListener(handleMediaChange);

    // Initial check
    handleMediaChange(mobileMediaQueryList);
    handleMediaChange(tabletMediaQueryList);
    handleMediaChange(desktopMediaQueryList);

    // Cleanup listeners
    return () => {
      mobileMediaQueryList.removeListener(handleMediaChange);
      tabletMediaQueryList.removeListener(handleMediaChange);
      desktopMediaQueryList.removeListener(handleMediaChange);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useMediaQueries;

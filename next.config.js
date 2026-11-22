const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  // Lets a second build run next to `yarn dev` without sharing its folder:
  // NEXT_DIST_DIR=.next-verify yarn build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    domains: [
      "pbs.twimg.com",
      "freddyvega.com",
      "avatars.githubusercontent.com",
      "yt3.ggpht.com",
      "img-c.udemycdn.com",
      "substackcdn.com"
    ],
  },
});

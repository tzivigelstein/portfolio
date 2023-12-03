const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  images: {
    domains: [
      "pbs.twimg.com",
      "freddyvega.com",
      "avatars.githubusercontent.com",
      "yt3.ggpht.com",
      "img-c.udemycdn.com",
    ],
  },
});

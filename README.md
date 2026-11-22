# tzivi.com

My personal site. It says who I am, what I've built and where I've worked, in English and Spanish.

**Live at [tzivi.com](https://www.tzivi.com)**

I started this repo in 2021 as a place to practice. It has been rewritten a few times since, and today it is a small, fast, single page that I actually keep up to date.

## What's in it

- **One page, two languages.** English at `/`, Spanish at `/es`, with a switcher at the top.
- **Light and dark themes** that follow the system setting or your choice.
- **Projects, experience, skills and a short story** about how I got into this.
- **Christmas mode.** From December 1st to January 8th the site gets a seasonal palette, snowfall and a small music player with public-domain lo-fi. The music never starts by itself and the snow can be switched off.
- **Accessible and indexable.** Skip link, keyboard-friendly cards, per-language metadata, structured data and a sitemap for both languages.

## Stack

- [Next.js](https://nextjs.org/) 12 (pages router, statically generated) and React 17
- CSS Modules with a handful of design tokens in `pages/styles/index.css`
- [next-translate](https://github.com/aralroca/next-translate) for the two languages
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark
- MDX (through `next-mdx-remote`) for the story
- Jest and Testing Library for tests
- Deployed on [Vercel](https://vercel.com/) from the `main` branch

## Getting started

You need Node 24 and [Yarn](https://classic.yarnpkg.com/).

```bash
yarn install
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Starts the development server with hot reload |
| `yarn build` | Builds the site for production |
| `yarn start` | Serves the production build |
| `yarn test` | Runs the tests once |
| `yarn test-watch` | Runs the tests in watch mode |
| `yarn test-coverage` | Runs the tests with a coverage report |
| `yarn lint` | Checks code style with [standard](https://standardjs.com/) |
| `yarn lint-fix` | Fixes the style issues that can be fixed automatically |

## Where things live

Most changes to the site are content changes, and content is kept apart from the components.

| I want to change… | Edit |
| --- | --- |
| Headline, intro, section titles, about text | `locales/en/common.json` and `locales/es/common.json` |
| Projects (text, links, image) | `data/projects.js` |
| Experience and education | `data/timeline/events.js` for dates and links, `locales/*/timeline.json` for text |
| Skills | `data/technologies.js` |
| My story | `posts/my-story-en.mdx` and `posts/my-story-es.mdx` |
| Résumés | `public/resume/` (keep the file names) |
| Contact email | `data/contact.js` |
| Page title, description, social tags | `locales/*/common.json` (`meta…` keys) and `pages/_app.js` |
| Colors, light, dark and Christmas | `pages/styles/index.css` |
| Christmas playlist | `data/songs.js` |

Both languages should always say the same thing, so every text change goes in `en` and `es`.

```
components/   One folder per component, with its CSS module next to it
data/         Projects, timeline, skills, songs
lib/          Small helpers (MDX loading, localized values)
locales/      Translations, one folder per language
pages/        The page itself, the 404, the sitemap endpoint and global styles
posts/        The story, in MDX
public/       Images, résumés, icons
test/         Test helpers and tests that do not belong to one component
```

## Christmas mode

The season is decided before the first paint, in `pages/_document.js`, so the colors never flash in. The snowfall and the music player are loaded on demand only while the season is on, which keeps them out of the bundle the rest of the year.

To preview it at any date, create a `.env.local` file with

```
NEXT_PUBLIC_FORCE_CHRISTMAS=true
```

and restart `yarn dev`. The override is ignored in production builds.

## Building without disturbing the dev server

`yarn build` writes to the same `.next` folder `yarn dev` uses, which breaks a running dev server. To check a production build while developing, send it to another folder.

```bash
NEXT_DIST_DIR=.next-verify yarn build
NEXT_DIST_DIR=.next-verify yarn start -p 3001
```

## Credits

- Christmas music by [HoliznaCC0](https://freemusicarchive.org/music/holiznacc0/) on Free Music Archive, released under CC0.
- Typeface: [Inter](https://rsms.me/inter/).

## License

MIT

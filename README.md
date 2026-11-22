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

- [Next.js](https://nextjs.org/) 16 with the App Router and React 19. Almost everything is a Server Component; only the theme switcher and the Christmas extras run in the browser
- TypeScript in strict mode, including the translations, so a key missing in one language does not compile
- CSS Modules with a handful of design tokens in `app/globals.css`
- Light and dark themes with a small script of its own (`lib/theme.ts`), no library
- MDX (through `next-mdx-remote`) for the story
- Jest and Testing Library for tests, ESLint with the [Standard](https://github.com/neostandard/neostandard) style for linting
- GitHub Actions runs lint, types, tests and the build on every push
- Deployed on [Vercel](https://vercel.com/) from the `main` branch

## Getting started

You need Node 24. The project uses [Yarn](https://yarnpkg.com/) 4 through Corepack, which ships with Node; enable it once with

```bash
corepack enable
```

Then

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
| `yarn typecheck` | Checks the types of the whole project |
| `yarn lint` | Checks code style |
| `yarn lint-fix` | Fixes the style issues that can be fixed automatically |

## Where things live

Most changes to the site are content changes, and content is kept apart from the components.

| I want to change… | Edit |
| --- | --- |
| Headline, intro, section titles, about text | `locales/en/common.json` and `locales/es/common.json` |
| Projects (text, links, image) | `data/projects.ts` |
| Experience and education | `data/timeline/events.ts` for dates and links, `locales/*/timeline.json` for text |
| Skills | `data/technologies.ts` |
| My story | `posts/my-story-en.mdx` and `posts/my-story-es.mdx` |
| Résumés | `public/resume/` (keep the file names) |
| Contact email | `data/contact.ts` |
| Page title, description, social tags | `locales/*/common.json` (`meta…` keys) and `app/[lang]/page.tsx` |
| The image shown when the site is shared | `lib/socialImage.tsx` (drawn from the header texts, one per language) |
| Colors, light, dark and Christmas | `app/globals.css` |
| Christmas playlist | `data/songs.ts` |

Both languages should always say the same thing, so every text change goes in `en` and `es`.

```
app/          Routes: the page for each language, the 404, sitemap and robots, global styles
components/   One folder per component, with its CSS module and its test next to it
data/         Projects, timeline, skills, songs
lib/          Small helpers (languages, localized values, the season, the story)
locales/      Translations, one folder per language
posts/        The story, in MDX
public/       Images, résumés, icons
test/         Tests that do not belong to one component
```

English is served at `/` and Spanish at `/es`. Internally every language lives under `app/[lang]`, and `next.config.ts` maps `/` to English.

## Christmas mode

The season is decided before the first paint, by a small inline script (`lib/season.ts`), so the colors never flash in. The snowfall and the music player are loaded on demand only while the season is on, which keeps them out of the bundle the rest of the year.

To preview it at any date, create a `.env.local` file with

```
NEXT_PUBLIC_FORCE_CHRISTMAS=true
```

and restart `yarn dev`. The override is ignored in production builds.

## Credits

- Christmas music by [HoliznaCC0](https://freemusicarchive.org/music/holiznacc0/) on Free Music Archive, released under CC0.
- Typeface: [Inter](https://rsms.me/inter/), served from the site itself.

## License

MIT

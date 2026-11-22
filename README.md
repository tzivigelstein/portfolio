# My personal portfolio

This project heads to be the place where you can watch and follow my work and learning through my career.

[Portfolio](https://www.tzivi.com)

## Available Scripts

This project uses [Yarn](https://classic.yarnpkg.com/). Install the dependencies with `yarn install`.

In the project directory, you can run:

### `yarn dev`

Runs `next dev` which starts Next.js in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Runs `next build` which builds the application for production usage.

### `yarn start`

Runs `next start` which starts a Next.js production server.

### `yarn lint`

Runs `standard 'root'` which logs all the files that have warnings or errors.

### `yarn lint-fix`

Runs `standard 'root' --fix` which fixes all the files that have warnings or errors.

## Christmas mode

The snowfall and the music player show up from December 1st to January 8th.
To preview them locally at any date, create a `.env.local` file with:

```
NEXT_PUBLIC_FORCE_CHRISTMAS=true
```

and restart `yarn dev`. The override is ignored in production builds.

## Technologies

- React
- Next - SSR
- CSS modules
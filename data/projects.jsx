const projects = [
  {
    id: 'Z3u',
    category: 'web',
    shortTitle: 'Overvoltz',
    title: 'Overvoltz: Build a PC that fits your needs.',
    subtitle: 'Productivity App',
    image: '/images/overvoltz.png',
    mobileImage:
      'https://www.csl-computer.com/en/media/catalog/product/cache/4/image_product_feed/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/s/csl_vitrum_schwarz-ww_ring_gk_7l_3000px_4.png',
    site: 'https://overvoltz.vercel.app/',
    color: 'white',
    theme: 'light',
    active: true,
    wip: true,
  },
  {
    id: 'Zsu',
    category: 'web',
    shortTitle: 'Wordle',
    title: 'Wordle: Guess the 5 letter word with 6 chances.',
    subtitle: 'Entertainment App',
    image: '/images/Wordle-mobile.jpg',
    mobileImage: '/images/Wordle-mobile.jpg',
    repository: 'https://github.com/tzivigelstein/wordle',
    site: 'https://thisisnotwordle.vercel.app/',
    color: '#6aaa64',
    theme: 'dark',
    active: true,
  },
  {
    id: 'lKu',
    category: 'web',
    title: 'Perfect Pick',
    subtitle: 'AI Media matcher',
    component: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingTop: '4.5rem',
          height: '100%',
          flexDirection: 'column',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <h5
          style={{
            fontSize: '2rem',
            margin: 0,
          }}
        >
          Perfect pick 😉
        </h5>
        <p>Enter a book or movie to get personalized recommendations!</p>
      </div>
    ),
    repository: 'https://github.com/tzivigelstein/perfect-pick',
    site: 'https://perfect-pick.vercel.app/',
    color: '#2dd4bf',
    theme: 'dark',
    active: false,
  },
  {
    id: '2Jp',
    category: 'web',
    title: 'Product Hunt',
    subtitle: 'Social App',
    image: '/images/PHuntFlyer.png',
    repository: 'https://github.com/tzivigelstein/Product-Hunt-Clone',
    site: 'https://producthunt-cl.vercel.app/',
    color: 'linear-gradient(90deg, #feaf04, #fa9814)',
    active: true,
  },
  {
    id: 'gCh',
    category: 'web',
    title: 'Twitter',
    subtitle: 'Social App',
    image: '/images/TwitterCloneFlyer.webp',
    repository: 'https://github.com/tzivigelstein/Twitter-Clone',
    site: 'https://twitter-cl.vercel.app/login',
    color: '#fff',
    active: true,
  },
  {
    id: 'Obi',
    category: 'web',
    title: 'Movies Finder',
    subtitle: 'Entertainment App',
    image: '/images/movies-finder.png',
    repository: 'https://github.com/tzivigelstein/movies-finder',
    site: 'https://movies-finder-alpha.vercel.app/',
    theme: 'dark',
    color: '#89b2f1',
    active: true,
  },
  {
    id: 'Oai',
    category: 'web',
    title: 'Minity',
    subtitle: 'Productivity App',
    image: '/images/Minity.webp',
    repository: 'https://github.com/tzivigelstein/minity',
    site: 'https://minity.vercel.app/',
    theme: 'dark',
    color: '#3f92d4',
    active: true,
  },
  {
    id: 'O1i',
    category: 'web',
    title: 'Adivina palabra',
    subtitle: 'Entertainment App',
    image: '/images/AdivinaPalabra.png',
    repository: 'https://github.com/tzivigelstein/guessword',
    site: 'https://adivina-palabra.vercel.app/',
    theme: 'dark',
    color: '#8ca0d7',
    active: true,
  },
  {
    id: '2NB',
    category: 'web',
    title: 'Binast',
    subtitle: 'Productivity App',
    image: '/images/BinastWeb.webp',
    repository: 'https://github.com/tzivigelstein/Binast',
    site: 'https://binast.vercel.app/',
    color: 'linear-gradient(90deg, #977EF1, #623CEA)',
    theme: 'dark',
    active: true,
  },
  {
    id: 'SGE',
    category: 'web',
    title: 'Tidify Web',
    subtitle: 'Food App',
    image: '/images/TidifyFlyerWeb.webp',
    repository: 'https://github.com/tzivigelstein/Tidify-Host',
    site: 'https://tidify-app.vercel.app/',
    color: '#ccff97',
    active: false,
  },
  {
    id: '0T9',
    category: 'web',
    title: 'Lyric it',
    subtitle: 'Entertainment App',
    image: '/images/LyricItFlyer.webp',
    repository: 'https://github.com/tzivigelstein/Lyric-it',
    site: 'https://lyric-it.netlify.app/',
    color: '#ef476f',
    theme: 'dark',
    active: false,
  },
  {
    id: 'jyO',
    category: 'app',
    title: 'Minity App',
    subtitle: 'Productivity App',
    image: '/images/MinityApp.webp',
    repository: 'https://github.com/tzivigelstein/Minity-app',
    site: 'https://tzivi.com/android/minity-app.apk/',
    color: 'linear-gradient(90deg, #005893, #0081bf)',
    theme: 'dark',
    active: false,
  },
  {
    id: 'lt4',
    category: 'app',
    title: 'Crypto',
    subtitle: 'Productivity App',
    image: '/images/CryptoFlyerApp.webp',
    jumboImage: '/images/CryptoFlyerAppJumbo.jpg',
    repository: 'https://github.com/tzivigelstein/Crypto-App',
    site: 'https://tzivi.com/android/crypto-app.apk/',
    apk: 'Crypto',
    color: '#8efdf3',
    active: false,
  },
  {
    id: 'lKc',
    category: 'app',
    title: 'Tidify App',
    subtitle: 'Food App',
    image: '/images/TidifyFlyerApp.webp',
    repository: 'https://github.com/tzivigelstein/Tidify-Client',
    site: 'https://tzivi.com/android/tidify-app.apk/',
    color: '#f2917e',
    theme: 'dark',
    active: false,
  },
]

export default projects

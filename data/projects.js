const projects = [
  {
    id: 'AcH',
    category: 'web',
    title: 'AC Hub',
    subtitle: { en: 'My own product', es: 'Producto propio' },
    description: {
      en: 'Platform for managing Assetto Corsa racing championships. Drivers upload car skins through a web portal or a Discord bot, the platform validates them automatically, and organizers publish straight to the game server. In production with 100+ registered drivers.',
      es: 'Plataforma para gestionar campeonatos de Assetto Corsa. Los pilotos suben sus skins desde un portal web o un bot de Discord, la plataforma las valida automáticamente y los organizadores publican directo al servidor del juego. En producción, con más de 100 pilotos registrados.',
    },
    image: '/images/ACHub.webp',
    imageAlt: {
      en: 'AC Hub landing page with usage numbers',
      es: 'Landing de AC Hub con sus números de uso',
    },
    // Landscape screenshot: shown full width under the text.
    imageFit: 'cover',
    // Private repository: no repository link on purpose.
    site: 'https://achub.pro/',
    color: 'linear-gradient(135deg, #09090b, #12305a)',
    theme: 'dark',
    active: true,
  },
  {
    id: 'Sc7',
    category: 'web',
    shortTitle: 'Scooch',
    title: {
      en: 'Scooch: Fit more on every sheet you print.',
      es: 'Scooch: Imprimí más en cada hoja.',
    },
    subtitle: { en: 'Productivity App', es: 'Productividad' },
    description: {
      en: 'Web app that arranges images and PDF pages on paper at real size, using as few sheets as possible. Runs entirely in the browser. Built with Claude Code, React and TypeScript.',
      es: 'Aplicación web que acomoda imágenes y páginas de PDF en hojas a tamaño real, usando la menor cantidad de hojas posible. Corre por completo en el navegador. Hecha con Claude Code, React y TypeScript.',
    },
    image: '/images/Scooch.webp',
    mobileImage: '/images/Scooch.webp',
    repository: 'https://github.com/tzivigelstein/scooch',
    site: 'https://scooch-nine.vercel.app/',
    color: '#eef1f6',
    theme: 'light',
    active: true,
  },
]

export default projects

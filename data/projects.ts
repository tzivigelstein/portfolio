import type { LocalizedText } from '@/lib/localize'

export interface ProjectImage {
  src: string
  width: number
  height: number
  alt?: LocalizedText
  // Landscape screenshots are shown full width under the text.
  fit?: 'cover'
}

export interface Project {
  id: string
  category: 'web' | 'app'
  title: LocalizedText
  shortTitle?: LocalizedText
  subtitle: LocalizedText
  description?: LocalizedText
  image?: ProjectImage
  // Left out on purpose when the repository is private.
  repository?: string
  site: string
  active: boolean
  wip?: boolean
}

const projects: Project[] = [
  {
    id: 'AcH',
    category: 'web',
    title: 'AC Hub',
    subtitle: { en: 'My own product', es: 'Producto propio' },
    description: {
      en: 'Platform for managing Assetto Corsa racing championships. Drivers upload car skins through a web portal or a Discord bot, the platform validates them automatically, and organizers publish straight to the game server. In production with 100+ registered drivers.',
      es: 'Plataforma para gestionar campeonatos de Assetto Corsa. Los pilotos suben sus skins desde un portal web o un bot de Discord, la plataforma las valida automáticamente y los organizadores publican directo al servidor del juego. En producción, con más de 100 pilotos registrados.',
    },
    image: {
      src: '/images/ACHub.webp',
      width: 1280,
      height: 700,
      alt: {
        en: 'AC Hub landing page with usage numbers',
        es: 'Landing de AC Hub con sus números de uso'
      },
      fit: 'cover'
    },
    site: 'https://achub.pro/',
    active: true
  },
  {
    id: 'Sc7',
    category: 'web',
    shortTitle: 'Scooch',
    title: {
      en: 'Scooch: Fit more on every sheet you print.',
      es: 'Scooch: Imprimí más en cada hoja.'
    },
    subtitle: { en: 'Productivity App', es: 'Productividad' },
    description: {
      en: 'Web app that arranges images and PDF pages on paper at real size, using as few sheets as possible. Runs entirely in the browser. Built with Claude Code, React and TypeScript.',
      es: 'Aplicación web que acomoda imágenes y páginas de PDF en hojas a tamaño real, usando la menor cantidad de hojas posible. Corre por completo en el navegador. Hecha con Claude Code, React y TypeScript.',
    },
    image: { src: '/images/Scooch.webp', width: 700, height: 980 },
    repository: 'https://github.com/tzivigelstein/scooch',
    site: 'https://scooch-nine.vercel.app/',
    active: true
  }
]

export default projects

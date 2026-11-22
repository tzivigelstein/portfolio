import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const ChevronIcon = (props: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    width='24'
    height='24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <polyline points='9 18 15 12 9 6' />
  </svg>
)

export const ExternalLink = (props: IconProps) => (
  <svg
    viewBox='0 0 24 24'
    width='24'
    height='24'
    stroke='currentColor'
    strokeWidth='2'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
    <polyline points='15 3 21 3 21 9'></polyline>
    <line x1='10' y1='14' x2='21' y2='3'></line>
  </svg>
)

export const GithubIcon = (props: IconProps) => (
  <svg width={24} height={24} fill='#eee' viewBox='0 0 24 24' {...props}>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg width={24} height={24} fill='#eee' viewBox='0 0 24 24' {...props}>
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
)

export const XIcon = (props: IconProps) => (
  <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
    <g>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
    </g>
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <rect x='3' y='5' width='18' height='14' rx='2.5' />
    <path d='m4 7.5 8 5.5 8-5.5' />
  </svg>
)

export const PlayIcon = (props: IconProps) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M16.1378 10.5689L9.60498 7.30249C8.40816 6.70408 7 7.57437 7 8.91246V15.0875C7 16.4256 8.40816 17.2959 9.60498 16.6975L16.1378 13.4311C17.3171 12.8414 17.3171 11.1586 16.1378 10.5689Z'
      fill='#222222'
    />
  </svg>
)

export const PauseIcon = (props: IconProps) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <rect x='6' y='5' width='4' height='14' rx='1' fill='#222222' />
    <rect x='14' y='5' width='4' height='14' rx='1' fill='#222222' />
  </svg>
)

export const SkipNextIcon = (props: IconProps) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M5 7.2v9.6c0 1.2 1.3 1.9 2.3 1.3l7.2-4.8c.9-.6.9-1.9 0-2.5L7.3 5.9C6.3 5.3 5 6 5 7.2Z'
      fill='currentColor'
    />
    <rect x='17' y='5.5' width='2.5' height='13' rx='1.25' fill='currentColor' />
  </svg>
)

export const SnowflakeIcon = (props: IconProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25l-16.4 9.5' />
    <path d='M9.5 4.5 12 6.6l2.5-2.1M9.5 19.5l2.5-2.1 2.5 2.1M4 10.9l3.1-1.1-.6-3.2M20 13.1l-3.1 1.1.6 3.2M4 13.1l3.1 1.1-.6 3.2M20 10.9l-3.1-1.1.6-3.2' />
  </svg>
)

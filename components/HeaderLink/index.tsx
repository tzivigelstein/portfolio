import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import styles from './index.module.css'

interface HeaderLinkProps {
  text: string
  link: string
  // With an icon the link is a round button that shows only the icon;
  // its text becomes the accessible name and the tooltip.
  icon?: ReactNode
  primary?: boolean
  newTab?: boolean
}

export default function HeaderLink ({
  text,
  link,
  icon,
  primary = false,
  newTab = true
}: HeaderLinkProps) {
  const className = [
    styles.headerLink,
    primary ? styles.primary : '',
    icon ? styles.iconOnly : ''
  ].join(' ')

  return (
    <a
      className={className}
      href={link}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(icon ? { 'aria-label': text, title: text } : {})}
    >
      {icon ?? (
        <>
          {text}
          <ChevronRight aria-hidden='true' />
        </>
      )}
    </a>
  )
}

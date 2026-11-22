import styles from './index.module.css'
import getTimeline from '@/data/timeline/timeline'
import Section from '@/components/Section'
import { ExternalLink } from 'lucide-react'
import type { Dictionary, Locale } from '@/lib/i18n'

interface ExperienceProps {
  dictionary: Dictionary
  lang: Locale
}

// Work, certifications and education as a plain list: dates on the side,
// then the role and what was done.
export default function Experience ({ dictionary, lang }: ExperienceProps) {
  const entries = getTimeline(dictionary.timeline, lang)

  return (
    <Section title={dictionary.common.presentationSectionTitleTimeline}>
      <ol className={styles.list}>
        {entries.map(({ id, title, lines, date, link, linkText }) => (
          <li key={id} className={styles.item}>
            <p className={styles.date}>{date}</p>
            <div>
              <h3 className={styles.title}>{title}</h3>
              {lines.length === 1
                ? (
                    <p className={styles.text}>{lines[0]}</p>
                  )
                : (
                    <ul className={styles.bullets}>
                      {lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
              {link && (
                <a
                  className={styles.link}
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {linkText ?? link}
                  <ExternalLink size={14} aria-hidden='true' />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

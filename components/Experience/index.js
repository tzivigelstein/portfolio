import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import TimelineBuilder from '@data/timeline/timeline'
import Section from '@components/Section'
import { ExternalLink } from '@components/Icons'

// Work and certifications as a plain list: dates on the side, then the
// role and what was done.
export default function Experience () {
  const { t, lang } = useTranslation(['common', 'timeline'])
  const { events } = new TimelineBuilder(t, lang)

  return (
    <Section title={t('common:presentationSectionTitleTimeline')}>
      <ol className={styles.list}>
        {events.map(({ id, title, description, date, link, linkText }) => {
          const lines = description.props.children
            .split('\n')
            .map((line) => line.trim())
            .filter(Boolean)

          return (
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
                    <ExternalLink width={14} aria-hidden='true' />
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from './index.module.css'
import Section from '@/components/Section'
import { ParagraphText } from '@/components/Text'
import { getStorySource } from '@/lib/story'
import type { Locale } from '@/lib/i18n'

interface StoryProps {
  title: string
  lang: Locale
}

export default async function Story ({ title, lang }: StoryProps) {
  const source = await getStorySource(lang)

  return (
    <Section title={title}>
      <div className={styles.textContainer}>
        <MDXRemote
          source={source}
          options={{ parseFrontmatter: true }}
          components={{ p: ParagraphText }}
        />
      </div>
    </Section>
  )
}

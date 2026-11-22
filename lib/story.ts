import fs from 'node:fs/promises'
import path from 'node:path'
import type { Locale } from './i18n'

// The story is written in MDX, one file per language.
export const getStorySource = (lang: Locale): Promise<string> =>
  fs.readFile(path.join(process.cwd(), 'posts', `my-story-${lang}.mdx`), 'utf8')

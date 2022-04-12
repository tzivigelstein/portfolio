import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export default function getFiles () {
  return fs.readdirSync(path.join(root, 'posts'))
}

export async function getFileBySlug ({ slug }) {
  const mdxSource = fs.readFileSync(path.join(root, 'posts', `${slug}.mdx`), 'utf8')

  const { data, content } = await matter(mdxSource)

  const source = await serialize(content, {})

  return {
    source,
    frontMatter: {
      ...data,
      slug
    }
  }
}

export async function getFilesMetadata () {
  const files = getFiles()

  return files.reduce((posts, slug) => {
    const mdxSource = fs.readFileSync(path.join(root, 'posts', slug), 'utf8')
    const { data } = matter(mdxSource)

    return [{ ...data, slug: slug.replace('.mdx', '') }, ...posts]
  }, [])
}

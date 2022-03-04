import styles from './index.module.css'
import { H3 } from '@components/Heading'
import useTranslation from 'next-translate/useTranslation'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/MDXComponents'

export default function Story({ post }) {
  const { t } = useTranslation()

  const { source } = post

  return (
    <div className={styles.storyContainer}>
      <H3>{t('common:storyTitle')}</H3>
      <div className={styles.textContainer}>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </div>
  )
}

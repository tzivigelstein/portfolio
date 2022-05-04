import { ChevronIcon } from '@components/Icons'
import { ParagraphText, TextEmoji } from '@components/Text'
import styles from './index.module.css'

export default function ActionDeclaration ({ action }) {
  const { title, text, emoji } = action
  return (
    <li className={styles.listItem}>
      <ChevronIcon />
      <ParagraphText>
        <span className={styles.bold}>{title}</span>
        {text}
        <TextEmoji>{emoji}</TextEmoji>
      </ParagraphText>
    </li>
  )
}

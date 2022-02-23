import styles from './index.module.css'
import { H3 } from '@components/Heading'
import { ParagraphText, TextEmoji, TextItalic, TextLink, TextListItem } from '@components/Text'
import useTranslation from 'next-translate/useTranslation'

export default function Story () {
  const { t } = useTranslation()

  return (
    <div className={styles.storyContainer}>
      <H3>{t('common:storyTitle')}</H3>
      <div className={styles.textContainer}>
        <ParagraphText>
          {t('common:storyParagraph1Part1')}{' '}
          <TextLink href='https://goo.gl/maps/mG91tRZRup2QB25Z6'>Béer Sheva, Israel</TextLink>
          {t('common:storyParagraph1Part2')}
        </ParagraphText>
        <ParagraphText>
          {t('common:storyParagraph2Part1')} <TextEmoji>😅</TextEmoji>
          {t('common:storyParagraph2Part2')}
        </ParagraphText>
        <ParagraphText>
          {t('common:storyParagraph3Part1')} <TextItalic>{t('common:storyParagraph3Part2')}</TextItalic>{' '}
          <TextItalic>{t('common:storyParagraph3Part3')}</TextItalic>{' '}
          <TextItalic>{t('common:storyParagraph3Part4')}</TextItalic> {t('common:storyParagraph3Part5')}
        </ParagraphText>
        <ParagraphText>{t('common:storyParagraph4Part1')}</ParagraphText>
        <ParagraphText>{t('common:storyParagraph5Part1')}</ParagraphText>
        <ParagraphText>{t('common:storyParagraph6Part1')}</ParagraphText>
        <ParagraphText>
          {t('common:storyParagraph7Part1')} <TextLink href='https://www.arduino.cc'>Arduino</TextLink>
          {t('common:storyParagraph7Part2')}
        </ParagraphText>
        <ParagraphText>{t('common:storyParagraph8Part1')}</ParagraphText>
        <ul className={styles.list}>
          <li>
            <TextListItem>{t('common:storyListItem1')}</TextListItem>
          </li>
          <li>
            <TextListItem>{t('common:storyListItem2')}</TextListItem>
          </li>
          <li>
            <TextListItem>{t('common:storyListItem3')}</TextListItem>
          </li>
        </ul>
      </div>
    </div>
  )
}

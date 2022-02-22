import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import { H2, H4 } from '@components/Heading'
import { ParagraphText, TextEmoji } from '@components/Text'
import { ChevronIcon } from '@components/Icons'

const PresentationSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <H2>{t('common:presentationSectionTitle')}</H2>
      <div className={styles.information}>
        <div>
          <ParagraphText>{t('common:presentationSectionText')}</ParagraphText>
          <H4>{t('common:presentationSectionListTitle')}</H4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                <span className={styles.bold}>{t('common:presentationSectionListItemTitle1')}</span>{' '}
                {t('common:presentationSectionListItem1')} <TextEmoji>📊</TextEmoji>
              </ParagraphText>
            </li>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                <span className={styles.bold}>{t('common:presentationSectionListItemTitle2')}</span>{' '}
                {t('common:presentationSectionListItem2')} <TextEmoji>💡</TextEmoji>
              </ParagraphText>
            </li>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                <span className={styles.bold}>{t('common:presentationSectionListItemTitle3')}</span>{' '}
                {t('common:presentationSectionListItem3')} <TextEmoji>🛠</TextEmoji>
              </ParagraphText>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PresentationSection

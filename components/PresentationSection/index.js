import styles from './index.module.css'
import useTranslation from 'next-translate/useTranslation'
import { H2, H4 } from '@components/Heading'
import { ParagraphText } from '@components/Text'
import ActionDeclaration from '@components/ActionDeclaration'

const PresentationSection = () => {
  const { t } = useTranslation()

  const ACTIONS_DECLARATIONS = [
    {
      id: 0,
      title: t('common:presentationSectionListItemTitle1'),
      text: t('common:presentationSectionListItem1'),
      emoji: '📊'
    },
    {
      id: 1,
      title: t('common:presentationSectionListItemTitle2'),
      text: t('common:presentationSectionListItem2'),
      emoji: '💡'
    },
    {
      id: 2,
      title: t('common:presentationSectionListItemTitle3'),
      text: t('common:presentationSectionListItem3'),
      emoji: '🛠'
    }
  ]

  return (
    <section className={styles.container}>
      <H2>{t('common:presentationSectionTitle')}</H2>
      <div className={styles.information}>
        <ParagraphText>{t('common:presentationSectionText')}</ParagraphText>
        <H4>{t('common:presentationSectionListTitle')}</H4>
        <ul className={styles.list}>
          {ACTIONS_DECLARATIONS.map(({ id, ...rest }) => (
            <ActionDeclaration key={id} action={rest} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PresentationSection

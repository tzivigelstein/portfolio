import styles from './presentation.module.css'
import useTranslation from 'next-translate/useTranslation'
import { ParagraphText } from '../Text'
import { H2, H4 } from '../Heading'
import { ChevronIcon } from '../UIICons'

const PresentationSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.container}>
      <H2>{t('common:presentationSectionTitle')}</H2>
      <div className={styles.information}>
        <div>
          <ParagraphText>{t('common:presentationSectionText')}</ParagraphText>
          <H4>Con mi trabajo yo busco:</H4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                {/* {t('common:presentationSectionListItem1')} */}
                <span className={styles.bold}>Optimizar</span> el uso de recursos para mejorar la experiencia del usuario
                📊
              </ParagraphText>
            </li>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                {/* {t('common:presentationSectionListItem1')} */}
                <span className={styles.bold}>Crear</span> diseños y experiencias de usuario que sean amigables y fáciles
                de utilizar 🎉
              </ParagraphText>
            </li>
            <li className={styles.listItem}>
              <ChevronIcon />
              <ParagraphText>
                {/* {t('common:presentationSectionListItem1')} */}
                <span className={styles.bold}>Construir</span> aplicaciones escalables que generen un impacto positivo
                en el usuario 🛠
              </ParagraphText>
            </li>
          </ul>
        </div>
      </div>
      {/*  <div className={styles.imageContainer}>
        <img className={styles.image} loading="lazy" src="./images/previewed.webp" alt="Projects preview" />
      </div> */}
    </section>
  )
}

export default PresentationSection

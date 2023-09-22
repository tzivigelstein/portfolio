import styles from "./index.module.css";
import { H2 } from "@components/Heading";
import useTranslation from "next-translate/useTranslation";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@components/MDXComponents";

export default function Story({ post }) {
  const { t } = useTranslation();

  const { source } = post;

  return (
    <div className={styles.storyContainer}>
      <H2>{t("common:storyTitle")}</H2>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <MDXRemote {...source} components={MDXComponents} />
        </div>
        <img
          className={styles.image}
          src="/images/memojis/memoji_wave.png"
          alt="Tzivi's Memoji waving and smiling"
        />
      </div>
    </div>
  );
}

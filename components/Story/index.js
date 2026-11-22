import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "@components/MDXComponents";
import Section from "@components/Section";

export default function Story({ post }) {
  const { t } = useTranslation();

  const { source } = post;

  return (
    <Section title={t("common:storyTitle")}>
      <div className={styles.textContainer}>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </Section>
  );
}

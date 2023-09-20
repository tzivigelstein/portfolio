import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { H2 } from "@components/Heading";
import ActionDeclaration from "@components/ActionDeclaration";
import TimelineBuilder from "@data/timeline";
import Timeline from "@components/Timeline";

const PresentationSection = () => {
  const { t, lang } = useTranslation(["common", "timeline"]);

  const timeline = new TimelineBuilder(t, lang);

  const ACTIONS_DECLARATIONS = [
    {
      id: 0,
      title: t("common:presentationSectionListItemTitle1"),
      text: t("common:presentationSectionListItem1"),
      icon: "/images/emojis/lightbulb.png",
      slug: "lightbulb",
    },
    {
      id: 1,
      title: t("common:presentationSectionListItemTitle2"),
      text: t("common:presentationSectionListItem2"),
      icon: "/images/emojis/gamepad.png",
      slug: "gamepad",
    },
    {
      id: 2,
      title: t("common:presentationSectionListItemTitle3"),
      text: t("common:presentationSectionListItem3"),
      icon: "/images/emojis/rocket.png",
      slug: "rocket",
    },
  ];

  return (
    <section className={styles.container}>
      <H2>{t("common:presentationSectionTitleTimeline")}</H2>
      <Timeline timeline={timeline.events} />
      <H2>{t("common:presentationSectionTitle")}</H2>
      <ul className={styles.list}>
        {ACTIONS_DECLARATIONS.map(({ id, ...rest }) => (
          <ActionDeclaration key={id} action={rest} />
        ))}
      </ul>
    </section>
  );
};

export default PresentationSection;

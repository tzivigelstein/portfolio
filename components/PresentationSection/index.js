import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { H2 } from "@components/Heading";
import ActionDeclaration from "@components/ActionDeclaration";
import { BuildIcon, PuzzlePieceIcon, SpeedMeterIcon } from "@components/Icons";
import TimelineBuilder from "@data/timeline";
import Timeline from "@components/Timeline";

const PresentationSection = () => {
  const { t } = useTranslation(["common", "timeline"]);

  const timeline = new TimelineBuilder(t);

  const ACTIONS_DECLARATIONS = [
    {
      id: 0,
      title: t("common:presentationSectionListItemTitle1"),
      text: t("common:presentationSectionListItem1"),
      icon: <SpeedMeterIcon fill="#FF6600" />,
    },
    {
      id: 1,
      title: t("common:presentationSectionListItemTitle2"),
      text: t("common:presentationSectionListItem2"),
      icon: <PuzzlePieceIcon width={190} height={190} fill="#6699CC" />,
    },
    {
      id: 2,
      title: t("common:presentationSectionListItemTitle3"),
      text: t("common:presentationSectionListItem3"),
      icon: <BuildIcon width={190} height={190} fill="#99CC00" />,
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

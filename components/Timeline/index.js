import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./index.module.css";
import { ExternalLink } from "@components/Icons";


const Description = ({ text }) => {
  return (
    <div>
      {text.split('\n').map((line, index) => (
        <div key={index} style={{ marginBottom: '0.5rem' }}>
          {line.trim().startsWith('-') ? line : `• ${line.trim()}`}
        </div>
      ))}
    </div>
  );
};

export default function Timeline({ timeline }) {
  return (
    <VerticalTimeline animate={false} lineColor="var(--timeline-secondary)">
      {timeline.map(
        ({ id, title, description, date, icon, timeSpan, link, linkText }) => {
          return (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "var(--timeline-main)",
                color: "#fff",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--timeline-main)",
              }}
              date={date ? (timeSpan ? `${date} (${timeSpan})` : date) : ""}
              iconStyle={{
                background: "var(--timeline-accent)",
                color: "#fff",
              }}
              dateClassName={styles.date}
              icon={icon ?? null}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <Description text={description.props.children} />
              {link && !linkText && (
                <a target="_blank" rel="noopener noreferrer" className={styles.link} href={link}>
                  {link}
                  <ExternalLink width={16} />
                </a>
              )}
              {
                link && linkText && (
                  <a target="_blank" rel="noopener noreferrer" className={styles.link} href={link}>
                    {linkText}
                    <ExternalLink width={16} />
                  </a>
                )
              }
            </VerticalTimelineElement>
          );
        }
      )}
    </VerticalTimeline>
  );
}

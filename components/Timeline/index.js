import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline({ timeline }) {
  return (
    <VerticalTimeline animate={false}>
      {timeline.map(
        ({ id, title, description, date, icon, timeSpan, link }) => {
          return (
            <VerticalTimelineElement
              key={id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={date ? (timeSpan ? `${date} (${timeSpan})` : date) : ""}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={icon ?? null}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              {description}
              {link && (
                <a target="_blank" rel="noopener noreferrer" href={link}>
                  {link}
                </a>
              )}
            </VerticalTimelineElement>
          );
        }
      )}
    </VerticalTimeline>
  );
}

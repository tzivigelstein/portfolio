import { Briefcase, Certification } from "@components/Icons";
import events from "./events";

const ICONS = {
  "certification": <Certification />,
  "work": <Briefcase />
}

export default class Timeline {
  constructor(translations, lang) {
    events.sort((a, b) => b.from - a.from)
    this.translations = translations;
    this.language = lang;
    this.events = events.map(({ title, description, from, to, iconType, ...rest }) => {
      const icon = ICONS[iconType]

      return ({
        ...rest,
        from,
        to,
        icon,
        date: this.getFromTo(from, to),
        timeSpan: to !== Infinity && to !== undefined && this.getDiff(from, to),
        title: this.translations(title),
        description: <p>{this.translations(description)}</p>
      })
    })
  }

  getDiff(startDate, endDate = new Date()) {
    const date = new Date(startDate);
    const diffInMilliseconds = endDate - date;

    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInMonths = diffInDays / 30.44;
    const diffInYears = diffInMonths / 12;

    let value, unit;
    if (diffInYears >= 1) {
      value = Math.round(diffInYears);
      unit =
        value === 1
          ? this.translations("timeline:units.year")
          : this.translations("timeline:units.years");
    } else if (diffInMonths >= 1) {
      value = Math.round(diffInMonths);
      unit =
        value === 1
          ? this.translations("timeline:units.month")
          : this.translations("timeline:units.months");
    } else if (diffInDays >= 1) {
      value = Math.round(diffInDays);
      unit =
        value === 1
          ? this.translations("timeline:units.day")
          : this.translations("timeline:units.days");
    }

    return `${value} ${unit}`;
  }

  getFromTo(startDate, endDate = new Date()) {
    const start = this.formatDate(startDate);
    const end = this.computeEndDate(endDate);

    return `${start} - ${end}`;
  }

  computeEndDate(date) {
    let result = "";
    if (date === Infinity) {
      result = this.translations("timeline:noExpiryDate");
    } else if (this.isDateToday(date)) {
      result = this.translations("timeline:present");
    } else {
      result = this.formatDate(date);
    }

    return result;
  }

  formatDate(date) {
    const options = { year: "numeric", month: "short" };
    return new Intl.DateTimeFormat(this.language, options).format(date);
  }

  isDateToday(date) {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}

import { Briefcase, Certification } from "@components/Icons";

export default class Timeline {
  constructor(translations) {
    this.translations = translations;
    this.events = [
      {
        id: "0",
        title: this.translations("timeline:title1"),
        description: <p>{this.translations("timeline:description1")}</p>,
        date: this.getFromTo(new Date("06/03/2022")),
        timeSpan: this.getDiff(new Date("06/03/2022")),
        icon: <Briefcase />,
      },
      {
        id: "1",
        title: this.translations("timeline:title2"),
        description: (
          <>
            <p>{this.translations("timeline:description2")}</p>
          </>
        ),
        icon: <Certification />,
        link: "https://www.efset.org/cert/TmYxdQ",
        date: this.getFromTo(new Date("01/01/2023"), Infinity),
      },
    ];
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
      result = "No expiry date";
    } else if (this.isDateToday(date)) {
      result = this.translations("present");
    } else {
      result = this.formatDate(date);
    }

    return result
  }

  formatDate(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month.toString().padStart(2, "0")}/${year.toString()}`;
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

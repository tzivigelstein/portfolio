
export default [
    {
        id: "1",
        title: "timeline:title1",
        description: "timeline:description1",
        from: new Date("06/03/2022"),
        to: undefined,
        iconType: "work",
    },
    {
        id: "2",
        title: "timeline:title4",
        description: "timeline:description4",
        link: "https://achub.pro/",
        linkText: "achub.pro",
        from: new Date("02/01/2026"),
        to: undefined,
        iconType: "work",
    },
    {
        id: "4",
        title: "timeline:title5",
        description: "timeline:description5",
        iconType: "education",
        // Only the years are known, so only the years are shown.
        yearOnly: true,
        from: new Date("03/01/2016"),
        to: new Date("12/01/2021"),
    },
    {
        id: "3",
        title: "timeline:title2",
        description: "timeline:description2",
        iconType: "certification",
        link: "https://www.efset.org/cert/TmYxdQ",
        linkText: "Certificate",
        from: new Date("01/01/2023"),
        to: Infinity
    }
]
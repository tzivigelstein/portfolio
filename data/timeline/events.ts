import type { Dictionary } from '@/lib/i18n'

type TimelineKey = keyof Dictionary['timeline']

export interface TimelineEvent {
  id: string
  type: 'work' | 'certification' | 'education'
  title: TimelineKey
  description: TimelineKey
  from: Date
  // A date when it ended, 'present' while it is ongoing, 'never' when it
  // does not expire.
  to: Date | 'present' | 'never'
  // Set when only the years are known, so only the years are shown.
  yearOnly?: boolean
  link?: string
  linkText?: string
}

const events: TimelineEvent[] = [
  {
    id: '1',
    type: 'work',
    title: 'title1',
    description: 'description1',
    from: new Date(2022, 5, 3),
    to: 'present'
  },
  {
    id: '2',
    type: 'work',
    title: 'title4',
    description: 'description4',
    from: new Date(2026, 1, 1),
    to: 'present',
    link: 'https://achub.pro/',
    linkText: 'achub.pro'
  },
  {
    id: '4',
    type: 'education',
    title: 'title5',
    description: 'description5',
    from: new Date(2016, 2, 1),
    to: new Date(2021, 11, 1),
    yearOnly: true
  },
  {
    id: '3',
    type: 'certification',
    title: 'title2',
    description: 'description2',
    from: new Date(2023, 0, 1),
    to: 'never',
    link: 'https://www.efset.org/cert/TmYxdQ',
    linkText: 'Certificate'
  }
]

export default events

import type { Dictionary } from '@/lib/i18n'
import type { LocalizedText } from '@/lib/localize'

export interface SkillGroup {
  id: string
  title: keyof Dictionary['common']
  items: LocalizedText[]
}

// Skill groups, ordered by what is used today.
const technologies: SkillGroup[] = [
  {
    id: 'main',
    title: 'skillsGroupMain',
    items: ['Python', 'Go', 'PostgreSQL', 'TypeScript', 'Flask', 'FastAPI', 'Docker']
  },
  {
    id: 'data',
    title: 'skillsGroupData',
    items: [
      'Microsoft Azure',
      'Amazon Web Services',
      'MongoDB',
      { en: 'Vector search', es: 'Búsqueda vectorial' }
    ]
  },
  {
    id: 'practices',
    title: 'skillsGroupPractices',
    items: ['Clean Architecture', 'Testing', 'CI/CD', 'Git', 'Linux', 'Bash']
  },
  {
    id: 'frontend',
    title: 'skillsGroupFrontend',
    items: ['React', 'JavaScript', 'CSS']
  }
]

export default technologies

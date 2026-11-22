import fs from 'node:fs'
import path from 'node:path'
import projects from './projects'
import type { LocalizedText } from '@/lib/localize'

const expectBothLanguages = (value: LocalizedText | undefined) => {
  if (value === undefined || typeof value === 'string') return
  expect(value.en).toBeTruthy()
  expect(value.es).toBeTruthy()
}

describe('Projects', () => {
  test('have unique ids', () => {
    const ids = projects.map(({ id }) => id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('start with AC Hub, without a repository link', () => {
    const [first] = projects.filter(({ active }) => active)
    expect(first?.title).toBe('AC Hub')
    expect(first?.repository).toBeUndefined()
  })

  test.each(projects.map((project) => [project.id, project] as const))(
    '%s has links, image and both languages',
    (_id, project) => {
      expect(project.site).toMatch(/^https:\/\//)
      if (project.repository) expect(project.repository).toMatch(/^https:\/\/github\.com\//)

      expectBothLanguages(project.subtitle)
      expectBothLanguages(project.description)
      expectBothLanguages(project.image?.alt)

      if (project.image) {
        expect(fs.existsSync(path.join(process.cwd(), 'public', project.image.src))).toBe(true)
      }
    }
  )
})

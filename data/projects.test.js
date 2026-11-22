import fs from 'fs'
import path from 'path'
import projects from './projects'

const LOCALIZED_FIELDS = ['subtitle', 'description', 'imageAlt']

describe('Projects', () => {
  test('have unique ids', () => {
    const ids = projects.map(({ id }) => id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  test('start with AC Hub, without a repository link', () => {
    const [first] = projects.filter(({ active }) => active)
    expect(first.title).toBe('AC Hub')
    expect(first.repository).toBeUndefined()
  })

  test.each(projects.map((project) => [project.id, project]))(
    '%s has links, image and both languages',
    (id, project) => {
      expect(project.site).toMatch(/^https:\/\//)
      if (project.repository) expect(project.repository).toMatch(/^https:\/\/github\.com\//)

      for (const field of LOCALIZED_FIELDS) {
        if (project[field] === undefined) continue
        expect(project[field].en).toBeTruthy()
        expect(project[field].es).toBeTruthy()
      }

      if (project.image) {
        expect(fs.existsSync(path.join(__dirname, '..', 'public', project.image))).toBe(true)
      }
    }
  )
})

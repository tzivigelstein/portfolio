import neostandard from 'neostandard'

// Standard style, for JavaScript and TypeScript.
export default [
  { ignores: ['.next/**', 'coverage/**', 'next-env.d.ts'] },
  ...neostandard({ ts: true, env: ['browser', 'node', 'jest'] })
]

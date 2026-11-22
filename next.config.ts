import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // No generated AGENTS.md in the repository.
  agentRules: false,
  experimental: {
    // The whole site has about 5 kB of CSS, so it goes in the HTML instead
    // of in separate files that block the first render.
    inlineCss: true
  },
  // English is served at the root and Spanish at /es. Internally every
  // language lives under app/[lang], so "/" is rewritten to "/en" and the
  // visible "/en" is redirected back to "/".
  async rewrites () {
    return {
      beforeFiles: [{ source: '/', destination: '/en' }],
      afterFiles: [],
      fallback: []
    }
  },
  async redirects () {
    return [
      { source: '/en', destination: '/', permanent: true },
      // Where the sitemap lived before.
      { source: '/api/sitemap', destination: '/sitemap.xml', permanent: true }
    ]
  }
}

export default nextConfig

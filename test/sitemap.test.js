/**
 * @jest-environment node
 */
import handler from '../pages/api/sitemap'

describe('Sitemap', () => {
  test('lists both languages, each pointing at the other', async () => {
    const response = { writeHead: jest.fn(), end: jest.fn() }
    await handler({}, response)

    expect(response.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/xml' })

    const xml = response.end.mock.calls[0][0]
    expect(xml).toContain('<loc>https://www.tzivi.com/</loc>')
    expect(xml).toContain('<loc>https://www.tzivi.com/es</loc>')
    expect(xml.match(/hreflang="es"/g)).toHaveLength(2)
    expect(xml.match(/hreflang="x-default"/g)).toHaveLength(2)
    expect(xml).not.toContain('<loc>http://')
    expect(xml).not.toContain('href="http://')
  })
})

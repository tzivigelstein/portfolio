import { notFound } from 'next/navigation'

// Any other path under a language shows the translated 404 page.
export default function CatchAll () {
  notFound()
}

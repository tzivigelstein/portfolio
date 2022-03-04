import Container from '@components/Container'
import Header from '@components/Header'
import Sections from '@components/SectionsContainer'
import Footer from '@components/Footer'
import ControlBar from '@components/ControlBar'
import { getFileBySlug } from 'lib/mdx'

export default function Home({ post }) {
  return (
    <Container>
      <ControlBar />
      <Header />
      <Sections post={post} />
      <Footer />
    </Container>
  )
}

export async function getStaticProps(context) {
  const { locale } = context
  const post = await getFileBySlug({ slug: `my-story-${locale === 'es' ? 'es' : 'en'}` })

  return { props: { post } }
}

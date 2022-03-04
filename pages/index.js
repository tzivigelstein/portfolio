import Container from '@components/Container'
import Header from '@components/Header'
import Sections from '@components/SectionsContainer'
import Footer from '@components/Footer'
import ControlBar from '@components/ControlBar'

export default function Home() {
  return (
    <Container>
      <ControlBar />
      <Header />
      <Sections />
      <Footer />
    </Container>
  )
}

import Container from '@components/Container'
import Header from '@components/Header'
import Sections from '@components/SectionsContainer'
import Footer from '@components/Footer/Footer'
import ControlBar from '@components/ControlBar'

const Home = () => {
  return (
    <Container>
      <ControlBar />
      <Header />
      <Sections />
      <Footer />
    </Container>
  )
}

export default Home

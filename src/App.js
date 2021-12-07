import React from 'react'
import AppState from './context/app/appState'
import Container from './components/Container'
import Header from './components/Header/Header'
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/Footer'
import ControlBar from './components/ControlBar'

const App = () => {
  return (
    <AppState>
      <Container>
        <ControlBar />
        <Header />
        <Sections />
        <Footer />
      </Container>
    </AppState>
  )
}

export default App

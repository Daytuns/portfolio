import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Nav from './Nav'
import About from './About'
import Toolkit from './Toolkit'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <Intro />
      <Projects />
      <Toolkit />
      <About />
      <Footer />
    </>
  )
}

export default Home
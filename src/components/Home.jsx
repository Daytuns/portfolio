import React from 'react'
import Intro from './Intro'
import Projects from './Projects'
import Nav from './Nav'
import About from './About'
import Toolkit from './Toolkit'
import Footer from './Footer'
import Skills from './Skills'

const Home = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <Nav />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  )
}

export default Home

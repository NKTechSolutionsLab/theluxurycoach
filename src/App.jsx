import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedIn from './components/FeaturedIn'
import AboutMonica from './components/AboutMonica'
import CoachingPrograms from './components/CoachingPrograms'
import BookSection from './components/BookSection'
import ImpactSection from './components/ImpactSection'
import PlatformsSection from './components/PlatformsSection'
import Testimonial from './components/Testimonial'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import LenisProvider from './components/LenisProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar />
    <Hero />
    <FeaturedIn />
    <AboutMonica />
    <CoachingPrograms />
    <BookSection />
    <ImpactSection />
    <PlatformsSection />
    <Testimonial />
    <FinalCTA />
    <Footer />
    </>
  )
}

export default App

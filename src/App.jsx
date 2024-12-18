import './App.css'
import AboutSection from './components/AboutSection'
import CourseBreakdown from './components/CourseBreakdown'
import Credentials from './components/Credentials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingCTA from './components/PricingCTA'
import Testimonials from './components/Testimonials'
import WhatYouGet from './components/WhatYouGet'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Credentials />
      <AboutSection />
      <CourseBreakdown />
      <WhatYouGet />
      <Testimonials />
      <FAQ />
      <PricingCTA />
      {/* <Footer /> */}
    </>
  )
}

export default App

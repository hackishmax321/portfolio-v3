import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* Remove container wrapper and handle footer separately */}
      <div className='min-h-screen flex flex-col'>
        {/* Navbar */}
        <Navbar />
        
        {/* Main content area */}
        <div>
          <div className='container mx-auto max-w-7xl px-4 md:px-8 text-center'>
            <Hero />
            <About />
            <Experience /> 
            <Projects />
            <Contact />
          </div>
        </div>
        
        {/* Footer - full width */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
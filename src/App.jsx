import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Dishes from './components/Dishes.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="landing">
      <Header />
      <main>
        <Hero />
        <Features />
        <Dishes />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Models from './components/Models'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Models />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

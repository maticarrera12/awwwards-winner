import About from "./components/About"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import History from "./components/History"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <History/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App

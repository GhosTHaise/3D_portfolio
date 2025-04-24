import Navbar from "./components/navbar"
import FeatureCards from "./sections/feature-cards"
import Hero from "./sections/hero"
import LogoSection from "./sections/logo-section"
import ShowCase from "./sections/show-case"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App

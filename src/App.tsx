import Navbar from "./components/navbar"
import Experience from "./sections/experience"
import FeatureCards from "./sections/feature-cards"
import Hero from "./sections/hero"
import LogoSection from "./sections/logo-section"
import ShowCase from "./sections/show-case"
import TechStack from "./sections/techstack"
import Testimonials from "./sections/testimonials"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
    </>
  )
}

export default App

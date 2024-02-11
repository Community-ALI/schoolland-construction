import Background from "./components/background"
import Navbar from "./components/navbar"
import HeroSection from "./components/hero"
import Categories from "./components/categories"
import Benefits from "./components/benefits"
import Contact from "./components/contact"

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Background></Background>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </div>

      <Categories></Categories>
      <Benefits></Benefits>
      <Categories></Categories>
      <Contact></Contact>
    </>
  )
}

import './App.css'
import Banner from './Banner'
import Browse from './Browse'
import CarNear from './CarNear'
import CarPrice from './carPrice'
import CarType from './CarType'
import FeaturedCars from './Featuredcars'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Banner />
      <FeaturedCars />
      <Browse />
      <CarType />
      <Banner />
      <CarNear />
      <CarPrice />
      <Footer />
    </>
  )
}

export default App

import Hero from '../components/HomeSections/Hero/Hero'
import TrustBar from "../components/HomeSections/Bars/TrustBar"
import WhyChoose from "../components/HomeSections/WhyChooseUs/WhyChoose"
import Services from '../components/HomeSections/Services/Servicepage'
import GallerySection from '../components/HomeSections/Gallery/GallerySection'
import Reviews from '../components/HomeSections/Reviews/Reviews'
import VisitSection from '../components/HomeSections/VisitUs/VisitSection'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AboutSection from '../components/HomeSections/About/AboutSection'
const Home = () => {
  return (
    <div>
    <Navbar />
      <Hero />
      <TrustBar />
      <WhyChoose/>
      <Services/>
      <GallerySection />
      <AboutSection />
      <Reviews />
      <VisitSection />
      <Footer />
    </div>
  )
}

export default Home

import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Hero = lazy(() => import("../components/HomeSections/Hero/Hero"))
const TrustBar = lazy(() => import("../components/HomeSections/Bars/TrustBar"))
const WhyChoose = lazy(() => import("../components/HomeSections/WhyChooseUs/WhyChoose"))
const Services = lazy(() => import("../components/HomeSections/Services/Servicepage"))
const GallerySection = lazy(() => import("../components/HomeSections/Gallery/GallerySection"))
const AboutSection = lazy(() => import("../components/HomeSections/About/AboutSection"))
const Reviews = lazy(() => import("../components/HomeSections/Reviews/Reviews"))
const VisitSection = lazy(() => import("../components/HomeSections/VisitUs/VisitSection"))

const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
)

const Home = () => {
  return (
    <div>
    <Navbar />
      <Suspense fallback={null}>
        <div id="hero">
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.03}>
          <TrustBar />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <WhyChoose />
        </AnimatedSection>
        <div id="services">
          <AnimatedSection delay={0.07}>
            <Services />
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.09}>
          <GallerySection />
        </AnimatedSection>
        <AnimatedSection delay={0.11}>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection delay={0.13}>
          <Reviews />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <VisitSection />
        </AnimatedSection>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Home

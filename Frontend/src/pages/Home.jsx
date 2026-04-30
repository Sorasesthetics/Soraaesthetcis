import { lazy, Suspense } from "react"
import { motion } from "framer-motion"
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Helmet } from "react-helmet-async";

const HeroImport = () => import("../components/HomeSections/Hero/Hero")
const Hero = lazy(HeroImport)

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
    <>
       <Helmet>
        <title>SōRA Aesthetics | Luxury Facials in Latham NY</title>

        <meta
          name="description"
          content="Luxury facials, waxing, and skincare treatments in Latham, NY."
        />

        <meta property="og:title" content="SORA Aesthetics" />
        <meta property="og:image" content="/preview.png" />
      </Helmet>
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
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
      </main>

      <Footer />
    </div>
    </>
  )
}

export default Home
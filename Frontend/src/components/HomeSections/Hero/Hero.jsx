import { useEffect, useState } from "react"
import Container from "../../ui/Container"
import Button from "../../ui/Button"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"
import "./hero-responsive.css"
import MobileHero from "./MobileHero"

const Hero = () => {

  const [current, setCurrent] = useState(0)
  const heroSlides = brand.data.heroSlides

  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length)
    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (
    <>
    
      {/* MOBILE HERO */}
      <section className="lg:hidden">
        <MobileHero />
      </section>


      {/* DESKTOP HERO */}
      <section className={`hidden lg:block relative bg-[var(--color-bg-main)] overflow-hidden ${isRTL ? "hero-force-ltr" : ""}`}>

        <div
          className="absolute inset-0 bg-repeat bg-[length:511px] opacity-[1] pointer-events-none"
          style={{ backgroundImage: "url('/overlay.svg')" }}
        />

        <div className="relative z-10 pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-[80px] sm:pb-[100px] lg:pb-[130px]">

          <Container>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center lg:items-start">

              {/* TEXT */}
              <div className={`max-w-[800px] text-center lg:text-left mx-auto lg:mx-0 ${isRTL ? "hero-ar" : ""}`}>

                <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[92px] leading-[1.05] text-[var(--color-accent)] whitespace-pre-line mb-[24px] sm:mb-[32px]">
                  {t("hero.title")}
                </h1>

                <p className="font-extralight text-sm sm:text-lg md:text-xl lg:text-[25px] text-[var(--color-text-main)] max-w-[760px] mx-auto lg:mx-0 mb-[28px] sm:mb-[40px]">
                  {t("hero.description")}
                </p>

                <div className="flex flex-col items-center lg:items-start">

                  {/* BOOK BUTTON */}
                  <a
                    href="https://visibook.com/soraaesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>
                      <div className="flex items-center gap-3">
                        <img src="/calendar.svg" className="w-5 h-5" />
                        {t("hero.button")}
                      </div>
                    </Button>
                  </a>

                  {/* TRUST SVG */}
                  <img
                    src="/trust1.svg"
                    alt="Trust badges"
                    className="w-[140px] sm:w-[140px] lg:w-[200px] opacity-90"
                  />

                </div>

              </div>


              {/* RIGHT IMAGE SECTION */}
              <div className="relative flex justify-center lg:justify-end mt-[30px] [direction:ltr]">

                <div className="relative w-[260px] h-[340px] sm:w-[350px] sm:h-[450px] md:w-[420px] md:h-[520px]">

                  {/* BIG IMAGE */}
                  <div className="absolute right-0 top-0 w-[220px] h-[280px] sm:w-[300px] sm:h-[380px] md:w-[380px] md:h-[483px] rounded-[40px] sm:rounded-[50px] overflow-hidden">

                    <img
                      key={heroSlides[current].main}
                      src={heroSlides[current].main}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 animate-fadeIn"
                    />

                  </div>


                  {/* SMALL IMAGE */}
                  <div className="absolute -left-[20px] top-[20px] sm:-left-[60px] sm:top-[45px] md:-left-[100px] md:top-[53px] w-[150px] h-[190px] sm:w-[220px] sm:h-[280px] md:w-[268px] md:h-[335px] rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-xl">

                    <img
                      key={current + "-secondary"}
                      src={heroSlides[current].secondary}
                      alt=""
                      className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 animate-fadeIn"
                    />

                  </div>


                  {/* DOTS */}
                  <div className="hero-dots">

                    {heroSlides.map((_, index) => (

                      <div
                        key={index}
                        className={`
                        w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-white
                        transition-all duration-500 ease-in-out
                        ${
                          current === index
                            ? "bg-white scale-110"
                            : "bg-transparent opacity-60"
                        }
                        `}
                      />

                    ))}

                  </div>


                  {/* SOCIAL */}
                  <div className="hero-socials">

                    <a
                      href="https://www.instagram.com/soraaesthetics_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/insta-icon.svg" className="hero-social" />
                    </a>

                    <a
                      href="https://web.facebook.com/SoraAesthetics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/face-icon.svg" className="hero-social" />
                    </a>

                    <a href="#">
                      <img src="/pin-icon.svg" className="hero-social" />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </Container>

        </div>

      </section>

    </>
  )
}

export default Hero

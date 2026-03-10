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
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [heroSlides.length])

  return (
    <>
      <section className="lg:hidden">
        <MobileHero />
      </section>

      <section
        className={`hidden lg:block relative bg-[var(--color-bg-main)] overflow-hidden ${isRTL ? "hero-force-ltr" : ""}`}
      >
        <div
          className="absolute inset-0 bg-repeat bg-[length:511px] opacity-[1] pointer-events-none"
          style={{ backgroundImage: "url('/overlay.svg')" }}
        />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-10 lg:py-14 xl:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
              <div
                className={`max-w-[760px] text-center lg:text-left mx-auto lg:mx-0 ${
                  isRTL ? "hero-ar" : ""
                }`}
              >
                <h1 className="font-semibold text-4xl lg:text-[56px] xl:text-[68px] leading-[1.05] text-[var(--color-accent)] whitespace-pre-line mb-6">
                  {t("hero.title")}
                </h1>

                <p className="font-extralight text-base lg:text-xl xl:text-[24px] text-[var(--color-text-main)] max-w-[760px] mx-auto lg:mx-0 mb-8">
                  {t("hero.description")}
                </p>

                <div className="inline-flex flex-col items-stretch w-fit">
                  <a
                    href="https://visibook.com/soraaesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                  >
                    <Button className="w-full">
                      <div className="flex items-center gap-3 justify-center">
                        <img src="/calendar.svg" className="w-5 h-5" />
                        {t("hero.button")}
                      </div>
                    </Button>
                  </a>

                  <img
                    src="/trust1.svg"
                    alt="Trust badges"
                    className="w-[calc(100%-2px)] mt-3 opacity-90 mx-auto"
                  />
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end [direction:ltr]">
                <div className="relative w-[300px] xl:w-[420px]">
                  <div className="relative h-[360px] xl:h-[483px]">
                    <div className="absolute right-0 top-0 w-[240px] h-[320px] xl:w-[380px] xl:h-[483px] rounded-[40px] xl:rounded-[50px] overflow-hidden">
                      <img
                        key={heroSlides[current].main}
                        src={heroSlides[current].main}
                        alt=""
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 animate-fadeIn"
                      />
                    </div>

                    <div className="absolute -left-[30px] top-[24px] xl:-left-[100px] xl:top-[53px] w-[170px] h-[220px] xl:w-[268px] xl:h-[335px] rounded-[30px] xl:rounded-[40px] overflow-hidden shadow-xl">
                      <img
                        key={`${current}-secondary`}
                        src={heroSlides[current].secondary}
                        alt=""
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out opacity-100 animate-fadeIn"
                      />
                    </div>

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
                  </div>

                  <div className="mt-[2px] w-[240px] xl:w-[380px] ml-auto flex justify-center gap-2">
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

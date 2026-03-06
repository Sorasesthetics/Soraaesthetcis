import { useEffect, useState } from "react"
import Container from "../../ui/Container"
import Button from "../../ui/Button"
import { heroSlides } from "../../../data/heroSlides"
import { heroContent } from "../../../data/heroContent"

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
 

  return (
    <section className="relative bg-[var(--color-bg-main)] overflow-hidden">

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 bg-repeat bg-[length:511px] opacity-[1] pointer-events-none"
        style={{ backgroundImage: "url('/overlay.svg')" }}
      />

      <div className="relative z-10 pt-[140px] pb-[130px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

            {/* LEFT CONTENT */}
            <div className="max-w-[800px]">

              <h1
                className="
                  font-semibold
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[92px]
                  leading-[1.02]
                  text-[var(--color-accent)]
                  whitespace-pre-line
                  mb-[32px]
                "
              >
                {heroContent.title}
              </h1>

              <p
                className="
                  font-extralight
                  text-base
                  sm:text-lg
                  md:text-xl
                  lg:text-[25px]
                  text-[var(--color-text-main)]
                  max-w-[760px]
                  mb-[40px]
                "
              >
                {heroContent.description}
              </p>

              <Button>
                 <div className="flex items-center gap-3">
    <img
      src="/calendar.svg"
      alt="calendar"
      className="w-5 h-5"
    />
    {heroContent.buttonText}
  </div>
              </Button>
<div className="-mt-4  -ml-[30px]">
  <img
    src="/hijab.svg"
    alt="features icons"
    className="h-auto w-auto"
  />
</div>

            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative flex justify-end  mt-[30px]">

              <div className="
                relative
                w-[300px] h-[400px]
                sm:w-[350px] sm:h-[450px]
                md:w-[420px] md:h-[520px]
              ">

                {/* BIG IMAGE */}
                <div className="
                  absolute right-0 top-0
                  w-[260px] h-[330px]
                  sm:w-[300px] sm:h-[380px]
                  md:w-[380px] md:h-[483px]
                  rounded-[50px]
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                ">
                  <img
                    key={heroSlides[current].main}
                    src={heroSlides[current].main}
                    alt=""
                    className="w-full h-full object-cover
                    transition-all duration-500 ease-in-out
      opacity-100 animate-fadeIn"
                  />
                </div>

                {/* SMALL IMAGE */}
               <div
  className="
    absolute
    -left-[40px] top-[40px]
    sm:-left-[60px] sm:top-[45px]
    md:-left-[100px] md:top-[53px]
    w-[180px] h-[230px]
    sm:w-[220px] sm:h-[280px]
    md:w-[268px] md:h-[335px]
    rounded-[40px]
    overflow-hidden
    shadow-xl
  "
>
  <img
    key={current + "-secondary"}
    src={heroSlides[current].secondary}
    alt=""
    className="
      w-full h-full object-cover
      transition-all duration-500 ease-in-out
      opacity-100 animate-fadeIn
    "
  />
</div>
{/* SLIDER DOTS */}
<div className="absolute bottom-[50px] right-13 -translate-x-1/2 flex gap-3 z-20">
  {heroSlides.map((_, index) => (
    <div
      key={index}
      className={`
        w-3 h-3 rounded-full border border-white
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
 <div className="absolute bottom-[-40px] right-6 flex items-center gap-4">
  
  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="/insta-icon.svg"
      alt="icon 1"
      className="h-auto w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="/face-icon.svg"
      alt="icon 2"
      className="h-auto w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="/pin-icon.svg"
      alt="icon 3"
      className="h-auto w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" target="_blank" rel="noopener noreferrer">
    <img
      src="/tik-icon.svg"
      alt="icon 4"
      className="h-auto w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
    />
  </a>

</div>
              </div>
            

            </div>

          </div>
        </Container>
      </div>

    </section>
  )
}

export default Hero
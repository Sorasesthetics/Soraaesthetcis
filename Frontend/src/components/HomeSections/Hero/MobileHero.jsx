import { useEffect, useState } from "react"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"

const MobileHero = () => {

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

<section className={`relative bg-[var(--color-bg-main)] overflow-hidden ${isRTL ? "[direction:ltr]" : ""}`}>

{/* pattern */}
<div
className="absolute inset-0 bg-repeat bg-[length:511px] pointer-events-none"
style={{ backgroundImage: "url('/overlay.svg')" }}
/>

<div className="relative z-10 max-w-[393px] md:max-w-[760px] mx-auto px-4 md:px-8 pt-[95px] md:pt-[110px] pb-[40px] md:pb-[50px]">

{/* TOP GRID */}
<div className="grid grid-cols-[1fr_180px] md:grid-cols-[1fr_300px] gap-8 md:gap-15 items-center">

{/* TEXT */}
<div className={isRTL ? "text-right [direction:rtl]" : ""}>

<h1 className="text-[16px] md:text-[30px] leading-[1.3] font-semibold text-[var(--color-accent)] mb-3 md:mb-4 ">
{t("hero.title")}
</h1>

<p className="text-[12px] md:text-[16px] leading-[1.6] text-[var(--color-text-main)] mb-4 md:mb-5 pl-2">
{t("hero.description")}
</p>

<div className={`mt-1 inline-flex flex-col w-fit ${isRTL ? "items-start" : "items-start"}`}>
  {/* BOOK BUTTON */}
  <a
    href="https://visibook.com/soraaesthetics"
    target="_blank"
    rel="noopener noreferrer"
    className="w-fit"
  >
    <button className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[10px] md:text-[14px] w-full">
      <img src="/calendar.svg" className="w-4 h-4 md:w-5 md:h-5"/>
      {t("hero.button")}
    </button>
  </a>

  {/* TRUST ICONS */}
  <img
    src="/trust1.svg"
    className="mt-3 w-[calc(100%-50px)] mx-auto"
  />
</div>

</div>


{/* IMAGE STACK */}
<div className="relative [direction:ltr]">

<div className="relative h-[220px] md:h-[340px]">

{/* BIG IMAGE */}
<div className="absolute right-0 top-0 w-[140px] h-[200px] md:w-[250px] md:h-[340px] rounded-[28px] md:rounded-[36px] overflow-hidden">

<img
key={heroSlides[current].main}
src={heroSlides[current].main}
className="w-full h-full object-cover"
/>

</div>


{/* SMALL IMAGE */}
<div className="absolute left-[-20px] md:left-[-40px] top-[20px] md:top-[34px] w-[120px] h-[160px] md:w-[180px] md:h-[240px] rounded-[24px] md:rounded-[30px] overflow-hidden shadow-lg">

<img
key={current+"secondary"}
src={heroSlides[current].secondary}
className="w-full h-full object-cover"
/>

</div>


{/* DOTS */}
<div className="absolute bottom-[30px] md:bottom-[25px] left-2/3 -translate-x-1/2 flex gap-2 md:gap-4 md:left-[65%]">

{heroSlides.map((_,index)=>(

<div
key={index}
className={`w-2 h-2 rounded-full border border-white ${
current===index ? "bg-white" : "opacity-50"
}`}
/>

))}

</div>

</div>

</div>
</div>


{/* SOCIAL */}
<div className="absolute bottom-11 md:bottom-2 left-[80%] transform -translate-x-1/2 w-[140px] md:w-[250px] flex justify-center gap-2 [direction:ltr] ">

<a
href="https://www.instagram.com/soraaesthetics_"
target="_blank"
rel="noopener noreferrer"
>
<img src="/insta-icon.svg" className="w-6 md:w-7"/>
</a>

<a
href="https://web.facebook.com/SoraAesthetics"
target="_blank"
rel="noopener noreferrer"
>
<img src="/face-icon.svg" className="w-6 md:w-7"/>
</a>

</div>

</div>



</section>

  )
}

export default MobileHero

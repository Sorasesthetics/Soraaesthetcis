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

<div className="relative z-10 max-w-[393px] mx-auto px-0 pt-[95px] pb-[40px] pl-0 ">

{/* TOP GRID */}
<div className="grid grid-cols-[1fr_180px] gap-7 items-center pl-3">

{/* TEXT */}
<div className={isRTL ? "text-right [direction:rtl]" : ""}>

<h1 className="text-[16px] leading-[1.3] font-semibold text-[var(--color-accent)] mb-3 ">
{t("hero.title")}
</h1>

<p className="text-[12px] leading-[1.6] text-[var(--color-text-main)] mb-4">
{t("hero.description")}
</p>

{/* BOOK BUTTON */}
<a
href="https://visibook.com/soraaesthetics"
target="_blank"
rel="noopener noreferrer"
>
<button className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full text-[10px]">

<img src="/calendar.svg" className="w-4 h-4"/>

{t("hero.button")}

</button>
</a>

{/* TRUST ICONS */}
<img
src="/trust1.svg"
className="mt-3 w-[110px] left-[3%] relative"
/>

</div>


{/* IMAGE STACK */}
<div className="relative h-[220px] [direction:ltr]">

{/* BIG IMAGE */}
<div className="absolute right-0 top-0 w-[140px] h-[200px] rounded-[28px] overflow-hidden">

<img
key={heroSlides[current].main}
src={heroSlides[current].main}
className="w-full h-full object-cover"
/>

</div>


{/* SMALL IMAGE */}
<div className="absolute left-[-20px] top-[20px] w-[120px] h-[160px] rounded-[24px] overflow-hidden shadow-lg">

<img
key={current+"secondary"}
src={heroSlides[current].secondary}
className="w-full h-full object-cover"
/>

</div>


{/* DOTS */}
<div className="absolute bottom-[30px] left-2/3 -translate-x-1/2 flex gap-2">

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


{/* SOCIAL */}
<div className="flex justify-end gap-1 pt-0 mt-0 pr-3 absolute bottom-[35px] left-[78%] [direction:ltr]">

<a
href="https://www.instagram.com/soraaesthetics_"
target="_blank"
rel="noopener noreferrer"
>
<img src="/insta-icon.svg" className="w-6"/>
</a>

<a
href="https://web.facebook.com/SoraAesthetics"
target="_blank"
rel="noopener noreferrer"
>
<img src="/face-icon.svg" className="w-6"/>
</a>

</div>

</div>



</section>

  )
}

export default MobileHero

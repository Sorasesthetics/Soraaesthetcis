import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { brand } from "../../../config/brand"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const VisitSection = () => {
  const { t } = useTranslation()
  const visitData = brand.data.visit
  const mapRef = useRef(null)
  const [loadMap, setLoadMap] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (mapRef.current) observer.observe(mapRef.current)

    return () => observer.disconnect()
  }, [])

  return (
<Section className="bg-[#F6F6F6] pl-3 h-fit pt-8 pb-24 md:pt-10 md:pb-32">      <Container>

        <div className="mb-1 sm:mb-2 ">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-[var(--color-primary-soft)] mb-1 sm:mb-6">
            {t("visit.title")}
          </h2>

          <div className="w-full max-w-[420px] h-[1px] bg-[var(--color-primary-soft)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">

          {/* LEFT SIDE */}
          <div>

       

            <div
              ref={mapRef}
              className="w-full h-[260px] sm:h-[340px] lg:h-[420px] rounded-[20px] sm:rounded-[28px] overflow-hidden"
            >
              {loadMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.0151415598525!2d-73.76263372430165!3d42.745731871159634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0dcdfdc65223%3A0xc8c218236a14e351!2s180%20Old%20Loudon%20Rd%2C%20Latham%2C%20NY%2012110%2C%20USA!5e0!3m2!1sen!2seg!4v1772758005176!5m2!1sen!2seg"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <img
                  src={visitData.mapImage}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-0 ">
     <div className="flex items-start gap-4 mb-2 sm:mb-6">
              <img src="/location.svg" className="w-6 h-6 sm:w-7 sm:h-7 mt-1" />

              <div>
                <h4 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[var(--color-primary)] mb-2 sm:mb-3">
                  {t("visit.locationLabel")}
                </h4>

                <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  {t("visit.address", { returnObjects: true }).map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </p>
              </div>
            </div>
            {visitData.contacts.map((item) => (
              <div key={item.id} className="flex items-start gap-2 sm:gap-4 mt-[-20px] p-0">

                <img src={item.icon} className="w-4 h-4 sm:w-7 sm:h-7 mt-1" />

                <div >
                  <h4 className="text-xl sm:text-2xl lg:text-[21px] font-bold text-[var(--color-primary)]">
                    {t(`visit.contacts.${item.id}.title`)}
                  </h4>

                  <p className="text-sm sm:text-base lg:text-[18px]  sm:mt-2">
                    {t(`visit.contacts.${item.id}.value`)}
                  </p>
                </div>

              </div>
            ))}

            <a
              href="https://visibook.com/soraaesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-primary)] text-white py-3 sm:py-4 lg:py-4 px-8 sm:px-12 lg:px-15 rounded-[18px] sm:rounded-[24px] font-semibold text-sm sm:text-base lg:text-lg w-fit text-center"
            >
              {t("visit.button")}
            </a>

          </div>

        </div>

      </Container>
    </Section>
  )
}

export default VisitSection

import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"

const AboutSection = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const aboutData = brand.data.about

  const paragraphs = t("about.paragraphs", {
    returnObjects: true
  })

  return (
    <Section className="bg-white overflow-hidden">
      <Container>

        <div
          className={`relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 ${
            isRTL ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* IMAGE */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[750px]">
            <img
              src={aboutData.image}
              alt=""
              className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px]"
            />
          </div>

          {/* CONTENT CARD */}
          <div
            className={`
              relative bg-white
              p-6 sm:p-10 md:p-14 lg:p-20
              shadow-lg rounded-[20px] sm:rounded-[24px]
              z-10
              ${isRTL ? "lg:-mr-24 text-start" : "lg:-ml-24"}
            `}
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium text-[var(--color-primary-soft)] leading-tight mb-6 sm:mb-8 lg:mb-10">
              {t("about.title")}
            </h2>

            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              {Array.isArray(paragraphs) &&
                paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[var(--color-text-main)] leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
            </div>

          </div>

        </div>

      </Container>
    </Section>
  )
}

export default AboutSection

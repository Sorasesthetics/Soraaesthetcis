import Section from "../../ui/Section"
import Container from "../../ui/Container"
import SectionTitle from "../../ui/SectionTitle"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"
import "./whychoose-responsive.css"

const WhyChoose = () => {

  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const whyChooseImage = brand.data.whyChoose.image
  const whyChooseFeatures = brand.data.whyChoose.features

  return (

    <Section className="bg-[var(--color-bg-soft)]  pt-2 pb-2">

      <Container>

        <div className={`grid whychoose-layout grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-24 items-start ${isRTL ? "lg:[&>*:first-child]:order-2" : ""}`}>

          {/* IMAGE */}
          <div className="space-y-8 whychoose-images">

            {[0,1,2].map((index) => (

              <div
                key={index}
                className="rounded-[28px] overflow-hidden h-[200px] whychoose-img"
              >

                <img
                  src={whyChooseImage.src}
                  alt=""
                  className="w-full object-cover whychoose-slice"
                />

              </div>

            ))}

          </div>


          {/* CONTENT */}
          <div className={` whychoose-content pl-3 ${isRTL ? "text-start" : ""}`}>

            <SectionTitle
              title={t("whyChoose.title")}
              subtitle={t("whyChoose.subtitle")}
              align={isRTL ? "right" : "left"}
              size="large"
              className="sm:mb-2 lg:mb-4 [&_h2]:text-[var(--color-secondary)] [&_p:last-child]:mt-1 lg:[&_p:last-child]:mt-6"
            />

            <div className="space-y-4 lg:space-y-8 whychoose-features sm:mt-[-8px] sm:pt-[-8px] ">

              {whyChooseFeatures.map((item) => (

                <div key={item.id} className="flex gap-2 items-start whychoose-feature">

                 <img
  src={item.icon}
  className="w-6 h-6 lg:w-8 lg:h-8 mt-1 shrink-0 whychoose-icon"
  alt=""
/>

                  <div>

                    <h3 className="text-[18px] lg:text-2xl font-semibold mb-1 lg:mb-2 leading-snug lg:leading-normal">
                      {t(`whyChoose.features.${item.id}.title`)}
                    </h3>

                    <p className="text-[12px] lg:text-lg text-[var(--color-text-main)] leading-tight lg:leading-relaxed">
                      {t(`whyChoose.features.${item.id}.desc`)}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </Container>

    </Section>

  )

}

export default WhyChoose

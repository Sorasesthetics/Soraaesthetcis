import Section from "../../ui/Section"
import Container from "../../ui/Container"
import SectionTitle from "../../ui/SectionTitle"
import {
  whyChooseContent,
  whyChooseImage,
  whyChooseFeatures,
} from "../../../data/whyChooseData"

const WhyChoose = () => {
  return (
    <Section className="bg-[var(--color-bg-soft)]">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* LEFT IMAGE SLICED */}
          <div className="space-y-8">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="rounded-[28px] overflow-hidden h-[200px]"
              >
                <img
                  src={whyChooseImage.src}
                  alt="Why choose us"
                  className="w-full object-cover"
                  style={{
                    transform: `translateY(-${
                      index * whyChooseImage.sliceHeight
                    }px)`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <SectionTitle
              title={whyChooseContent.title}
              subtitle={whyChooseContent.subtitle}
              align="left"
              size="large"
              className="mb-12 [&_h2]:text-[var(--color-secondary)]"
            />

            <div className="space-y-8">
              {whyChooseFeatures.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-8 h-8 mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-[var(--color-heading)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg text-[var(--color-text-main)]">
                      {item.desc}
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
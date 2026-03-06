import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { aboutData } from "../../../data/aboutData"

const AboutSection = () => {
  return (
    <Section className="bg-white overflow-hidden">
      <Container>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-[650px] lg:h-[750px]">
            <img
              src={aboutData.image}
              alt="About SORA"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>

          {/* RIGHT CONTENT (OVERLAPPING) */}
          <div
            className="
              relative
              bg-white
              p-10 md:p-16 lg:p-20
              shadow-lg
              rounded-[24px]
              lg:-ml-24
              z-10
            "
          >
            <h2 className="
              text-4xl md:text-5xl lg:text-[64px]
              font-medium
              text-[var(--color-primary-soft)]
              leading-tight
              mb-10
            ">
              {aboutData.title}
            </h2>

            <div className="space-y-8">
              {aboutData.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="
                    text-base md:text-lg lg:text-[20px]
                    text-[var(--color-text-main)]
                    leading-relaxed
                  "
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
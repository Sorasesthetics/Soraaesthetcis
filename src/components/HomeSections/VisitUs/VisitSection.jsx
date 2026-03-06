import Section from "../../ui/Section"
import Container from "../../ui/Container"
import { visitData } from "../../../data/visitData"
import { useRef, useState, useEffect } from "react"

const VisitSection = () => {

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

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Section className="bg-[#F6F6F6]">
      <Container>

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-[48px] font-semibold text-[var(--color-primary-soft)] mb-6">
            {visitData.title}
          </h2>

          <div className="w-[420px] h-[1px] bg-[var(--color-primary-soft)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* LEFT SIDE */}
          <div>

            {/* LOCATION HEADER */}
            <div className="flex items-start gap-4 mb-8">
              <img
                src={visitData.location.icon}
                alt="Location icon"
                className="w-7 h-7 mt-1"
              />

              <div>
                <h4 className="text-[26px] font-bold text-[var(--color-primary)] mb-3">
                  {visitData.location.label}
                </h4>

                <p className="text-[18px] text-[#4A4A4A] leading-relaxed">
                  {visitData.location.address.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            {/* MAP */}
            <div
              ref={mapRef}
              className="w-full h-[420px] rounded-[28px] overflow-hidden"
            >
              {loadMap ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.0151415598525!2d-73.76263372430165!3d42.745731871159634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0dcdfdc65223%3A0xc8c218236a14e351!2s180%20Old%20Loudon%20Rd%2C%20Latham%2C%20NY%2012110%2C%20USA!5e0!3m2!1sen!2seg!4v1772758005176!5m2!1sen!2seg"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  Loading map...
                </div>
              )}
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-start gap-12 pt-10">

            {visitData.contacts.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}

            <button className="
              mt-6
              bg-[var(--color-primary)]
              text-white
              py-5
              px-20
              rounded-[24px]
              font-semibold
              text-lg
              hover:opacity-90
              transition
              w-fit
            ">
              {visitData.buttonText}
            </button>

          </div>

        </div>

      </Container>
    </Section>
  )
}
const ContactItem = ({ icon, title, value }) => {
  return (
    <div className="flex items-start gap-5">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-7 h-7 mt-1"
      />

      <div>
        <h4 className="text-[28px] font-bold text-[var(--color-primary)]">
          {title}
        </h4>

        {value && (
          <p className="text-[18px] text-[#6B6B6B] mt-2">
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

export default VisitSection
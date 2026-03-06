import { useState } from "react"
import Container from "../../ui/Container"
import { services } from "../../../data/servicesData"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const [activeTab, setActiveTab] = useState("skincare")

  const filteredServices = services.filter(
    (service) => service.category === activeTab
  )

  return (
    <section className="relative pt-24 pb-8 overflow-hidden">

      {/* GRADIENT */}
      <div
        className="
          absolute
          left-1/2
          bottom-[-350px]
          -translate-x-1/2
          w-[2200px]
          h-[900px]
          rounded-full
          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232,174,183,0.35) 0%,
              rgba(232,174,183,0.25) 30%,
              rgba(232,174,183,0.15) 50%,
              rgba(232,174,183,0.08) 65%,
              rgba(232,174,183,0.04) 75%,
              rgba(232,174,183,0.02) 85%,
              transparent 95%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <Container>

          {/* TITLE + TABS */}
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-[56px] text-[var(--color-primary-soft)] font-semibold">
              My Services
            </h2>

            <div className="flex gap-6">
              <button
                onClick={() => setActiveTab("skincare")}
                className={`px-8 py-3 rounded-[19px] font-medium transition ${
                  activeTab === "skincare"
                    ? "bg-[var(--color-primary-soft)] text-white"
                    : "text-gray-500"
                }`}
              >
                SkinCare
              </button>

              <button
                onClick={() => setActiveTab("waxing")}
                className={`px-8 py-3 rounded-[19px] font-medium transition ${
                  activeTab === "waxing"
                    ? "bg-[var(--color-primary-soft)] text-white"
                    : "text-gray-500"
                }`}
              >
                Waxing
              </button>
            </div>
          </div>

          {/* CARDS WITH ANIMATION */}
          <div key={activeTab} className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

        </Container>
      </div>
    </section>
  )
}

export default Services
import { useTranslation } from "react-i18next"
import { useState } from "react"

const ServiceCard = ({ service }) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const title = t(`services.${service.id}.title`)
  const description = t(`services.${service.id}.desc`)
  const duration = t(`services.${service.id}.duration`)
  const price = t(`services.${service.id}.price`)
  const bestFor = t(`services.${service.id}.bestFor`, { returnObjects: true })
  const restrictions = t(`services.${service.id}.restrictions`, { returnObjects: true })
  const badgeText = t(`services.${service.id}.badge.text`)
  const badgeIcon = t(`services.${service.id}.badge.icon`)

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setOpen(!open)
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`group relative rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500 ${open ? "active" : ""}`}
    >

      {/* IMAGE */}
      <img
        src={service.image}
        alt=""
        className="w-full h-[420px] sm:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 lg:group-hover:scale-105"
      />

      {/* DARK LAYERS */}
      <div className="absolute inset-0 bg-black/50" />

      <div
        className={`absolute inset-0 bg-black/70 transition-all duration-500
        ${open ? "opacity-100" : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"}`}
      />

      {/* DEFAULT TITLE */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300
        ${open ? "opacity-0" : "opacity-100 lg:group-hover:opacity-0"}`}
      >
        <h4 className="text-white text-[16px] lg:text-2xl font-semibold text-center px-6">
          {title}
        </h4>
      </div>

      {/* HOVER / CLICK CONTENT */}
      <div
        className={`absolute inset-0 p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 text-white
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"}`}
      >

        <div>
          <h3 className="text-[16px] lg:text-3xl font-semibold mb-4">{title}</h3>

          <p className="text-[12px] lg:text-sm leading-relaxed mb-4">
            {description}
          </p>

          {badgeText && badgeText !== `services.${service.id}.badge.text` && (
            <div className="bg-[var(--color-primary-soft)] text-black text-[12px] lg:text-sm px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
              <span>{badgeIcon}</span>
              {badgeText}
            </div>
          )}

          {Array.isArray(bestFor) && bestFor.length > 0 && (
            <div className="border-t border-white/30 pt-4 mt-4">
              <p className="text-[#FFA1AD] text-[12px] lg:text-sm font-medium mb-2">
                ✨ {t("services.bestFor")}
              </p>
              <ul className="list-disc list-inside text-[12px] lg:text-sm space-y-1">
                {bestFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(restrictions) && restrictions.length > 0 && (
            <div className="border-t border-white/30 pt-4 mt-4">
              <ul className="list-disc list-inside text-[12px] lg:text-sm space-y-2">
                {restrictions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-[12px] lg:text-sm">
            {duration} •{" "}
            <span className="text-[#FFA1AD] font-semibold">{price}</span>
          </span>

          <a
            href="https://visibook.com/soraaesthetics"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-white/20 backdrop-blur-md px-5 lg:px-6 py-2 rounded-full text-[12px] lg:text-sm hover:bg-white/30 transition-all duration-300 inline-flex items-center"
          >
            {t("servicesSection.buttonPrimary")}
          </a>
        </div>

      </div>
    </div>
  )
}

export default ServiceCard

import Container from "../../ui/Container"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const PoliciesBar = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  return (
    <div className="bg-[var(--color-secondary)] py-4 sm:py-6">
      <Container>
        <div className={`flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 text-white text-center ${isRTL ? "lg:text-right" : "lg:text-left"}`}>

          {/* TEXT GROUP */}
          <div
            className={`flex items-center flex-wrap justify-center gap-3 sm:gap-4 leading-relaxed ${
              isRTL ? "lg:justify-end [direction:rtl]" : "lg:justify-start"
            }`}
          >

            <span className="text-[12px] lg:text-base">
              {t("policies.line1")}
            </span>

            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />

            <span className="text-[12px] lg:text-base">
              {t("policies.line2")}
            </span>

            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            />

            <span className="text-[12px] lg:text-base">
              {t("policies.line3")}
            </span>

            {/* HEART ICON */}
            <img
              src="/white-heart.svg"
              alt=""
              className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 hidden lg:block"
            />

          </div>

          {/* BUTTON */}
          <Link
            to="/policies"
            className="bg-[var(--color-tertiary)]/60 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[19px] font-medium hover:opacity-90 transition text-[12px] lg:text-base inline-flex items-center justify-center"
          >
            {t("policies.button")}
          </Link>

        </div>
      </Container>
    </div>
  )
}

export default PoliciesBar

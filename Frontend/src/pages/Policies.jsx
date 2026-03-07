import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Container from "../components/ui/Container"
import { brand } from "../config/brand"
import { useTranslation } from "react-i18next"

const Policies = () => {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === "ar"
  const lang = isArabic ? "ar" : "en"
  const policy = brand.data.policies

  return (
    <div className="bg-[var(--color-bg-soft)] min-h-screen">
      <Navbar />

      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-[24px] sm:rounded-[32px] shadow-sm p-6 sm:p-10 lg:p-14">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-primary-soft)] mb-8 ${isArabic ? "text-right" : ""}`}>
              {policy.title[lang]}
            </h1>

            <ul className={`space-y-4 sm:space-y-5 text-[var(--color-text-main)] text-sm sm:text-base lg:text-lg leading-relaxed ${isArabic ? "list-none text-right" : "list-disc pl-5"}`}>
              {policy.points[lang].map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <p className={`mt-8 sm:mt-10 text-[var(--color-primary)] font-semibold text-base sm:text-lg ${isArabic ? "text-right" : ""}`}>
              {policy.note[lang]}
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default Policies

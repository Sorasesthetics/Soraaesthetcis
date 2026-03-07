import Container from "../../ui/Container"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"
import "./trustbar.css"

const TrustBar = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"
  const trustData = brand.data.trust

  return (
    <div className="trustbar">
      <Container>
        <div className={`trustbar-inner ${isRTL ? "rtl" : ""}`}>
          {trustData.map((item) => (
            <div key={item.id} className="trust-item">
              <img src={item.icon} />
              <span>{t(`trust.${item.id}`)}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default TrustBar

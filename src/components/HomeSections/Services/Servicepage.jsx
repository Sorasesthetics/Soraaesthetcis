import Services from "./Services"
import AddOnsSection from "./AddOnsSection"
import PoliciesBar from "./PoliciesBar"


const ServicesPage = () => {
  return (
    <div>
      <div className="relative z-10">
        <Services />
        <AddOnsSection />
        <PoliciesBar />
      </div>

    </div>
  )
}

export default ServicesPage
import Container from "../../ui/Container"

const trustItems = [
  {
    icon: "/hijab-icon.svg",
    text: "Hijab-friendly & private environment",
  },
  {
    icon: "/nocctv-icon.svg",
    text: "No CCTV – Full Privacy",
  },
  {
    icon: "/women-icon.svg",
    text: "Women-Only Studio",
  },
  {
    icon: "/secure-icon.svg",
    text: "Private & Secure Space",
  },
  {
    icon: "/care-icon.svg",
    text: "Personalized Care",
  },
]

const TrustBar = () => {
  return (
    <div className="w-full bg-[var(--color-bg-soft)] border-t border-[#E8DCDC]">
      <Container>
        <div className="
          py-6
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-6 md:gap-4
        ">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3
                text-sm md:text-[15px]
                text-[#6F6F6F]
                whitespace-nowrap
              "
            >
              <img
                src={item.icon}
                alt=""
                className="w-6 h-6"
              />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default TrustBar
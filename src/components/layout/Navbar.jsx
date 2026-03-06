import { brand } from "../../config/brand"
import { useState } from "react"
import { Globe } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-[var(--color-navbar)] border-b border-[var(--color-primary)]">

      <div className="max-w-screen-xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={brand.logo.value}
            alt={brand.name}
            className="h-12"
          />

          <div className="leading-tight">
            <h1 className="text-[26px] tracking-[0.3em] text-[var(--color-primary)] font-light">
              {brand.name}
            </h1>
            <p className="text-[10px] tracking-[0.5em] text-[var(--color-primary)]">
              {brand.subName}
            </p>
          </div>
        </div>

        {/* RIGHT DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3A3A3A]">

          <a className="text-[var(--color-primary)] font-semibold">HOME</a>
          <a>SERVICES</a>
          <a>POLICIES</a>

          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            className="ml-4 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm"
          >
            Book Now
          </a>

          <Globe className="w-5 h-5 text-black ml-3" />

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-sm font-medium bg-[var(--color-navbar)]">

          <a onClick={() => setIsOpen(false)}>HOME</a>
          <a onClick={() => setIsOpen(false)}>SERVICES</a>
          <a onClick={() => setIsOpen(false)}>POLICIES</a>

          <a
            href={`https://wa.me/${brand.contact.whatsapp}`}
            className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm text-center"
          >
            Book Now
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar
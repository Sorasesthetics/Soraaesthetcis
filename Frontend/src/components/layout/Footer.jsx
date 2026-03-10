import { brand } from "../../config/brand"

const Footer = () => {
  return (
<footer className="bg-[var(--color-footer-bg)] pt-1 pb-6 md:pt-1 md:pb-1 text-center border-t border-[var(--color-primary)]">
      <div className="max-w-screen-md mx-auto flex flex-col items-center">

        {/* BRAND NAME */}
        <h2 className="text-[28px] tracking-[0.4em] text-[var(--color-footer-title)] font-light">
          {brand.name}
        </h2>

        <p className="text-xs tracking-[0.5em] text-[var(--color-footer-title)] mt-1">
          {brand.subName}
        </p>

        {/* LOGO */}
        <img
          src={brand.logo.value}
          alt={brand.name}
          className="h-18 mt-1"
        />

        {/* SLOGAN */}
        <p className="mt-1 text-sm text-[var(--color-footer-title)]">
          {brand.footer.slogan}
        </p>

        {/* COPYRIGHT */}
        <p className="mt-4 text-xs text-[var(--color-footer-copyright)]">
          {brand.footer.copyright}
        </p>

      </div>

    </footer>
  )
}

export default Footer
const SectionTitle = ({
  label,
  title,
  subtitle,
  align = "left",
  size = "default",
  className = "",
}) => {
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left"

  const titleSize =
    size === "large"
      ? "text-6xl md:text-7xl"
      : size === "small"
      ? "text-3xl md:text-4xl"
      : "text-4xl md:text-5xl"

  return (
    <div className={`mb-16 max-w-4xl ${alignment} ${className}`}>
      {label && (
        <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-primary)] mb-3">
          {label}
        </p>
      )}

      <h2
        className={`${titleSize} font-semibold text-[var(--color-accent)] leading-tight`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-[var(--color-text-main)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
      max-w-[1180px] xl:max-w-[1440px]
      mx-auto
      px-6 sm:px-8 md:px-10 lg:px-12
      ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Container
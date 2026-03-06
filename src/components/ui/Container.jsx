const Container = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-0 ${className}`}>
      {children}
    </div>
  )
}

export default Container
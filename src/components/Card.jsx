function Card({ children, className = "", hover = true, ...props }) {
  const baseClasses = "bg-white rounded-xl shadow-md p-6"
  const hoverClasses = hover ? "hover:shadow-lg transition-shadow duration-200" : ""
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  )
}

export default Card 
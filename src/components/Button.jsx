function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'font-semibold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm'

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white focus:ring-purple-400',
    secondary:
      'bg-white/10 hover:bg-white/20 text-purple-100 border border-white/20 focus:ring-purple-300',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    outline:
      'border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:ring-purple-400',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button

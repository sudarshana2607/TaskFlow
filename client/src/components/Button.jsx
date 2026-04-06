function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `rounded-full border border-blue-500 bg-blue-500 px-6 py-3 text-white transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 ${className}`
      }
    >
      {children}
    </button>
  )
}

export default Button;


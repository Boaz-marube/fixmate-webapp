import React from 'react'

function Button({ children, onClick, type = "button", className = "" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded-[10px] text-basecolor bg-customWhite hover:bg-basecolor shadow-sm shadow-black hover:text-customWhite transition duration-300 ease-in-out border-none font-bold ${className}`}
      >
        {children}
      </button>
  
  )
}

export default Button
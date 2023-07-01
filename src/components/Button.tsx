import React from 'react'

interface ButtonProps {
    text: string

}

const Button = ({ text } : ButtonProps ) => {
  return (
    <button 
    
    className="bg-primary-600 w-full uppercase tracking-wide font-poppins text-sm text-white px-2 py-3 border-primary-600 border-3 shadow-md rounded-md hover:bg-transparent hover:text-primary-600 hover:border-primary-600 transition">
    {text}
  </button>
  )
}

export default Button

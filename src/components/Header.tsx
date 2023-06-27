import React from 'react'

interface HeaderProps {
    text: string
}

const Header = ({ text }: HeaderProps) => {
  return (
    <h2 className='text-3xl font-medium py-5 text-secondary-600  text-center uppercase mb-6'>{text}</h2>

  )
}

export default Header
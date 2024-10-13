import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string
}

const Button = ({label}: ButtonProps) => {
  return (
    // <button className="px-10 py-2 bg-button-background text-button-text font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
    //     {label}
    // </button>
    <>
      <button className="btn">{label}</button>
      <button className="btn2"></button>
    </>
  )
}

export default Button
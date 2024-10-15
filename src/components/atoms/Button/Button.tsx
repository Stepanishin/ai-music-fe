import React from 'react'
import './Button.css'

interface ButtonProps {
    label: string,
    type?: 'button' | 'submit' | 'reset'
}

const Button = ({label, type = 'button' }: ButtonProps) => {
  return (
    <>
      <button type={type} className="btn">{label}</button>
      <button className="btn2"></button>
    </>
  )
}

export default Button
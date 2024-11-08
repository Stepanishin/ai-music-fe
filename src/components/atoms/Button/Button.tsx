import './Button.css'

interface ButtonProps {
    label: string,
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void
}

const Button = ({label, type = 'button', onClick }: ButtonProps) => {
  return (
    <>
      <button type={type} className="btn md:text-lg sm:text-3xl" onClick={onClick}>{label}</button>
    </>
  )
}

export default Button
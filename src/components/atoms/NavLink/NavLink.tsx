interface NavLinkProps {
    label: string
}

const NavLink = ({label}: NavLinkProps) => {
  return (
    <div className='text-content'>{label}</div>
  )
}

export default NavLink
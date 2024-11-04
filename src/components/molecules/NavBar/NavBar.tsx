import NavLink from '../../atoms/NavLink/NavLink'

const NavLinkList = [
    {
        label: 'Home',
    },
    {
        label: 'About',
    },
    {
        label: 'Reviews',
    },
    {
        label: 'Price',
    },
    {
        label: 'Instruction',
    },
    {
        label: 'Contact',
    },
]

const NavBar = () => {
  return (
    <div className='flex gap-4'>
        {NavLinkList.map((navLink, index) => (
            <NavLink key={index} label={navLink.label} />
        ))}
    </div>
  )
}

export default NavBar
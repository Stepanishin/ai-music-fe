import React from 'react'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h2 className='text-balance text-2xl font-semibold'>
        {title}
    </h2>
  )
}

export default Header
import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import NavBar from '../../molecules/NavBar/NavBar'
import Button from '../../atoms/Button/Button'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-8'>
            <Logo />
            {/* <NavBar /> */}
        </div>
        <div>
          <Button label='Order a song' />
        </div>
    </div>
  )
}

export default Header
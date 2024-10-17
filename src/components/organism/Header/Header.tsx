import React, { useState } from 'react'
import Logo from '../../atoms/Logo/Logo'
import NavBar from '../../molecules/NavBar/NavBar'
import Button from '../../atoms/Button/Button'
import ModalWindow from '../ModalWindow/ModalWindow'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className='flex justify-between items-center relative z-1'>
        <div className='flex gap-8'>
            <Logo />
            

            {/* <NavBar /> */}
        </div>
        <div className='relative'>
          <Button label='Order a song' onClick={handleModalToggle} />
        </div>

        {isModalOpen && <ModalWindow onClose={handleModalToggle} />}
    </header>
  )
}

export default Header
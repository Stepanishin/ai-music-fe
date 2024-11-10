import { useState } from 'react'
import Logo from '../../atoms/Logo/Logo'
import Button from '../../atoms/Button/Button'
import ModalWindow from '../ModalWindow/ModalWindow'
import { usePWAInstall } from 'react-use-pwa-install';
import { InstallIcon } from '../../../assets/icon/InstallPWAIcon';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const install = usePWAInstall();

  return (
    <header className='flex justify-between items-center relative z-1'>
        <div className='flex gap-8'>
            <Logo />
        </div>
        <div className='relative flex gap-8 items-center'>
          {install && (
            <div className="md:hidden lg:hidden">
              <span onClick={install} ><InstallIcon /></span>
              {/* <button
                onClick={install}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              >
                Install App
              </button> */}
            </div>
          )}
          <Button label='Order a song' onClick={handleModalToggle} />
        </div>

        

        {isModalOpen && <ModalWindow onClose={handleModalToggle} />}
    </header>
  )
}

export default Header
import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import happyImg from '../../../assets/img/happy-min.jpg';
import parentsImg from '../../../assets/img/parents-min.jpg';
import wendingImg from '../../../assets/img/wending-min.jpg';
import Laurel from '../../atoms/Laurel/Laurel';
import ModalWindow from '../ModalWindow/ModalWindow';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center gap-28 lg:gap-14 w-full relative mt-20 md:mt-0'>
      <div className='flex flex-col gap-10 w-full items-center'>
        <div className='lg:self-start relative top-[20px] left-[20px]'>
          <Laurel />
        </div>
        <p className='text-[56px] font-semibold leading-[70px] text-center text-pretty'>
          Need a song for a special occasion?
        </p>
        <p className='text-[24px] font-semibold leading-[40px] text-center text-pretty'>
          We’ve got you covered! In just 10 minutes, we’ll create a one-of-a-kind song that sounds as good as a studio track.
        </p>
        <div className='w-96'>
          <Button label='Get a song' onClick={handleModalToggle} />
        </div>
      </div>

      <div className='relative flex items-center w-full h-[480px] justify-center'>
        <div className='relative w-24 sm:w-64 lg:w-96 h-[480px] sm:scale-125'>
          <img
            src={wendingImg}
            alt='wedding'
            className='absolute top-[50px] left-[40px] lg:left-10 w-64 h-40 object-cover rounded-lg shadow-lg rotate-12 z-[1] border-[13px] border-white'
          />
          <img
            src={happyImg}
            alt='happy'
            className='absolute top-[180px] left-[-20px] lg:left-[100px] w-64 h-40 object-cover rounded-lg shadow-lg -rotate-6 border-[13px] border-white'
          />
          <img
            src={parentsImg}
            alt='parents'
            className='absolute top-[325px] left-[40px] lg:left-20 w-64 h-40 object-cover rounded-lg shadow-lg rotate-6 z-[1] border-[13px] border-white'
          />
        </div>
      </div>

      {isModalOpen && <ModalWindow onClose={handleModalToggle} />}
    </div>
  );
};

export default HeroSection;

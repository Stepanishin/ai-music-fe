import React from 'react'
import Button from '../../atoms/Button/Button'
import happyImg from '../../../assets/img/happy-min.jpg'
import parentsImg from '../../../assets/img/parents-min.jpg'
import wendingImg from '../../../assets/img/wending-min.jpg'

const HeroSection = () => {
  return (
    <div className='flex justify-center items-center gap-14 w-full'>
        <div className='flex flex-col gap-10 w-full items-center'>
            <p className='text-[56px] font-semibold leading-[70px] text-center text-pretty'>
                You can order a song for any occasion from us
            </p>
            <p className='text-[24px] font-semibold leading-[40px] text-center text-pretty'>
                We will create a unique song for you in 10 minutes, which is not inferior to studio recordings!
            </p>
            <div className='w-96'>
                <Button label='Order a song' />
            </div>
        </div>

        <div className='relative flex items-center w-full h-[480px] justify-center'>
            <div className='relative w-96 h-[480px] scale-125'>
                <img 
                    src={wendingImg} 
                    alt='wedding' 
                    className='absolute top-[50px] left-10 w-64 h-40 object-cover rounded-lg shadow-lg rotate-12 z-[1] border-[13px] border-white' 
                />
                <img 
                    src={happyImg} 
                    alt='happy' 
                    className='absolute top-[180px] left-[120px] w-64 h-40 object-cover rounded-lg shadow-lg -rotate-6 border-[13px] border-white'
                />
                <img 
                    src={parentsImg} 
                    alt='parents' 
                    className='absolute top-[325px] left-20 w-64 h-40 object-cover rounded-lg shadow-lg rotate-6 z-[1] border-[13px] border-white'
                />
            </div>    
        </div>
    </div>
  )
}

export default HeroSection
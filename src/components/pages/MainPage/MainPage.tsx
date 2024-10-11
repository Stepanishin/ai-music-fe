import React from 'react'
import HeroSection from '../../organism/HeroSection/HeroSection'

const MainPage = () => {
  return (
    <div className='flex flex-col gap-20 items-center justify-center w-full'>
      <div className='h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full'>
        <HeroSection />
      </div>
      <div>

      </div>
    </div>
  )
}

export default MainPage
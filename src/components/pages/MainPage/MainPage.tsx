import React from 'react'
import HeroSection from '../../organism/HeroSection/HeroSection'
import AboutSection from '../../organism/AboutSection/AboutSection'

const MainPage = () => {
  return (
    <div className='flex flex-col gap-60 gap- items-center justify-center w-full'>
      <section className='h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full'>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
    </div>
  )
}

export default MainPage
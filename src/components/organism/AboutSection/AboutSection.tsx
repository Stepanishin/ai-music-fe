import React from 'react'
import Header from '../../atoms/Header/Header'
import ReasonsList from '../../molecules/ReasonsList/ReasonsList'

const AboutSection = () => {
  return (
    <div className='flex flex-col gap-28'>
        <Header title="Let's write a song that will be remembered for a long time!" />
        <div>
            <ReasonsList />
        </div>
    </div>
  )
}

export default AboutSection
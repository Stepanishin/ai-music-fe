import React from 'react'
import ReasonsList from '../../molecules/ReasonsList/ReasonsList'
import Heading from '../../atoms/Heading/Heading'

const AboutSection = () => {
  return (
    <div className='flex flex-col gap-28'>
        <Heading title="Let's write a song that will be remembered for a long time!" />
        <div>
            <ReasonsList />
        </div>
    </div>
  )
}

export default AboutSection
import React from 'react'

interface HeadingProps {
    title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className='text-balance text-2xl font-semibold'>
        {title}
    </h2>
  )
}

export default Heading
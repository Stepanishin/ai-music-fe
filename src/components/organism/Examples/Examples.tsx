import React from 'react'
import Example from '../../molecules/Example/Example'
import Heading from '../../atoms/Heading/Heading'

const examplesList = [
    {
        description: "A man contacted me with the goal of writing a song for his wife for her birthday. The client provided warm words from the heart that he wanted to voice in the song.",
        title: "Birthday Song",
        song: "https://www.youtube.com/watch?v=3Q3z1b1Z7ZQ"
    },
    {
        description: "A man contacted me with the goal of writing a song for his wife for her birthday. The client provided warm words from the heart that he wanted to voice in the song.",
        title: "Birthday Song",
        song: "https://www.youtube.com/watch?v=3Q3z1b1Z7ZQ"
    },
    {
        description: "A man contacted me with the goal of writing a song for his wife for her birthday. The client provided warm words from the heart that he wanted to voice in the song.",
        title: "Birthday Song",
        song: "https://www.youtube.com/watch?v=3Q3z1b1Z7ZQ"
    },
    {
        description: "A man contacted me with the goal of writing a song for his wife for her birthday. The client provided warm words from the heart that he wanted to voice in the song.",
        title: "Birthday Song",
        song: "https://www.youtube.com/watch?v=3Q3z1b1Z7ZQ"
    }
]

const Examples = () => {
  return (
    <div className='flex flex-col gap-28'>
        <Heading title="Examples of songs we have created" />

        <div className='flex gap-4 justify-center items-baseline flex-wrap xl:flex-nowrap'>
            {
                examplesList.map((example, index) => (
                    <Example example={example} key={index} />
                ))
            }
        </div>
    </div>
    
  )
}

export default Examples
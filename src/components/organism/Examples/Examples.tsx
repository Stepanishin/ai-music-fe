import React from 'react'
import Example from '../../molecules/Example/Example'
import Heading from '../../atoms/Heading/Heading'
// @ts-ignore
import WeddingSong from '../../../assets/songs/wedding-song.mp3'
// @ts-ignore
import BirthdaySong from '../../../assets/songs/Birthday-song.mp3'
// @ts-ignore
import ParentSong from '../../../assets/songs/parents-song.mp3'
// @ts-ignore
import LoveSong from '../../../assets/songs/love-song.mp3'

const examplesList = [
    {
        description: "So, this guy got in touch wanting a song for his wedding. He shared some really sweet stuff he wanted to say in it.",
        title: "Wedding Song",
        song: WeddingSong
    },
    {
        description: "A dude asked us to write a birthday song for his wife. He gave us some heartfelt words he wanted to get across.",
        title: "Birthday Song",
        song: BirthdaySong
    },
    {
        description: "Someone hit our app up to write a song for their parents. They passed along some loving words they wanted in the song.",
        title: "Song for Parents",
        song: ParentSong
    },
    {
        description: "Got a request to make a song for someone's significant other. They sent over some heartfelt stuff they wanted to include.",
        title: "Love Song",
        song: LoveSong
    }
]


const Examples = () => {
  return (
    <div id='examples' className='flex flex-col gap-28'>
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
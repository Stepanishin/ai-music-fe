import React from 'react'
import ReasonItem from '../../atoms/ReasonItem/ReasonItem'
import WendingImage from '../../../assets/img/wending-min.jpg'
import PolovinkaImage from '../../../assets/img/polovinka-min.jpg'
import PartyImage from '../../../assets/img/happy-min.jpg'
import ParentsImage from '../../../assets/img/parents-min.jpg'
import JobImage from '../../../assets/img/korporativ-min.jpg'

const data = [
    {
        title: "For the wedding",
        description: "Delight the newlyweds with a custom-made surprise during the congratulations!",
        image: WendingImage
    },
    {
        title: "For the birthday",
        description: "Make a birthday present that will be remembered for a long time!",
        image: PartyImage
    },
    {
        title: "For parents",
        description: "Give your parents a song that will warm their hearts!",
        image: ParentsImage
    },
    {
        title: "For your other half",
        description: "Surprise your loved one with a song that will make them smile!",
        image: PolovinkaImage
    },
    {
        title: "For a corporate party",
        description: "Create a corporate party that will be remembered for a long time!",
        image: JobImage
    }
]

const ReasonsList = () => {
  return (
    <div className='flex gap-10 justify-center'>
        {
            data.map((reason, index) => (
                <ReasonItem key={index} title={reason.title} description={reason.description} image={reason.image} />
            ))
        }
    </div>
  )
}

export default ReasonsList
import ReasonItem from '../../atoms/ReasonItem/ReasonItem'
import WendingImage from '../../../assets/img/wending-min.jpg'
import PolovinkaImage from '../../../assets/img/polovinka-min.jpg'
import PartyImage from '../../../assets/img/happy-min.jpg'
import ParentsImage from '../../../assets/img/parents-min.jpg'
import JobImage from '../../../assets/img/korporativ-min.jpg'

const data = [
    {
        title: "For the wedding",
        description: "Give the newlyweds a special moment with a custom song to celebrate their love!",
        image: WendingImage
    },
    {
        title: "For the birthday",
        description: "Make someone’s birthday extra special with a song they’ll cherish forever!",
        image: PartyImage
    },
    {
        title: "For parents",
        description: "Show your parents how much they mean with a heartfelt song that will warm their hearts!",
        image: ParentsImage
    },
    {
        title: "For your other half",
        description: "Surprise your loved one with a song that will make them smile and feel extra special!",
        image: PolovinkaImage
    },
    {
        title: "For a corporate party",
        description: "Bring life to your next event with a custom song that will have everyone talking!",
        image: JobImage
    }
]

const ReasonsList = () => {
  return (
    <div className='flex gap-4 justify-center items-baseline flex-wrap xl:flex-nowrap'>
        {
            data.map((reason, index) => (
                <ReasonItem key={index} title={reason.title} description={reason.description} image={reason.image} />
            ))
        }
    </div>
  )
}

export default ReasonsList
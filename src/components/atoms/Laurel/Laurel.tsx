import LaurelIcon from '../../../assets/icon/laurel.svg'

const Laurel = () => {
  return (
    <div className='relative'>
        <img src={LaurelIcon} alt='laurel' className='w-40' />
        <div className='absolute top-[8px] left-[26px]'>
            <p className='text-xs'>Product of the day</p>
            <p className='text-xl font-semibold'>1nd</p>
        </div>
    </div>
  )
}

export default Laurel
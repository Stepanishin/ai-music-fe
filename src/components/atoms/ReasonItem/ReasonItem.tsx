interface ReasonItemProps {
    title: string
    description: string,
    image: string
}

const ReasonItem = ({ title, description, image }: ReasonItemProps) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center max-w-[300px]'>
        <img width={200} height={133} src={image} alt={title} />
        <h3 className='text-2xl font-semibold'>
          {title}
        </h3>
        <p>
            {description}
        </p>
    </div>
  )
}

export default ReasonItem
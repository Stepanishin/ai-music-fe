import React from 'react'

interface ExampleProps {
    example: {
        description: string
        title: string
        song: string
    }
}

const Example = ({ example }: ExampleProps) => {
    return (
      <div className='flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-neutral-800 max-w-[300px]'>
        <h1 className="font-medium text-lg text-gray-800 dark:text-neutral-200">{example.title}</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">{example.description}</p>
        <audio controls className='w-[250px] mt-6'>
          <source src={example.song} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

export default Example
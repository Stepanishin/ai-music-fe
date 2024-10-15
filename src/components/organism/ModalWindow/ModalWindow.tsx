import React from 'react';
import FormComponent from '../FormComponent/FormComponent';

const ModalWindow = ({ onClose }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:bg-gray-200 rounded-full p-2 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className='w-full'>
            <FormComponent buttonLabel={"Order a song"} />
        </div>

      </div>
    </div>
  );
};

export default ModalWindow;

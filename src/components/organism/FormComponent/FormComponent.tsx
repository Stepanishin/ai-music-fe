import React, { useState } from 'react';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import axios from 'axios';

interface FormComponentProps {
  buttonLabel?: string;
}

const FormComponent = ({buttonLabel = "Create your AI song +"}: FormComponentProps) => {
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('pop');
  const [comment, setComment] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = {
      email,
      genre,
      comment,
    };

    console.log('Form Data Submitted:', formData);
    
    const initiatePayment = async () => {
      const orderData = {
        story: comment,
        genre: genre,
        email: email,
      }
      
      try {
        const response = await axios.post(
          // 'http://24.199.97.194:5000/api/create-checkout-session',
          'https://api.my-aimusic.com/api/create-checkout-session',
          orderData
        );
        window.location.href = response.data.url;
      } catch (error) {
        console.error('Payment Error:', error);
      }
    };

    initiatePayment();
  };

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto !w-full">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <Heading title="Let’s create your song!" />
        </div>

        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-4 sm:mb-8 flex flex-col items-start">
              <label htmlFor="email-address" className="block mb-2 text-sm font-medium">
                Your Email <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Genre Selection */}
            <div className="mb-4 sm:mb-8 flex flex-col items-start">
              <label htmlFor="song-genre" className="block mb-2 text-sm font-medium">
                Pick a genre
              </label>
              <select
                id="song-genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                className="custom-select border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="pop">Pop</option>
                <option value="rock">Rock</option>
                <option value="hiphop">Hip Hop</option>
                <option value="jazz">Jazz</option>
                <option value="classical">Classical</option>
                <option value="electronic">Electronic</option>
                <option value="country">Country</option>
              </select>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block mb-2 text-sm font-medium text-start">
                Any special requests for the song? <span className='text-red-500'>*</span>
              </label>
              <div className="mt-1">
                <textarea
                  id="comment"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                  rows={3}
                  className="h-[200px] border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Tell us what you have in mind..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 grid">
              <Button label={buttonLabel} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;

import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') ?? 'test1';
  const navigate = useNavigate();

  if (!email) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full mt-[-100px] text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
      <p className="text-lg">
        We’ve received your order, and it’s now in the works.
      </p>
      <p className="mt-4">
        Sit back, relax, and keep an eye on your inbox ({email})—your song link will be there within the next 10 minutes!
      </p>
      <p className="mt-4 text-sm text-gray-500">
        If you have any questions, feel free to reach out to our support team.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Back to Home
      </button>
    </div>
  );
}

export default ConfirmationPage;

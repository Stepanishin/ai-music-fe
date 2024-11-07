import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    const navigate = useNavigate();

  return (
    <div className="lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full mt-[50px] lg:mt-[-100px] text-center px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="max-w-4xl text-left">
        <p className="mb-4">
          Last updated: <strong>November 7, 2024</strong>
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Data We Collect</h2>
        <p className="mb-4">
          We collect your email address, song preferences, and comments when you use our services. This information helps us process your order and provide a better experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
        <p className="mb-4">
          Your data is used for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To process your orders and payments.</li>
          <li>To generate and deliver AI-generated songs.</li>
          <li>To communicate with you about your orders.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
        <p className="mb-4">
          We use third-party services, including Stripe, to process payments. Please refer to their privacy policies for more details:
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-1"
          >
            Stripe Privacy Policy
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
        <p className="mb-4">
          We retain your data only as long as necessary to provide our services and fulfill legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
          <a
            href="mailto:myaimusic.help@gmail.com"
            className="text-blue-500 underline ml-1"
          >
            myaimusic.help@gmail.com
          </a>.
        </p>

        <p className="mt-6">
          By using our services, you agree to the terms outlined in this Privacy Policy.
        </p>

        <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Back to Home
      </button>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

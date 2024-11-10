import  { useEffect, useState } from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email') ?? undefined;
  const orderId = queryParams.get('orderId') ?? undefined;
  const navigate = useNavigate();
  const [status, setStatus] = useState('Pending');
  const [songUrl, setSongUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [, setTimeElapsed] = useState(0);
  const pollingInterval = 20000; // Интервал опроса в миллисекундах
  const maxPollingTime = 10 * 60 * 1000; // Максимальное время опроса (10 минут)

  const isLocalEnv = process.env.REACT_APP_IS_LOCAL_ENV === 'true';
  useEffect(() => {
    if (!email || !orderId) return;

    let intervalId: NodeJS.Timeout | string | number | undefined;
    let timeoutId: NodeJS.Timeout | string | number | undefined;

    const fetchOrderStatus = async () => {
      try {
        const response = await axios.get(
          `${isLocalEnv ? 'http://localhost:5000/api/order-status' : 'https://api.my-aimusic.com/api/order-status'}`,
          {
            params: { email, orderId },
          }
        );

        console.log('Order Status:', response.data);

        if (response.data.paymentStatus === 'Completed') {
          setStatus('Completed');
          setSongUrl(response.data.songUrl);
          setVideoUrl(response.data.videoUrl);

          // Останавливаем опрос
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        } else {
          setStatus('Pending');
        }
      } catch (error) {
        console.error('Error fetching order status:', error);
        // Дополнительная обработка ошибок
      }
    };

    // Начинаем опрос
    fetchOrderStatus(); // Первый вызов сразу
    intervalId = setInterval(() => {
      fetchOrderStatus();
      setTimeElapsed((prev) => prev + pollingInterval);
    }, pollingInterval);

    // Устанавливаем таймаут для остановки опроса через 10 минут
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setStatus('Timeout');
    }, maxPollingTime);

    // Очищаем таймеры при размонтировании компонента
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, orderId]);

  if (!email || !orderId) {
    return <Navigate to="/" />;
  }

  if (status === 'Completed') {
    return (
      <div className="lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full mt-[50px] lg:mt-[-100px] text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
        <h2 className="text-2xl font-semibold mb-4">Your song is ready!</h2>
        <p className="text-lg mb-4">
          Click below to listen to your personalized song and watch the video!
        </p>
        <div className="mb-4">
          <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 text-blue-500 underline"
          >
            🎵 Listen to your song
          </a>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 underline"
          >
            🎬 Watch your video
          </a>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Back to Home
        </button>
      </div>
    );
  }

  if (status === 'Timeout') {
    return (
      <div className="lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full mt-[50px] lg:mt-[-100px] text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Processing Time Exceeded</h2>
        <p className="text-lg">
          Sorry, your song is taking longer than expected.
        </p>
        <p className="mt-4">
          Please check your email ({email}) later, or contact our support team.
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

  // Статус "Pending" или начальный экран
  return (
    <div className="lg:h-[calc(100vh-120px)] flex flex-col items-center justify-center w-full mt-[50px] lg:mt-[-100px] text-center px-4">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order!</h2>
      <p className="text-lg">
        We’ve received your order, and it’s now in the works.
      </p>
      <p className="mt-4">
        Sit back, relax, and keep an eye on your inbox ({email})—your song link will be there within the next 10 minutes!
      </p>
      <p className="mt-4">
        Or you can wait for your song right here!
      </p>
      <div className="loader mt-4"></div>
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

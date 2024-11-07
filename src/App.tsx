import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/organism/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import ConfirmationPage from './components/pages/ConfirmationPage/ConfirmationPage';
import Footer from './components/organism/Footer/Footer';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { registerServiceWorker } from './serviceWorkerRegistration';

registerServiceWorker();

function App() {
  return (
    <Router>
      <div className="App p-3 lg:p-10 bg-[#FDFAF7] flex justify-center !font-sans">
        <div className='max-w-[1440px] w-full'>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

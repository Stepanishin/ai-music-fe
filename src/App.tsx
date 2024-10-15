import React from 'react';
import './App.css';
import Header from './components/organism/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Footer from './components/organism/Footer/Footer';

function App() {
  return (
    <div className="App p-10 bg-[#FDFAF7] flex justify-center !font-sans">
      <div className='max-w-[1440px] w-full'>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
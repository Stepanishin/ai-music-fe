import React from 'react';
import './App.css';
import Header from './components/organism/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';

function App() {
  return (
    <div className="App p-10 bg-[#FDFAF7] flex justify-center">
      <div className='max-w-[1440px] w-full'>
        <Header />
        <MainPage />
      </div>
    </div>
  );
}

export default App;

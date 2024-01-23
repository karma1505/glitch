import React, { useState, useEffect } from 'react';
import CustomNavbar from './navbar';
import './App.css';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date('March 13, 2024 00:00:00');
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <div>
        <p>{timeLeft.days.toString().padStart(2, '0')}</p>
        <span>Days</span>
      </div>
      <div>
        <p>{timeLeft.hours.toString().padStart(2, '0')}</p>
        <span>Hours</span>
      </div>
      <div>
        <p>{timeLeft.minutes.toString().padStart(2, '0')}</p>
        <span>Minutes</span>
      </div>
      <div>
        <p>{timeLeft.seconds.toString().padStart(2, '0')}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="App-header">
        <h1>GLITCH 2024</h1>
        <p className='coming'>COMING SOON</p>
        <CountdownTimer />
        <div className="home-comp">
          <img src="seemyscree.apng" alt="comp" />
        </div>
          <img src="glitchlogo.png" alt="logo" className='home-glitch' />
          <img src="hacked.apng" alt="hacked" className='home-hack' />
      </div>
    </div>
  );
}

export default App;

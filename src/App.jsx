import React from 'react';
import CustomNavbar from './navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <h1>Glitch 2024</h1>
        <img src="glitch.jpeg" alt="glitch" />
        <p>
          Welcome to Glitch 
        </p>
      </header>
    </div>
  );
}

export default App;

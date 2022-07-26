import React from 'react';
import logo from './logo.svg';
import Alzhimer from './components/Alzhimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alzhimer/>
      </header>
    </div>
  );
}

export default App;

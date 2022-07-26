import React from 'react';
import logo from './logo.svg';
import Alzheimer from './components/Alzheimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alzheimer/>
      </header>
    </div>
  );
}

export default App;

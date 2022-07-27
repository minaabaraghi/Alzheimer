import React from 'react';
import logo from './logo.svg';
import Alzheimer from './components/Alzheimer';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alzheimer/>
        <Login/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Alzheimer from './components/Alzheimer';
import Login from './components/Login';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Alzheimer/>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

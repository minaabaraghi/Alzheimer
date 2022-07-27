import React,{useEffect} from 'react';
import logo from './logo.svg';
import Alzheimer from './components/Alzheimer';
import Login from './components/Login';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import axios from "axios";
function App() {
  const [post, setPost] = React.useState(null);
  const baseURL ='https://www.getpostman.com/collections/a56f623dfea6276e637f';

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  // if (!post) return null;
  console.log(post);
  
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

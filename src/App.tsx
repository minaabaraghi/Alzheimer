import Alzheimer from './components/Alzheimer';
import Login from "./components/Login";
import UsersList from './components/usersList';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import Register from './components/Register';
function App() {
  const [navigate, setNavigate] = useState(false);
  if (navigate) {
    return (
     
    <Navigate to="/Login" replace={true} />
    
    )
  }
  return (
    <BrowserRouter>
      <header className="p-3  text-white" style={{ background: "#538ef5" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 text-white">Alzheimer</Link></li>
            </ul>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
              <Link to="/Register" className="btn btn-outline-light me-2">Register</Link>
              <Link to="/User-List" className="btn btn-outline-light me-2">User List</Link>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Alzheimer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/User-List" element={<UsersList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import Alzheimer from "./components/Alzheimer";
import Login from "./components/Login";
import UsersList from "./components/usersList";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Register from "./components/Register";
import PrivateRoutes from "./utils/PrivateRoutes";
// import SideMenue from './components/uiBody/SideMenue';
function App() {
  const [navigate, setNavigate] = useState(false);
  if (navigate) {
    return <Navigate to="/Login" replace={true} />;
  }
  return (
    <div >
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Alzheimer />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/User-List" element={<UsersList />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import Alzheimer from "./components/Alzheimer";
import Login from "./components/Login";
import UsersList from "./components/usersList";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  const [navigate] = useState(false);
  if (navigate) {
    return <Navigate to="/Login" replace={true} />;
  }
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Alzheimer />} />
          <Route path="/User-List" element={<UsersList />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

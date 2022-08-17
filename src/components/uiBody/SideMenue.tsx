import "../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideMenue = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark "
      style={{ width: "280px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Alzheimer</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          {/* {<a href="#" className="nav-link active" aria-current="page">} */}
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#home" />
          </svg>
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </li>
        <li>
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#speedometer2" />
          </svg>
          <Link to="/login" className="nav-link text-white">
            Login
          </Link>
        </li>
        <li>
          <svg className="bi pe-none me-2" width="16" height="16">
            <use xlinkHref="#table" />
          </svg>
          <Link to="/User-List" className="nav-link text-white">
            User List
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideMenue;

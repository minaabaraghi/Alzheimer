import React from "react";
import { Link } from 'react-router-dom';
function HeaderMenue() {
  return (
    <div>
      <header className="p-3  text-white" style={{ background: "#538ef5" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Alzheimer
                </Link>
              </li>
            </ul>

            <div className="text-end">
              {/* {<Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>} */}
              <Link to="#" className="btn btn-outline-light me-2">
                Sign In
              </Link>
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderMenue;

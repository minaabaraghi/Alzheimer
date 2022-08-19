import "../styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideMenue = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
    <div
      className="list-group list-group-flush "
      style={{ width: "280px", height: "100vh" }}
    >
  
     
      
        
          {/* {<a href="#" className="nav-link active" aria-current="page">} */}
         
          <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
            Home
          </Link>
        
        
          
          <Link to="/login" className="list-group-item list-group-item-action list-group-item-light p-3">
            Login
          </Link>
        
        
        
          <Link to="/User-List" className="list-group-item list-group-item-action list-group-item-light p-3">
            User List
          </Link>
        
      
      <hr />
    </div>
    </div>
  );
};

export default SideMenue;

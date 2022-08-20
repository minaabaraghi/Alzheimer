import "../styles.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
const SideMenu = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light text-center">POMI</div>
      <div
        className="list-group list-group-flush "
        style={{ width: "280px", height: "100vh" }}
      >




        {/* {<a href="#" className="nav-link active" aria-current="page">} */}
        <a href="/" className="list-group-item list-group-item-action list-group-item-light p-3">
          Home
        </a>

        <a href="/User-List" className="list-group-item list-group-item-action list-group-item-light p-3">
          User List
        </a>


        <hr />
      </div>
    </div>
  );
};

export default SideMenu;

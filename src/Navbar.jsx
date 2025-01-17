import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">

      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
            Dummy Company
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ml-5  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active menu_active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu_active" to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu_active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink      activeClassName='menu_active'
                
                className="nav-link  menu_active" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
          
              </li>
            
              {/* <li className="nav-item">
                <NavLink className="nav-link disabled" aria-disabled="true">
                  Disabled
                </NavLink>
              </li> */}
            </ul>
          
          </div>
        </div>


      </nav>

      </div> 
        </div>
      </div>
    </>
  );
};

export default Navbar;

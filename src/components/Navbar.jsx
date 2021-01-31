import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
function Navbar(props) {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">

           
  <nav className="navbar navbar-expand-lg navbar-light  navbar-default">
  <div className="container-fluid">
    <img src={logo} style={{height:'7rem',width:'7rem'}} className="m-2" alt="logo"></img>
    {/* <div className="navbar-brand " >VMS Controls</div> */}
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu-active" className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu-active" className="nav-link" to="/contact">Working with us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu-active" className="nav-link" to="/services">Services</NavLink>
        </li>
      
       </ul>
      
    </div>
  </div>
</nav>
       </div>
          </div>
        </div>
    );
}

export default Navbar;
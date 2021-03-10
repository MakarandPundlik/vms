import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className=" fixed-top navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">VMS</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
      <NavLink className="nav-link" to="/">Features</NavLink>
        <NavLink className="nav-link" to="/">Features</NavLink>
        <NavLink className="nav-link" to="/">Features</NavLink>
        <NavLink className="nav-link" to="/">Features</NavLink>
      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;
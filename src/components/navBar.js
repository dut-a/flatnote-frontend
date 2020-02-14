
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <NavLink to="/">Flatnote</NavLink>
      </span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="nav-link">
              <NavLink to="/">Home</NavLink> 
              <span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <NavLink to="/login">Login</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <NavLink to="/logout">Logout</NavLink>
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">
              <NavLink to="/new-note">New Note</NavLink>
            </span>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;


import React from "react";
import userLogo from '../image/userLogo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LOGO
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Contact us</a>
              </li>
            </ul>
      <button className="btn btn-outline-dark  userName ">
        <img src={userLogo} alt="" />
      <span className="mx-2">username@resoluteai.in</span>
      </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

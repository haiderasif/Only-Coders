import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Example icon, replace with your desired icon

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        {/* <!-- Home Page Link on the Left --> */}
        <a class="navbar-brand-heading" href="#">
          <img
            src="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Sample Page
        </a>
        {/* <!-- Navbar Toggler Button for Mobile --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar Links and Search Bar --> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link-1" href="#">
                Home
              </a>
            </li>
            {/* <!-- Dropdown Menu --> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link-1 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Dropdown Page 1
                </a>
                <a class="dropdown-item" href="#">
                  Dropdown Page 2
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated Link
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link-1 dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Dropdown Page 1
                </a>
                <a class="dropdown-item" href="#">
                  Dropdown Page 2
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated Link
                </a>
              </div>
            </li>
          </ul>
          {/* <!-- Search Bar in the Middle --> */}
          <form className="form-inline mx-auto">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Enter your search here..."
                aria-label="Search"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* <!-- Login Button on the Right --> */}
        <button class="login-btn  ml-auto" type="button">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import SearchBar from "./searchBar";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark">
      {/* <!-- Additional container --> */}
      <div className="container">
        {/* <!-- Navbar brand --> */}
        <Link className="navbar-brand" to="/">
          Adult Toy Skateboards
        </Link>

        {/* <!-- Collapse button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* <!-- Collapsible content --> */}
        <div className="collapse navbar-collapse" id="basicExampleNav">
          {/* <!-- Links --> */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/magazine">
                Magazine
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>

            {/* <!-- Dropdown --> */}
            <li className="nav-item dropdown">
              <Dropdown />
            </li>
          </ul>
          {/* <!-- Links --> */}
          <SearchBar />
        </div>
        {/* <!-- Collapsible content --> */}
      </div>
      {/* <!-- Additional container --> */}
    </nav>
  );
};

export default navBar;

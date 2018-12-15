import React from "react";
import SearchBar from "./searchBar";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark">
      {/* <!-- Additional container --> */}
      <div class="container">
        {/* <!-- Navbar brand --> */}
        <Link class="navbar-brand" to="/">
          Adult Toy Skateboards
        </Link>

        {/* <!-- Collapse button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        {/* <!-- Collapsible content --> */}
        <div class="collapse navbar-collapse" id="basicExampleNav">
          {/* <!-- Links --> */}
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/magazine">
                Magazine
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                Product
              </Link>
            </li>

            {/* <!-- Dropdown --> */}
            <li class="nav-item dropdown">
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

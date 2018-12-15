import React, { Component, Fragment } from "react";
import SearchBar from "./utils/searchBar";
import logo from "../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        {/* <!-- Navbar --> */}
        <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark">
          {/* <!-- Additional container --> */}
          <div class="container">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand" href="#">
              Adult Toy Skateboards
            </a>

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
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Magazine
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Product
                  </a>
                </li>

                {/* <!-- Dropdown --> */}
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <div
                    class="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
              {/* <!-- Links --> */}
              <SearchBar />
            </div>
            {/* <!-- Collapsible content --> */}
          </div>
          {/* <!-- Additional container --> */}
        </nav>
        {/* <!-- /.Navbar --> */}
      </header>
    );
  }
}

export default Header;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import roy from "../images/lee-lee.PNG";
import oliver from "../images/O-Dubs.PNG";
import dblaze from "../images/dblaze.PNG";
import broph from "../images/broph_handplant2.png";
import oDubs from "../images/O-Dubs2.png";
import cwb from "../images/wiz_chach_broph2.png";
import "../styles/carousel.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a href="/" className="navbar-brand">
          <img src={logo} style={{ height: "50px" }} alt="Adult-toy" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Videos
              </a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="form-control mr-sm-2"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        className="carousel slide"
        id="myCarousel"
        data-ride="carousel"
        data-interval="2000"
        data-wrap="true"
      >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active" />
          <li data-target="#myCarousel" data-slide-to="1" />
          <li data-target="#myCarousel" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={broph} alt="First slide" className="firt-slide" />
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="/" role="button">
                    Sign up today
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={oDubs} alt="Second slide" className="second-slide" />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a href="/" role="button" className="btn btn-lg btn-primary">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cwb} alt="third slide" className="third-slide" />
            <div className="container">
              <div className="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <a href="/" className="btn btn-lg btn-primary" role="button">
                    Browse Gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          className="carousel-control-prev"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          href="#myCarousel"
          className="carousel-control-next"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />

          <span className="sr-only">Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default NavBar;

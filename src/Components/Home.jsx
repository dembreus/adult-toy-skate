import React, { Component, Fragment } from "react";
import "../styles/App.css";
import "../styles/Icons.css";
import Portfolio from "./Porfolio.jsx";
import Products from "./Products.jsx";
import Header from "./Header.jsx";
import NavBar from "./NavBar.jsx";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      {/* <Header /> */}
      <Products />
      <Portfolio />
    </Fragment>
  );
};

export default Home;

import React, { Component, Fragment } from "react";
import "../styles/App.css";
import "../styles/Icons.css";
import NavBar from "./NavBar";
import Portfolio from "./Porfolio";
import Services from "./Services";
import Values from "./Values";
import About from "./About";
import Header from "./Header";

const Home = () => {
  return (
    <Fragment>
      {/*<NavBar/>*/}
      <Header />
      <About />
      <Values />
      <Services />
      <Portfolio />
    </Fragment>
  );
};

export default Home;

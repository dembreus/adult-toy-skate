import React, { Component, Fragment } from "react";
import "../styles/App.css";
import NavBar from "./NavBar.jsx";

const Products = () => {
  return (
    <Fragment className="Products">
      <header className="Product-header">
        <h1 className="Product-title">Adult Toy Skate Products</h1>
      </header>
      <p className="Product-intro">Products are so great</p>
    </Fragment>
  );
};

export default Products;

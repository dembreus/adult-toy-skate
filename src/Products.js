import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from "./NavBar"

class Products extends Component {
    render() {
        return (
            <Fragment className="Products">
                <NavBar/>
                <header className="Product-header">
                    <h1 className="Product-title">Adult Toy Skate Products</h1>
                </header>
                <p className="Product-intro">
                   Products are so great
                </p>
            </Fragment>
        );
    }
}

export default Products;

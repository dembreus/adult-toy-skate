import React, { Component, Fragment } from 'react';
import './App.css';

class Products extends Component {
    render() {
        return (
            <Fragment className="Products">
                <header className="Product-header">
                    <img src={logo} className="Product-logo" alt="logo" />
                    <h1 className="Product-title">Adult Toy Skate Products</h1>
                </header>
                <p className="Product-intro">
                    A fake skateboarding company that sponsors with real product.
                </p>
            </Fragment>
        );
    }
}

export default Products;

import React, { Component, Fragment } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <Fragment className="Header">
                <section className="jumbotron text-center">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Adult Toy Skate</h1>
                    </header>
                    <p className="App-intro">
                        A fake skateboarding company that sponsors.
                    </p>
                    <form className="form-inline">
                        <section className="input-group">
                            <input type="email"
                                   className="form-control"
                                   size="50"
                                   placeholder="Email Address" required/>
                            <section className="input-group-btn">
                                <button type="button"
                                        className="btn btn-danger">Subscribe
                                </button>
                            </section>
                        </section>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Header;
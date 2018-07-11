import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar"

class Home extends Component {
    render() {
        return (
            <Fragment className="Home">
                <NavBar/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Adult Toy Skate</h1>
                </header>
                <p className="App-intro">
                   A fake skateboarding company that sponsors.
                </p>
            </Fragment>
        );
    }
}

export default Home;

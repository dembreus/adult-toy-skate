import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar"

class Home extends Component {
    render() {
        return (
            <Fragment className="Home">
                <NavBar/>
                <section class="jumbotron text-center">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Adult Toy Skate</h1>
                    </header>
                    <p className="App-intro">
                        A fake skateboarding company that sponsors.
                    </p>
                    <form class="form-inline">
                        <section class="input-group">
                            <input type="email"
                                   class="form-control"
                                   size="50"
                                   placeholder="Email Address" required/>
                            <section class="input-group-btn">
                                <button type="button"
                                        class="btn btn-danger">Subscribe
                                </button>
                            </section>
                        </section>
                    </form>
                </section>
                <section class="container-fluid">
                    <section class="row">
                        <section class="col-sm-8">
                            <h2>About Adult Toy</h2>
                            <h4>Lorem ipsum...</h4>
                            <p>Lorem ipsum..</p>
                            <button class="btn btn-default btn-lg">Get in Touch</button>
                        </section>
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-signal logo"></span>
                        </section>
                    </section>
                </section>

                <section class="container-fluid bg-grey">
                    <section class="row">
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-globe logo"></span>
                        </section>
                        <section className="col-sm-8">
                            <h2>Our Values</h2>
                            <h4><strong>MISSION:</strong> Our mission lorem ipsum...</h4>
                            <p><strong>VISION:</strong> Our vision lorem ipsum...</p>
                        </section>
                    </section>
                </section>
                <section class="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br/>
                    <section class="row">
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-off"></span>
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-heart"></span>
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-lock"></span>
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                    </section>
                    <br/><br/>
                    <section class="row">
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-leaf"></span>
                            <h4>GREEN</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section class="col-sm-4">
                            <span class="glyphicon glyphicon-certificate"></span>
                            <h4>CERTIFICATE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section class="col-sm-4">
                            <section class="glyphicon glyphicon-wrench">
                                <h4>HARD WORK</h4>
                                <p>Lorem ipsum dolor sit amet...</p>
                            </section>
                        </section>
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default Home;

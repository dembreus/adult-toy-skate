import React, { Component, Fragment } from 'react';

class Services extends Component {
    render() {
        return (
            <Fragment className="Services">
                <section className="container-fluid text-center">
                    <h2>SERVICES</h2>
                    <h4>What we offer</h4>
                    <br/>
                    <section className="row">
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-off logo-small"></span>
                            <h4>POWER</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-heart logo-small"></span>
                            <h4>LOVE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-lock logo-small"></span>
                            <h4>JOB DONE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                    </section>
                    <br/><br/>
                    <section className="row">
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-leaf logo-small"></span>
                            <h4>GREEN</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-certificate logo-small"></span>
                            <h4>CERTIFICATE</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                        <section className="col-sm-4">
                            <span className="glyphicon glyphicon-wrench logo-small"></span>
                            <h4>HARD WORK</h4>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </section>
                    </section>
                </section>
            </Fragment>
        );
    }
}

export default Services;

import React, { Component, Fragment } from "react";

class About extends Component {
  render() {
    return (
      <Fragment className="About">
        <section className="container-fluid">
          <section className="row">
            <section className="col-sm-8">
              <h2>About Adult Toy</h2>
              <h4>Lorem ipsum...</h4>
              <p>Lorem ipsum..</p>
              <button className="btn btn-default btn-lg">Get in Touch</button>
            </section>
            <section className="col-sm-4">
              <span className="glyphicon glyphicon-signal logo" />
            </section>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default About;

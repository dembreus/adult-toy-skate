import React, { Fragment } from "react";

const services = () => {
  return (
    <Fragment className="Services">
      <section className="container-fluid text-center">
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <section className="row">
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-off logo-small" />
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </section>
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-heart logo-small" />
            <h4>LOVE</h4>
            <p>Love for the skate fam</p>
          </section>
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-briefcase logo-small" />
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </section>
        </section>
        <br />
        <br />
        <section className="row">
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-shopping-cart logo-small" />
            <h4>Product</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </section>
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-certificate logo-small" />
            <h4>CERTIFICATE</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </section>
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-wrench logo-small" />
            <h4>HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet...</p>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default services;

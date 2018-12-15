import React, { Fragment } from "react";

const values = () => {
  return (
    <Fragment className="Values">
      <section className="container-fluid bg-grey">
        <section className="row">
          <section className="col-sm-4">
            <span className="glyphicon glyphicon-globe logo" />
          </section>
          <section className="col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong> Our mission lorem ipsum...
            </h4>
            <p>
              <strong>VISION:</strong> Our vision lorem ipsum...
            </p>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default values;

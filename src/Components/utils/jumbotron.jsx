import React from "react";

const jumbotron = ({ image, headline, text, imgAlt }) => {
  return (
    <div className="row">
      {/* <!-- Grid column --> */}

      <div className="col-md-7 mb-4">
        {/* <!-- Featured image --> */}
        <div className="view overlay z-depth-1-half">
          <img src={image} className="card-img-top" alt={imgAlt} />
          <div className="mask rgba-white-light" />
        </div>
      </div>

      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-5 mb-4">
        <h2>{headline}</h2>
        <hr />
        <p>{text}</p>
        <a href="https://mdbootstrap.com/" className="btn btn-elegant">
          Explore!
        </a>
      </div>
      {/* <!-- Grid column --> */}
    </div>
  );
};

export default jumbotron;

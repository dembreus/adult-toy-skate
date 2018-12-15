import React from "react";

const jumbotron = ({ image, headline, text, imgAlt }) => {
  return (
    <div class="row">
      {/* <!-- Grid column --> */}

      <div class="col-md-7 mb-4">
        {/* <!-- Featured image --> */}
        <div class="view overlay z-depth-1-half">
          <img src={image} class="card-img-top" alt={imgAlt} />
          <div class="mask rgba-white-light" />
        </div>
      </div>

      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div class="col-md-5 mb-4">
        <h2>{headline}</h2>
        <hr />
        <p>{text}</p>
        <a href="https://mdbootstrap.com/" class="btn btn-elegant">
          Explore!
        </a>
      </div>
      {/* <!-- Grid column --> */}
    </div>
  );
};

export default jumbotron;

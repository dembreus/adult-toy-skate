import React from "react";

const card = ({ image, title, text, link, imgAlt }) => {
  return (
    <div class="card">
      {/* <!-- Card image --> */}
      <div class="view overlay">
        <img src={image} class="card-img-top" alt={imgAlt} />
        <a href="#">
          {" "}
          <div class="mask rgba-white-slight" />{" "}
        </a>
      </div>

      {/* <!-- Card content --> */}
      <div class="card-body">
        {/* <!-- Title --> */}
        <h4 class="card-title">{title}</h4>
        {/* <!-- Text --> */}
        <p class="card-text">{text}</p>
        <a href="#!" class="btn btn-elegant">
          View More
        </a>
      </div>
    </div>
  );
};

export default card;

import React from "react";

const card = ({ image, title, text, link, imgAlt }) => {
  return (
    <div className="card">
      {/* <!-- Card image --> */}
      <div className="view overlay">
        <img src={image} className="card-img-top" alt={imgAlt} />
        <a href="#">
          {" "}
          <div className="mask rgba-white-slight" />{" "}
        </a>
      </div>

      {/* <!-- Card content --> */}
      <div className="card-body">
        {/* <!-- Title --> */}
        <h4 className="card-title">{title}</h4>
        {/* <!-- Text --> */}
        <p className="card-text">{text}</p>
        <a href="#!" className="btn btn-elegant">
          View More
        </a>
      </div>
    </div>
  );
};

export default card;

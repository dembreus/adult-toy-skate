import React, { Fragment } from "react";

const cardText = ({ title, text }) => {
  return (
    <Fragment>
      <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
        <a href="#!">{title}</a>
      </h3>
      <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">{text}</p>
    </Fragment>
  );
};

export default cardText;

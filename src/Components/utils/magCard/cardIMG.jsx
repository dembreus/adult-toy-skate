import React from "react";
import { MDBView, MDBMask } from "mdbreact";

const cardIMG = ({ image, altImg }) => {
  return (
    <MDBView hover rounded className="z-depth-1-half mb-4">
      <img
        className="img-fluid"
        src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
        alt=""
      />
      <a href="#!">
        <MDBMask overlay="white-slight" className="waves-light" />
      </a>
    </MDBView>
  );
};

export default cardIMG;

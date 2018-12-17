import React from "react";
import { MDBView, MDBMask } from "mdbreact";

const cardIMG = ({ image, altImg, link }) => {
  return (
    <MDBView hover rounded className="z-depth-1-half mb-4">
      <img className="img-fluid" src={image} alt={altImg} />
      <a href="#!">
        <MDBMask overlay="white-slight" className="waves-light" />
      </a>
    </MDBView>
  );
};

export default cardIMG;

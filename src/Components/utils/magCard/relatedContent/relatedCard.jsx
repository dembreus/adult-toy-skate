import React from "react";
import { MDBRow, MDBCol, MDBView, MDBMask, MDBIcon } from "mdbreact";

const relatedCard = ({ image, altIMG, date, text }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "1.5rem"
      }}
    >
      <MDBRow>
        <MDBCol md="3">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src={image} alt={altIMG} />
            <a href="#!">
              <MDBMask overlay="white-slight" className="waves-light" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol md="9">
          <p className="font-weight-bold dark-grey-text">{date}</p>
          <div className="d-flex justify-content-between">
            <MDBCol size="11" className="text-truncate pl-0 mb-3">
              <a href="#!" className="dark-grey-text">
                {text}
              </a>
            </MDBCol>
            <a href="#!">
              <MDBIcon icon="angle-double-right" />
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default relatedCard;

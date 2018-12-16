import React, { Fragment } from "react";
import { MDBRow, MDBCol, MDBMask, MDBIcon, MDBView } from "mdbreact";
import CardIMG from "./../cardIMG";

const relatedContent = ({ articles }) => {
  return (
    <Fragment>
      {" "}
      <div
        style={{
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "1.5rem"
        }}
      >
        <MDBRow>
          <MDBCol md="3">
            <CardIMG image="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" />
          </MDBCol>
          <MDBCol md="9">
            <p className="font-weight-bold dark-grey-text">26/02/2018</p>
            <div className="d-flex justify-content-between">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div
        style={{
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "1.5rem"
        }}
      >
        <MDBRow>
          <MDBCol md="3">
            <CardIMG image="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" />
            {/* <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView> */}
          </MDBCol>
          <MDBCol md="9">
            <p className="font-weight-bold dark-grey-text">25/02/2018</p>
            <div className="d-flex justify-content-between">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="dark-grey-text">
                  Itaque earum rerum hic tenetur a sapiente delectus
                </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div
        style={{
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "1.5rem"
        }}
      >
        <MDBRow>
          <MDBCol md="3">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="9">
            <p className="font-weight-bold dark-grey-text">24/03/2018</p>
            <div className="d-flex justify-content-between">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="dark-grey-text">
                  Soluta nobis est eligendi optio cumque nihil impedit quo minus
                </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <div className="mb-4">
        <MDBRow>
          <MDBCol md="3">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol md="9">
            <p className="font-weight-bold dark-grey-text">23/02/2018</p>
            <div className="d-flex justify-content-between">
              <MDBCol size="11" className="text-truncate pl-0 mb-3">
                <a href="#!" className="dark-grey-text">
                  Duis aute irure dolor in reprehenderit in voluptate
                </a>
              </MDBCol>
              <a href="#!">
                <MDBIcon icon="angle-double-right" />
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </Fragment>
  );
};

export default relatedContent;

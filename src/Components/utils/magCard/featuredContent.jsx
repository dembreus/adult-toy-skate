import React from "react";
import CardIMG from "./cardIMG";
import CardText from "./cardText";
import CardDate from "./cardDate";
import Video from "../video";
import { MDBIcon } from "mdbreact";

const featuredContent = ({ article }) => {
  return (
    <div className="mb-4">
      <CardIMG image="https://mdbootstrap.com/img/Photos/Slides/1.jpg" />
      <div className="d-flex justify-content-between">
        <a href="#!" className="deep-orange-text">
          <h6 className="font-weight-bold">
            <MDBIcon icon="cutlery" className="pr-2" />
            Culinary
          </h6>
        </a>
        <CardDate date="27/02/2018" />
      </div>
      <CardText
        title="Title of the news"
        text="Sed ut perspiciatis unde voluptatem omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
        explicabo. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat."
      />
    </div>
  );
};

export default featuredContent;

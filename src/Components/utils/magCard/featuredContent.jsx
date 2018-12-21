import React from "react";
import CardText from "./cardText";
import CardDate from "./cardDate";
import Video from "../video";
import { MDBIcon } from "mdbreact";

const featuredContent = ({ article }) => {
  return (
    <div className="mb-4">
      <Video src={article.src} />
      {/* <CardIMG image="https://mdbootstrap.com/img/Photos/Slides/1.jpg" /> */}
      <div className="d-flex justify-content-between">
        <a href="#!" className="deep-orange-text">
          <h6 className="font-weight-bold">
            <MDBIcon icon="video-camera" className="pr-2" />
            Video
          </h6>
        </a>
        <CardDate date={article.publishDate} />
      </div>
      <CardText title={article.title} text={article.summary} />
    </div>
  );
};

export default featuredContent;

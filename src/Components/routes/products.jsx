import React, { Fragment } from "react";
import Card from "../utils/card";

const products = () => {
  return (
    <div className="container text-center">
      <div className="row ">
        <div className="col-lg-6 col-md-6 ">
          <Card
            image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg"
            title="Coming Soon!"
            text="More to come from our company. Come explore to find out more."
          />
        </div>
        <div className="col-lg-6 col-md-6 ">
          <Card
            image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg"
            title="Product"
            text="We steal from the other guys and pass the savings onto you."
          />
        </div>
      </div>
    </div>
  );
};

export default products;

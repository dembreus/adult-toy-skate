import React from "react";
import { MDBIcon } from "mdbreact";

const cardDate = ({ date }) => {
  return (
    <p className="font-weight-bold dark-grey-text">
      <MDBIcon icon="clock-o" className="pr-2" />
      {date}
    </p>
  );
};

export default cardDate;

import React from "react";
import { MDBIcon } from "mdbreact";

const cardDate = ({ date }) => {
  return (
    <p
      className="font-weight-bold dark-grey-text "
      style={{ color: "#f0f0f0" }}
    >
      <MDBIcon icon="clock-o" className="pr-2" />
      {date}
    </p>
  );
};

export default cardDate;

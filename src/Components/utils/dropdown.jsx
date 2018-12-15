import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const dropdown = ({ links }) => {
  return (
    <Fragment>
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        More
      </a>
      <div
        className="dropdown-menu dropdown-primary"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <Link className="dropdown-item" to="/">
          Action
        </Link>
        <Link className="dropdown-item" to="/">
          Another action
        </Link>
        <Link className="dropdown-item" to="/">
          Something else here
        </Link>
      </div>
    </Fragment>
  );
};

export default dropdown;

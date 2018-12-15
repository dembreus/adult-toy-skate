import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const dropdown = ({ links }) => {
  return (
    <Fragment>
      <a
        class="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        More
      </a>
      <div
        class="dropdown-menu dropdown-primary"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <Link class="dropdown-item" to="/">
          Action
        </Link>
        <Link class="dropdown-item" to="/">
          Another action
        </Link>
        <Link class="dropdown-item" to="/">
          Something else here
        </Link>
      </div>
    </Fragment>
  );
};

export default dropdown;

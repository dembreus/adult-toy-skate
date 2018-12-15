import React from "react";

const searchBar = () => {
  return (
    <form class="form-inline">
      <div class="md-form my-0">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};

export default searchBar;

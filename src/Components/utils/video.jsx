import React, { Fragment } from "react";

const video = ({ data }) => {
  return (
    <Fragment>
      {/* //  <!-- 21:9 aspect ratio --> */}
      <div class="embed-responsive embed-responsive-21by9">
        <iframe class="embed-responsive-item" src="..." />
      </div>

      {/* // <!-- 16:9 aspect ratio --> */}
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="..." />
      </div>

      {/* // <!-- 4:3 aspect ratio --> */}
      <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="..." />
      </div>

      {/* // <!-- 1:1 aspect ratio --> */}
      <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" src="..." />
      </div>
    </Fragment>
  );
};

export default video;

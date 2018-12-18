import React, { Fragment } from "react";

const video = ({ data, src }) => {
  return (
    <Fragment>
      {/* <!-- 16:9 aspect ratio --> */}
      <div class="embed-responsive embed-responsive-16by9 z-depth-1-half mb-4">
        <iframe
          class="embed-responsive-item"
          width="691"
          height="507"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </div>
    </Fragment>
  );
};

export default video;

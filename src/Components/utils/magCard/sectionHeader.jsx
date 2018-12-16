import React, { Fragment } from "react";

const SectionHeader = ({ article }) => {
  return (
    <Fragment>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">
        {/* {article.sectionTitle} */}
        Section Title
      </h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
        {/* {article.sectionBody} */}
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit id laborum.
      </p>
    </Fragment>
  );
};

export default SectionHeader;

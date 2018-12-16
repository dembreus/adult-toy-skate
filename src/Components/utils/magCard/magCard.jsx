import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import FeaturedContent from "./featuredContent";
import SectionHeader from "./sectionHeader";
import RelatedContent from "./relatedContent/relatedContent";

const magCard = ({ articles, relatedArticles }) => {
  return (
    <MDBCard
      className="my-5 px-5 mx-auto"
      style={{ fontWeight: 300, maxWidth: "90%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <SectionHeader />
        <MDBRow>
          <MDBCol md="12" lg="6">
            <FeaturedContent />
          </MDBCol>

          <MDBCol md="12" lg="6">
            <RelatedContent />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default magCard;

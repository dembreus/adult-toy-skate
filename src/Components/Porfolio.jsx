import React, { Fragment } from "react";
import roy from "../images/lee-lee.PNG";
import odubs from "../images/O-Dubs.PNG";
import dblaze from "../images/dblaze.PNG";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <Fragment className="skaters">
      {/*Portfolio section*/}
      <div class="container-fluid text-center bg-grey">
        <h2>Skaters</h2>
        <h4>The best of the best</h4>
        {/*Area for */}
        <div class="row text-center">
          {/*Image on the left*/}
          <div class="col-sm-4">
            <div class="thumbnail">
              <img className="roy-boy" src={roy} alt="Roy Boy" />
              <p>
                <strong>Roy Boy</strong>
              </p>
              <p>This guy knows how to move his feet.</p>
            </div>
          </div>
          {/*Image in the middle*/}
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src={odubs} alt="O'Dubs" />
              <p>
                <strong>O'Dubs</strong>
              </p>
              <p>This guys hopefully on the team</p>
            </div>
          </div>
          {/*Image on the right*/}
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src={dblaze} alt="D Blaze" />
              <p>
                <strong>D Blaze</strong>
              </p>
              <p>He’s actually on the team when we do it</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;

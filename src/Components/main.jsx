import React from "react";
import Card from "./utils/card";
import Jumbotron from "./utils/jumbotron";

const main = () => {
  return (
    <main class="mt-5">
      {/* <!-- Main container --> */}
      <div class="container">
        {/* <!-- Grid row --> */}
        <Jumbotron
          image="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
          headline="About us"
          text="We steal from the other guys and pass the savings on to you!"
        />
        {/* <!-- Grid row --> */}

        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!-- Card --> */}
            <Card
              image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg"
              title="Magazine"
              text="From the biggest gaps to smallest cracks, we capture everything right
                    here."
            />
            {/* <!-- /.Card --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6">
            {/* <!-- Card --> */}
            <Card
              image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg"
              title="Product"
              text="We steal from the other guys and pass the savings onto you."
            />
            {/* <!-- /.Card --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6">
            {/* <!-- Card --> */}
            <Card
              image="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg"
              title="Coming Soon!"
              text="More to come from our company. Come explore to find out more."
            />

            {/* <!-- /.Card --> */}
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Main container --> */}
    </main>
  );
};

export default main;
import React from "react";

const main = () => {
  return (
    <main class="mt-5">
      {/* <!-- Main container --> */}
      <div class="container">
        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}

          <div class="col-md-7 mb-4">
            {/* <!-- Featured image --> */}
            <div class="view overlay z-depth-1-half">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                class="card-img-top"
                alt=""
              />
              <div class="mask rgba-white-light" />
            </div>
          </div>

          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-5 mb-4">
            <h2>About us</h2>
            <hr />
            <p>We steal from the other guys and pass the savings on to you!</p>
            <a href="https://mdbootstrap.com/" class="btn btn-elegant">
              Explore!
            </a>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}

        {/* <!-- Grid row --> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-12 mb-4">
            {/* <!-- Card --> */}
            <div class="card">
              {/* <!-- Card image --> */}
              <div class="view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg"
                  class="card-img-top"
                  alt=""
                />
                <a href="#">
                  {" "}
                  <div class="mask rgba-white-slight" />{" "}
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Title --> */}
                <h4 class="card-title">Magazine</h4>
                {/* <!-- Text --> */}
                <p class="card-text">
                  From the biggest gaps to smallest cracks, we capture
                  everything right here.
                </p>
                <a href="#!" class="btn btn-elegant">
                  View More
                </a>
              </div>
            </div>
            {/* <!-- /.Card --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6">
            {/* <!-- Card --> */}
            <div class="card">
              {/* <!-- Card image --> */}
              <div class="view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg"
                  class="card-img-top"
                  alt=""
                />
                <a href="#">
                  {" "}
                  <div class="mask rgba-white-slight" />{" "}
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Title --> */}
                <h4 class="card-title">Product</h4>
                {/* <!-- Text --> */}
                <p class="card-text">
                  High quality boards, shirts and more. We steal from the other
                  guys and pass the savings onto you.
                </p>
                <a href="#" class="btn btn-elegant">
                  View More
                </a>
              </div>
            </div>
            {/* <!-- /.Card --> */}
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-lg-4 col-md-6">
            {/* <!-- Card --> */}
            <div class="card">
              {/* <!-- Card image --> */}
              <div class="view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg"
                  class="card-img-top"
                  alt=""
                />
                <a href="#">
                  {" "}
                  <div class="mask rgba-white-slight" />{" "}
                </a>
              </div>

              {/* <!-- Card content --> */}
              <div class="card-body">
                {/* <!-- Title --> */}
                <h4 class="card-title">Coming Soon!</h4>
                {/* <!-- Text --> */}
                <p class="card-text">
                  More to come from our company. Come explore to find out more.
                </p>
                <a href="#" class="btn btn-elegant">
                  View More
                </a>
              </div>
            </div>
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

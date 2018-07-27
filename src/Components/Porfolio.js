import React, { Component, Fragment } from 'react';
import roy from '../Photos/roy-party-shirt.jpg'

class Portfolio extends Component {
    render() {
        return (
            <Fragment className="Portfolio">
                {/*Portfolio section*/}
               <div class="container-fluid text-center bg-grey">
                   <h2>Portfolio</h2>
                   <h4>What we have created</h4>
                   {/*Area for */}
                   <div class="row text-center">
                       {/*Image on the left*/}
                       <div class="col-sm-4">
                           <div class="thumbnail">
                               <img className="roy-boy" src={roy} alt="Roy Boy"/>
                               <p><strong>Roy Boy</strong></p>
                               <p>This guy knows how to move his feet.</p>
                           </div>
                       </div>
                       {/*Image in the middle*/}
                       <div class="col-sm-4">
                           <div class="thumbnail">
                               <img src="newyork.jpg" alt="New York"/>
                               <p><strong>New York</strong></p>
                               <p>We Built New York</p>
                           </div>
                       </div>
                       {/*Image on the right*/}
                       <div class="col-sm-4">
                           <div class="thumbnail">
                               <img src="sanfrann.jpg" alt="San Francisco"/>
                               <p><strong>San Francisco</strong></p>
                               <p>Yes, San Fran is ours</p>
                           </div>
                       </div>
                   </div>
               </div> 
            </Fragment>
        );
    }
}

export default Portfolio;

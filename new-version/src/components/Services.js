import React from 'react';

const Services = () => (
  <div name="services" className="container-fluid text-center" id="services">
        <div className="section-title">Serving customers across the East Bay!</div>
        <div className="section-quote">We want to make your home more beautiful, serving you 7 days a week including holidays!</div>
    <div className="row">
      <div className="col services">
        <i className="fa fa-scissors" aria-hidden="true"/><i className="fa fa-tree tree-services" aria-hidden="true"/>
        <h2>Tree Services</h2>
          <p>Trimming - Pruning - Topping - Shaping - Hillside Clean-up - Lot Clearance for fire regulations - Planting ground covers - Flowers - Tree planting
          </p>
      </div>
      <div className="col services">
        <i className="fa fa-leaf tree-services" aria-hidden="true"/>
        <h2>New Lawns</h2>
          <p>Sow-Seed & Reseeding - Lawn Fertilization - New Frences - Rock Gardens - Deck - Concrete - Retaining Walls - Brick - Sidewalks - Etc.
          </p>
      </div>
      <div className="col services">
        <i className="fa fa-shower tree-services" aria-hidden="true"/>
        <h2>Sprinkler System</h2>
          <p>Repair - Layout & Installation - Manual or Automatic Systems
          </p>
      </div>
    </div>
      
  <div className="section-footer">If there are any DIY projects in your yard that are not listed above, we can come take a look!</div>

</div>
);

export default Services;
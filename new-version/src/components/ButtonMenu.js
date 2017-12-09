/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from 'react';
import { Link as SmoothLink } from 'react-scroll';

const ButtonMenu = () => (
  <div className="button-list animated fadeIn">
    <SmoothLink
      to="services"
      smooth
      offset={50}
      duration={1000}
      className="btn btn-secondary btn-lg"
    >
      Learn More About Us
    </SmoothLink>
    <button type="button" className="btn btn-secondary btn-lg">
      Schedule
    </button>
  </div>
);

export default ButtonMenu;

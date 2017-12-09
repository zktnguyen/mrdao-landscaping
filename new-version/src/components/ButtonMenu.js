/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from 'react';
import { Link } from 'react-scroll';

const ButtonMenu = () => (
  <div className="button-list animated fadeIn">
    <Link
      to="services"
      smooth
      offset={50}
      duration={500}
      className="btn btn-secondary btn-lg"
    >
      Learn More About Us
    </Link>
    <button type="button" className="btn btn-secondary btn-lg">
      Schedule
    </button>
  </div>
);

export default ButtonMenu;

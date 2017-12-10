import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => (
  <div className="container">
    <div className="row" style={{ marginTop: '2rem' }}>
      <h1>Thank you for scheduling a time to speak with us!</h1>
      <p>
        We will try to get back to you within your time availability in a timely
        manner.
        <br />
        <small>Please do not try to send more than one message.</small>
        <br/><br/> Return to the homepage <Link to="/">here</Link>
      </p>
    </div>
  </div>
);

export default ConfirmationPage;
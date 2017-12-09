import React from 'react';

const Footer = () => (
  <footer id="contact">
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <i className="fa fa-phone" id="icons" aria-hidden="true" />
              {'   '}(510) 786-9459
            </li>
            <li>
              <i className="fa fa-envelope" id="icons" aria-hidden="true" />
              {'   '}mrdaolandscaping@gmail.com
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Contact us anytime!</h2>
          <p id="important-info">
            If contacting by phone, please leave a voicemail for inquiries of
            interest. <br />If sending an email, please include [Service Type]
            Inquiry in the subject.<br/> Or please try our new scheduling system!
          </p>
        </div>
      </div>
      <div className="row copyright">
        © 2017&nbsp;
        <a
          href="http://kimtnguyen.me"
          rel="noopener noreferrer"
          target="_blank"
          style={{color: 'black'}}
        >
          Kim T Nguyen
        </a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://github.com/zktnguyen/portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

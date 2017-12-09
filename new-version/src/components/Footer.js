import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

class Footer extends Component {
  scrollToTop = () => scroll.scrollToTop();

  render() {
    return (
      <footer className="container-fluid" id="contact">
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
                If contacting by phone, please leave a voicemail for inquiries
                of interest. <br />If sending an email, please include [Service
                Type] Inquiry in the subject.<br /> Or please try our new
                scheduling system!
              </p>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-4">
            <button
              className="btn btn-secondary"
              onClick={this.scrollToTop}
            >
              Back to Top
            </button>
          </div>
          <div className="col-8">
            © 2017&nbsp;
            <a
              href="http://kimtnguyen.me"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: 'black' }}
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
  }
}

export default Footer;

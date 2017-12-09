import React from 'react';
import ButtonMenu from './ButtonMenu';

const LandingImage = () => (
  <div className="front-intro">
    <div className="mid-text">
      <h2>Mr.Dao Landscaping</h2>
      <p>Welcome to our services. How can we help?</p>
    </div>
  
  <div className="photo-cred">
    Photo by{' '}
    <a href="https://unsplash.com/photos/8vBpYpTGo90?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
      Daniel Watson
    </a>{' '}
    on{' '}
    <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
      Unsplash
    </a>
  </div>
  <ButtonMenu />
</div>
);

export default LandingImage;
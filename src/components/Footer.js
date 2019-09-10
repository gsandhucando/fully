import React from 'react';

const Footer = () => {
  return(
    <div className='footer-container'>
      <div className='footer-top'>
        <ul>
          <h5>About</h5>
          <li>Our Story</li>
          <li>Blog</li>
          <li>Customer Reviews</li>
          <li>Careers</li>
          <li>Press & Research</li>
        </ul>
        <ul>
          <h5>Products</h5>
          <li>Desks</li>
          <li>Chairs</li>
          <li>Accessories</li>
        </ul>
        <ul>
          <h5>Support</h5>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Contact</li>
          <li>Commercial Sales</li>
        </ul>
      </div>
      <div className='footer-mid'>
        <ul>
          <h5>Portland Showroom</h5>
        <li>1010 SE Water Avenue</li>
        <li>Portland, OR 97214</li>
        <li>503-477-7729</li>
        <li>visitpdx@fully.com</li>
        </ul>
        <ul>
          <h5>San Francisco Showroom</h5>
        <li>245 Kansas Street</li>
        <li>San Francisco, CA 94103</li>
        <li>415-654-5467</li>
        <li>visitsf@fully.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;
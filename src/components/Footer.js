import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

const fb  = <FontAwesomeIcon icon={faFacebook} />;
const twitter = <FontAwesomeIcon icon={faTwitter} />;
const ig = <FontAwesomeIcon icon={faInstagram} />;
const pin = <FontAwesomeIcon icon={faPinterest} />;
const link = <FontAwesomeIcon icon={faLinkedin} />;
const youtube = <FontAwesomeIcon icon={faYoutube} />;

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
        <div>
        <ul>
          <h5>Connect</h5>
          <li>Portland Showroom</li>
          <li>San Francisco Showroom</li>
        </ul>
        </div>
        <div style={{marginTop: '-40px'}}>
        <ul style={{display: 'flex', justifyContent: 'space-between'}}>
          <li>{fb}</li>
          <li>{twitter}</li>
          <li>{ig}</li>
          <li>{pin}</li>
          <li>{link}</li>
          <li>{youtube}</li>
        </ul>
        </div>
      </div>
      <div className='footer-mid'>
        <div>
        <ul>
          <h5>Love your work more.</h5>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
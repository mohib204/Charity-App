import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>Address: Your address goes here, your demo address.</p>
        <p>Phone: +8880 44338899</p>
        <p>Email: info@colorlib.com</p>
      </div>
      <div className="footer-section">
        <h4>Important Links</h4>
        <ul>
          <li><a href="#">View Project</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Proparties</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Newsletter</h4>
        <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
        <input type="email" placeholder="Email Address" />
        <button type="button">Subscribe</button>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2024 All rights reserved | This template is made with <span role="img" aria-label="heart">❤️</span> by Colorlib</p>
      </div>
    </footer>
  );
};

export default Footer;

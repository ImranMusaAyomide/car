import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>ABOUT CARS.NG</h3>
          <ul>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>HELP LINKS</h3>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONNECT WITH US</h3>
          <ul>
            <li><a href="/sell">Start Selling</a></li>
            <li><a href="mailto:Hello@cars.ng">Hello@cars.ng</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>PARTNERS</h3>
          <ul>
            <li><a href="https://hng.tech">HNG Internship</a></li>
            <li><a href="https://hotels.ng">Hotels.ng</a></li>
          </ul>
        </div>

        <div className="footer-column brand-info">
          <h2 className="footer-logo">C<i className="fa-solid fa-car-side"></i>rs.ng</h2>
          <p>
            Find, buy, or sell cars effortlessly with Nigeria's most trusted 
            automotive platform. Explore thousands of verified listings, 
            compare prices, and connect with reliable dealers — all in one place.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2025 Cars.ng</p>
        <div className="social-icons">
          <a href="#instagram" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#twitter" aria-label="X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import homeal from '../assets/homeal.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={homeal} alt="Logo" />
          <h3>Homeal</h3>
        </div>
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="https://localzi-public-links.s3.ap-south-1.amazonaws.com/homeal/index.html" target='_blank'>Terms & Conditions</a></li>
            <li><a href="https://localzi-public-links.s3.ap-south-1.amazonaws.com/homeal/index.html" target='_blank'>Privacy Policy</a></li>
            <li><a href="https://merchant.razorpay.com/policy/KUqHUp9DyVqPsU/privacy" target='_blank'>Payment Privacy Policy</a></li>
            <li><a href="https://merchant.razorpay.com/policy/KUqHUp9DyVqPsU/refund" target='_blank'>Payment Return Policy</a></li>
            <li><a href="https://merchant.razorpay.com/policy/KUqHUp9DyVqPsU/terms" target='_blank'>Payment Terms and Conditions</a></li>
            <li><a href="https://merchant.razorpay.com/policy/KUqHUp9DyVqPsU/shipping" target='_blank'>Payment Shipping and Delivery</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-links" target='_blank'>
            <a href="https://www.instagram.com/homeal.official/" target='_blank'>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCPT0TMw3879ppwtnOlLR5MQ" target='_blank'>
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/homeal.bangalore" target='_blank'>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/homealindia/?originalSubdomain=in" target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FHomeal9" target='_blank'>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-apps">
          <h4>Download Our App</h4>
          <div className="app-links">
            <a href="https://play.google.com/store/apps/details?id=com.localzi.homeal" target='_blank'>Play Store <i className="fa-brands fa-google-play"></i></a>
            <a href="https://apps.apple.com/in/app/homeal/id1571860810" target='_blank'>App Store <i className="fa-brands fa-app-store"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-fssai">
        <p>FSSAI: 11221332000554</p>
      </div>
    </footer>
  );
};

export default Footer;

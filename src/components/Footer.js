import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Films n Frame</h3>
            <p>Creating cinematic experiences that inspire and captivate audiences worldwide.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">📷</a>
              <a href="https://twitter.com" aria-label="Twitter">🐦</a>
              <a href="https://linkedin.com" aria-label="LinkedIn">💼</a>
              <a href="https://youtube.com" aria-label="YouTube">🎥</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Films n Frame. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import "./Footer.css";
import QuickLinksIcon from "../../assets/footer/quickLinksIcon.svg";

function QuickLinksButton({ text }) {
  return (
    <button className="quick-links-button">
      <span className="quick-links-text">{text}</span>
      <img src={QuickLinksIcon} alt="Icon" className="button-icon" />
    </button>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="nav-header">Quick Links</h2>
          <QuickLinksButton text="Track My Order" />
          <QuickLinksButton text="My Account" />
          <QuickLinksButton text="Return Policy" />
          <QuickLinksButton text="Shipping Policy" />
        </div>
        <div className="footer-section">
          <h2 className="nav-header">Customer Care</h2>
          <a href="#">My Account</a>
          <a href="#">Shipping Info</a>
          <a href="#">Return Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div className="footer-section">
          <h2 className="nav-header">About Lavan</h2>
          <a href="#">Mission</a>
          <a href="#">About the Founder</a>
          <a href="#">Health Benefits</a>
          <a href="#">Sustainability</a>
        </div>

        <div className="contact-section">
          <h2 className="nav-header">Join Our Newsletter</h2>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="submit-button">Submit</button>
          </div>
          <h2 className="nav-header">Sign Up for SMS Updates</h2>
          <div className="input-container">
            <input type="tel" placeholder="Enter your phone number" />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

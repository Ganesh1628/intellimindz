import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter, // Added Twitter icon
} from "react-icons/fa";
import "./TopHeader.css"; // Assuming your styles are here

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-left">
        <span>For Enquiry : </span>
        <FaPhone className="topheader-icon" />
        <a href="tel:+919655877677" className="topheader-link">
          +91 9655877677
        </a>
        <span className="topheader-link"> / </span>
        <FaPhone className="topheader-icon" />
        <a href="tel:+919655877577" className="topheader-link">
          +91 9655877577
        </a>
        <span className="topheader-link"> / </span>
        <FaEnvelope className="topheader-icon" />
        <a href="mailto:info@intellimindz.com" className="topheader-link">
          info@intellimindz.com
        </a>
      </div>

      <div className="top-header-right">
        <a
          href="https://facebook.com" // Replace with your actual Facebook page URL
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook" // Added aria-label for accessibility
        >
          <FaFacebookF className="topheader-icon" />
        </a>
        <a
          href="https://instagram.com" // Replace with your actual Instagram page URL
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram" // Added aria-label for accessibility
        >
          <FaInstagram className="topheader-icon" />
        </a>
        <a
          href="https://youtube.com" // Replace with your actual YouTube channel URL
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube" // Added aria-label for accessibility
        >
          <FaYoutube className="topheader-icon" />
        </a>
        {/* Added Twitter Icon Link */}
        <a
          href="https://twitter.com" // Replace with your actual Twitter profile URL
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter" // Added aria-label for accessibility
        >
          <FaTwitter className="topheader-icon" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
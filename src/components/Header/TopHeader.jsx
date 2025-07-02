import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import "./TopHeader.css";

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

      <div className="top-header-right-social">
        <a
          href="https://facebook.com"
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="topheader-icon" />
        </a>
        <a
          href="https://instagram.com"
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="topheader-icon" />
        </a>
        <a
          href="https://youtube.com"
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="topheader-icon" />
        </a>
        <a
          href="https://twitter.com"
          className="topheader-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="topheader-icon" />
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
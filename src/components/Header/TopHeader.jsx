import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header-left">
        <FaEnvelope className="topheader-icon" />
        <a href="mailto:info@intellimindz.com" className="topheader-link">
          info@intellimindz.com
        </a>
      </div>

      <div className="top-header-right">
        <span>For Job Support:</span>

        <FaPhone className="topheader-icon" />
        <a href="tel:+919655877577" className="topheader-link">
          +91 9655877677
        </a>

        <FaPhone className="topheader-icon" />
        <a href="tel:+919655877577" className="topheader-link">
          +91 9655877577
        </a>
      </div>
    </div>
  );
};

export default TopHeader;

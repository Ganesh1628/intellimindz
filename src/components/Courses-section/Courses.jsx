import React from 'react';
import { FaBook, FaProjectDiagram, FaTasks, FaCertificate, FaFileAlt, FaUserCheck, FaBullhorn, FaHandsHelping } from 'react-icons/fa';
import './courses.css';

const Slide = () => {
  return (
    <div className="slide-container">
      {/* Centered Title */}
      <div className="slide-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <span className="color1">Our</span>
        <span className="color2">Training</span>
        <span className="color3">Approach</span>
      </div>

      {/* Grid Section */}
      <div className="grid-container" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <div className="slide-section">
          <FaBook className="icon" />
          <h5>Theory</h5>
        </div>
        <div className="slide-section">
          <FaProjectDiagram className="icon" />
          <h5>Project Work</h5>
        </div>
        <div className="slide-section">
          <FaTasks className="icon" />
          <h5>Assignments</h5>
        </div>
        <div className="slide-section">
          <FaCertificate className="icon" />
          <h5>Certification</h5>
        </div>
        <div className="slide-section">
          <FaFileAlt className="icon" />
          <h5>Resume Preparation</h5>
        </div>
        <div className="slide-section">
          <FaUserCheck className="icon" />
          <h5>Interview Preparation</h5>
        </div>
        <div className="slide-section">
          <FaBullhorn className="icon" />
          <h5>Resume Marketing</h5>
        </div>
        <div className="slide-section">
          <FaHandsHelping className="icon" />
          <h5>Placement Support</h5>
        </div>
      </div>
    </div>
  );
};

export default Slide;

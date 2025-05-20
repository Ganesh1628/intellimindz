import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaEnvelope } from "react-icons/fa";
import MessageIcon from "./MessageIcon"; // Import the Message Icon component
import homePageIntro from "../../assests/images/home-page-into.png";
import "./hero-section.css";
import { width } from "@mui/system";
import { color } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <Container>
        {/* Message Box Icon on the Left */}
        {/* <div className="message-icon-container">
          <MessageIcon />
        </div> */}

        {/* Search Bar & Email */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search courses..." />
          <button className="search-button">Search</button>

          {/* Email with Icon */}
          {/* <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">info@intellimindz.com</span>
          </div> */}
        </div>

{/* Main Content Section */}
        <Row className="content-section">
          {/* Left Side - Paragraph */}
          <Col lg="6" md="12">
            <div className="header_content" style={{ marginLeft: "-150px", fontFamily: "DM Sans, sans-serif" /* Adjust as needed */ }}>
              {/* css styling for the header is on index.css */}
              <h1>
  The Software Training{" "}
  <span style={{ color: "orange", fontFamily: "DM Sans, sans-serif" }}>
    Institute
  </span>
</h1>
            </div>
            <div className="hero__content" style={{ marginTop: "20px", textAlign: "left", }}> {/* Ensure text alignment */}
              <p className="mb-10" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Welcome to Intellimindz Training Institute, Chennai's premier destination for comprehensive IT and non-IT training programs. We are committed to empowering individuals with the cutting-edge skills and industry-relevant knowledge needed to thrive in today's competitive landscape. Whether you're looking to build a career in the dynamic IT sector or enhance your expertise in crucial non-IT domains, our expert instructors and practical learning methodologies will guide you towards achieving your professional aspirations in Chennai and beyond.
              </p>
              {/* <p className="mb-11" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Catering to diverse learners, Intellimindz provides training in areas such as IT, software development, digital marketing, and data analytics, among others. The institute's flexible learning modes, including online and classroom training, make it accessible to a global audience. With a reputation for excellence, Intellimindz bridges the gap between academic knowledge and industry requirements, fostering growth and innovation for individuals and organizations alike.
              </p> */}
              {/* <p className="mb-10" style={{ width: "620px", textAlign: "left", fontFamily: "Poppins, sans-serif" }}>
                We offer flexible online training across various time zones, catering to learners in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and beyond. At Intelli Mindz Academy, we focus on both technical skills and practical knowledge, empowering students to confidently step into the job market and secure placements in top multinational companies (MNCs).
              </p> */}
              <div className="start-course-container">
                <button className="start-course-btn">Start Course</button>
              </div>
            </div>
          </Col>


<Col lg="6" md="12">
  <div className="form-box-enroll" style={{ marginTop: "230px", textAlign: "center" }}>
    <img
      src={homePageIntro}
      alt="Enrollment Preview"
      style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
    />
  </div>
</Col>
</Row>

        {/* Stats Section */}
{/* Stats Section */}
<Row className="stats-section">
  <Col lg="3" md="6" sm="6" className="mb-4">
    {/* <div className="stat-card"> */}
      <div className="stat-icon">
        <i className="fas fa-book-open"></i>
      </div>
      <h3 className="stat-number">150+</h3>
      <p className="stat-title">Tailor-Made Courses</p>
    {/* </div> */}
  </Col>
  <Col lg="3" md="6" sm="6" className="mb-4">
    {/* <div className="stat-card"> */}
      <div className="stat-icon">
        <i className="fas fa-chalkboard-teacher"></i>
      </div>
      <h3 className="stat-number">75+</h3>
      <p className="stat-title">Expert Tutors</p>
    {/* </div> */}
  </Col>
  <Col lg="3" md="6" sm="6" className="mb-4">
    {/* <div className="stat-card"> */}
      <div className="stat-icon">
        <i className="fas fa-laptop-code"></i>
      </div>
      <h3 className="stat-number">100+</h3>
      <p className="stat-title">Hands-On Sessions</p>
    {/* </div> */}
  </Col>
  <Col lg="3" md="6" sm="6" className="mb-4">
    {/* <div className="stat-card"> */}
      <div className="stat-icon">
        <i className="fas fa-user-graduate"></i>
      </div>
      <h3 className="stat-number">15,500+</h3>
      <p className="stat-title">Successful Careers</p>
    {/* </div> */}
  </Col>
</Row>
      </Container>
    </section>
  );
};

export default HeroSection;

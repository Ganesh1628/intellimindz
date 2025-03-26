import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaEnvelope } from "react-icons/fa";
import MessageIcon from "./MessageIcon"; // Import the Message Icon component
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
        <div className="message-icon-container">
          <MessageIcon />
        </div>

        {/* Search Bar & Email */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search courses..." />
          <button className="search-button">Search</button>

          {/* Email with Icon */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">info@intellimindz.com</span>
          </div>
        </div>

        {/* Main Content Section */}
        <Row className="content-section">
          {/* Left Side - Paragraph */}
          <Col lg="6" md="12">
            <div className="header_content" style={{ marginLeft: "-60px",fontFamily: "DM Sans, sans-serif" /* Adjust as needed */ }}>
            {/* css styling for the header is on index.css */}
              <h1>
                Welcome to Intelli
                <span style={{ color: "orange", fontFamily: "DM Sans, sans-serif" }}>
                  Mindz
                </span>
              </h1>
            </div>
            <div className="hero__content" style={{ marginTop: "20px", textAlign: "left", }}> {/* Ensure text alignment */}
              <p className="mb-10" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Intelli Mindz Academy is a premier training institute dedicated to providing top-quality Online and Classroom training in software, spoken English, and competitive exam preparation.
              </p>
              <p className="mb-11" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Our courses are designed with a 100% practical and hands-on approach, ensuring students gain real-world experience. With a portfolio of 100+ courses, we are led by industry experts with over a decade of experience. Each course follows a structured curriculum, giving students a clear learning roadmap.
              </p>
              {/* <p className="mb-10" style={{ width: "620px", textAlign: "left", fontFamily: "Poppins, sans-serif" }}>
                We offer flexible online training across various time zones, catering to learners in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and beyond. At Intelli Mindz Academy, we focus on both technical skills and practical knowledge, empowering students to confidently step into the job market and secure placements in top multinational companies (MNCs).
              </p> */}
              <div className="start-course-container">
                <button className="start-course-btn">Start Course</button>
              </div>
            </div>
          </Col>


          {/* Right Side - Enrollment Form */}
          <Col lg="6" md="12">
            {/* <div className="enroll_section"> */}
            <div className="form-box" style={{ marginTop: "230px" }}>
              <h2 id="enroll_h2" style={{ fontSize: "27px" }}>Enroll Now</h2>
              <p id="enroll_p" style={{ color: "black", fontSize: "15px" }}>and We will get back to you soon!</p>
              <form>
                <div className="input-container">
                  <div className="column">
                    <div className="input-box">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="input-box">
                      <input type="email" placeholder="E-Mail" />
                    </div>
                  </div>

                  <div className="column">
                    <div className="input-box">
                      <input type="text" placeholder="Course" />
                    </div>

                    <div className="input_select">
                      <select defaultValue="">
                        <option value="" disabled>Select Branch *</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Tirupur">Tirupur</option>
                      </select>
                    </div>

                    <div className="input_select" style={{ color: "black" }}>
                      <select defaultValue="">
                        <option value="" disabled>Select Batch *</option>
                        <option value="Immediately">Immediately</option>
                        <option value="In 2 Weeks">In 2 Weeks</option>
                        <option value="In a Month">In a Month</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="radio-group">
                  <div id="trainingmode">Training Mode</div>
                  <label className="label">
                    <input type="radio" name="preference" value="online" />
                    Online
                  </label>
                  <label className="label">
                    <input type="radio" name="preference" value="offline" />
                    Offline
                  </label>
                </div>
                <button type="submit" className="register-btn">
                  Submit Now
                </button>
              </form>
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="placement-stats mt-4" style={{fontFamily: "DM Sans, sans-serif"}}> {/* You can change mt-4 to mt-5 for more spacing */}
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>150+</h2>
              <p>Tailor-Made Courses</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>75+</h2>
              <p>Expert Real-Time Tutors</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>100+</h2>
              <p>Hands-On Sessions</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>15500+</h2>
              <p>Successful Careers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

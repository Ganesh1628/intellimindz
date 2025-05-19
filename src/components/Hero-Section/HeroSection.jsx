import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaEnvelope } from "react-icons/fa";
import MessageIcon from "./MessageIcon";
import "./hero-section.css";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Intersection logic here if needed
        }
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <Container>
        <div className="message-icon-container">
          <MessageIcon />
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search courses..." />
          <button className="search-button">Search</button>

          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">info@intellimindz.com</span>
          </div>
        </div>

        <Row className="content-section">
          <Col lg="6" md="12">
            <div className="header_content" style={{ marginLeft: "-150px", fontFamily: "DM Sans, sans-serif" }}>
              <h1>
                Welcome to Intelli
                <span style={{ color: "orange", fontFamily: "DM Sans, sans-serif" }}>
                  Mindz
                </span>
              </h1>
            </div>
            <div className="hero__content" style={{ marginTop: "20px", textAlign: "left" }}>
              <p className="mb-10" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Intellimindz is a premier training institute known for delivering high-quality, industry-focused training programs across various domains. With a strong emphasis on practical learning, the institute offers courses tailored to current industry standards, ensuring students gain hands-on experience. Intellimindz's expert trainers and comprehensive syllabi help individuals and professionals enhance their skill sets, empowering them to excel in their careers across global markets.
              </p>
              <p className="mb-11" style={{ width: "620px", textAlign: "left", fontFamily: "DM Sans, sans-serif" }}>
                Catering to diverse learners, Intellimindz provides training in areas such as IT, software development, digital marketing, and data analytics, among others. The institute's flexible learning modes, including online and classroom training, make it accessible to a global audience. With a reputation for excellence, Intellimindz bridges the gap between academic knowledge and industry requirements, fostering growth and innovation for individuals and organizations alike.
              </p>
              <div className="start-course-container">
                <button className="start-course-btn">Start Course</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="12">
            {/* Placeholder for image or additional content */}
            <div className="image-placeholder" style={{ marginTop: "230px" }}>
              {/* You can add your image here later */}
            </div>
          </Col>
        </Row>

        <Row className="placement-stats mt-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
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

import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css"; // Ensure CSS is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerQuickLinks = [
  { display: "Home", url: "#" },
  { display: "Contact us", url: "#" },
  { display: "Refund policy", url: "#" },
  { display: "Certification policy", url: "#" },
];

const trendingCourses = [
  "JAVA Training ",
  "Software Testing Training ",
  "Selenium Training ",
  "Python Training ",
  "Data Science Course ",
  "Digital Marketing Course ",
  "DevOps Training ",
  "German Classes ",
  "Artificial Intelligence Course ",
  "AWS Training ",
  "UI UX Design course ",
  "Tally course ",
  "Full Stack Developer course ",
  "Salesforce Training ",
  "ReactJS Training ",
  "CCNA course ",
  "Ethical Hacking course ",
  "RPA Training ",
  "Cyber Security Course ",
  "IELTS Coaching ",
  "Graphic Design Courses ",
  "Spoken English Classes ",
  "Data Analytics Course ",
];

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#000000", color: "white" }}>
      <Container fluid className="full-width-container">
        <Row>
          {/* Company Info */}
          <Col lg="3" md="6" className="mb-4">
            <h2 className="footer__logo" style={{ color: "white" }}>
              Intelli<span style={{ color: "orange" }}>Mindz</span>
            </h2>
            <h8 className="link__list footer-text" style={{ fontFamily: "DM Sans, sans-serif", color: "white" }}>
              Intelli Mindz Academy is a leading training institute specialized
              in providing both Online and Classroom training for software,
              spoken English, and Competitive Exams.
            </h8>
          </Col>

          {/* Quick Links */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold footer-header" style={{ color: "white" }}>Explore</h4>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link__item footer-text"
                  style={{ color: "white" }}
                >
                  <a href={item.url} className="footer-link" style={{ color: "white" }}>
                    {item.display}
                  </a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Training Information */}
          <Col lg="3" md="6" className="mb-4" style={{ fontFamily: "DM Sans, sans-serif", color: "white" }}>
            <h4 className="fw-bold footer-header" style={{ color: "white" }}>Reach Us</h4>
            <ListGroup className="link__list">
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>7/15, 2nd Floor</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>Velachery Rd, Medavakkam</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>United Colony,</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>Medavakkam,</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>Chennai, TN - 600100</ListGroupItem>
            </ListGroup>
          </Col>

          {/* Contact Information */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold footer-header" style={{ color: "white" }}>Get in Touch</h4>
            <ListGroup className="link__list">
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>📞 +91 96558 77677</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>📞 +91 96558 77577</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item footer-text" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "white", marginRight: "10px", fontFamily: "DM Sans, sans-serif" }}
                />
                info@intellimindz.com
              </ListGroupItem>
              <p className="link__list footer-text" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400", color: "white" }}>
                Follow us on social media
              </p>
            </ListGroup>
            <div className="follows">
              <span>
                <a href="https://facebook.com">
                  <i className="ri-facebook-line social-icon-facebook"></i>
                </a>
              </span>
              <span>
                <a href="https://instagram.com">
                  <i className="ri-instagram-line social-icon-instagram"></i>
                </a>
              </span>
              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line social-icon-linkedin"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line social-icon-twitter"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>

        {/* Trending Courses Section */}
        <hr className="trending-divider" style={{ borderColor: "white" }} />
        <Row className="trending-courses-section">
          <Col>
            <h4 className="text-center fw-bold footer-header" style={{ color: "white" }}>Trending Courses</h4>
            <div className="trending-courses">
              {trendingCourses.map((course, index) => (
                <span key={index} className="trending-course-item footer-text" style={{ color: "white" }}>
                  {course} |{" "}
                </span>
              ))}
            </div>
            <div className="text-center">
              <button
                className="read-more footer-link"
                style={{
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: "white",
                  font: "inherit",
                }}
                onClick={() => {
                  // Add your click handler if needed
                }}
              >
                Read More
              </button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div className="copyright-section" style={{ fontFamily: "DM Sans, sans-serif", color: "white" }}>
        <p>© Copyrights 2024 @ IntelliMindz IT Trainings</p>
      </div>
    </footer>
  );
};

export default Footer;

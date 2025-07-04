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
  "Python Training in Chennai",
  "Java Training in Chennai",
  "Selenium Training in Chennai",
  "AWS Training in Chennai",
  "Devops Training in Chennai",
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="full-width-container">
        <Row className="footer-top-row">
          {/* Company Info - Card style */}
          <Col lg="3" md="6" className="mb-4 d-flex justify-content-center align-items-start">
            <div className="company-info-card">
              <h2 className="footer__logo">
                Intelli<span style={{ color: "orange" }}>Mindz</span>
              </h2>
              <p className="company-card-description">
                IntelliMindz is a leading training institute based in Chennai,
                specializing in a wide array of IT courses designed to equip
                individuals with industry-relevant skills. They focus on practical
                learning, experienced instructors, and comprehensive course
                materials.
              </p>
            </div>
          </Col>

          {/* Quick Links - Content Centered */}
          <Col lg="3" md="6" className="mb-4 footer-column-centered">
            <h4 className="fw-bold" style={{ color: "#fafafa" }}>Quick Links</h4>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url} style={{ color: "#fafafa" }}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Contact Info - Content Centered */}
          <Col lg="3" md="6" className="mb-4 footer-column-centered" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <h4 className="fw-bold" style={{ color: "#fafafa" }}>Contact Info</h4>
            <ListGroup className="link__list">
              <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#fafafa" }}>
                📞 +91 9655877677 / +91 9655877577
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item contact-email-item" style={{ color: "#fafafa" }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fafafa", marginRight: "10px" }} />
                info@intellimindz.com
              </ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#fafafa" }}>
                7/15, 2nd Floor Velachery Rd, Medavakkam United Colony, Medavakkam,
                Chennai, TN - 600100
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Follow us on - Content Centered, LinkedIn replaced with YouTube */}
          <Col lg="3" md="6" className="mb-4 footer-column-centered">
            <h4 className="fw-bold" style={{ color: "#fafafa" }}>Follow us on</h4>
            <div className="follows">
              <span>
                <a href="https://www.facebook.com/intellimindz.in" aria-label="Visit our Facebook page"> {/* Replace with actual URL */}
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/intellimindz.in/" aria-label="Visit our Instagram page"> {/* Replace with actual URL */}
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://www.youtube.com/channel/UCRm53AkPibI27JxzL6jw7Uw" aria-label="Visit our YouTube page"> {/* Replace with actual URL */}
                  <i className="ri-youtube-line"></i> {/* YouTube icon added */}
                </a>
              </span>
              <span>
                <a href="twitter.com/intellimindz_in" aria-label="Visit our Twitter page"> {/* Replace with actual URL */}
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>

        {/* Trending Courses Section */}
        <hr className="trending-divider" />
        <Row className="trending-courses-section">
          <Col>
            <h4 className="text-center fw-bold" style={{ color: "#fafafa" }}>Trending Courses</h4>
            <div className="trending-courses">
              {trendingCourses.map((course, index) => (
                <span key={index} className="trending-course-item">
                  {course}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section - Sticks to Bottom */}
      <div className="copyright-section" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <p>
          © Copyrights 2024 @ IntelliMindz IT Trainings
        </p>
      </div>
    </footer>
  );
};

export default Footer;
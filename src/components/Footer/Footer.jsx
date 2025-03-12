import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  { display: "Home", url: "#" },
  { display: "Contact us", url: "#" },
  { display: "Refund policy", url: "#" },
  { display: "Certification policy", url: "#" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Company Info */}
          <Col lg="3" md="6" className="mb-4">
            <h1 className="footer__logo">
              Intelli<span style={{ color: "orange" }}>Mindz</span>
            </h1>
            <p style={{ color: "black" }}>
              Intelli Mindz Academy is a leading training institute specialized
              in providing both Online and Classroom training for software,
              spoken English, and Competitive Exams.
            </p>
            <p className="mb-0" style={{ color: "black" }}>
              Follow us on social media
            </p>
            <div className="follows">
            <span>
  <a href="https://facebook.com">
    <i className="ri-facebook-line" style={{ color: "#eb0000" }}></i>
  </a>
</span>

<span>
  <a href="https://instagram.com">
    <i className="ri-instagram-line" style={{ color: "#eb0000" }}></i>
  </a>
</span>

              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line" style={{ color: "#eb0000" }}></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line" style={{ color: "#eb0000" }}></i>
                </a>
              </span>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold" style={{ color: "black" }}>Explore</h4>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url} style={{ color: "black" }}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Training Information */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold" style={{ color: "black" }}>Training Courses</h4>
            <p style={{ color: "black" }}>AWS Online Training</p>
            <p style={{ color: "black" }}>DevOps Online Training</p>
            <p style={{ color: "black" }}>React Online Course</p>
            <p style={{ color: "black" }}>Python Training</p>
            <p style={{ color: "black" }}>Selenium Training</p>
          </Col>

          {/* Contact Information */}
          <Col lg="3" md="6">
            <h4 className="fw-bold" style={{ color: "black" }}>Get in Touch</h4>
            <p style={{ color: "black" }}>+91 9655877677</p>
            <p style={{ color: "black" }}>+91 9655877577</p>
            <p style={{ color: "black" }}>info@intellimindz.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

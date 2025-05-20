import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css"; // Ensure CSS is imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fontWeight } from "@mui/system";

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
    <footer className="footer">
      <Container fluid className="full-width-container">
        <Row>
          {/* Company Info */}
          <Col lg="3" md="6" className="mb-4">
            <h2 className="footer__logo">
              Intelli<span style={{ color: "orange" }}>Mindz</span>
            </h2>
            <h8 className="link__list" style={{fontFamily: "DM Sans, sans-serif"}}>IntelliMindz is a leading training institute based in Chennai, specializing in a wide array of IT courses designed to equip individuals with industry-relevant skills. They focus on practical learning, experienced instructors, and comprehensive course materials.</h8>
            {/* <ListGroup className="link__list">
              Intelli Mindz Academy is a leading training institute specialized
              in providing both Online and Classroom training for software,
              spoken English, and Competitive Exams.
            </ListGroup> */}
          </Col>

          {/* Quick Links */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold" style={{ color: "fafafa" }}>Quick Links</h4>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url} style={{ color: "fafafa" }}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

{/* Updated Contact Info */}
<Col lg="3" md="6" className="mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>
  <h4 className="fw-bold" style={{ color: "#fafafa" }}>Contact Info</h4>
  <ListGroup className="link__list">
    <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#fafafa" }}>
      📞 +91 9655877677 / +91 9655877577
    </ListGroupItem>
    <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#fafafa" }}>
      <FontAwesomeIcon icon={faEnvelope} style={{ color: "black", marginRight: "10px" }} />
      info@intellimindz.com
    </ListGroupItem>
    <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#fafafa" }}>
      7/15, 2nd Floor Velachery Rd, Medavakkam United Colony, Medavakkam,
      Chennai, TN - 600100
    </ListGroupItem>
  </ListGroup>

  {/* <p className="link__list" style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}>Follow us on social media</p>

  <div className="follows">
    <span><a href="https://facebook.com"><i className="ri-facebook-line" style={{ color: "#3b5998" }}></i></a></span>
    <span><a href="https://instagram.com"><i className="ri-instagram-line" style={{ color: "#f81c1c" }}></i></a></span>
    <span><a href="https://linkedin.com"><i className="ri-linkedin-line" style={{ color: "#0077b5" }}></i></a></span>
    <span><a href="https://twitter.com"><i className="ri-twitter-line" style={{ color: "#1da1f2" }}></i></a></span>
  </div> */}
</Col>


          {/* Contact Information */}
          <Col lg="3" md="6" className="mb-4">
            <h4 className="fw-bold" style={{ color: "#fafafa" }}>Follow us on</h4>
            <ListGroup className="link__list">
              {/* <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#000000" }}>📞 +91 96558 77677</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#000000" }}>📞 +91 96558 77577</ListGroupItem>
              <ListGroupItem className="border-0 ps-0 link__item" style={{ color: "#000000" }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "black", marginRight: "10px", fontFamily: "DM Sans, sans-serif"  }} />
                info@intellimindz.com
              </ListGroupItem> */}
              {/* <p className="link__list" style={{fontFamily: "DM Sans, sans-serif", fontWeight:"400"}}>Follow us on</p> */}
            </ListGroup>


            {/* <p className="mb-0" style={{ color: "black" }}>
              Follow us on social media
            </p> */}
            <div className="follows">
              <span>
                <a href="https://facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="https://instagram.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="https://linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>
        </Row>

        {/* Trending Courses Section */}
        <hr className="trending-divider" /> {/* Added line here */}
        <Row className="trending-courses-section">
          <Col>
            <h4 className="text-center fw-bold" style={{ color: "fafafa" }}>Trending Courses</h4>
            <div className="trending-courses">
              {trendingCourses.map((course, index) => (
                <span key={index} className="trending-course-item">{course} | </span>
              ))}
            </div>
            <div className="text-center">
              <a href="#" className="read-more" style={{ color: "fafafa", textDecoration: "underline" }}>
                Read More
              </a>
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

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import { FaChalkboardTeacher, FaMoneyBillAlt, FaLaptop, FaBriefcase } from "react-icons/fa";
import aboutUsImage from "F:/Intellimindz_UI/src/assests/images/about_us.png"; // Adjust the path as necessary

const ChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="feature-icon" />,
      title: "Expert Trainers",
      description:
        "Our trainers are industry experts who teach you both the theory and real-world skills you need for a successful career.",
    },
    {
      icon: <FaMoneyBillAlt className="feature-icon" />,
      title: "Affordable Fees",
      description:
        "We believe quality education should be affordable. Our courses start at just ₹4999, making them accessible to everyone!",
    },
    {
      icon: <FaLaptop className="feature-icon" />,
      title: "Modern Facilities",
      description:
        "Learn in a state-of-the-art environment with modern classrooms, high-speed internet, and the latest software to enhance your learning experience.",
    },
    {
      icon: <FaBriefcase className="feature-icon" />,
      title: "Job Placement Assistance",
      description:
        "We help you get your dream job with full placement support! Get ready with our aptitude classes and mock interviews designed to kick start your career.",
    },
  ];

  return (
    <section className="choose-us" style={{ backgroundColor: "#f0f0f0", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Why Choose The Best Software Training Institute?</h2>
        <Row>
          <Col lg="8" md="12">
            <Row>
              {features.map((feature, index) => (
                <Col lg="6" md="6" key={index}>
                  <div className="choose-box">
                    <div className="d-flex align-items-center">
                      {feature.icon}
                      <h4 className="ms-3">{feature.title}</h4>
                    </div>
                    <p>{feature.description}</p>
                    <a href="#view-more" className="view-more-link">
                      View More
                    </a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg="4" md="12" className="d-flex align-items-center">
            <img src={aboutUsImage} alt="About Us" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
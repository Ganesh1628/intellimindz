import React from "react";
// Make sure to install reactstrap and react-icons if you haven't:
// npm install reactstrap react-icons
// or
// yarn add reactstrap react-icons
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css"; // Assuming your CSS file is named choose-us.css and in the same folder
import { FaChalkboardTeacher, FaMoneyBillAlt, FaLaptop, FaBriefcase } from "react-icons/fa";

// IMPORTANT: This path must be correct relative to this JS file in your project.
// Please verify the path and the spelling of 'assests' or 'assets'.
import homeImage from '../../assests/images/home-intro-page.png';

const ChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="feature-icon" />,
      title: "Expert Trainers",
      description:
        "Our instructors are seasoned industry professionals who provide in-depth theoretical knowledge and practical skills essential for a thriving career.",
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
      title: "Placement Assistance",
      description:
        "We help you get your dream job with full placement support! Get ready with our aptitude classes and mock interviews designed to kick start your career.",
    },
  ];

  return (
    // Using class from CSS for section styling, inline style for background color
    <section className="choose-us-section" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <h2 className="section-title text-center"> {/* Using class from CSS */}
          Why Choose Intellimindz Training Institute?
        </h2>
        <Row className="align-items-center"> {/* Vertical alignment for columns */}
          <Col lg="8" md="12" className="mb-4 mb-lg-0"> {/* Margin bottom for mobile */}
            <Row>
              {features.map((feature, index) => (
                <Col lg="6" md="6" key={index} className="mb-4"> {/* Margin bottom to feature boxes */}
                  {/* Using class from CSS for feature box styling */}
                  <div className="choose-box">
                    <div className="d-flex align-items-center mb-3">
                      {feature.icon} {/* feature-icon class is applied directly in features array */}
                      <h4 className="feature-title ms-3">{feature.title}</h4> {/* Using class from CSS */}
                    </div>
                    <p className="feature-description">{feature.description}</p> {/* Using class from CSS */}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg="4" md="12" className="d-flex justify-content-center align-items-center">
            {/* Image column - using class from CSS for image styling */}
            <img
              src={homeImage}
              alt="Why Choose Intellimindz" // Descriptive alt text
              className="img-fluid choose-us-image rounded" // img-fluid for responsiveness, choose-us-image for custom styles
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if placeholder also fails
                // You can replace the src below with a more generic placeholder or leave it empty
                // if the image is critical and should not show a broken icon.
                e.target.src="https://placehold.co/600x450/EEEEEE/CC0000?text=Image+Load+Error";
                console.error("Error loading homeImage:", homeImage, e);
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
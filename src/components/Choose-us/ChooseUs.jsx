import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./choose-us.css";
import {FaChalkboardTeacher, FaUsers, FaBriefcase } from "react-icons/fa";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher className="feature-icon" />, 
      title: "More than 10 years of experience",
      description:
        "Online and classroom training, providing flexibility with weekday and weekend sessions to accommodate different schedules. With a proven track record of training over 100,000 students and achieving a 90% success rate, our job-oriented courses are designed and delivered by industry experts, ensuring practical and career-focused learning.",
    },
    {
      icon: <FaUsers className="feature-icon" />, 
      title: "Expert Trainers & Mock Interviews",
      description:
        "Individual attention by keeping batch sizes small. Our trainers are real-time industry professionals, bringing practical insights into every session. To help students prepare for job opportunities, we offer mock interview sessions after course completion. Our job-oriented courses are carefully designed and hands-on training for career success.",
    },
    {
      icon: <FaBriefcase className="feature-icon" />, 
      title: "Real-time Projects & Resume Guidance",
      description:
        "hands-on project experience and assist with environment setup, ensuring practical exposure to real-world scenarios. Additionally, we offer resume preparation and interview guidance for all trainees, helping them confidently step into the job market, designed and taught by industry experts, equip learners with the skills needed for career success.",
    },
  ];

  return (
    <section className="choose-us" style={{ backgroundColor: "#f0f0f0", padding: "50px 0" }}>
      <Container>
        <h2 className="text-center mb-4">Where Quality Meets Trust</h2>
        <Row>
          {features.map((feature, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="choose-box">
                {feature.icon}
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
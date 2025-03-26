import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";

import pythonLogo from "../../assests/images/python.png";
import awsLogo from "../../assests/images/aws.png";
import cloudLogo from "../../assests/images/cloud_computing.png";
import databaseLogo from "../../assests/images/database.png"; 
import ui from "../../assests/images/UI.png";
import jsLogo from "../../assests/images/javascript.png";
import reactlogo from "../../assests/images/react.png";
import mysql from "../../assests/images/sql.png";
import machine_learning from "../../assests/images/machine_learning.png";
import software_testing from "../../assests/images/software_testing.png";
import mobile_dev from "../../assests/images/mobile_dev.png";
import data_science from "../../assests/images/data_science.png";

// Course data with correct icons
const courses = [
  { img: awsLogo, title: "Java Full Stack" },
  { img: pythonLogo, title: "Python Full Stack" },
  { img: cloudLogo, title: "Cloud Computing" },
  { img: mobile_dev, title: "Mobile Dev" },
  { img: databaseLogo, title: "UI Development" },
  { img: ui, title: "Web Designing" },
  { img: jsLogo, title: "Digital Marketing" },
  { img: reactlogo, title: "React" },
  { img: mysql, title: "SQL" },
  { img: machine_learning, title: "Machine Learning" },
  { img: software_testing, title: "Software Testing" },
  { img: data_science, title: "Data science" },
];
// Web Designing
const Company = () => {
  return (
    // <section className="courses-section">
      <Container>
        <Row>
          <Col className="text-center" >
            <h2 className="courses-title" style={{fontFamily: "DM Sans, sans-serif"}}>
              Our Courses
            </h2>
          </Col>
        </Row>
        <Row>
          {courses.map((course, index) => (
            <Col lg="3" md="4" sm="6" xs="12" key={index} className="course-card">
              <div className="course-box">
                <img src={course.img} alt={course.title} className="course-img" />
                <div className="course-title">{course.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    // </section>
  );
};

export default Company;

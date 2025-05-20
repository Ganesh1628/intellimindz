import React, { useState } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Shravan",
      role: "Digital Marketer",
      review: "Hi everyone, Shravan here. I recently completed my Scrum Master certification at IntelliMindz in Chennai, and it was a fantastic experience. The instructors were knowledgeable and the practical sessions were incredibly beneficial in understanding the Scrum framework. I highly recommend IntelliMindz for Scrum Master training." 
    },
    {
      name: "Karthik",
      role: "Software Engineer",
      review: "Hello, I'm Karthik. I enrolled in the DevOps Online Certification Training at IntelliMindz, and I'm thoroughly impressed. The trainer did an excellent job of explaining complex DevOps concepts from the ground up. Thanks to their comprehensive training, I'm now working successfully as a DevOps Consultant. Thank you, IntelliMindz!" 
    },
    {
      name: "Amritha",
      role: "Data Scientist",
      review: "I chose IntelliMindz for my Informatica training, and it proved to be a great decision. The Informatica Online Training was very hands-on, which significantly aided my understanding and skill development. I truly appreciate the quality of training provided by Intellimindz. It was very helpful!" 
    },
    {
      name: "Guna",
      role: "Marketing Manager",
      review: "Hi, this is Guna. I successfully completed the Selenium course at IntelliMindz in Chennai. The course structure was well-organized, and the practical exercises gave me the confidence to work on automation projects. I found the learning environment to be supportive and engaging. A great learning experience overall!" 
    },
    {
      name: "Mani",
      role: "Content Creator",
      review: "Greetings, I'm Mani. My experience with the Selenium training at IntelliMindz academy in Chennai was excellent. The trainers were very supportive, and the curriculum covered all the essential aspects of Selenium. I feel well-prepared for my career thanks to the skills I gained here. I highly recommend IntelliMindz for Selenium training."
    }
    // {
    //   name: "Vikram",
    //   role: "Entrepreneur",
    //   review: "Running my own business, I needed to understand digital marketing to grow my online presence. Indras Academy's course gave me all the tools I needed at an affordable price."
    // }
  ];

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Be inspired by the accomplishments of our students who turned their passion into successful careers.
          </p>
        </div>

        <Row className="align-items-center">
          <Col xs="1" className="text-center">
            <button className="nav-arrow" onClick={handlePrev}>
              &#10094;
            </button>
          </Col>

          <Col xs="10">
            <Row className="equal-height">
              {getVisibleTestimonials().map((testimonial, index) => (
                <Col md="4" key={index} className="mb-4 d-flex">
                  <div className="testimonial-card-home w-100">
                    <div className="testimonial-content-home d-flex flex-column h-100">
                      <p className="testimonial-text-home flex-grow-1">
                        <span className="quote">"</span>
                        {testimonial.review}
                        <span className="quote">"</span>
                      </p>
                      
                      <div className="testimonial-author mt-auto">
                        <div className="author-divider"></div>
                        <h5 className="author-name">{testimonial.name}</h5>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs="1" className="text-center">
            <button className="nav-arrow" onClick={handleNext}>
              &#10095;
            </button>
          </Col>
        </Row>

        <div className="testimonial-dots text-center mt-4">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === Math.floor(currentIndex / 3) ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * 3)}
            ></span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
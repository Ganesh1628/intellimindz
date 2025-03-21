import React, { useState, useEffect, useRef } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa"; // Import star icon

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0.0); // State for the rating count
  const testimonialsPerPage = 1;
  const ratingRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const testimonials = [
    {
      name: "T Chandini",
      review:
        "Being in Sunnehalf gave me great pleasure and competencies to rediscover my professional state. The trainers here are highly supportive to satisfy the scholars targets; it is their warmness and project to make a student a complete professional. I categorical my gratitude to the entire PILLARS of Sunnehalf for displaying up.",
    },
    {
      name: "M Yougandhar",
      review:
        "The Institute imparts enterprise primary coaching on the modern day upbeat technologies which has helped me to pursue my dream within the right path. The placement division works in step with the pursuits of the candidates and pitches in for help throughout placement programs.",
    },
  ];

  // Observe when the component enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 } // Start when 50% of the section is visible
    );

    if (ratingRef.current) {
      observer.observe(ratingRef.current);
    }

    return () => {
      if (ratingRef.current) {
        observer.unobserve(ratingRef.current);
      }
    };
  }, []);

  // Rating counting logic (only when animation should start)
  useEffect(() => {
    if (!startAnimation) return;

    let interval = setInterval(() => {
      setRating((prevRating) => {
        if (prevRating < 4.7) {
          return parseFloat((prevRating + 0.1).toFixed(1)); // Increment by 0.1 until 4.7
        } else {
          clearInterval(interval); // Stop the interval when rating reaches 4.7
          return 4.7;
        }
      });
    }, 100);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [startAnimation]);

  const handleNext = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonials-section">
      <Container>
        <Row>
          {/* Left Side: Header, Rating, and Stars */}
          <Col lg="6" className="left-section">
            <div className="header-box">
              <h1 className="main-header">Trusted by Thousands of Students and Tutors</h1>
            </div>
            <div className="rating-section" ref={ratingRef}>
              {/* Rating Number (4.7) */}
              <p className="rating-number big-rating">{rating}</p>
              {/* Stars */}
              <div className="google-stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="google-star-icon" />
                ))}
              </div>
              {/* Rating Text (500+ Ratings Google Reviews) */}
              <p className="rating-text">500+ Ratings Google Reviews</p>
            </div>
          </Col>

          {/* Right Side: Testimonials */}
          <Col lg="6" className="right-section">
            <div className="testimonials-wrapper">
              {/* Backward Arrow */}
              {currentIndex > 0 && (
                <button className="nav-arrow left-arrow" onClick={handlePrev}>
                  &#10094;
                </button>
              )}

              <Row className="mt-5">
                {testimonials
                  .slice(currentIndex, currentIndex + testimonialsPerPage)
                  .map((testimonial, index) => {
                    const iconSrc =
                      index === 1
                        ? require("../../assests/images/anime_feedback.png")
                        : require("../../assests/images/men_face.png");

                    return (
                      <Col lg="12" key={index} className="mb-4">
                        <div className="testimonial-box">
                          <div className="student__info">
                            <img
                              src={iconSrc}
                              alt="Feedback Icon"
                              className="feedback-icon"
                            />
                          </div>
                          <p className="testimonial-text">
                            <span className="quote">“</span>
                            {testimonial.review}
                            <span className="quote">”</span>
                          </p>
                          <div className="name-rating text-center">
                            <h6 className="fw-bold">{testimonial.name}</h6>
                            <div className="star-rating">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="star-icon" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>

              {/* Forward Arrow */}
              {currentIndex + testimonialsPerPage < testimonials.length && (
                <button className="nav-arrow right-arrow" onClick={handleNext}>
                  &#10095;
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

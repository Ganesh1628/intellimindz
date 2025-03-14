// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// // import heroImg from "../../assests/images/Computer_background.png"; // Updated image
// import "./hero-section.css";

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Container>
//         <Row>
//           <Col lg="12" md="12">
//             <div className="hero__content">
//               <h2 className="mb-4 hero__title">
//                 <span className="intellimindz-highlight">Intelli Mindz</span>
//               </h2>
//               <p className="mb-5">
//               Intelli Mindz Academy is a leading training institute specialized in providing both Online and Classroom training for software, spoken English, and Competetive Exams. Our training programs are structured in such a way that trainees will get 100% practical and hands-training. We offer more than 100 courses with real-time experienced trainers who have more than a decade of experience in the respective industry. Courses that we offer are handled in a structured format where students will be provided with a course curriculum before the start of training. We offer online training in various time zones so that it will benefit people located in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and more.Our training programming will make in strong in both technical and practical areas of the subject and will definitely help you in getting placed in MNC
//               </p>  
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };




import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaEnvelope } from "react-icons/fa";
import MessageIcon from "./MessageIcon"; // Import the Message Icon component
import "./hero-section.css";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const useCountUp = (targetNumber, duration, trigger) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!trigger) return;

      let start = 0;
      const increment = targetNumber / (duration / 50);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(counter);
    }, [targetNumber, duration, trigger]);

    return count;
  };

  const courses = useCountUp(150, 2000, isVisible);
  const tutors = useCountUp(75, 2000, isVisible);
  const sessions = useCountUp(100, 2000, isVisible);
  const careers = useCountUp(15500, 3000, isVisible);

  return (
    <section className="hero-section" ref={sectionRef}>
      <Container>
        {/* Message Box Icon on the Left */}
        <div className="message-icon-container">
          <MessageIcon />
        </div>

        {/* Search Bar & Email */}
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search courses..." />
          <button className="search-button">Search</button>

          {/* Email with Icon */}
          <div className="email-container">
            <FaEnvelope className="email-icon" />
            <span className="email-text">info@intellimindz.com</span>
          </div>
        </div>

        <Row>
          <Col lg="12" md="12">
            <div className="hero__content">
              <h2 className="hero__title">Intelli Mindz</h2>
              <p className="hero-subtitle">Transform Your Skills, Transform Your Future</p>

              <div className="feature-list">
                <div className="feature-item">100+ Courses</div>
                <div className="feature-item">Hands-on Training</div>
                <div className="feature-item">Job-Oriented Learning</div>
                <div className="feature-item">Flexible Time Zones</div>
                <div className="feature-item">Expert Trainers</div>
              </div>
              <p className="mb-5">
                Intelli Mindz Academy is a premier training institute dedicated to providing top-quality Online and Classroom training in software, spoken English, and competitive exam preparation. Our courses are designed with a 100% practical and hands-on approach, ensuring students gain real-world experience. With a portfolio of 100+ courses, we are led by industry experts with over a decade of experience. Each course follows a structured curriculum, giving students a clear learning roadmap. We offer flexible online training across various time zones, catering to learners in the USA, UK, France, Germany, Singapore, Malaysia, Dubai, Saudi Arabia, and beyond. At Intelli Mindz Academy, we focus on both technical skills and practical knowledge, empowering students to confidently step into the job market and secure placements in top multinational companies (MNCs).
              </p>
              <div className="start-course-container">
                <button className="start-course-btn">Start Course</button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="placement-stats">
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>{courses}+</h2>
              <p>Tailor-Made Courses</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>{tutors}+</h2>
              <p>Expert Real-Time Tutors</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>{sessions}+</h2>
              <p>Hands-On Sessions</p>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="stats-box">
              <h2>{careers}+</h2>
              <p>Successful Career</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

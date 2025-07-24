import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChalkboardTeacher, FaMoneyBillAlt, FaLaptop, FaBriefcase } from "react-icons/fa";
import { FaBook, FaProjectDiagram, FaTasks, FaCertificate, FaFileAlt, FaUserCheck, FaBullhorn, FaHandsHelping } from 'react-icons/fa';

// File Imports
import "../components/Home/company-section.css";
import "../components/Home/hero-section.css";
import "../components/Home/TrainingOptions.css";
import "../components/Home/courses.css";
import "../components/Home/choose-us.css";
import "../components/Home/questions.css";
import "../components/Home/testimonial.css";
import ContactModal from "../components/Hero-Section/ContactModal";

// Image imports
import awsLogo from "../assests/images/aws.png";
import pythonLogo from "../assests/images/python.png";
import cloudLogo from "../assests/images/cloud_computing.png";
import mobile_dev from "../assests/images/mobile_dev.png";
import databaseLogo from "../assests/images/database.png";
import ui from "../assests/images/UI.png";
import jsLogo from "../assests/images/javascript.png";
import reactlogo from "../assests/images/react.png";
import mysql from "../assests/images/sql.png";
import machine_learning from "../assests/images/machine_learning.png";
import software_testing from "../assests/images/software_testing.png";
import data_science from "../assests/images/data_science.png";
import homePageIntro from "../assests/images/homepagebanner.png";
import classroomIcon from "../assests/images/teachingicon.png";
import onlineIcon from "../assests/images/onlineicon.png";
import corporateIcon from "../assests/images/corporateicon.png";
import videoIcon from "../assests/images/onlinetraingingicon.png";
import homeImage from '../assests/images/home-intro-page.png';
import talkingimage from "../assests/images/talkingimage.png";

function HeroSection() {
    const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Intersection logic here if needed
                }
            },
            { threshold: 0.3 }
        );
        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <> {/* Use Fragment to wrap section and modal */}
            <section className="hero-section" ref={sectionRef}>
                <Container>
                    {/* Main Content Section */}
                    <Row className="content-section">
                        <Col lg="6" md="12">
                            <div
                                className="header_content"
                                style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    width: "100%",
                                    maxWidth: "620px",
                                }}
                            >
                                <h1>
                                    Top Training Institute in Chennai: Elevate Your Skills with{" "}
                                    <span style={{ color: "orange", fontFamily: "DM Sans, sans-serif" }}>
                                        Intellimindz
                                    </span>
                                </h1>
                            </div>
                            <div className="hero__content" style={{ marginTop: "20px", textAlign: "left" }}>
                                <p
                                    className="mb-10"
                                    style={{
                                        width: "100%",
                                        maxWidth: "620px",
                                        textAlign: "left",
                                        fontFamily: "DM Sans, sans-serif",
                                    }}
                                >
                                    Welcome to Intellimindz Training Institute, Chennai's premier destination for comprehensive IT and non-IT training programs. We are committed to empowering individuals with the cutting-edge skills and industry-relevant knowledge needed to thrive in today's competitive landscape. Whether you're looking to build a career in the dynamic IT sector or enhance your expertise in crucial non-IT domains, our expert instructors and practical learning methodologies will guide you towards achieving your professional aspirations in Chennai and beyond.
                                </p>
                                <div className="start-course-container">
                                    {/* Updated Button to open modal */}
                                    <button className="start-course-btn" onClick={openModal}>
                                        START LEARNING
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md="12">
                            <div className="form-box-enroll">
                                <img
                                    src={homePageIntro}
                                    alt="Enrollment Preview"
                                    style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fallback = e.target.nextSibling;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                 <div style={{display: 'none', textAlign: 'center', width: '100%', minHeight: '200px', border:'1px dashed #ccc', padding: '20px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                   <p className="text-gray-500 text-sm">Hero image not found.</p>
                                   <p className="text-gray-400 text-xs mt-1">Please check path: {homePageIntro.toString()}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Stats Section */}
                    <Row className="stats-section">
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3 className="stat-number">150+</h3>
                            <p className="stat-title">Tailor-Made Courses</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 className="stat-number">75+</h3>
                            <p className="stat-title">Expert Tutors</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3 className="stat-number">100+</h3>
                            <p className="stat-title">Hands-On Sessions</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <h3 className="stat-number">15,500+</h3>
                            <p className="stat-title">Successful Careers</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Render the Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

function getCourses() {
  return [
    { img: awsLogo, title: "Java Full Stack", url: "/java-training-in-chennai" },
    { img: pythonLogo, title: "Python Full Stack", url: "/python-training-in-chennai" },
    { img: cloudLogo, title: "Cloud Computing", url: "/cloud-computing-training-in-chennai" },
    { img: mobile_dev, title: "Mobile Dev", url: "/mobile-application-training-in-chennai" },
    { img: databaseLogo, title: "UI Development", url: "/html-training-in-chennai" },
    { img: ui, title: "Web Designing", url: "/web-designing-training-in-chennai" },
    { img: jsLogo, title: "Digital Marketing", url: "/digital-marketing-training-in-chennai" },
    { img: reactlogo, title: "React", url: "/react-native-training-in-chennai" },
    { img: mysql, title: "SQL", url: "/sql-server-dba-training-in-chennai" },
    { img: machine_learning, title: "Machine Learning", url: "/machine-learning-training-in-chennai" },
    { img: software_testing, title: "Software Testing", url: "/etl-testing-training-in-chennai" },
    { img: data_science, title: "Data science", url: "/data-science-training-in-chennai" },
  ];
}

function Company() {
  const courses = getCourses();

  return (
    <section className="home-courses-section">
      <Container>
        <Row>
          <Col className="home-text-center">
            <h2 className="home-courses-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <span style={{ marginRight: "8px" }}>Our</span>
              <span style={{ color: "orange" }}>Courses</span>
            </h2>
          </Col>
        </Row>
        <Row>
          {courses.map((course, index) => (
            <Col lg="3" md="4" sm="6" xs="12" key={index} className="home-course-card">
              <a href={course.url} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="home-course-box" style={{ cursor: "pointer" }}>
                  <img src={course.img} alt={course.title} className="home-course-img" />
                  <div className="home-course-title">{course.title}</div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

function TrainingOptions() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const trainingOptions = [
        {
            title: "Classroom Training",
            description: "Receive top-notch training from industry professionals through interactive classroom sessions, real-time projects complete with real-time projects to enhance your hands-on experience.",
            icon: classroomIcon,
        },
        {
            title: "Online Training",
            description: "Gain in-depth knowledge from seasoned industry experts through comprehensive online training, featuring real-world projects to strengthen your practical skills.",
            icon: onlineIcon,
        },
        {
            title: "Corporate Training",
            description: "Empowering employees with the necessary expertise and skill sets required to confidently and efficiently perform their job roles and excel in their professional careers.",
            icon: corporateIcon,
        },
        {
            title: "Video Based Training",
            description: "Enjoy unlimited access to recorded training sessions, enabling you to revisit lessons easily and learn at your own pace, with flexibility, added convenience, and accessibility—anytime and anywhere.",
            icon: videoIcon,
        },
    ];

    return (
        <div className="training-container" ref={ref} style={{ fontFamily: "DM Sans, sans-serif" }}>
            <h2 className="home-training-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <span className="color1">Training</span><span className="color3">Modes</span>
            </h2>
            <div className="training-cards">
                {trainingOptions.map(({ title, description, icon }, index) => (
                    <motion.div
                        key={title}
                        className="training-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.3 }}
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                        <img src={icon} alt={title} className="training-icon" />
                        <h3 className="training-header" style={{ fontFamily: "DM Sans, sans-serif" }}>{title}</h3>
                        <p className="training-content">{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function Slide() {
  return (
    <div className="slide-container">
      {/* Centered Title */}
      <div className="slide-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <span className="color1">Our</span>
        <span className="color2">Training</span>
        <span className="color3">Approach</span>
      </div>

      {/* Grid Section */}
      <div className="grid-container" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <div className="slide-section">
          <FaBook className="icon" />
          <h5>Theory</h5>
        </div>
        <div className="slide-section">
          <FaProjectDiagram className="icon" />
          <h5>Project Work</h5>
        </div>
        <div className="slide-section">
          <FaTasks className="icon" />
          <h5>Assignments</h5>
        </div>
        <div className="slide-section">
          <FaCertificate className="icon" />
          <h5>Certification</h5>
        </div>
        <div className="slide-section">
          <FaFileAlt className="icon" />
          <h5>Resume Preparation</h5>
        </div>
        <div className="slide-section">
          <FaUserCheck className="icon" />
          <h5>Interview Preparation</h5>
        </div>
        <div className="slide-section">
          <FaBullhorn className="icon" />
          <h5>Resume Marketing</h5>
        </div>
        <div className="slide-section">
          <FaHandsHelping className="icon" />
          <h5>Placement Support</h5>
        </div>
      </div>
    </div>
  );
}

function ChooseUs() {
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
        <h2 className="choose-section-title text-center"> {/* Using class from CSS */}
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
}

function FAQ() {
    const faqItems = [
        {
            question: "What types of training courses do you offer?",
            answer: "We offer various IT courses including development, testing, data science, and more."
        },
        {
            question: "What are the course fees and are there any payment options available?",
            answer: "Fees vary per course; we offer EMI and installment payment options."
        },
        {
            question: "What is the duration of your courses?",
            answer: "Course durations vary, typically ranging from a few weeks to months."
        },
        {
            question: "Who are the instructors, and what are their qualifications and experience?",
            answer: "Our instructors are experienced industry professionals with strong subject matter expertise."
        },
        {
            question: "Do you provide placement assistance or job support after course completion?",
            answer: "Yes, we offer placement assistance and job support to our students."
        },
        {
            question: "What is the class schedule like? Are there weekday or weekend batches?",
            answer: "We have both weekday and weekend batches available to suit different schedules."
        },
        {
            question: "What is your teaching methodology? Is it more theoretical or practical?",
            answer: "Our methodology is a blend of theoretical concepts with strong practical hands-on training."
        },
        {
            question: "Do you offer online training courses?",
            answer: "Yes, many of our courses are available online for flexible learning."
        },
        {
            question: "What are the prerequisites for enrolling in your courses?",
            answer: "Prerequisites vary depending on the specific course; basic IT knowledge is often helpful."
        }
    ];

    return (
        <div className="faq-wrapper">

            {/* Image Section (On the Left) */}
            <div className="faq-image-container">
                <img src={talkingimage} alt="FAQ Illustration" className="faq-image" />
            </div>

            {/* FAQ Section (On the Right) */}
            <div className="faq-section-home">
                <h1 className="home-title">Frequently Asked Questions</h1>
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item-home">
                        <p className="faq-question-home">{item.question}</p>
                        <p className="faq-answer-home">{item.answer}</p>
                    </div>
                ))}
            </div>

            {/* The custom-course-section has been removed from here */}

        </div>
    );
}

function Testimonials() {
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
            <button className="nav-arrow-right" onClick={handleNext}>
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
}

// Main Home component
function Home() {
  return (
    <>
      <HeroSection />
      <Company />
      <TrainingOptions />
      <Slide />
      <ChooseUs />
      <FAQ />
      <Testimonials />
    </>
  );
}

export default Home;
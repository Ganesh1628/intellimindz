// import React from "react";
import "../components/saponlinecom/onlinecoursegrid.css"; // CSS file
import "../components/saponlinecom/onlinebatch.css";
import "../components/saponlinecom/onlinecurriculum.css"; // New CSS for Curriculum
import "../components/saponlinecom/SelfAssessment.css";
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/onlinewhychooseus.css";
import "../components/saponlinecom/onlinecorporate.css";
import "../components/saponlinecom/onlinetestmonials.css";
import "../components/saponlinecom/onlinepayment.css";
import Footer from "../components/Footer/Footer";
import testImage from "../assests/images/onlinetest.png"; // Import Image
import sapintelliaboutus from "../assests/images/sapintelliaboutus.png";
import sapintellicommitment from "../assests/images/sapintellicommitment.png";
import { FaTags, FaRunning, FaUsers } from "react-icons/fa";
import bestPriceIcon from "../assests/images/bestprice.png";
import runningIcon from "../assests/images/runningicon.png";
import staffIcon from "../assests/images/stafficon.png";
import jobopening from "../assests/images/jobopening.png";
import liveclass from "../assests/images/liveclass.png";
import onlinetest from "../assests/images/onlinetest.png";
import menFace1 from '../assests/images/men_face.png';
import menFace2 from '../assests/images/men_face.png';
import menFace3 from '../assests/images/men_face.png';
import menFace4 from '../assests/images/men_face.png';
import menFace5 from '../assests/images/men_face.png';
import React, { useState, useEffect } from 'react'; // Add this import at the top


// Course List Section
const CourseGrid = () => {
    const leftCourses = [
      "SAP Simple Finance",
      "SAP S/4HANA",
      "SAP Materials Management",
      "SAP HANA",
      "SAP ABAP"
    ];
  
    const rightCourses = [
      "SAP Financial Accounting",
      "SAP Sales and Distribution (SAP SD)",
      "SAP Certified Application Associate",
      "SAP Production Planning (SAP PP)",
      "SAP FICO"
    ];
  
    return (
      <div className="training-section">
        <h1 className="section-title">Intellimindz SAP Courses Listed</h1>
        <div className="courses-container">
          <div className="course-column">
            <ul className="locations-list">
              {leftCourses.map((course, index) => (
                <li key={`left-${index}`} className="location-item">
                  {course}
                </li>
              ))}
            </ul>
          </div>
          <div className="course-column">
            <ul className="locations-list">
              {rightCourses.map((course, index) => (
                <li key={`right-${index}`} className="location-item">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

// Batch Request Section (Single const)
const BatchRequestForm = () => {
    return (
        <div className="batch-request-container">
            <h2 className="batch-title">BATCH REQUEST</h2>
            <form className="batch-form">
                <div className="input-group">
                    <label>Name</label>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Enter Name" />
                        <span className="sap_icon">👤</span>
                    </div>
                </div>

                <div className="input-group">
                    <label>E-mail</label>
                    <div className="input-wrapper">
                        <input type="email" placeholder="Enter Email" />
                        <span className="sap_icon">📧</span>
                    </div>
                </div>

                <div className="input-group">
                    <label>Mobile</label>
                    <div className="input-wrapper mobile-input">
                        <input type="text" placeholder="Country Code" className="country-code" />
                        <input type="text" placeholder="Enter Phone No" />
                        <span className="sap_icon">📞</span>
                    </div>
                </div>

                <button type="submit" className="request-btn">Request Now</button>
            </form>
        </div>
    );
};

const CurriculumProjects = () => {
  // State to track which module is expanded (only one at a time)
  const [expandedModule, setExpandedModule] = useState(null);

  // Toggle module expansion
  const toggleModule = (moduleNumber) => {
      setExpandedModule(expandedModule === moduleNumber ? null : moduleNumber);
  };

  // Module content data
  const moduleContents = {
      1: "This module covers the basics of SAP, including its architecture, components, and how it's used in enterprise environments. You'll learn about SAP's history, the S/4HANA platform, and the role of FICO in SAP ecosystems.",
      2: "Explore how enterprises are structured in SAP, including client, company code, and business area concepts. Learn how to configure organizational units and their relationships in financial accounting.",
      3: "Dive into the global settings for Financial Accounting, including fiscal year variants, posting periods, and document types. Understand how these settings affect financial transactions across the organization.",
      4: "Learn about the New GL functionality in S/4HANA, including parallel accounting approaches, segment reporting, and how to migrate from classic GL to New GL.",
      5: "Master the configuration of General Ledger Accounting, including chart of accounts setup, account groups, and reconciliation accounts. Learn how global settings impact financial reporting.",
      6: "Yes, SAP QM may be customized to fulfil specific enterprise necessities. Customizations consist of configuring inspection sorts, defining excellent control plans, setting up inspection lots, and tailoring quality notifications to align with particular best management tactics inside a company.",
      7: "Yes, SAP gives complete training applications for SAP QM customers. These training applications cover various elements of SAP QM capability, including configuration, utilization, and fine practices for powerful satisfactory management within SAP ERP environments.",
      8: "SAP QM supports regulatory compliance by means of providing equipment to implement excellent requirements, music fine-associated facts, control documentation, and generate compliance reviews. It enables organizations adhere to industry-precise guidelines and standards including ISO, FDA, and GMP.",
      9: "Yes, SAP QM may be integrated with external pleasant control systems via numerous interfaces and connectors. This integration permits seamless information change between SAP QM and outside structures, permitting businesses to leverage present first-rate management investments while benefiting from SAP ERP integration.",
      10: "SAP QM may be deployed on-premises or in the cloud, imparting flexibility to corporations based on their IT infrastructure and business requirements. Both deployment alternatives provide get admission to the whole range of SAP QM functionality for effective fine control."
  };

  // Define getModuleTitle inside the component
  const getModuleTitle = (number) => {
      const titles = {
          1: "Introduction To SAP?",
          2: "Enterprises Structure?",
          3: "Financial Accounting Global Settings?",
          4: "New General Ledger Concept?",
          5: "General Ledger Accounting And Global Settings?",
          6: "Can SAP QM be customized to precise enterprise requirements?",
          7: "Is training to be had for SAP QM users?",
          8: "How does SAP QM help regulatory compliance?",
          9: "Can SAP QM be included with external high-quality management systems?",
          10: "What are the deployment alternatives for SAP QM?"
      };
      return titles[number];
  };

  return (
      <div className="curriculum-container">
          <h2 className="curriculum-title">Curriculum & Projects</h2>
          <div className="curriculum-content">
              <div className="curriculum-left">
                  <div className="modules">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(moduleNumber => (
                          <div key={moduleNumber} className="module-container">
                              <div
                                  className="module-header"
                                  onClick={() => toggleModule(moduleNumber)}
                              >
                                  Module {moduleNumber}: {getModuleTitle(moduleNumber)}
                                  <span className="module-toggle">
                                      {expandedModule === moduleNumber ? '−' : '+'}
                                  </span>
                              </div>
                              {expandedModule === moduleNumber && (
                                  <div className="module-content">
                                      {moduleContents[moduleNumber]}
                                  </div>
                              )}
                          </div>
                      ))}
                  </div>

                  {/* Mock Interviews Section */}
                  <div className="mock-interviews">
                      <h3 className="mock-title">Mock Interviews</h3>
                      <div className="mock-line"></div>
                      <ul className="mock-list">
                          <li>✅ Prepare & Practice for real-life job interviews by joining the Mock Interviews drive at Croma Campus and learn to perform with confidence with our expert team.</li>
                          <li>✅ Not sure of Interview environments? Don't worry, our team will familiarize you and help you in giving your best shot even under heavy pressures.</li>
                          <li>✅ Our Mock Interviews are conducted by trailblazing industry-experts having years of experience and they will surely help you to improve your chances of getting hired in real.</li>
                      </ul>
                  </div>
              </div>

              {/* Sticky Right Side */}
              <div className="curriculum-right">
                  <div className="sticky-wrapper">
                      {/* Form Box */}
                      <div className="info-box">
                          <h3 className="info-title">Request more informations</h3>
                          <form className="info-form">
                              <input type="text" placeholder="Enter Name" />
                              <input type="email" placeholder="Enter E-Mail" />
                              <div className="phone-input">
                                  <input type="text" placeholder="Country Code" className="country-code" />
                                  <input type="text" placeholder="Enter Phone No" className="Phonenumer_css"/>
                              </div>
                              <textarea placeholder="Message Details"></textarea>
                              <button type="submit" className="submit-btn">SUBMIT</button>
                          </form>
                      </div>

                      {/* Contact Information Box */}
                      <div className="contact-box">
                          <h3 className="contact-title">Contact Information</h3>
                          <div className="contact-item">
                              <span className="phone-icon">📞</span>
                              <span className="contact-text">Phone No:</span>
                              <span className="contact-number">+91 9655877577</span>
                          </div>
                          <div className="contact-item">
                              <span className="phone-icon">💬</span>
                              <span className="contact-text">WhatsApp :</span>
                              <span className="contact-number">+91 9655877677</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};


const SelfAssessment = () => {
    return (
        <div className="self-assessment-container">
            {/* Left Side: Text Content */}
            <div className="self-assessment-text">
                <h1 className="self-title">Self Assessment</h1>
                <p className="self-description">
                Learn, develop, and rigorously evaluate your skills through our comprehensive Online Assessment Exams, designed to help you successfully achieve your professional certification objectives.
                </p>
                <button className="self-btn">
                    Take Free Practice Test →
                </button>
            </div>

            {/* Right Side: Image */}
            <div className="self-assessment-image">
                <img src={testImage} alt="Self Assessment" />
            </div>
        </div>
    );
};


const AboutUsHeader = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-text">
                <h1>Why Choosе IntеlliMindz for SAP QM Online Training ?</h1>
                <p>
                    IntelliMindz offers the best SAP FICO Training in Chennai, providing in-depth knowledge of Financial Accounting (FI) and Controlling (CO) to help professionals and students build a successful career in SAP. Our SAP FICO Course in Chennai is designed by industry experts and includes real-time projects, hands-on exercises, and case studies to ensure practical learning. We also offer SAP FICO Online Training, allowing learners to access high-quality training from anywhere at their convenience. With expert guidance, placement assistance, and a job-oriented curriculum, IntelliMindz ensures that you gain the essential skills required to excel in SAP FICO and secure top positions in leading MNCs.
                </p>
            </div>
            <div className="about-us-image">
                <img src={sapintelliaboutus} alt="About Us" />
            </div>
        </div>

    );
};

const Corporate = () => {
    return (
        <div className="additional-slide-container">
            <div className="additional-slide-image">
                <img src={sapintellicommitment} alt="Our Commitmen  t" />
            </div>
            <div className="additional-slide-text">
                <h1>Our Commitment</h1>
                <p>
                    At IntelliMindz, we offer comprehensive and interactive SAP QM training designed to align with your organization’s goals and industry standards. Start with a live demo consultation to explore our teaching methodology, gain insights into our core values, and understand how we approach professional development. Our expert trainers provide customized learning solutions, available in both virtual and in-person formats, ensuring flexibility and seamless integration with your workforce’s schedule. Through real-world applications, we equip learners with practical skills that can be immediately implemented in professional environments. With cutting-edge technology, we enable efficient progress tracking, ensuring that every participant benefits from structured learning and measurable outcomes. Additionally, we offer 24/7 customer support, ensuring that queries are addressed promptly while maintaining a smooth training experience.
                </p>
            </div>
        </div>
    );
};



const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2 className="why-header">Why Choose Us</h2>
            <p className="subheader">
                We help you quench your thirst for knowledge by providing you with our
                specially tailored certifications. Our highly qualified instructors,
                dedicated staff, and 24/7 available helpline are the main reasons why
                we're the go-to training provider for you.
            </p>

            <div className="boxes">
                <div className="box">
                    <img src={bestPriceIcon} alt="Best Price Guarantee" className="icon" />
                    {/* <span className="number">01</span> */}
                    <h3>Best Price Guarantee</h3>
                    <p>
                        You won’t find better value in the marketplace. If you find a lower
                        price, send us the offer, and we’ll beat it.
                    </p>
                </div>

                <div className="box">
                    <img src={runningIcon} alt="Guaranteed to Run" className="icon" />
                    {/* <span className="number">02</span> */}
                    <h3>Guaranteed to Run</h3>
                    <p>
                        Our training courses are 100% guaranteed to run on dates provided,
                        whether they are classroom, virtual, or in-house.
                    </p>
                </div>

                <div className="box">
                    <img src={staffIcon} alt="Highly Experienced Staff" className="icon" />
                    {/* <span className="number">03</span> */}
                    <h3>Highly Experienced Staff</h3>
                    <p>
                        Our support staff and instructors have years of experience in
                        meeting the specific needs of our clients and delivering
                        exceptional quality.
                    </p>
                </div>
                <div className="box">
                    <img src={liveclass} alt="Guaranteed to Run" className="icon" />
                    {/* <span className="number">04</span> */}
                    <h3>Live Instructor-Led Training</h3>
                    <p>
                        You will be taught by an experienced trainer who has trained more than 1500 students
                    </p>
                </div>
                <div className="box">
                    <img src={onlinetest} alt="Guaranteed to Run" className="icon" />
                    {/* <span className="number">05</span> */}
                    <h3>Course Assignments</h3>
                    <p>
                        Assignments will be given to you at end of every session.
                        This will help you to better understand the topics.
                    </p>
                </div>
                <div className="box">
                    <img src={jobopening} alt="Guaranteed to Run" className="icon" />
                    {/* <span className="number">06</span> */}
                    <h3>Certification and Job Assistance</h3>
                    <p>
                        You will be awarded SAP QM Course Completion Certification after successful completion of Online training.
                    </p>
                </div>
            </div>
        </div>
    );
};




const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const testimonials = [
      {
        id: 1,
        image: menFace1,
        stars: '★★★★',
        name: 'Rahmanullah R.',
        title: 'a week ago',
        text: 'That considered, mentor guidance would perfect execution. This known requirement doesnt detract from what was an expertly delivered and highly valuable certification.'
      },
      {
        id: 2,
        image: menFace2,
        stars: '★★★★★',
        name: 'Marcio Rodrigues D.',
        title: 'a year ago',
        text: 'That understood, real-world examples would strengthen application. This doesnt diminish what proved to be a remarkably thorough and immediately useful learning experience.'
      },
      {
        id: 3,
        image: menFace3,
        stars: '★★★',
        name: 'Raj R.',
        title: '4 months ago',
        text: 'This is a great quick introduction to FI/CO for someone who does not know anything. Dhruval is a great presenter and has put a lot of thought and effort into how to make this as easy as possible'
      },
      {
        id: 4,
        image: menFace4,
        stars: '★★★★',
        name: 'Divani Nurul A.',
        title: '2 months ago',
        text: 'That said, I would still need to go through other in-depth training to ground the concepts in a business framework. I knew going in that this would be the case, so no points off of an excellent training.'
      },
      {
        id: 5,
        image: menFace5,
        stars: '★★★★★',
        name: 'Naved S.',
        title: 'a month ago',
        text: 'That mentioned, I should supplement with case studies to better connect these techniques to daily operations. This expectation doesnt diminish what proved to be an exceptionally well-designed program.'
      }
    ];
  
    const getVisibleTestimonials = () => {
      const visible = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visible.push(testimonials[index]);
      }
      return visible;
    };
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="sap-testimonials-wrapper">
        <div className="testimonials-container">
          <h1 className="testimonials-title">CUSTOMER RESPONSE</h1>
          
          <div className="testimonial-slider">
            <button className="arrow-button prev" onClick={handlePrev}>
              &lt;
            </button>
            
            <div className="testimonial-grid">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-card ${index === 1 ? 'center-highlight' : 'side-card'}`}
                >
                  <div className="testimonial-content">
                    <div className={`client-image-container ${index === 1 ? 'blue-border' : ''}`}>
                      <img src={testimonial.image} alt="Client" className="client-image" />
                    </div>
                    <div className="stars">{testimonial.stars}</div>
                    <p className="client-name">{testimonial.name}</p>
                    <p className="client-title">{testimonial.title}</p>
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="arrow-button next" onClick={handleNext}>
              &gt;
            </button>
          </div>
  
        </div>
      </div>
    );
  };


  
  const CourseSchedule = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
  
    const classDates = [
      { 
        day: '26', 
        weekday: 'Wednesday', 
        month: 'March, 2023',
        time: '08:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '27', 
        weekday: 'Thursday', 
        month: 'March, 2023',
        time: '09:30 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '28', 
        weekday: 'Friday', 
        month: 'March, 2023',
        time: '10:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '29', 
        weekday: 'Saturday', 
        month: 'March, 2023',
        time: '11:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '31', 
        weekday: 'Sunday', 
        month: 'March, 2023',
        time: '08:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '1', 
        weekday: 'Sunday', 
        month: 'March, 2023',
        time: '08:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '2', 
        weekday: 'Sunday', 
        month: 'March, 2023',
        time: '08:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
    ];
  
    const handleDateClick = (date) => {
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      setSelectedDate(date.day);
      
      // Set a new timeout to close the details after 4 seconds
      const id = setTimeout(() => {
        setSelectedDate(null);
      }, 4000);
      
      setTimeoutId(id);
    };
  
    const handleContainerLeave = () => {
      // Clear timeout when mouse leaves the container
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      setSelectedDate(null);
    };
  
    // Clean up timeout when component unmounts
    useEffect(() => {
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }, [timeoutId]);
  
    return (
      <div className="schedule-wrapper" onMouseLeave={handleContainerLeave}>
        <h1 className="course-title">Upcoming Batch for SAP online Training on Intellimindz</h1>
        
        <div className={`calendar-section ${selectedDate ? 'expanded' : ''}`}>
          {classDates.map((date) => (
            <div 
              key={date.day}
              className={`date-item ${selectedDate === date.day ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)}
            >
              <div className="date-main">
                <div className="date-day">{date.day}</div>
                <div className="date-info">
                  <div className="date-weekday">{date.weekday}</div>
                  <div className="date-month">{date.month}</div>
                </div>
              </div>
              
              {selectedDate === date.day && (
                <div className="session-details">
                  <p className="time">{date.time}</p>
                  <p className="duration">{date.duration}</p>
                </div>
              )}
            </div>
          ))}
        </div>
  
        <div className="action-buttons">
          <button className="enroll-button">ENROLL NOW PAY LATER</button>
          <button className="view-more-button">VIEW MORE</button>
        </div>
      </div>
    );
  };



// Main Function (Calls All Components)
const Saponline = () => {
    return (
        <>
            <AboutUsHeader />
            <Corporate />
            <CourseSchedule />
            <WhyChooseUs />
            <Onlineheader />
            <CurriculumProjects />
            <SelfAssessment />
            <BatchRequestForm />
            <CourseGrid />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Saponline;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};

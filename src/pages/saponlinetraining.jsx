// import React from "react";
// import "../components/saponlinecom/onlinecoursegrid.css";
import "../components/saponlinecom/onlinebatch.css";
import "../components/saponlinecom/onlinecurriculum.css"; // New CSS for Curriculum
import "../components/saponlinecom/SelfAssessment.css";
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/onlinewhychooseus.css";
import "../components/saponlinecom/onlinecorporate.css";
import "../components/saponlinecom/onlinetestmonials.css";
import "../components/saponlinecom/onlinepayment.css";
import MessageIcon from "../components/Hero-Section/MessageIcon";
import Footer from "../components/Footer/Footer";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css";
import AskForDemo from "../components/SAP/Askfordemo/askfordemo";
import saphomeintro1 from '../assests/images/saphomeintro1.png'; // Adjust path as needed
import "../components/saponlinecom/onlinecoursegrid.css";
import "../components/saponlinecom/onlinetrainers.css";
import testImage from "../assests/images/onlinetest.png"; // Import Image
import sapintellicommitment from "../assests/images/sapintellicommitment.png";
import bestPriceIcon from "../assests/images/bestprice.png";
import runningIcon from "../assests/images/runningicon.png";
import staffIcon from "../assests/images/stafficon.png";
import jobopening from "../assests/images/jobopening.png";
import liveclass from "../assests/images/liveclass.png";
import sapcourse1 from "../assests/images/sapcourse1.png";
import sapcourse2 from "../assests/images/sapcourse2.png";
import sapcourse3 from "../assests/images/sapcourse3.png";
import sapcourse4 from "../assests/images/sapcourse4.png";
import sapcourse5 from "../assests/images/sapcourse5.png";
import sapcourse6 from "../assests/images/sapcourse6.png";
// import callIcon from "../assests/images/call-icon.png";
import { FaStar } from 'react-icons/fa'; // Make sure this import is correct
import onlinetest from "../assests/images/onlinetest.png";
import menFace1 from '../assests/images/men_face.png';
import menFace2 from '../assests/images/men_face.png';
import menFace3 from '../assests/images/men_face.png';
import menFace4 from '../assests/images/men_face.png';
import menFace5 from '../assests/images/men_face.png';
import financialIcon from "../assests/images/course.png";
import locationIcon from "../assests/images/location.png";
import graduationIcon from "../assests/images/graduation.png";
import React, { useState, useEffect, useRef  } from 'react'; // Add this import at the top
import { motion } from "framer-motion";


const trainers = [
  {
    id: 1,
    name: "John Doe",
    expertise: "Python & Java",
    experience: "10+ years",
    details:
      "Priya Sharma is an experienced AWS DevOps Engineer with 8 years of expertise in automating cloud workflows, managing CI/CD pipelines, and improving system scalability. She has worked with startups and enterprises to enhance deployment efficiency using AWS DevOps tools such as AWS CodePipeline, CodeDeploy, and Jenkins. Priya specializes in containerization, using Docker and Kubernetes for scalable microservices architecture. Her expertise in Infrastructure as Code (IaC) using Terraform ensures automated and consistent cloud infrastructure deployment.",
    skills: [
      "AWS Cloud Architecture: Designing scalable cloud solutions",
      "Infrastructure as Code (IaC): Terraform & CloudFormation",
      "Cloud Migration: Seamless transition to AWS",
      "Security & Compliance: IAM policies & encryption",
    ],
    image: require("../assests/images/men_face.png"), // Update path if needed
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Cloud Engineer",
    experience: "8+ years",
    details:
      "Rajesh Verma is a seasoned AWS Cloud Solutions Architect from India with over 10 years of experience in designing, deploying, and optimizing cloud infrastructures. He has worked with businesses across industries to develop secure, scalable, and cost-effective AWS solutions that enhance performance and reliability. Rajesh specializes in cloud migration, high-availability architecture, and infrastructure automation using Terraform and AWS CloudFormation. His expertise in AWS compute, storage, and networking services allows him to create efficient cloud environments tailored to business needs.",
    skills: [
      "CI/CD Automation: AWS CodePipeline & Jenkins",
      "Containerization & Orchestration: Docker & Kubernetes",
      "Infrastructure as Code (IaC): Terraform & AWS CloudFormation",
      "Monitoring & Logging: CloudWatch & ELK Stack",
    ],
    image: require("../assests/images/men_face.png"), // Update path if needed
  },
  {
    id: 3,
    name: "Amit Sharma",
    expertise: "AWS & DevOps",
    experience: "10+ years",
    details:
      "Priya Sharma is an experienced AWS DevOps Engineer with 8 years of expertise in automating cloud workflows, managing CI/CD pipelines, and improving system scalability. She has worked with startups and enterprises to enhance deployment efficiency using AWS DevOps tools such as AWS CodePipeline, CodeDeploy, and Jenkins. Priya specializes in containerization, using Docker and Kubernetes for scalable microservices architecture. Her expertise in Infrastructure as Code (IaC) using Terraform ensures automated and consistent cloud infrastructure deployment.",
    skills: [
      "AWS Cloud Architecture: Designing scalable cloud solutions",
      "Infrastructure as Code (IaC): Terraform & CloudFormation",
      "Cloud Migration: Seamless transition to AWS",
      "Security & Compliance: IAM policies & encryption",
    ],
    image: require("../assests/images/men_face.png"), // Update path if needed
  },
];

const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < trainers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const trainer = trainers[currentIndex];

  return (
    <div className="trainers-container">
      <h2 className="trainers-title">Meet Our Expert Trainers</h2>

      <div className="trainers-wrapper">
        <button
          className="side-arrow left-arrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>

        <div className="trainer-card">
          <div
            className="trainer-image"
            style={{
              backgroundImage: `url(${trainer.image})`,
            }}
          ></div>

          <div className="trainer-info">
            <h3 className="trainer-name">{trainer.name}</h3>
            <h4 className="trainer-title">{trainer.expertise}</h4>
            <p className="trainer-details">{trainer.details}</p>
            <h5 className="trainer-skills-title">Key Skills:</h5>
            <p className="trainer-details">
              {trainer.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </p>
          </div>
        </div>

        <button
          className="side-arrow right-arrow"
          onClick={handleNext}
          disabled={currentIndex === trainers.length - 1}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};




const Intro = () => {
  return (
    <div className="intro-container">
      <div className="overlay"></div>
      <div className="intro-content">
        <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
        <h1 className="intro-h1">SAP FICO Training</h1>
        <h3 className="intro-h3">Empowering businesses with cutting-edge technology solutions.</h3>

      </div>
    </div>
  );
};


const SapTrainingProfile = () => {
  return (
      <div className="sap-training-container">
          <div className="sap-training-header animate__animated animate__flipInX">
              <h1>
                  SAP FICO Training in <span>Chennai</span>
              </h1>
              <div className="header-divider"></div>
          </div>

          <div className="sap-training-content">
              <div className="training-details">
                  <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                      <p className="intro-text">
                          All mentors at IntelliMindz have years of important industry experience, and they have been effectively functioning as advisors in a similar space, which has made them topic specialists.
                      </p>
                  </div>

                  <ul className="benefits-list">
                      <li><span className="icon">✓</span> Training from basics to advanced SAP IM concepts.</li>
                      <li><span className="icon">✓</span> Real-time experienced professionals (8+ years).</li>
                      <li><span className="icon">✓</span> 500+ students successfully trained and placed.</li>
                      <li><span className="icon">✓</span> Resume preparation and project guidance.</li>
                      <li><span className="icon">✓</span> Project overview and real-time scenario sessions.</li>
                      <li><span className="icon">✓</span> Individual attention with customized sessions.</li>
                      <li><span className="icon">✓</span> Mock interviews and technology FAQs.</li>
                  </ul>

                  <button className="enquiry-button">Enquire Now</button>
              </div>

              <div className="training-image">
                  <img src={saphomeintro1} alt="SAP Training" />
              </div>
          </div>
      </div>
  );
};



const CoursesSection = () => {
  const courses = [
    {
      provider: "SAP ABAP",
      logo: sapcourse1,
      title: "Advanced Business Application Programming",
      rating: 5,
      reviews: 8956,
      enrolled: 2854
    },
    {
      provider: "SAP SCM",
      logo: sapcourse2,
      title: "Supply Chain Management",
      rating: 5,
      reviews: 4562,
      enrolled: 4856
    },
    {
      provider: "SAP HANA",
      logo: sapcourse3,
      title: "High-Performance Analytic Appliance",
      rating: 5,
      reviews: 5156,
      enrolled: 6258
    },
    {
      provider: "SAP Successfactors",
      logo: sapcourse4,
      title: "Human Capital Management Solution",
      rating: 5,
      reviews: 4985,
      enrolled: 6258
    },
    {
      provider: "SAP ECM",
      logo: sapcourse5,
      title: "Enterprise Content Management",
      rating: 5,
      reviews: 6985,
      enrolled: 15896
    },
    {
      provider: "SAP EHS",
      logo: sapcourse6,
      title: "Environment, Health, and Safety",
      rating: 5,
      reviews: 4854,
      enrolled: 5268
    }
  ];

  return (
    <div className="courses-section">
      <h2 className="online-section-title">Related SAP Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-header">
              <div className="provider-container">
                <img src={course.logo} alt={course.provider} className="provider-logo" />
                <span className="course-provider">{course.provider}</span>
              </div>
            </div>
            <h3 className="course-name">{course.title}</h3>
            <div className="course-rating-container">
              {/* <FaStar className="star-icon" /> */}
              {/* <span className="course-rating">{course.rating}</span> */}
            </div>
            <div className="reviews-enrolled-container">
              <div className="reviews-section">
                <div className="reviews-label">Reviews</div>
                <div className="reviews-count">{course.reviews.toLocaleString()}</div>
              </div>
              <div className="enrolled-section">
                <div className="enrolled-label">Enrolled Learners</div>
                <div className="enrolled-count">{course.enrolled.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
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
    1: (
        <>
            <strong>Learning Objective:</strong>
            <p>Understand the basics of SAP FICO, its components, and integration with other SAP modules in financial operations.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Overview of SAP FICO and its importance</li>
                <li>Key financial and controlling components</li>
                <li>Role of SAP FICO in enterprise resource planning</li>
                <li>Integration with SAP MM and SD modules</li>
                <li>Navigation in SAP FICO</li>
            </ul>
        </>
    ),
    2: (
        <>
            <strong>Learning Objective:</strong>
            <p>Learn how to configure and manage general ledger accounts, financial statements, and journal entries in SAP FICO.</p>
            <strong>Topics:</strong>
            <ul>
                <li>General ledger master data creation</li>
                <li>Chart of accounts and account groups</li>
                <li>Posting and document control in GL</li>
                <li>Financial statement versions and reporting</li>
                <li>Automatic account determination</li>
            </ul>
        </>
    ),
    3: (
        <>
            <strong>Learning Objective:</strong>
            <p>Develop an understanding of vendor management, invoice processing, and payment configuration in accounts payable.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Vendor master data setup and configuration</li>
                <li>Invoice posting, blocking, and release process</li>
                <li>Payment program and check printing</li>
                <li>Credit memo and debit memo processing</li>
                <li>Reconciliation and reporting in accounts payable</li>
            </ul>
        </>
    ),
    4: (
        <>
            <strong>Learning Objective:</strong>
            <p>Understand the setup, processing, and reconciliation of customer accounts in SAP FICO.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Customer master data creation and maintenance</li>
                <li>Incoming payments and cash application</li>
                <li>Dunning process and customer statements</li>
                <li>Integration with SD for billing and invoicing</li>
                <li>Reporting and reconciliation of receivables</li>
            </ul>
        </>
    ),
    5: (
        <>
            <strong>Learning Objective:</strong>
            <p>Learn to manage fixed assets, depreciation calculation, and asset reporting using SAP FICO.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Asset master data creation and management</li>
                <li>Depreciation configuration and posting</li>
                <li>Asset transactions like acquisition and retirement</li>
                <li>Asset revaluation and transfer process</li>
                <li>Asset reporting and reconciliation</li>
            </ul>
        </>
    ),
    6: (
        <>
            <strong>Learning Objective:</strong>
            <p>Understand banking transactions, cash positioning, and liquidity management in SAP FICO.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Bank master data configuration</li>
                <li>Electronic bank statement processing</li>
                <li>Cash journal and check management</li>
                <li>Payment reconciliation and clearing process</li>
                <li>Liquidity planning and cash flow analysis</li>
            </ul>
        </>
    ),
    7: (
        <>
            <strong>Learning Objective:</strong>
            <p>Gain knowledge of cost object tracking, cost center planning, and internal order settlements.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Cost center hierarchy and master data setup</li>
                <li>Cost allocations and activity-based costing</li>
                <li>Internal order creation and tracking</li>
                <li>Settlements of internal orders and overhead costs</li>
                <li>Cost center planning and variance analysis</li>
            </ul>
        </>
    ),
    8: (
        <>
            <strong>Learning Objective:</strong>
            <p>Understand profitability analysis, reporting, and the role of profit centers in financial management.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Profit center and segment accounting setup</li>
                <li>Characteristics and value fields in COPA</li>
                <li>Cost-based and account-based COPA analysis</li>
                <li>Real-time profitability reporting</li>
                <li>Integration with SD and MM for profitability tracking</li>
            </ul>
        </>
    ),
    9: (
        <>
            <strong>Learning Objective:</strong>
            <p>Learn how SAP FICO integrates with MM, SD, and HR for seamless financial and operational transactions.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Integration with MM for procurement and inventory valuation</li>
                <li>Integration with SD for billing and revenue recognition</li>
                <li>Integration with HR for payroll postings</li>
                <li>Automatic postings between FI and CO modules</li>
                <li>Real-time reporting and data flow between modules</li>
            </ul>
        </>
    ),
    10: (
        <>
            <strong>Learning Objective:</strong>
            <p>Master SAP FICO reporting, financial closing procedures, and period-end activities.</p>
            <strong>Topics:</strong>
            <ul>
                <li>Financial statement generation and reporting tools</li>
                <li>Month-end and year-end closing processes</li>
                <li>Reconciliation of financial and controlling documents</li>
                <li>Custom financial reporting and dashboards</li>
                <li>SAP FICO best practices for financial audits</li>
            </ul>
        </>
    ),
};


  // Define getModuleTitle inside the component
  const getModuleTitle = (number) => {
      const titles = {
          1: "Introduction To SAP?",
          2: "General Ledger Accounting",
          3: "Accounts Payable Management",
          4: "Accounts Receivable Management?",
          5: "Asset Accounting",
          6: "Bank Accounting and Cash Management",
          7: "Cost Center and Internal Order Accounting?",
          8: "Profit Center and COPA (Profitability Analysis)?",
          9: "Integration of SAP FICO with Other Modules",
          10: "SAP FICO Reporting and Financial Close Process?"
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


// const SelfAssessment = () => {
//     return (
//         <div className="self-assessment-container">
//             {/* Left Side: Text Content */}
//             <div className="self-assessment-text">
//                 <h1 className="self-title">Self Assessment</h1>
//                 <p className="self-description">
//                 Learn, develop, and rigorously evaluate your skills through our comprehensive Online Assessment Exams, designed to help you successfully achieve your professional certification objectives.
//                 </p>
//                 <button className="self-btn">
//                     Take Free Practice Test →
//                 </button>
//             </div>

//             {/* Right Side: Image */}
//             <div className="self-assessment-image">
//                 <img src={testImage} alt="Self Assessment" />
//             </div>
//         </div>
//     );
// };


const Corporate = () => {
    return (
        <div className="additional-slide-container">
            <div className="additional-slide-image">
                <img src={sapintellicommitment} alt="Our Commitment" />
            </div>
            <div className="additional-slide-text">
                <h1>Our Commitment</h1>
                <p>
                At IntelliMindz, our SAP FICO Training in Chennai represents our steadfast commitment to delivering top-tier financial management education that bridges academic theory with real-world application. Our meticulously designed curriculum incorporates practical exercises, case studies, and industry insights, enabling students to master essential financial and controlling functionalities in the SAP system. Our experienced instructors, with deep industry expertise, are dedicated to guiding each participant through their learning journey and providing personalized support. We foster a learning environment that encourages innovation, professional growth, and collaborative problem-solving, preparing individuals to excel in their careers. At IntelliMindz, our commitment is to empower every student with advanced knowledge and practical skills to navigate the evolving world of SAP FICO, ensuring lasting success and excellence in the dynamic finance landscape globally.                </p>
            </div>
        </div>
    );
};



const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2 className="why-header">Why Choose Us</h2>
            <p className="subheader">
            Choose SAP FICO Training in Chennai at IntelliMindz for expert-led instruction, hands-on practicals, real-time projects, and industry-relevant curriculum. Gain in-depth financial and controlling expertise, personalized mentorship, flexible learning modes, and career-focused guidance to excel in the competitive SAP job market.
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
                    <h3>Flexible Learning Options</h3>
                    <p>
                    Choose between classroom training, online sessions, or customized training based on your preferences.                    </p>
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
        name: '- Rahul S.',
        title: 'a week ago',
        text: 'I joined IntelliMindz for SAP FICO training, and it was an amazing learning experience. The trainer explained every concept in detail with real-time examples, which helped me understand better. The hands-on practical sessions were very useful. Highly recommend it!'
      },
      {
        id: 2,
        image: menFace2,
        stars: '★★★★★',
        name: '- Priya M.',
        title: 'a year ago',
        text: 'IntelliMindz provides one of the best SAP FICO training programs in Chennai. The trainers are highly experienced, and the curriculum is well-structured. The real-time projects and case studies helped me gain confidence. I got placed in a reputed MNC after completing the course. Thank you, IntelliMindz!'
      },
      {
        id: 3,
        image: menFace3,
        stars: '★★★',
        name: '- Vignesh R',
        title: '4 months ago',
        text: 'I was searching for an institute that offers practical training, and IntelliMindz exceeded my expectations. The hands-on approach, real-time project experience, and interview preparation sessions made a big difference in my learning. I now feel confident in handling SAP FICO modules at work!'
      },
      {
        id: 4,
        image: menFace4,
        stars: '★★★★',
        name: '- Divya K.',
        title: '2 months ago',
        text: 'The trainers at IntelliMindz are very knowledgeable and supportive. They made complex SAP FICO concepts easy to understand with simple explanations. The flexible class timings and doubt-clearing sessions were really helpful. I would recommend this institute to anyone looking for quality SAP training.'
      },
      {
        id: 5,
        image: menFace5,
        stars: '★★★★★',
        name: '- Arun T',
        title: 'a month ago',
        text: 'After completing my SAP FICO training at IntelliMindz, I was able to crack interviews confidently. The placement assistance provided by the institute was excellent. The course covered all key concepts, and the practical approach helped me secure a job in a top company. Thank you, IntelliMindz team!'
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
          <h1 className="testimonials-title">Customer Response</h1>
          
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
        month: 'March, 2025',
        time: '08:00 AM (IST)',
        duration: '(Class 8hr – 9:30Hrs) / Per Session'
      },
      { 
        day: '27', 
        weekday: 'Thursday', 
        month: 'March, 2025',
        time: '09:30 AM (IST)',
        duration: '(Class 10hr – 11:30Hrs) / Per Session'
      },
      { 
        day: '28', 
        weekday: 'Friday', 
        month: 'March, 2025',
        time: '10:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '29', 
        weekday: 'Saturday', 
        month: 'March, 2025',
        time: '11:00 AM (IST)',
        duration: '(Class 1hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '31', 
        weekday: 'Sunday', 
        month: 'March, 2025',
        time: '08:00 AM (IST)',
        duration: '(Class 1:30hr – 3:30Hrs) / Per Session'
      },
      { 
        day: '1', 
        weekday: 'Sunday', 
        month: 'April, 2025',
        time: '08:00 AM (IST)',
        duration: '(Class 12hr – 1:30Hrs) / Per Session'
      },
      { 
        day: '2', 
        weekday: 'Sunday', 
        month: 'April, 2025',
        time: '08:00 AM (IST)',
        duration: '(Class 11hr – 11:30Hrs) / Per Session'
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
        <h1 className="online-course-title">Upcoming Batch for SAP FICO Training in Chennai on Intellimindz</h1>
        
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



    const SapImSyllabus = () => {
      const [activeModule, setActiveModule] = useState(null);
      
      const modules = [
        { 
          id: 1, 
          title: "What is SAP QM?",
          description: "SAP QM (Quality Management) is a module inside SAP ERP that enables best manage strategies. It guarantees merchandise meet requirements by means of coping with inspections, notifications, and best certificate, improving common product high-quality and compliance."
        },
        { 
          id: 2, 
          title: "Planning and Execution of SAP QM",
          description: "Inspection planning, quality notifications, and execution strategies."
        },
        { 
          id: 3, 
          title: "SAP QM in Logistics",
          description: "Integration with procurement and material management."
        },
        { 
          id: 4, 
          title: "SAP QM in Production",
          description: "Quality checks, in-process inspections, and final inspections in production."
        },
        { 
          id: 5, 
          title: "What are the key functions of SAP QM?",
          description: "Key capabilities of SAP QM include excellent planning, inspection making plans, best notifications, fine control, high-quality certificates, vendor evaluation, and integration with other SAP modules for comprehensive quality control throughout the deliver chain."
        },
        { 
          id: 6, 
          title: "How does SAP QM benefit businesses?",
          description: "SAP QM improves product satisfactory, ensures compliance with enterprise standards and policies, reduces high-quality-related expenses, complements consumer pride, and helps non-stop development initiatives through offering real-time insights into quality performance throughout the organization."
        },
        { 
          id: 7, 
          title: "What industries can gain from SAP QM?",
          description: "Industries together with manufacturing, pharmaceuticals, automotive, patron goods, and meals and beverage gain from SAP QM. Any enterprise that calls for stringent nice control measures and compliance with rules can leverage SAP QM to decorate product nice and regulatory compliance."
        },
        { 
          id: 8, 
          title: "How does SAP QM combine with other SAP modules?",
          description: "SAP QM integrates seamlessly with other SAP modules like Materials Management (MM), Production Planning (PP), Sales and Distribution (SD), and Plant Maintenance (PM). This integration guarantees consistent first-rate management throughout diverse commercial enterprise processes in the SAP atmosphere."
        }
      ];
    
      return (
        <div className="sapim-syllabus">
          <div className="sap-home-syllabus-header">
            <h1>Frequently Asked Questions of SAP</h1>
          </div>
          
          <div className="sap-syllabus-container">
            <div className="syllabus-grid">
              {modules.map((module) => (
                <div 
                  key={module.id} 
                  className={`module-card ${activeModule === module.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveModule(module.id)}
                  onMouseLeave={() => setActiveModule(null)}
                >
                  <div className="module-number">0{module.id}</div>
                  <div className="module-content">
                    {/* <h3>Module {module.id}:</h3> */}
                    <p className="module-title">{module.title}</p>
                    <div className="module-description">
                      <p>{module.description}</p>
                    </div>
                  </div>
                  <div className="module-decoration"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    


  // const CallButton = () => {
  //   const handleCall = () => {
  //     window.location.href = "tel:+917358464788";
  //   };
  
  //   return (
  //     <div className="call-button" onClick={handleCall}>
  //       <img src={callIcon} alt="Call" className="call-icon" />
  //     </div>
  //   );
  // };


// Main Function (Calls All Components)
const Saponline = () => {
    return (
        <>
            {/* <AboutUsHeader /> */}
            <Intro />
            <SapTrainingProfile />
            <Corporate />
            <CourseSchedule />
            <WhyChooseUs />
            <AskForDemo/>
            <Trainers/>
            <Onlineheader />
            <CurriculumProjects />
            {/* <SelfAssessment /> */}
            <BatchRequestForm />
            {/* <CourseGrid /> */}
            <Testimonials />
            <SapImSyllabus />
            <CoursesSection />
            {/* <CallButton /> */}
            <Footer />
        </>
    );
};

export default Saponline;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};

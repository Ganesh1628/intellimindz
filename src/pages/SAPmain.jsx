import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

// Import ContactModal - CORRECTED PATH
import ContactModal from "../components/Hero-Section/ContactModal";


// Import all your CSS files
import "../components/saponlinecom/onlinebatch.css";
import "../components/saponlinecom/onlinecurriculum.css";
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/sapfico.css"; // This CSS file now contains the styling for SAPHeroSection, SAPAboutSection, and KeyFeaturesSection
import "../components/saponlinecom/onlinecorporate.css";
import "../components/saponlinecom/onlinetestmonials.css";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css";
import "../components/saponlinecom/onlinecoursegrid.css";
import "../components/saponlinecom/onlinetrainers.css";
// Ensure this path is correct if askfordemo.css exists
// import "../components/SAP/Askfordemo/askfordemo.css";


// Import all your image assets
import saphomeintro1 from '../assests/images/saphomeintro1.png';
import bestPriceIcon from '../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../assests/images/practicallearning.jpeg';
import staffIcon from '../assests/images/flexiblebatches.jpeg';
import jobopening from '../assests/images/support.jpeg';
import liveclass from '../assests/images/interactive_sessions.jpeg';
import sapcourse1 from '../assests/images/sapcourse1.png';
import sapcourse2 from '../assests/images/sapcourse2.png';
import sapcourse3 from '../assests/images/sapcourse3.png';
import sapcourse4 from '../assests/images/sapcourse4.png';
import sapcourse5 from '../assests/images/sapcourse5.png';
import sapcourse6 from '../assests/images/sapcourse6.png';
import onlinetest from '../assests/images/lifetimeaccess.jpeg';
import menFace1 from '../assests/images/men_face.png';
import menFace2 from '../assests/images/men_face.png';
import menFace3 from '../assests/images/men_face.png';
import menFace4 from '../assests/images/men_face.png';
import menFace5 from '../assests/images/men_face.png';
// NOTE TO SELF: Image 'sap_training_classroom.png' needs to be added here once available.
// import sapTrainingClassroom from '../assests/images/sap_training_classroom.png';
// Add imports for Key Features images here when available, e.g.:
// import featureIcon1 from '../assests/images/feature_icon1.png';
// import featureIcon2 from '../assests/images/feature_icon2.png';
// ... etc.

import classroomTrainingImg from '../assests/images/Classroom_training.jpeg';
import handsonsapImg from '../assests/images/handsonsap.jpeg';
import casestudyrealtimeImg from '../assests/images/casestudyrealtime.jpeg';
import personalizedmentorImg from '../assests/images/personalizedmentor.jpeg';
import interactiveImg from '../assests/images/interactivesessions.jpeg';
import ExperiencedtrainersImg from '../assests/images/ExperiencedTrainers.jpeg';



// Import other components if they are in separate files
// Uncomment these if they are actual separate components and not defined within this file
// import MessageIcon from "../components/Hero-Section/MessageIcon";
import Footer from "../components/Footer/Footer"; // Assuming Footer is a separate component
import AskForDemo from "../components/SAP/Askfordemo/askfordemo"; // Assuming AskForDemo is a separate component


// Define trainers array
const trainers = [
  {
    id: 1,
    name: "John Doe",
    expertise: "Python & Java",
    experience: "10+ years",
    details:
      "Priya Sharma is an experienced AWS DevOps Engineer with 8 years of expertise in automating cloud workflows, managing CI/CD pipelines, and improving system scalability. She has worked with startups and enterprises to enhance deployment efficiency using AWS CodePipeline, CodeDeploy, and Jenkins. Priya specializes in containerization, using Docker and Kubernetes for scalable microservices architecture. Her expertise in Infrastructure as Code (IaC) using Terraform ensures automated and consistent cloud infrastructure deployment.",
    skills: [
      "AWS Cloud Architecture: Designing scalable cloud solutions",
      "Infrastructure as Code (IaC): Terraform & CloudFormation",
      "Cloud Migration: Seamless transition to AWS",
      "Security & Compliance: IAM policies & encryption",
    ],
    image: menFace1,
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
    image: menFace2,
  },
  {
    id: 3,
    name: "Amit Sharma",
    expertise: "AWS & DevOps",
    experience: "10+ years",
    details:
      "Priya Sharma is an experienced AWS DevOps Engineer with 8 years of expertise in automating cloud workflows, managing CI/CD pipelines, and improving system scalability. She has worked with startups and enterprises to enhance deployment efficiency using AWS CodePipeline, CodeDeploy, and Jenkins. Priya specializes in containerization, using Docker and Kubernetes for scalable microservices architecture. Her expertise in Infrastructure as Code (IaC) using Terraform ensures automated and consistent cloud infrastructure deployment.",
    skills: [
      "AWS Cloud Architecture: Designing scalable cloud solutions",
      "Infrastructure as Code (IaC): Terraform & CloudFormation",
      "Cloud Migration: Seamless transition to AWS",
      "Security & Compliance: IAM policies & encryption",
    ],
    image: menFace3,
  },
];

// Trainers Component
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

// Intro Component
const Intro = ({ openContactModal }) => { // Receives openContactModal prop
  return (
    <div className="intro-container">
      <div className="overlay"></div>
      <div className="intro-content">
        <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
        <h1 className="intro-h1">Best SAP FICO Training Institute in Chennai </h1>
        <h3 className="intro-h3">Unlock the power of financial management with expert-led SAP FICO Training – your gateway to global career opportunities </h3>
        <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button> {/* Uses openContactModal */}
      </div>
    </div>
  );
};

// SapTrainingProfile Component
const SapTrainingProfile = ({ openContactModal }) => { // Receives openContactModal prop
  return (
    <div className="sap-training-container">
      <div className="sap-training-header animate__animated animate__flipInX">
        <h1>
          Learn from the Best: SAP FICO Training by <span>Real-Time Consultants</span>
        </h1>
        <div className="header-divider"></div>
      </div>

      <div className="sap-training-content">
        <div className="training-details">
          <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
            <p className="intro-text">
              At IntelliMindz, our SAP FICO mentors are far more than just trainers; they are distinguished industry veterans with profound, extensive experience specifically within the SAP FICO domain. Each has been actively engaged as a consultant and leading expert in the dynamic SAP FICO landscape, establishing them as genuine subject matter authorities ready to guide your learning journey.
            </p>
          </div>

          <ul className="benefits-list">
            <li><span className="icon">✓</span> Master SAP FICO from Foundation to Advanced concepts with our structured curriculum.</li>
            <li><span className="icon">✓</span> Learn directly from Real-Time SAP FICO Experts bringing current industry insights.</li>
            <li><span className="icon">✓</span> Benefit from IntelliMindz's Proven Track Record in SAP FICO Training and student success.</li>
            <li><span className="icon">✓</span>Receive Dedicated SAP FICO Career Support, including resume and interview preparation.</li>
            <li><span className="icon">✓</span> Gain Practical SAP FICO Exposure through real-world case studies and projects.</li>
            <li><span className="icon">✓</span> Enjoy a Personalized SAP FICO Learning Experience tailored to your pace and needs.</li>

          </ul>

          <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button> {/* Uses openContactModal */}
        </div>

        <div className="training-image">
          <img src={saphomeintro1} alt="SAP Training" />
        </div>
      </div>
    </div>
  );
};

// CoursesSection Component
const CoursesSection = () => {
  const [showAll, setShowAll] = useState(false);
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

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <div className="courses-section">
      <h2 className="online-section-title">Related SAP Courses</h2>
      <div className="courses-grid">
        {visibleCourses.map((course, index) => (
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

      {/* Show More Button */}
      {!showAll && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              backgroundColor: "#003366",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "0 auto"
            }}
          >
            Show More <FaChevronDown />
          </button>
        </div>
      )}
    </div>
  );
};

// Batch Request Section
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

// CurriculumProjects Component
const CurriculumProjects = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (moduleNumber) => {
    setExpandedModule(expandedModule === moduleNumber ? null : moduleNumber);
  };

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
                  <input type="text" placeholder="Enter Phone No" className="Phonenumer_css" />
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


const Corporate = () => {
  const blocksData = [
    {
      image: bestPriceIcon,
      heading: "Experienced Trainers ",
      paragraph: "Get trained by experts from our training centre in Chennai"
    },
    {
      image: runningIcon,
      heading: "Practical Learning ",
      paragraph: "Ideal for professionals searching for training centre near me"
    },
    {
      image: staffIcon,
      heading: "Flexible Batches",
      paragraph: "Choose a schedule that suits you"
    },
    {
      image: liveclass,
      heading: "Interactive Sessions",
      paragraph: "Discussions aligned with job needs"
    },
    {
      image: onlinetest, // Assuming you want to reuse this icon, or replace with a new one
      heading: "Lifetime Access",
      paragraph: "Revisit concepts and revise SAP FICO course syllabus"
    },
    {
      image: jobopening, // Assuming you want to reuse this icon, or replace with a new one
      heading: "Support",
      paragraph: "Continued doubt clarification"
    }
  ];

  return (
    <div className="corporate-section">
      <h2 className="corporate-title">Why Choose Intellimindz?</h2>
      <div className="corporate-grid">
        {blocksData.map((block, index) => (
          <div key={index} className="corporate-block">
            <div className="corporate-image-container">
              <img src={block.image} alt={block.heading} className="corporate-image" />
            </div>
            <h5 className="corporate-block-heading">{block.heading}</h5>
            <p className="corporate-block-paragraph">{block.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


// The NEW SAP Hero Section (from the image)
const SAPHeroSection = () => {
  return (
    <div className="sap-fico-expert-section"> {/* Using the new class from sapfico.css */}
      <h1>Become an SAP FICO Expert with Intellimindz</h1>
      <p>Comprehensive, hands-on training for real-world SAP ERP financial and controlling mastery.</p>
      <button className="sap-fico-expert-button">Start Your Journey Today!</button>
    </div>
  );
};


// The original "Why Should You Learn SAP FICO?" section, renamed for clarity
const WhyShouldYouLearnSAPFICO = () => {
  return (
    <div className="sap-fico-container">
      <h2>Why Should You Learn SAP FICO?</h2>
      <p>
        SAP FICO (Financial Accounting and Controlling) is one of the most widely used SAP modules across
        industries. It is essential for organizations to manage their financial reporting and performance analytics
        effectively. With SAP FICO, businesses can automate accounting, handle asset and cost accounting,
        manage tax calculations, and analyze financial conditions with better clarity.
      </p>

      <h4>Here's why SAP FICO is a smart skill to learn:</h4>
      <ul>
        <li>
          <h6>Critical to Every Business : Every organization, regardless of its size, requires financial planning, reporting, and control.</h6>
        </li>
        <li>
          <h6>High Demand in the ERP Job Market : SAP FICO training is a core skill, consistently in demand across industries like manufacturing, banking, telecom, retail, and logistics. </h6>
        </li>
        <li>
          <h6>Comprehensive Understanding of Finance Operations : Gain full exposure to financial management, budgeting, internal orders, cost center accounting, and profitability analysis. </h6>
        </li>
        <li>
          <h6>Global SAP Implementation : SAP is adopted by leading corporations worldwide, and FICO is integral to SAP ERP implementations.</h6>
        </li>
      </ul>
    </div>
  );
};

// About Our SAP FICO Training in Chennai Section
const SAPAboutSection = () => {
  return (
    <div className="sap-fico-about-section">
      <h2>About Our SAP FICO Training in Chennai</h2>
      <div className="sap-fico-about-content">
        <div className="sap-fico-about-text">
          <p>
            At Intellimindz Chennai, we offer industry-focused SAP FICO training
            that blends conceptual understanding with practical application. Our
            course covers both SAP FI (Financial Accounting) and SAP CO
            (Controlling) modules, providing a well-rounded learning experience
            crucial for excelling in modern business environments.
          </p>
          <p>
            The SAP FICO course syllabus is meticulously designed to include
            theoretical lessons, real-time scenarios, practical assignments, and
            end-to-end implementation exercises. Our training institute ensures
            that learners deeply understand real-world business processes and are
            equipped to handle SAP ERP financial and controlling tasks confidently
            from day one.
          </p>
          <p>
            Designed for both beginners and seasoned professionals seeking to
            upskill, our interactive training ensures clear concept delivery and
            extensive hands-on exposure. Enroll with us to gain comprehensive
            knowledge, practical mastery, and excel in high-demand SAP FICO
            roles across various industries.
          </p>
        </div>
        <div className="sap-fico-about-image-container">
          {/* Placeholder div if you want to visually represent the image's space */}
          <div style={{ width: '250px', height: '180px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#555', fontSize: '0.9em', textAlign: 'center' }}>
            [Image Placeholder: SAP Training Classroom]
          </div>
        </div>
      </div>
    </div>
  );
};

// NEW: Key Features Section
// NEW: Key Features Section
const KeyFeaturesSection = () => {
  const features = [
    {
      id: 1,
      image: classroomTrainingImg,
      title: "Classroom & Online Training Options",
      description:
        "We offer both classroom and online training modes, providing flexibility and convenience for learners. Whether you're a working professional, student, or job seeker searching for a reliable training centre near me, our tailored options suit your schedule and learning style.",
    },
    {
      id: 2,
      image: handsonsapImg,
      title: "Hands-on Practical Sessions with SAP System Access",
      description:
        "Practical labs play a crucial role in reinforcing the SAP FICO course syllabus by offering hands-on experience with real-time scenarios. This approach helps learners gain a deeper understanding of financial processes and controlling tasks within an actual SAP system environment.",
    },
    {
      id: 3,
      image: casestudyrealtimeImg,
      title: "Case Studies Based on Real-Time Scenarios",
      description:
        "Our project case studies are perfectly designed for individuals preparing for SAP FICO interview questions, as they simulate real-time implementation environments. These practical scenarios help learners understand how theoretical concepts are applied in actual business processes and project situations.",
    },
    {
      id: 4,
      image: ExperiencedtrainersImg,
      title: "Experienced SAP FICO Professionals as Trainers",
      description:
        "Gain in-depth knowledge by learning from experienced SAP professionals at our training centre in Chennai. Our expert trainers bring years of industry experience, offering valuable insights, practical guidance, and mentorship to help you build a successful career in SAP FICO.",
    },
    {
      id: 5,
      image: personalizedmentorImg,
      title: "Small Batch Sizes for Personalized Mentoring",
      description:
        "Each student enrolled in our training programme benefits from personalized, one-on-one mentoring sessions. This individualized support ensures better understanding of SAP FICO concepts, clarifies doubts effectively, and helps learners progress at their own pace, enhancing overall learning outcomes and confidence.",
    },
    {
      id: 6,
      image: interactiveImg,
      title: "Interactive Sessions, Discussions, and Module-Wise Quizzes",
      description:
        "At the end of each module, we conduct quizzes and interactive discussions specifically aligned with commonly asked SAP FICO interview questions. This approach helps reinforce learning, assess knowledge retention, and prepare students effectively for real-world job interviews and placement opportunities.",
    },
  ];

  return (
    <div className="sap-fico-features-section">
      <h2>Key Features</h2>
      <div className="sap-fico-features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-placeholder">
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.title}
                />
              ) : (
                feature.iconPlaceholder
              )}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



// This SAPmain component is only relevant if it's actually used and rendered elsewhere.
// If Saponline is your main page, it should export Saponline.
const SAPmain = () => {
  // State to control the ContactModal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* This content will only render if SAPmain is explicitly rendered somewhere */}
      <Saponline openContactModal={openContactModal} /> {/* Pass down the function */}
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} /> {/* Render the modal */}
    </div>
  );
};


// Testimonials Component
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
      description: "SAP QM improves product satisfactory, ensures compliance with enterprise standards and policies, reduces high-quality-related expenses, enhances consumer pride, and supports non-stop development initiatives through providing real-time insights into quality performance across the organization."
    },
    {
      id: 7,
      title: "What industries can gain from SAP QM?",
      description: "Industries together with manufacturing, pharmaceuticals, automotive, patron goods, and meals and beverage gain from SAP QM. Any enterprise that calls for stringent nice control measures and compliance with rules can leverage SAP QM to enhance product nice and regulatory compliance."
    },
    {
      id: 8,
      title: "How does SAP QM combine with other SAP modules?",
      description: "SAP QM integrates seamlessly with other SAP modules like Materials Management (MM), Production Planning (PP), Sales and Distribution (SD), and Plant Maintenance (PM). This integration guarantees consistent first-rate management throughout diverse commercial business processes in the SAP atmosphere."
    }
  ];

  return (
    <div className="sapim-syllabus">
      <div className="sap-home-syllabus-header">
        <h1>Frequently Asked Questions of SAP</h1>
      </div>

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
  );
};


// Main component that wraps all other components
// This component should be the one exported by SAPmain.jsx
const Saponline = ({ openContactModal }) => { // Saponline now receives openContactModal
  return (
    <>
      <Intro openContactModal={openContactModal} /> {/* Pass the function */}
      <SapTrainingProfile openContactModal={openContactModal} /> {/* Pass the function */}
      <Corporate />
      {/* The original "Why Should You Learn SAP FICO?" section */}
      <WhyShouldYouLearnSAPFICO />
      {/* Newly added: "Become an SAP FICO Expert..." section */}
      <SAPHeroSection />
      {/* "About Our SAP FICO Training in Chennai" section */}
      <SAPAboutSection />
      {/* START: NEWLY ADDED "Key Features" section, as requested */}
      <KeyFeaturesSection />
      {/* END: NEWLY ADDED "Key Features" section */}
      <AskForDemo />
      <Trainers /> {/* This is the "Meet Our Expert Trainers" section */}
      <Onlineheader />
      <CurriculumProjects />
      <BatchRequestForm />
      <Testimonials />
      <SapImSyllabus />
      <CoursesSection />
      {/* Footer should ideally be rendered once at the top-level App.js or main layout component,
          not repeatedly within page components like this. Keep it commented here to avoid duplicates. */}
      {/* <Footer /> */}
    </>
  );
};

// This is the component that should be exported from SAPmain.jsx
export default SAPmain; // Exporting SAPmain, which now renders Saponline and ContactModal

// Header Section (if it's a simple placeholder)
const Onlineheader = () => {
  return <div className="online_container"></div>;
};
import React, { useState } from 'react';

// Import ContactModal - CORRECTED PATH
import ContactModal from "../components/Hero-Section/ContactModal";

// Import all your CSS files
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/sapfico.css"; // This CSS file now contains styling for new sections
import "../components/saponlinecom/onlinecorporate.css";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css";
// import "../components/SAP/Askfordemo/askfordemo.css";


// Import all your image assets
import saphomeintro1 from '../assests/images/saphomeintro1.png';
import bestPriceIcon from '../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../assests/images/practicallearning.jpeg';
import staffIcon from '../assests/images/flexiblebatches.jpeg';
import jobopening from '../assests/images/support.jpeg';
import liveclass from '../assests/images/interactive_sessions.jpeg';
import onlinetest from '../assests/images/lifetimeaccess.jpeg';
import aboutsapficoImg from '../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../assests/images/Classroom_training.jpeg';
import handsonsapImg from '../assests/images/handsonsap.jpeg';
import casestudyrealtimeImg from '../assests/images/casestudyrealtime.jpeg';
import personalizedmentorImg from '../assests/images/personalizedmentor.jpeg';
import interactiveImg from '../assests/images/interactivesessions.jpeg';
import ExperiencedtrainersImg from '../assests/images/ExperiencedTrainers.jpeg';

// TODO: Add these image imports when you have the files
import corporateOnsiteImg from '../assests/images/onsite_training.jpeg';
import corporateOffsiteImg from '../assests/images/offsite_training.jpeg';
import corporateVirtualImg from '../assests/images/virtual.jpeg';
import alumniReviewImg from '../assests/images/review.png'; // Placeholder for the girl's image
// import yourCompanyLogo from '../assests/images/your_company_logo.png'; // Placeholder for review card logo

// ***** ADD THIS IMAGE IMPORT *****
import Batchdt from '../assests/images/bg.jpeg';


// Import other components
import AskForDemo from "../components/SAP/Askfordemo/askfordemo";


// Intro Component
const Intro = ({ openContactModal }) => {
  return (
    <div className="intro-container">
      <div className="overlay"></div>
      <div className="intro-content">
        <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
        <h1 className="intro-h1">Best SAP IM Training Institute in Chennai</h1>
        <h3 className="intro-h3">Unlock your technical potential with expert-led SAP IM Training – your gateway to global career opportunities in the SAP Inventory Management domain.</h3>
        <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
      </div>
    </div>
  );
};

// SapTrainingProfile Component
const SapTrainingProfile = ({ openContactModal }) => {
  return (
    <div className="sap-training-container">
      <div className="sap-training-header animate__animated animate__flipInX">
        <h1>
          Learn from the Best: SAP IM Training by <span>Real-Time Experts</span>
        </h1>
        <div className="header-divider"></div>
      </div>
      <div className="sap-training-content">
        <div className="training-details">
          <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
            <p className="intro-text">
              At IntelliMindz, our SAP IM trainers are industry professionals with extensive hands-on experience in SAP Inventory Management. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP IM learning journey.
            </p>
          </div>
          <ul className="benefits-list">
            <li><span className="icon">✔</span> Build a solid foundation and progress through advanced SAP IM concepts.</li>
            <li><span className="icon">✔</span> Learn from practicing SAP IM Consultants with real-time project exposure.</li>
            <li><span className="icon">✔</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP IM training.</li>
            <li><span className="icon">✔</span> Receive full career support including resume assistance and interview coaching.</li>
            <li><span className="icon">✔</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
            <li><span className="icon">✔</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
          </ul>
          <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
        </div>
        <div className="training-image">
          <img src={saphomeintro1} alt="SAP IM Training" />
        </div>
      </div>
    </div>
  );
};

const Corporate = () => {
  const blocksData = [
    { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP IM experts at our training center in Chennai." },
    { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP IM training institute near you that emphasizes practical knowledge." },
    { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
    { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP IM processes and tasks." },
    { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP IM concepts anytime." },
    { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your understanding." }
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

const PlaceholderTrainingIcon = ({ type }) => (
  <div style={{ fontSize: '40px', marginBottom: '15px', color: '#d9534f' }}>
    {type === 'online' && '🎓'}
    {type === 'self-paced' && '💻'}
    {type === 'classroom' && '👥'}
    {type === 'hybrid' && '🔄'}
  </div>
);

const TrainingModesSection = ({ openContactModal }) => {
  const trainingModes = [
    { id: 'online', iconType: 'online', title: "Online Training", description: "Experience live, instructor-led sessions from the comfort of your home. Our online training includes hands-on exercises, real-time projects, and interactive Q&A to ensure practical learning.", isPopular: true },
    { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded video sessions. Get lifetime access to course materials, downloadable resources, and periodic updates to keep your skills up to date.", isPopular: false },
    { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Join our in-person sessions for a focused and immersive learning experience. Our classroom training promotes direct interaction with trainers and peers, ideal for collaborative and structured learning.", isPopular: false },
    { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Enjoy the flexibility of both online and classroom learning. Our hybrid model allows you to switch between formats based on your convenience, ensuring consistent progress and support.", isPopular: false }
  ];
  return (
    <div className="training-modes-section">
      <h2 className="training-modes-title">Our Modes of Training</h2>
      <div className="training-modes-grid">
        {trainingModes.map(mode => (
          <div key={mode.id} className="training-mode-card">
            <PlaceholderTrainingIcon type={mode.iconType} />
            <h3 className="training-mode-card-title">{mode.title}</h3>
            <p className="training-mode-card-description">{mode.description}</p>
            <button className="training-mode-enroll-button" onClick={openContactModal}>Enroll now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SAPHeroSection = ({ openContactModal }) => {
  return (
    <div className="sap-fico-expert-section">
      <h1>Become a Skilled SAP IM Consultant with IntelliMindz</h1>
      <p>Industry-aligned SAP IM training that enhances your expertise in SAP inventory and stock management modules.</p>
      <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your IM Journey Today!</button>
    </div>
  );
};

const SAPAboutSection = () => {
  return (
    <div className="sap-fico-about-section">
      <h2>About Our SAP IM Training in Chennai</h2>
      <div className="sap-fico-about-content">
        <div className="sap-fico-about-text">
          <p>At IntelliMindz Chennai, we offer practical and in-depth SAP Inventory Management (IM) training tailored to meet the demands of both beginners and experienced professionals. This program is designed to equip learners with a solid foundation in inventory processes along with real-time, hands-on project experience. Our comprehensive curriculum covers essential IM topics including goods movements, stock transfers, physical inventory handling, stock determination, and integration with other SAP modules such as Materials Management (MM) and Warehouse Management (WM).</p>
          <p>The training emphasizes real-world application, system navigation, and best practices in inventory tracking and control. Learners gain exposure to typical business scenarios and SAP IM configurations, enabling them to confidently handle inventory challenges in a live SAP environment. With expert trainers, interactive sessions, practical exercises, and personalized mentoring, our SAP IM course ensures that participants are fully prepared for project roles and job opportunities in today's competitive ERP market.</p>
        </div>
        <div className="sap-fico-about-image-container">
          <img src={aboutsapficoImg} alt="SAP IM Training in Chennai" />
        </div>
      </div>
    </div>
  );
};

const KeyFeaturesSection = () => {
  const features = [
    { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike." },
    { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Practice goods receipt, goods issue, stock transfer, and physical inventory activities directly within an SAP environment." },
    { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP IM projects, enhancing your problem-solving abilities." },
    { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP IM Experience", description: "Learn from trainers with hands-on SAP IM implementation experience." },
    { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Personalized mentoring and focused learning environment." },
    { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Quizzes, discussions, and assessments aligned with interview requirements." },
  ];
  return (
    <div className="sap-fico-features-section">
      <h2>SAP IM Training in Chennai – Key Features</h2>
      <div className="sap-fico-features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-placeholder">
              {feature.image ? (<img src={feature.image} alt={feature.title} />) : (feature.iconPlaceholder)}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SapImCourseContentSection = ({ openContactModal }) => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const allModulesData = [
    { id: 1, title: "Module 1: Introduction to SAP IM", topics: ["Overview of ERP and SAP", "SAP Architecture and Navigation", "Overview of SAP Logistics Modules", "Role and Purpose of SAP IM", "SAP IM in the Supply Chain", "SAP IM Organizational Structure", "Integration with MM and WM"] },
    { id: 2, title: "Module 2: Master Data in SAP IM", topics: ["Material Master Data", "Storage Location Setup", "Plant and Storage Configuration", "Unit of Measure and Stock Types", "Movement Types Overview", "Material Valuation", "Master Data Customization"] },
    { id: 3, title: "Module 3: Goods Receipt and Issue", topics: ["Goods Receipt with PO and Without PO", "Goods Issue Against Production Order", "Automatic and Manual Posting", "Stock Posting Scenarios", "Reservations and Goods Movements", "Reporting on Goods Movements", "Integration with FI"] },
    { id: 4, title: "Module 4: Stock Transfer and Transfer Postings", topics: ["One-Step and Two-Step Transfer", "Stock Transfer Between Plants", "Stock in Transit", "Cross-Company Code Transfers", "Transfer Posting Between Storage Locations", "Movement Type Configuration", "Special Stock Transfer"] },
    { id: 5, title: "Module 5: Physical Inventory Process", topics: ["Types of Physical Inventory", "Cycle Counting", "Inventory Document Creation", "Counting and Recounting", "Posting Differences", "Block Stock Handling", "Inventory Reports"] },
    { id: 6, title: "Module 6: Special Stocks and Scenarios", topics: ["Consignment Processing", "Subcontracting Stock", "Sales Order Stock", "Project Stock and Returns", "Pipeline Handling", "Vendor and Customer Stock", "Special Stock Movement Types"] },
    { id: 7, title: "Module 7: Batch and Serial Number Management", topics: ["Batch Management Introduction", "Batch Creation and Classification", "Batch Determination", "Serial Number Profiles", "Serial Number Assignment in IM", "Reporting with Batches and Serial Numbers", "Integration with Quality Management"] },
    { id: 8, title: "Module 8: Reporting and Analysis", topics: ["Standard Reports in SAP IM", "Inventory Turnover Reports", "Valuated Stock Analysis", "Stock Overview and MB5* Reports", "Custom Report Creation", "Real-Time Dashboards", "Data Extraction for BI"] },
    { id: 9, title: "Module 9: SAP IM Customization", topics: ["Configuration of Movement Types", "Account Determination", "Inventory Management Settings in SPRO", "Screen Layout Modifications", "Number Range Settings", "Document Type Configuration", "Reporting Enhancements"] },
    { id: 10, title: "Module 10: Real-Time SAP IM Project", topics: ["End-to-End Inventory Lifecycle", "Real-Time Business Process Mapping", "Error Handling and Resolution", "User Training and Documentation", "Go-Live and Post-Go-Live Support", "Role-Based Scenarios", "Final Project Presentation"] }
  ];
  const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
  return (
    <div className="java-course-content-section">
      <h2 className="java-section-title">
        SAP IM Training in Chennai Course Modules
        <span className="java-title-underline"></span>
      </h2>
      <div className="java-course-layout-container">
        <div className="java-syllabus-modules-panel">
          <div className="java-syllabus-header">Course Syllabus</div>
          <ul className="java-modules-list">
            {allModulesData.map((module) => (
              <li key={module.id} className={`java-module-item ${module.id === activeModuleId ? "java-active-module" : ""}`} onClick={() => setActiveModuleId(module.id)}>
                {module.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="java-topics-details-panel">
          <h3 className="java-topics-title">Topics:</h3>
          <ul className="java-topics-list">
            {activeModuleDetails.topics.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
          <button className="java-download-curriculum-button" onClick={openContactModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
            </svg>
            Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

const BatchDetailsSection = ({ openContactModal }) => {
  const batchInfo = [
    { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Non IT to IT transition"] },
    { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
  ];
  return (
    <div
      className="batch-details-section"
      style={{ '--batch-details-bg-image': `url(${Batchdt})` }}
    >
      <h2 className="batch-details-title">Batch Details</h2>
      <div className="batch-cards-container">
        {batchInfo.map((batch) => (
          <div key={batch.id} className="batch-card">
            <div className="batch-segment batch-month-year">{batch.monthYear}</div>
            <div className="batch-segment batch-schedule-mode">
              <div className="segment-content-wrapper">
                <p>{batch.type}</p>
                <p>{batch.schedule}</p>
                <p>{batch.mode}</p>
              </div>
            </div>
            <div className="batch-segment batch-duration-type">
              <div className="segment-content-wrapper">
                <p>{batch.duration}</p>
                <p>{batch.trainingMethod}</p>
              </div>
            </div>
            <div className="batch-segment batch-fee-suitability">
              <div className="segment-content-wrapper">
                <button className="course-fee-tag" onClick={openContactModal}>
                  {batch.feeTag}
                </button>
                {batch.suitability.map((sText, sIndex) => (<p key={sIndex} className="suitability-text">{sText}</p>))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CorporateTrainingModesSection = () => {
  const trainingModesData = [
    { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your organization’s premises using your systems and workflows." },
    { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Held at our training center or a neutral venue for focused sessions." },
    { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online sessions with interaction and guided learning tools." }
  ];
  return (
    <div className="corporate-training-modes-section">
      <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP IM in Chennai</h2>
      <div className="modes-container-grid">
        {trainingModesData.map(mode => (
          <div key={mode.id} className="mode-card-item">
            <img src={mode.imageSrc || mode.imagePlaceholder} alt={mode.altText} className="mode-image" />
            <h3 className="mode-title">{mode.title}</h3>
            <p className="mode-description">{mode.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AlumniReviewsSection = () => {
  const reviewsData = [
    { id: 1, name: "Harish K.", designation: "SAP IM Consultant", avatarInitial: "H", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP IM course at IntelliMindz gave me practical exposure to core inventory operations, including goods movements and stock tracking. The structured training and real-time case studies helped me transition into a consultant role with ease and confidence." },
    { id: 2, name: "Divya P.", designation: "Inventory Manager", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "Excellent training with clear, detailed explanations on movement types, physical inventory processes, stock transfers, and SAP IM integration with other modules. The trainers were highly experienced, approachable, and very helpful in clarifying doubts throughout the sessions." },
    { id: 3, name: "Ravi M.", designation: "SAP End User", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As someone working in logistics, the SAP IM training in Chennai by IntelliMindz helped me advance my career by building strong, practical SAP system skills. The course delivery was professional, and the hands-on exercises were very useful." },
    { id: 4, name: "Sneha B.", designation: "SAP Functional Trainee", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "From zero knowledge to confidently handling inventory transactions and understanding master data in SAP – this course made the journey possible. With supportive trainers and a solid foundation, it’s the best SAP IM training institute in Chennai." },
    { id: 5, name: "Rajesh V.", designation: "Warehouse Supervisor", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "Hands-on practice with SAP IM reports, inventory configuration, and real business scenarios helped me perform better at work. The project-based approach and practical assignments were highly beneficial and aligned with actual warehouse operations." }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
  const currentReview = reviewsData[currentSlide];
  const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push( <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span> ); } return stars; };
  const formatReviewText = (text) => { return text.split('(P)').map((paragraph, index) => ( paragraph.trim() && <p key={index}>{paragraph.trim()}</p> )); };

  return (
    <div className="alumni-reviews-section">
      <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
      <div className="review-slider-layout-container">
        <div className="reviewer-image-area">
          <div className="reviewer-main-image-placeholder">
            <img src={alumniReviewImg} alt="Alumni Reviewer" />
          </div>
        </div>
        <div className="review-content-area">
          <div className="review-card">
            <div className="review-card-header">
              <span className="review-company-logo-text">{currentReview.companyLogoText || "Intellimindz"}</span>
            </div>
            <div className="reviewer-info-line">
              <div className="reviewer-avatar">{currentReview.avatarInitial}</div>
              <div className="reviewer-name-designation">
                <span className="reviewer-name">{currentReview.name}</span>
                {currentReview.designation && <span className="reviewer-designation">{` – ${currentReview.designation}`}</span>}
              </div>
              <div className="star-rating-header">{renderStars(currentReview.rating)}</div>
            </div>
            <div className="review-text-content">
              {formatReviewText(currentReview.reviewText)}
            </div>
          </div>
          <div className="slider-navigation">
            <div className="nav-controls">
              <button onClick={prevSlide} className="nav-arrow prev-arrow" aria-label="Previous review">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
              <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SapImSyllabus = () => {
  const [activeModule, setActiveModule] = useState(null);
  const modulesData = [
    { id: 1, title: "What is SAP IM used for?", description: "SAP IM (Inventory Management) handles stock movements, tracking, and reporting within warehouses and storage locations in SAP systems." },
    { id: 2, title: "Who should take this SAP IM training in Chennai?", description: "Warehouse managers, logistics professionals, SAP MM/WM consultants, freshers aiming for a career in SAP logistics, and IT professionals looking to specialize in inventory control." },
    { id: 3, title: "Is any prior SAP experience required to learn SAP IM?", description: "No prior SAP experience is needed. However, a basic understanding of supply chain or warehouse operations is beneficial." },
    { id: 4, title: "What are the benefits of taking SAP IM training in Chennai at IntelliMindz?", description: "You gain expert-led instruction, SAP system access, real-time project exposure, and career support with interview preparation – all at a top-rated SAP IM institute in Chennai." },
    { id: 5, title: "What is the difference between SAP IM and SAP WM?", description: "SAP IM focuses on basic inventory movements, while SAP WM (Warehouse Management) deals with detailed warehouse-level stock tracking and bin management." },
    { id: 6, title: "Is training available online?", description: "Yes. We offer both classroom and online SAP IM training in Chennai with full access to SAP systems for practice." },
    { id: 7, title: "Will I gain hands-on experience?", description: "Yes. You’ll work on real SAP systems to perform goods movement, stock transfer, and physical inventory activities." },
    { id: 8, title: "What roles can I apply for after completing SAP IM training?", description: "You can apply for roles such as SAP IM Consultant, Inventory Analyst, Warehouse Lead, Logistics Coordinator, or SAP End User." },
    { id: 9, title: "Can freshers join this SAP IM training in Chennai?", description: "Absolutely. Our course is designed to help freshers build strong foundational knowledge and transition into SAP roles." },
    { id: 10, title: "Do you offer interview support and resume preparation?", description: "Yes. We provide mock interview sessions, resume building, and scenario-based question practice to help you confidently apply for SAP IM jobs." }
  ];
    return (
    <div className="sapim-syllabus">
      <div className="sap-home-syllabus-header">
        <h1>
          Have a Question about Our <span className="highlighted-course-title">SAP IM Course?</span>
        </h1>
        <p className="syllabus-header-subtitle">
          Here are answers to frequently asked questions about our SAP IM training in Chennai:
        </p>
      </div>
      <div className="syllabus-grid">
        {modulesData.map((module) => (
          <div
            key={module.id}
            className={`module-card ${activeModule === module.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveModule(module.id)}
            onMouseLeave={() => setActiveModule(null)}
          >
            <div className="module-number">
              {String(module.id).padStart(2, '0')}
            </div>
            <div className="module-content-syllabus">
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

const CallToActionBanner = ({ openContactModal }) => {
  return (
    <div className="cta-banner-section">
      <p className="cta-banner-text">Navigate your career ambitions with our expert guidance.</p>
      <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
    </div>
  );
};

const SAPmain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);
  return (
    <div>
      <Saponline openContactModal={openContactModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </div>
  );
};

const Saponline = ({ openContactModal }) => {
  return (
    <>
      <Intro openContactModal={openContactModal} />
      <SapTrainingProfile openContactModal={openContactModal} />
      <Corporate />
      <TrainingModesSection openContactModal={openContactModal} />
      <SAPHeroSection openContactModal={openContactModal} />
      <SAPAboutSection />
      <KeyFeaturesSection />
      <SapImCourseContentSection openContactModal={openContactModal} />
      <BatchDetailsSection openContactModal={openContactModal} />
      <CorporateTrainingModesSection />
      <AlumniReviewsSection />
      <AskForDemo />
      <Onlineheader />
      <SapImSyllabus />
      <CallToActionBanner openContactModal={openContactModal} />
    </>
  );
};

export default SAPmain;

const Onlineheader = () => {
  return <div className="online_container"></div>;
};
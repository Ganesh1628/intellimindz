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
        <h1 className="intro-h1">Best SAP ERP Training Institute in Chennai</h1>
        <h3 className="intro-h3">Unlock your technical potential with expert-led SAP ERP Training – your gateway to global career opportunities in the enterprise resource planning landscape.</h3>
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
          Learn from the Best: SAP ERP Training by <span>Real-Time Experts</span>
        </h1>
        <div className="header-divider"></div>
      </div>
      <div className="sap-training-content">
        <div className="training-details">
          <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
            <p className="intro-text">
              At IntelliMindz, our SAP ERP trainers are industry professionals with extensive hands-on experience in enterprise resource planning systems. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP ERP learning journey.
            </p>
          </div>
          <ul className="benefits-list">
            <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP ERP concepts.</li>
            <li><span className="icon">✓</span> Learn from practicing SAP ERP Consultants with real-time project exposure.</li>
            <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP ERP training.</li>
            <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
            <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
            <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
          </ul>
          <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
        </div>
        <div className="training-image">
          <img src={saphomeintro1} alt="SAP Training" />
        </div>
      </div>
    </div>
  );
};

const Corporate = () => {
  const blocksData = [
    { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP ERP experts at our training center in Chennai" },
    { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP ERP training institute near you that emphasizes practical knowledge." },
    { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
    { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP ERP processes and tasks." },
    { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP ERP concepts anytime." },
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
      <h1>Become a Skilled SAP ERP Consultant with Intellimindz</h1>
      <p>Industry-aligned SAP ERP training that enhances your expertise in enterprise resource planning modules.</p>
      <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your ERP Journey Today!</button>
    </div>
  );
};

const SAPAboutSection = () => {
  return (
    <div className="sap-fico-about-section">
      <h2>About Our SAP ERP Training in Chennai</h2>
      <div className="sap-fico-about-content">
        <div className="sap-fico-about-text">
          <p>At IntelliMindz Chennai, we deliver practical SAP ERP training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential ERP topics such as finance, procurement, inventory, human resources, and production planning to ensure comprehensive technical competence.</p>
          <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and ERP implementations, learners gain confidence and the ability to manage SAP ERP functions effectively in enterprise environments.</p>
          <p>Whether you are new to SAP or an experienced professional aiming to enhance your ERP skills, our training prepares you for success in the competitive SAP job market.</p>
        </div>
        <div className="sap-fico-about-image-container">
          <img src={aboutsapficoImg} alt="SAP ERP Training in Chennai" />
        </div>
      </div>
    </div>
  );
};

const KeyFeaturesSection = () => {
  const features = [
    { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference, ensuring a smooth training experience." },
    { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP ERP system access. You will practice transactions in modules such as FI, MM, PP, and HR directly within an SAP environment, reinforcing your theoretical understanding and boosting practical skills." },
    { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP ERP projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
    { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP ERP Experience", description: "Our trainers have extensive industry experience with SAP ERP, having handled multiple implementation projects. Their insights and guidance ensure you learn best practices and relevant skills for the enterprise resource planning domain." },
    { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, which helps students master SAP ERP competently." },
    { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP ERP interview requirements, helping reinforce knowledge and build confidence for job interviews." },
  ];
  return (
    <div className="sap-fico-features-section">
      <h2>Key Features</h2>
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

const SapErpCourseContentSection = ({ openContactModal }) => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const allModulesData = [
    { id: 1, title: "Module 1: Introduction to SAP ERP", topics: ["Overview of ERP and SAP Architecture", "SAP NetWeaver Technology", "SAP ERP System Components", "SAP Logon and Navigation", "Introduction to Key ERP Modules", "Business Process Integration in SAP ERP", "Overview of Enterprise Structures"] },
    { id: 2, title: "Module 2: SAP Financial Accounting (FI)", topics: ["General Ledger and Accounts Payable", "Accounts Receivable and Bank Accounting", "Asset Accounting and Depreciation", "Financial Statement Versions", "Tax Configuration and Posting Periods", "Integration with Controlling (CO)", "Reporting in SAP FI"] },
    { id: 3, title: "Module 3: SAP Materials Management (MM)", topics: ["Purchasing and Vendor Management", "Inventory Management and Goods Movement", "Invoice Verification and Procurement Cycle", "Purchase Requisition and Orders", "Material Master Data", "Valuation and Pricing Procedures", "Stock Transfer and Consumption"] },
    { id: 4, title: "Module 4: SAP Production Planning (PP)", topics: ["Master Data for Production", "Bill of Materials and Work Centers", "Production Orders and Planning Strategies", "Capacity Planning", "Material Requirement Planning (MRP)", "Shop Floor Control", "Integration with MM and SD"] },
    { id: 5, title: "Module 5: SAP Human Capital Management (HCM)", topics: ["Organizational Management", "Personnel Administration", "Time Management and Payroll", "Recruitment and Employee Data", "Training and Event Management", "Appraisals and Compensation", "Integration with Financials"] },
    { id: 6, title: "Module 6: SAP Sales and Distribution (SD)", topics: ["Sales Order Processing", "Shipping and Delivery", "Pricing and Conditions", "Billing and Invoicing", "Returns and Credit Management", "Customer Master Data", "Reporting and Sales Analytics"] },
    { id: 7, title: "Module 7: SAP Project Systems (PS)", topics: ["Project Definition and Structures", "Network and Activity Management", "Cost Planning and Budgeting", "Project Execution and Monitoring", "Reporting and Forecasting", "Integration with CO and MM", "Resource Planning"] },
    { id: 8, title: "Module 8: Reporting and Analytics", topics: ["Standard Reports across ERP Modules", "Custom Report Development", "Use of SAP Business Explorer", "Real-Time Analytics and Dashboards", "Exporting Data for Business Use", "Module-Wise Performance Tracking", "SAP BI Integration"] },
    { id: 9, title: "Module 9: Advanced ERP Topics", topics: ["SAP S/4HANA Introduction", "Data Migration Techniques", "Business Process Reengineering", "SAP Fiori Overview", "Role-Based Security in ERP", "IDoc and EDI Concepts", "Workflow Configuration"] },
    { id: 10, title: "Module 10: End-to-End ERP Project", topics: ["Project Blueprinting", "Implementation Phases and Testing", "Master Data Setup", "Real-Time Business Case Execution", "End-User Documentation", "Go-Live Strategy", "Post Go-Live Support"] }
  ];
  const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
  return (
    <div className="java-course-content-section">
      <h2 className="java-section-title">
        SAP ERP Training Course Modules
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

// ***** MODIFIED BatchDetailsSection *****
const BatchDetailsSection = ({ openContactModal }) => {
  const batchInfo = [
    { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Non IT to IT transition"] },
    { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
  ];
  return (
    // Apply inline style to set CSS Custom Property for the background image
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
    { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows for practical relevance." },
    { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation and team synergy." },
    { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training:", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction and engagement tools." }
  ];
  return (
    <div className="corporate-training-modes-section">
      <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP ERP in Chennai</h2>
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
    { id: 1, name: "Ananya M.", designation: "SAP ERP Consultant", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: ["The SAP ERP course at IntelliMindz provided me with an in-depth and comprehensive understanding of how enterprise systems function across various business processes. The hands-on sessions and real-world examples were very practical, insightful, and directly applicable to my daily work."] },
    { id: 2, name: "Karthik R.", designation: "Functional Analyst", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: ["I appreciated how each ERP module was broken down clearly and methodically. The trainers were very patient, knowledgeable, and supportive. Their strong domain expertise made it easy for me to grasp even the most complex processes with confidence."] },
    { id: 3, name: "Leena T.", designation: "ERP Analyst", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: ["The training included real-time ERP case studies, interactive discussions, and practical exercises, which truly helped me prepare effectively for job interviews. I highly recommend this course for SAP ERP learners seeking quality training in Chennai."] },
    { id: 4, name: "Mohan S.", designation: "SAP Project Lead", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: ["The comprehensive curriculum and excellent faculty made a significant difference in my learning experience. I was able to apply the knowledge and skills I gained immediately in my role managing complex SAP ERP projects efficiently."] },
    { id: 5, name: "Rajesh K.", designation: "Technical ERP Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: ["The access to ERP systems and hands-on assignments provided me with valuable real-world exposure. IntelliMindz is truly one of the best SAP ERP training institutes in Chennai, delivering quality education and practical experience."] }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
  const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
  const currentReview = reviewsData[currentSlide];
  const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push( <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span> ); } return stars; };
  const formatReviewText = (textArray) => { return textArray.map((paragraph, index) => ( <p key={index}>{paragraph.trim()}</p> )); };

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
    { id: 1, title: "What is SAP ERP used for?", description: "SAP ERP is an integrated platform used to manage business processes including finance, logistics, HR, and more within large organizations." },
    { id: 2, title: "Who should attend this SAP ERP training in Chennai?", description: "Professionals from finance, procurement, operations, HR, or IT looking to transition to ERP roles, along with freshers aiming for SAP careers." },
    { id: 3, title: "Do I need experience before taking this ERP training in Chennai?", description: "No prior SAP experience is required. The training is designed for beginners and professionals alike, with foundational to advanced concepts." },
    { id: 4, title: "Why is SAP ERP training in Chennai important now?", description: "With increasing adoption of SAP S/4HANA across industries, ERP professionals are in demand. Chennai is a hub for SAP opportunities." },
    { id: 5, title: "Is there a difference between SAP ERP and SAP modules like FI or MM?", description: "Yes. SAP ERP includes all core modules (FI, MM, SD, PP, etc.). Our training in Chennai offers an integrated view across modules." },
    { id: 6, title: "Do you offer SAP ERP training in Chennai online?", description: "Yes. Both classroom and online options are available for learners who prefer flexible learning." },
    { id: 7, title: "Will this SAP ERP course in Chennai provide system access?", description: "Yes. You will get full SAP ERP system access for practice throughout the training." },
    { id: 8, title: "Is job placement support available for this ERP course in Chennai?", description: "Absolutely. We provide resume building, mock interviews, and job alerts to support your SAP ERP career path." },
    { id: 9, title: "Can I take this SAP ERP training in Chennai while working full-time?", description: "Yes. Flexible batches including weekend and evening sessions are available for working professionals." },
    { id: 10, title: "Is this SAP ERP course suitable for freshers in Chennai?", description: "Definitely. Our structured approach and hands-on methodology make it perfect for fresh graduates starting their SAP journey." }
  ];
    return (
    <div className="sapim-syllabus">
      <div className="sap-home-syllabus-header">
        <h1>
          Have a Question about Our <span className="highlighted-course-title">SAP ERP Course?</span>
        </h1>
        <p className="syllabus-header-subtitle">
          Here are answers to frequently asked questions about our SAP ERP training in Chennai:
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
      <SapErpCourseContentSection openContactModal={openContactModal} />
      <BatchDetailsSection openContactModal={openContactModal} /> {/* Passed prop */}
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
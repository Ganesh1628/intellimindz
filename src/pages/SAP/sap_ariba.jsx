import React, { useState } from 'react';
import Meta from '../../components/Meta'; // Correct import for dynamic meta tags
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets
import saphomeintro1 from '../../assests/images/saphomeintro1.png';
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutsapficoImg from '../../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../../assests/images/Classroom_training.jpeg';
import handsonsapImg from '../../assests/images/handsonsap.jpeg';
import casestudyrealtimeImg from '../../assests/images/casestudyrealtime.jpeg';
import personalizedmentorImg from '../../assests/images/personalizedmentor.jpeg';
import interactiveImg from '../../assests/images/interactivesessions.jpeg';
import ExperiencedtrainersImg from '../../assests/images/ExperiencedTrainers.jpeg';
import corporateOnsiteImg from '../../assests/images/onsite_training.jpeg';
import corporateOffsiteImg from '../../assests/images/offsite_training.jpeg';
import corporateVirtualImg from '../../assests/images/virtual.jpeg';
import alumniReviewImg from '../../assests/images/review.png';
import Batchdt from '../../assests/images/bg.jpeg';

import AskForDemo from "../../components/SAP/Askfordemo/askfordemo";

// --- All of your sub-components remain unchanged ---

// Intro Component
const Intro = ({ openContactModal }) => {
  return (
    <div className="intro-container">
      <div className="overlay"></div>
      <div className="intro-content">
        <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
        <h1 className="intro-h1">Best SAP Ariba Training Institute in Chennai</h1>
        <h3 className="intro-h3">Unlock your professional potential with expert-led SAP Ariba Training – your gateway to global career growth in procurement and supply chain management using SAP Ariba solutions.</h3>
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
          Learn from the Best: SAP Ariba Training by <span>Industry Experts</span>
        </h1>
        <div className="header-divider"></div>
      </div>
      <div className="sap-training-content">
        <div className="training-details">
          <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
            <p className="intro-text">
              At IntelliMindz, our SAP Ariba trainers are seasoned professionals with extensive hands-on experience in SAP Ariba procurement and sourcing modules. With strong domain expertise and real-world project exposure, our trainers deliver detailed knowledge to support your SAP Ariba learning journey.
            </p>
          </div>
          <ul className="benefits-list">
            <li><span className="icon">✓</span> Build a strong foundation and advance through key SAP Ariba concepts.</li>
            <li><span className="icon">✓</span> Learn from practicing SAP Ariba consultants with real-time project experience.</li>
            <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in SAP Ariba training and student placements.</li>
            <li><span className="icon">✓</span> Receive comprehensive career support including resume building and interview coaching.</li>
            <li><span className="icon">✓</span> Work on real-time business scenarios and practical assignments to develop industry-ready skills.</li>
            <li><span className="icon">✓</span> Experience personalized learning tailored to your pace and professional goals.</li>
          </ul>
          <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
        </div>
        <div className="training-image">
          <img src={saphomeintro1} alt="SAP Ariba Training" />
        </div>
      </div>
    </div>
  );
};

const Corporate = () => {
  const blocksData = [
    { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP Ariba experts at our training center in Chennai" },
    { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP Ariba training institute near you with an emphasis on hands-on knowledge." },
    { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your busy lifestyle." },
    { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging lessons focused on real-world SAP Ariba procurement processes." },
    { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course content and refresh SAP Ariba concepts anytime." },
    { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your understanding." }
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
      <h1>Become a Certified SAP Ariba Consultant with IntelliMindz</h1>
      <p>Industry-aligned SAP Ariba training designed to enhance your expertise in procurement, sourcing, and supplier collaboration.</p>
      <button className="sap-fico-expert-button" onClick={openContactModal}>Begin Your Ariba Journey Today!</button>
    </div>
  );
};

const SAPAboutSection = () => {
  return (
    <div className="sap-fico-about-section">
      <h2>About Our SAP Ariba Training in Chennai</h2>
      <div className="sap-fico-about-content">
        <div className="sap-fico-about-text">
          <p>At IntelliMindz Chennai, we provide practical SAP Ariba training that equips learners with both theoretical knowledge and hands-on experience. Our curriculum covers key Ariba modules including sourcing, procurement, contract management, supplier management, and spend analysis to ensure comprehensive technical competence.</p>
          <p>The course includes interactive lectures, live demos, practical exercises, and project-based assignments. Applying real-world procurement scenarios and Ariba system operations, learners gain confidence and ability to handle SAP Ariba implementations effectively in enterprise settings.</p>
          <p>Whether you are new to SAP Ariba or an experienced professional aiming to upskill, our training prepares you for success in the competitive SAP Ariba job market.</p>
        </div>
        <div className="sap-fico-about-image-container">
          <img src={aboutsapficoImg} alt="SAP Ariba Training in Chennai" />
        </div>
      </div>
    </div>
  );
};

const KeyFeaturesSection = () => {
  const features = [
    { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and live online training, ideal for working professionals, students, and job seekers. This blended format lets you select the best fit for your schedule and learning style, ensuring a seamless training experience." },
    { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP Ariba System Access", description: "Our program prioritizes practical learning by providing SAP Ariba system access. You will practice supplier registration, sourcing projects, contract creation, and procurement workflows directly within the Ariba environment, reinforcing theoretical concepts with real use cases." },
    { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Procurement Scenarios", description: "Gain exposure through case studies based on live procurement projects, enhancing your problem-solving skills and preparing you for interview questions focused on practical applications." },
    { id: 4, image: ExperiencedtrainersImg, title: "Trainers with Deep SAP Ariba Experience", description: "Our trainers have rich industry experience with SAP Ariba, having managed multiple sourcing and procurement projects. Their insights ensure you learn best practices and relevant skills for SAP Ariba careers." },
    { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We keep batches small to provide personalized coaching, enabling trainers to address individual queries and offer focused mentoring to help students master SAP Ariba efficiently." },
    { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module concludes with discussions, quizzes, and assessments aligned with current SAP Ariba interview needs, reinforcing knowledge and boosting confidence." },
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

const SapAribaCourseContentSection = ({ openContactModal }) => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const allModulesData = [
    { id: 1, title: "Module 1: Introduction to SAP Ariba", topics: ["Overview of SAP Ariba and Procurement Solutions", "Understanding Cloud-Based Procurement", "SAP Ariba Architecture and Components", "Navigation and User Interface Basics", "Key Features of SAP Ariba Modules", "Procurement Lifecycle Overview", "Integration with SAP ERP and S/4HANA"] },
    { id: 2, title: "Module 2: Supplier Management", topics: ["Supplier Registration and Onboarding", "Supplier Qualification and Performance Evaluation", "Supplier Collaboration Tools", "Supplier Profile and Risk Management", "Supplier Master Data Management", "Supplier Portal Usage", "Supplier Performance Reporting"] },
    { id: 3, title: "Module 3: Sourcing Management", topics: ["Strategic Sourcing Fundamentals", "Creating and Managing Sourcing Projects", "Event Creation: RFQ, Auctions, and RFP", "Supplier Response Evaluation", "Awarding Contracts", "Sourcing Analytics and Reporting", "Best Practices in Sourcing"] },
    { id: 4, title: "Module 4: Contract Management", topics: ["Contract Lifecycle Overview", "Contract Authoring and Templates", "Clause Library and Compliance", "Contract Negotiation and Approval Workflows", "Contract Repository and Search", "Contract Renewal and Expiration Alerts", "Reporting and Auditing"] },
    { id: 5, title: "Module 5: Procurement Operations", topics: ["Requisition Creation and Approval", "Purchase Order Management", "Catalog Management and PunchOut Integration", "Invoice and Payment Processing", "Goods Receipt and Returns", "Workflow Automation", "Procurement Analytics"] },
    { id: 6, title: "Module 6: Spend Analysis", topics: ["Spend Data Collection and Cleansing", "Spend Classification and Categorization", "Reporting and Dashboard Creation", "Identifying Savings Opportunities", "Supplier Spend Analysis", "Compliance Monitoring", "Integration with Ariba Network"] },
    { id: 7, title: "Module 7: Ariba Network and Collaboration", topics: ["Overview of Ariba Network", "Supplier Communication and Transactions", "Purchase Order Acknowledgment", "Invoice Submission and Reconciliation", "Dispute Management", "Network Analytics", "Collaboration Best Practices"] },
    { id: 8, title: "Module 8: SAP Ariba Integration", topics: ["Integration with SAP ERP and S/4HANA", "Data Mapping and Interface Setup", "Middleware and API Overview", "Real-Time Data Exchange", "Troubleshooting Integration Issues", "Security and Authorization", "Monitoring and Reporting"] },
    { id: 9, title: "Module 9: Advanced SAP Ariba Features", topics: ["Guided Buying and Catalog Management", "Mobile Procurement Applications", "Compliance and Risk Management Tools", "Artificial Intelligence in Procurement", "Automation and Workflow Enhancements", "Custom Reporting and Extensions", "Future Trends in SAP Ariba"] },
    { id: 10, title: "Module 10: End-to-End Real-Time SAP Ariba Project", topics: ["Planning and Requirement Gathering", "System Configuration and Setup", "Executing Procurement Processes", "Supplier Onboarding and Management", "Reporting and Analytics Implementation", "User Training and Documentation", "Go-Live Support and Post-Implementation"] }
  ];
  const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
  return (
    <div className="java-course-content-section">
      <h2 className="java-section-title">
        SAP Ariba Training in Chennai Course Modules
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
    { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your company location, providing customized collaborative learning. Ideal for upskilling your team with practical exposure in a familiar environment." },
    { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Held at training centers or conference venues, great for focused group learning and certification preparation free from workplace distractions." },
    { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Live interactive sessions via Zoom, Microsoft Teams, or similar platforms, perfect for remote learners or distributed teams. Combines online flexibility with real-time engagement." }
  ];
  return (
    <div className="corporate-training-modes-section">
      <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP Ariba in Chennai</h2>
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
    { id: 1, name: "Arun M.", designation: "SAP Ariba Consultant", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP Ariba course at IntelliMindz was very comprehensive. The practical sessions on sourcing and supplier management prepared me well for my job. The trainer was knowledgeable and approachable." },
    { id: 2, name: "Sneha R.", designation: "Procurement Specialist", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered all important SAP Ariba modules in detail. Real-time case studies helped me understand contract and procurement processes easily. The support team was excellent." },
    { id: 3, name: "Vignesh T.", designation: "SAP Ariba Freelancer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s SAP Ariba training gave me hands-on experience with real projects. Flexible batch timings and interview prep suited my freelance work perfectly. Highly recommend." },
    { id: 4, name: "Ritika S.", designation: "SAP Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a newcomer to SAP Ariba, the course offered a clear learning path from basics to advanced features. The trainers explained everything clearly, making it a great experience." },
    { id: 5, name: "Ramesh A.", designation: "Senior Ariba Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The detailed content and real-world approach at IntelliMindz made learning SAP Ariba straightforward. The practical sessions boosted my confidence handling procurement tasks." }
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
    { id: 1, title: "What is SAP Ariba used for?", description: "SAP Ariba is a cloud-based procurement and supply chain solution that helps organizations manage sourcing, contracts, supplier collaboration, and procurement operations efficiently." },
    { id: 2, title: "Who should enroll in SAP Ariba training in Chennai?", description: "Procurement professionals, SAP functional consultants, fresh graduates interested in procurement technology, and IT specialists looking for SAP Ariba training in Chennai to enhance their skills." },
    { id: 3, title: "Is prior SAP knowledge required for this SAP Ariba training in Chennai?", description: "No, beginners can start with this SAP Ariba training in Chennai. Basic understanding of procurement processes is beneficial but not mandatory." },
    { id: 4, title: "Does SAP Ariba training in Chennai remain relevant for 2025 and beyond?", description: "Absolutely. SAP Ariba is rapidly growing as a leading procurement platform with increasing adoption worldwide, making this training in Chennai highly valuable." },
    { id: 5, title: "How does SAP Ariba differ from SAP MM?", description: "SAP Ariba focuses on cloud procurement and supplier collaboration, while SAP MM handles internal materials management and inventory. Both modules complement each other and are covered in various training in Chennai options." },
    { id: 6, title: "Is the training available online as well as in Chennai?", description: "Yes, we offer both classroom training in Chennai and live online SAP Ariba training, providing flexibility to learners." },
    { id: 7, title: "Will I get hands-on SAP Ariba experience during this training in Chennai?", description: "Yes, our SAP Ariba training in Chennai includes practical system access for sourcing, procurement, and supplier management exercises." },
    { id: 8, title: "Do you provide interview preparation support as part of the SAP Ariba training in Chennai?", description: "Yes. Each module of our training in Chennai includes interview practice, resume assistance, and scenario discussions relevant to SAP Ariba roles." },
    { id: 9, title: "Can professionals from other SAP modules or IT fields switch to SAP Ariba through this training in Chennai?", description: "Yes, especially those with procurement or SAP backgrounds. Our SAP Ariba training in Chennai is designed to facilitate a smooth transition." },
    { id: 10, title: "Is SAP Ariba training in Chennai suitable for freshers?", description: "Definitely. Our training in Chennai offers promising career opportunities for freshers interested in procurement and supply chain technology." }
  ];
    return (
    <div className="sapim-syllabus">
      <div className="sap-home-syllabus-header">
        <h1>
          Have a Question about Our <span className="highlighted-course-title">SAP Ariba Course?</span>
        </h1>
        <p className="syllabus-header-subtitle">
          Here are answers to commonly asked questions about our SAP Ariba training in Chennai:
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

const Onlineheader = () => {
  return <div className="online_container"></div>;
};


// --- Corrected Main Component ---
// This is the single, main component for the page that gets exported.
const SAPmain = () => {
  // State for the contact modal is managed here
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);
  const pageTitle = "Best Ariba Training in Chennai | Expert SAP Ariba Course";
  const pageDescription = "Join the best SAP Ariba training in Chennai at Intellimindz. Our expert-led course covers procurement, sourcing, and supplier management with hands-on projects.";
  const pageKeywords = "sap ariba training in chennai, sap ariba course, sap ariba certification, intellimindz, procurement training";
  const ogUrl = "https://http://localhost:3000/sap_ariba_training_in_chennai";

  // Return all content, including the dynamic Meta component
  return (
    <>
      <Meta
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
        ogUrl={ogUrl}
      />

      {/* All the page's visual components */}
      <Intro openContactModal={openContactModal} />
      <SapTrainingProfile openContactModal={openContactModal} />
      <Corporate />
      <TrainingModesSection openContactModal={openContactModal} />
      <SAPHeroSection openContactModal={openContactModal} />
      <SAPAboutSection />
      <KeyFeaturesSection />
      <SapAribaCourseContentSection openContactModal={openContactModal} />
      <BatchDetailsSection openContactModal={openContactModal} />
      <CorporateTrainingModesSection />
      <AlumniReviewsSection />
      <AskForDemo />
      <Onlineheader />
      <SapImSyllabus />
      <CallToActionBanner openContactModal={openContactModal} />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
};

export default SAPmain;
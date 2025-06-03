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
// import alumniReviewerPersonImg from '../assests/images/alumni_reviewer_person.png'; // Placeholder for the girl's image
// import yourCompanyLogo from '../assests/images/your_company_logo.png'; // Placeholder for review card logo


// Import other components
import AskForDemo from "../components/SAP/Askfordemo/askfordemo";


// Intro Component
const Intro = ({ openContactModal }) => {
  return (
    <div className="intro-container">
      <div className="overlay"></div>
      <div className="intro-content">
        <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
        <h1 className="intro-h1">Best SAP FICO Training Institute in Chennai </h1>
        <h3 className="intro-h3">Unlock the power of financial management with expert-led SAP FICO Training – your gateway to global career opportunities </h3>
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
    { image: bestPriceIcon, heading: "Experienced Trainers ", paragraph: "Get trained by experts from our training centre in Chennai" },
    { image: runningIcon, heading: "Practical Learning ", paragraph: "Ideal for professionals searching for training centre near me" },
    { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose a schedule that suits you" },
    { image: liveclass, heading: "Interactive Sessions", paragraph: "Discussions aligned with job needs" },
    { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit concepts and revise SAP FICO course syllabus" },
    { image: jobopening, heading: "Support", paragraph: "Continued doubt clarification" }
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
            {mode.isPopular && <div className="popular-banner">Popular</div>}
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
      <h1>Become an SAP FICO Expert with Intellimindz</h1>
      <p>Comprehensive, hands-on training for real-world SAP ERP financial and controlling mastery.</p>
      <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Journey Today!</button>
    </div>
  );
};

const SAPAboutSection = () => {
  return (
    <div className="sap-fico-about-section">
      <h2>About Our SAP FICO Training in Chennai</h2>
      <div className="sap-fico-about-content">
        <div className="sap-fico-about-text">
          <p>At Intellimindz Chennai, we offer industry-focused SAP FICO training that blends conceptual understanding with practical application. Our course covers both SAP FI (Financial Accounting) and SAP CO (Controlling) modules, providing a well-rounded learning experience crucial for excelling in modern business environments.</p>
          <p>The SAP FICO course syllabus is meticulously designed to include theoretical lessons, real-time scenarios, practical assignments, and end-to-end implementation exercises. Our training institute ensures that learners deeply understand real-world business processes and are equipped to handle SAP ERP financial and controlling tasks confidently from day one.</p>
          <p>Designed for both beginners and seasoned professionals seeking to upskill, our interactive training ensures clear concept delivery and extensive hands-on exposure. Enroll with us to gain comprehensive knowledge, practical mastery, and excel in high-demand SAP FICO roles across various industries.</p>
        </div>
        <div className="sap-fico-about-image-container">
          <img src={aboutsapficoImg} alt="SAP FICO Training in Chennai" />
        </div>
      </div>
    </div>
  );
};

const KeyFeaturesSection = () => {
  const features = [
    { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both classroom and online training modes, providing flexibility and convenience for learners. Whether you're a working professional, student, or job seeker searching for a reliable training centre near me, our tailored options suit your schedule and learning style." },
    { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Practical labs play a crucial role in reinforcing the SAP FICO course syllabus by offering hands-on experience with real-time scenarios. This approach helps learners gain a deeper understanding of financial processes and controlling tasks within an actual SAP system environment." },
    { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Our project case studies are perfectly designed for individuals preparing for SAP FICO interview questions, as they simulate real-time implementation environments. These practical scenarios help learners understand how theoretical concepts are applied in actual business processes and project situations." },
    { id: 4, image: ExperiencedtrainersImg, title: "Experienced SAP FICO Professionals as Trainers", description: "Gain in-depth knowledge by learning from experienced SAP professionals at our training centre in Chennai. Our expert trainers bring years of industry experience, offering valuable insights, practical guidance, and mentorship to help you build a successful career in SAP FICO." },
    { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Mentoring", description: "Each student enrolled in our training programme benefits from personalized, one-on-one mentoring sessions. This individualized support ensures better understanding of SAP FICO concepts, clarifies doubts effectively, and helps learners progress at their own pace, enhancing overall learning outcomes and confidence." },
    { id: 6, image: interactiveImg, title: "Interactive Sessions, Discussions, and Module-Wise Quizzes", description: "At the end of each module, we conduct quizzes and interactive discussions specifically aligned with commonly asked SAP FICO interview questions. This approach helps reinforce learning, assess knowledge retention, and prepare students effectively for real-world job interviews and placement opportunities." },
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

// SapFicoCourseContentSection Component - MODIFIED
const SapFicoCourseContentSection = ({ openContactModal }) => {
  const [activeModuleId, setActiveModuleId] = useState(1);
  const allModulesData = [
    { id: 1, title: "Module 1: Introduction to SAP and ERP", topics: ["Introduction to ERP and SAP", "Overview of SAP Modules (MM, SD, PP, HR, etc.)", "SAP GUI Navigation and Logon Process", "Organizational Structure in SAP", "Understanding SAP Client, Company Code, and Business Area", "Role of SAP FICO in SAP ECC and S/4HANA", "Basics of Master Data in SAP"] },
    { id: 2, title: "Module 2: Enterprise Structure in SAP FICO", topics: ["Defining Company, Company Code, and Business Area", "Assigning Company Code to Company", "Creating Financial Management Areas", "Understanding Credit Control Areas", "Assigning Company Code to Credit Control Area", "Defining Functional Areas and Segments", "Configuration of Fiscal Year Variant"] },
    { id: 3, title: "Module 3: General Ledger Accounting (G/L)", topics: ["Creation and Maintenance of G/L Master Records", "Chart of Accounts – Types and Usage", "Posting G/L Transactions", "Document Types and Number Ranges", "Reversal of Documents", "Automatic Payment Program Integration", "G/L Reporting and Analysis Tools"] },
    { id: 4, title: "Module 4: Accounts Payable (AP)", topics: ["Vendor Master Data Creation and Maintenance", "Posting Vendor Invoices and Payments", "Special G/L Transactions for Vendors", "Automatic Payment Program (APP) Configuration", "Withholding Tax Configuration", "Vendor Reports and Aging Analysis", "Integration with Procurement (MM Module)"] },
    { id: 5, title: "Module 5: Accounts Receivable (AR)", topics: ["Customer Master Data Creation and Maintenance", "Posting Customer Invoices and Receipts", "Special G/L Transactions for Customers", "Dunning Process Configuration", "Credit Management in AR", "Customer Reports and Aging Analysis", "Integration with Sales (SD Module)"] },
    { id: 6, title: "Module 6: Asset Accounting (AA)", topics: ["Chart of Depreciation and Depreciation Areas", "Asset Class and Master Record Creation", "Acquisition of Fixed Assets", "Asset Transfer and Retirement", "Depreciation Calculation and Posting", "Asset Reports and Analysis", "Year-End Closing Activities for Asset Accounting"] },
    { id: 7, title: "Module 7: Bank Accounting (BA)", topics: ["Bank Master Data and House Bank Configuration", "Electronic Bank Statement (EBS)", "Manual Bank Reconciliation", "Automatic Bank Reconciliation", "Cash Journals Setup and Usage", "Lockbox Processing", "Integration with Accounts Payable and Receivable"] },
    { id: 8, title: "Module 8: Controlling (CO) – Cost Element and Cost Center Accounting", topics: ["Overview of Controlling in SAP", "Cost Element Accounting – Primary and Secondary", "Cost Center Creation and Hierarchies", "Actual and Plan Cost Postings", "Internal Order Configuration", "Statistical Key Figures", "Reporting in Cost Center Accounting"] },
    { id: 9, title: "Module 9: Controlling (CO) – Profitability and Internal Orders", topics: ["Profit Center Accounting Setup", "Assignment of Org Units to Profit Centers", "Revenue and Cost Allocation to Profit Centers", "Internal Order Planning and Budgeting", "Actual Cost Posting and Settlement", "Profitability Analysis (CO-PA) Introduction", "Real-time Integration of FI and CO"] },
    { id: 10, title: "Module 10: Advanced Topics and Real-Time Scenarios", topics: ["Integration of SAP FICO with MM and SD", "Foreign Currency Transactions and Exchange Rates", "Tax Configuration (VAT, GST, etc.)", "Period-End and Year-End Closing Procedures", "Reports: Financial Statements, Trial Balance, Cash Flow", "SAP Fiori Apps in FICO (for S/4HANA)", "Hands-on Real-time Project with End-to-End Implementation"] }
  ];
  const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
  return (
    <div className="java-course-content-section">
      <h2 className="java-section-title">
        SAP FICO Training Course Content
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
          {/* MODIFIED: Added onClick handler to Download Curriculum button */}
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

// BatchDetailsSection Component - MODIFIED
const BatchDetailsSection = ({ openContactModal }) => {
  const batchInfo = [
    { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Non IT to IT transition"] },
    { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
  ];
  return (
    <div className="batch-details-section">
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
                {/* MODIFIED: Changed div to button and added onClick handler */}
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
    { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Onsite Training is conducted at the client's location, offering a personalized learning experience in the workplace environment. It encourages real-time collaboration and team-based learning. Ideal for companies looking to train multiple employees simultaneously." },
    { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Offsite Training takes place at an external venue, such as a training center or conference space. It provides a distraction-free environment focused solely on learning. Perfect for in-depth sessions, certifications, and team-building opportunities." },
    { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training:", description: "VILT is delivered online by live instructors using platforms like Zoom or Teams. It combines interactive teaching with the flexibility of remote access. Ideal for geographically dispersed teams or remote learners." }
  ];
  return (
    <div className="corporate-training-modes-section">
      <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP FICO Training in Chennai</h2>
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

// --- START: NEW Alumni Reviews Section ---
const AlumniReviewsSection = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Aravind R.",
      designation: "",
      avatarInitial: "A",
      rating: 5,
      companyLogoText: "Intellimindz",
      reviewText: "The SAP FICO training was well-structured with practical insights. (P) Real-time business scenarios improved my understanding. I’m now confident in finance operations. (P) The clear SAP FICO interview questions and transparent course fees made Intellimindz the right choice for me."
    },
    {
      id: 2,
      name: "Meenakshi S.",
      designation: "Finance Analyst",
      avatarInitial: "M",
      rating: 5,
      companyLogoText: "Intellimindz",
      reviewText: "I valued the detailed module explanations and hands-on sessions. (P) The lab access helped reinforce my learning. The SAP FICO interview questions were practical and useful. (P) Affordable course fees and flexible training options made this a great investment in my career."
    },
    {
      id: 3,
      name: "Karthik V.",
      designation: "Accountant",
      avatarInitial: "K",
      rating: 5,
      companyLogoText: "Intellimindz",
      reviewText: "Intellimindz’s SAP FICO training gave me a strong foundation. (P) The interactive sessions and expert trainer clarified all doubts. SAP FICO interview questions were integrated well. (P) Considering the depth and support, the course fees were absolutely worth it."
    },
    {
      id: 4,
      name: "Divya M.",
      designation: "SAP End User",
      avatarInitial: "D",
      rating: 5,
      companyLogoText: "Intellimindz",
      reviewText: "With my accounting background, this SAP FICO training was a perfect fit. (P) Practical business links clarified concepts easily. Course materials and interview preparation were thorough. (P) Transparent SAP FICO course fees simplified my decision to join Intellimindz without hesitation."
    },
    {
      id: 5,
      name: "Pradeep A.",
      designation: "Financial Consultant",
      avatarInitial: "P",
      rating: 5,
      companyLogoText: "Intellimindz",
      reviewText: "The training covered each SAP FICO topic in depth with real-time scenarios. (P) The mock interview questions were spot-on for consultancy roles. (P) High-quality instruction made the course fees reasonable. Intellimindz truly delivers value for professionals looking to upskill."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const currentReview = reviewsData[currentSlide];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
      );
    }
    return stars;
  };

  const formatReviewText = (text) => {
    return text.split('(P)').map((paragraph, index) => (
      paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
    ));
  };

  return (
    <div className="alumni-reviews-section">
      <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
      <div className="review-slider-layout-container">
        <div className="reviewer-image-area">
            <div className="reviewer-main-image-placeholder">
              {/* You will add <img src={alumniReviewerPersonImg} ... /> here later */}
            </div>
          <div className="floating-star-rating-bubble">
            {renderStars(5)}
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
            <div className="nav-quote-icon">“</div>
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
// --- END: NEW Alumni Reviews Section ---

const SapImSyllabus = () => {
  const [activeModule, setActiveModule] = useState(null);
  const modulesData = [
    { id: 1, title: "What is the purpose of SAP FICO module?", description: "SAP FICO is designed to help businesses manage their financial transactions, accounting, and internal reporting efficiently using the integrated ERP system by SAP." },
    { id: 2, title: "Who should take SAP FICO training in Chennai?", description: "Finance professionals, commerce graduates, MBA students, and working accountants looking to upskill or switch to ERP-based finance roles should consider SAP FICO training." },
    { id: 3, title: "What are the prerequisites to learn SAP FICO?", description: "Basic understanding of accounting principles, financial terminology, and MS Excel is helpful, though many institutes teach from scratch for beginners in Chennai." },
    { id: 4, title: "Is SAP FICO training suitable for freshers?", description: "Yes, fresh graduates with a background in commerce, finance, or accounting can benefit from SAP FICO training to boost their employability in ERP roles." },
    { id: 5, title: "What are the main components of SAP FICO?", description: "SAP FICO includes two core modules: Financial Accounting (FI) and Controlling (CO), covering GL, AR/AP, asset accounting, cost centers, and profit analysis." },
    { id: 6, title: "Is SAP FICO training available online in Chennai?", description: "Yes, many institutes offer online SAP FICO training with live instructor-led classes, recorded sessions, and real-time project exposure for convenience." },
    { id: 7, title: "Will I get hands-on practice in the training?", description: "Yes, SAP FICO training includes hands-on practice in real-time SAP servers to help learners understand business processes and perform configuration tasks." },
    { id: 8, title: "Do I need technical skills for SAP FICO?", description: "No, SAP FICO is a functional module and does not require programming or coding skills. It focuses on finance and controlling processes." },
    {id: 9,title: "Can I switch careers with SAP FICO training?",description: "Absolutely. Many working professionals from finance or accounting backgrounds transition into ERP consulting roles after completing SAP FICO training."},
    {id: 10,title: "Is SAP FICO suitable for accountants and CAs?",description: "Yes, accountants and chartered accountants find SAP FICO useful as it aligns with their expertise and opens doors to ERP consulting opportunities."}
  ];
    return (
    <div className="sapim-syllabus">
      <div className="sap-home-syllabus-header">
        <h1>Have a Question with Our SAP FICO Course?</h1>
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

// --- START: NEW CallToActionBanner Section ---
const CallToActionBanner = ({ openContactModal }) => {
  return (
    <div className="cta-banner-section">
      <p className="cta-banner-text">Navigate your career ambitions with our expert guidance.</p>
      <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
    </div>
  );
};
// --- END: NEW CallToActionBanner Section ---

const SAPmain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);
  return (
    <div>
      {/* MODIFIED: Passed openContactModal to Saponline */}
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
      {/* MODIFIED: Passed openContactModal to SapFicoCourseContentSection */}
      <SapFicoCourseContentSection openContactModal={openContactModal} />
      {/* MODIFIED: Passed openContactModal to BatchDetailsSection */}
      <BatchDetailsSection openContactModal={openContactModal} />
      <CorporateTrainingModesSection />
      <AlumniReviewsSection />
      <AskForDemo /> {/* Assuming AskForDemo handles its own modal or doesn't need this one */}
      <Onlineheader />
      <SapImSyllabus />
      {/* --- ADDED CallToActionBanner HERE --- */}
      <CallToActionBanner openContactModal={openContactModal} />
    </>
  );
};

export default SAPmain;

const Onlineheader = () => {
  return <div className="online_container"></div>;
};

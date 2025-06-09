import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider

// Import ContactModal - CORRECTED PATH
import ContactModal from "../components/Hero-Section/ContactModal";

// Import all your CSS files
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/sapfico.css"; // This CSS file now contains styling for new sections
import "../components/saponlinecom/onlinecorporate.css";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css"; // This CSS is likely for general syllabus/FAQ styling
// import "../components/SAP/Askfordemo/askfordemo.css";


// Import all your image assets
import saphomeintro1 from '../assests/images/saphomeintro1.png';
import bestPriceIcon from '../assests/images/ExperiencedTrainers.jpeg'; // Used for Experienced Trainers
import runningIcon from '../assests/images/practicallearning.jpeg'; // Used for Practical Learning
import staffIcon from '../assests/images/flexiblebatches.jpeg'; // Used for Flexible Batches
import jobopening from '../assests/images/support.jpeg'; // Used for Continued Support
import liveclass from '../assests/images/interactive_sessions.jpeg'; // Used for Interactive Sessions
import onlinetest from '../assests/images/lifetimeaccess.jpeg'; // Used for Lifetime Access
import aboutsapficoImg from '../assests/images/aboutsapfico.jpeg'; // Kept for About Section
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
                <h2 className="intro-h2">Best SAP PP Training Institute in Chennai</h2>
                <h1 className="intro-h1">Unlock your production and manufacturing planning skills with industry-aligned SAP PP Training – your gateway to SAP supply chain excellence.</h1>
                <h3 className="intro-h3"></h3>
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
                    Learn from the Best: SAP PP Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP PP trainers are not just instructors – they are certified consultants and domain experts in SAP Production Planning with hands-on implementation experience. They bring real-time knowledge and practical scenarios that help you master SAP PP effectively.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong base and move into advanced SAP PP configurations and strategies.</li>
                        <li><span className="icon">✓</span> Learn from experienced SAP PP professionals with global project exposure.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz’s proven record of excellence in SAP PP training.</li>
                        <li><span className="icon">✓</span> Full career support – from resume writing to mock interviews and beyond.</li>
                        <li><span className="icon">✓</span> Access real-time production planning scenarios and SAP system exercises.</li>
                        <li><span className="icon">✓</span> Customized learning paths based on your profile and career stage.</li>
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
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by working SAP PP consultants with deep process knowledge in manufacturing and production." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals searching for SAP PP training centre near you that delivers project-based learning." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose from weekday, weekend, or fast-track SAP PP training schedules." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Join discussions based on real-time production use cases and integration points." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Retain access to SAP PP study materials and recorded classes even post-training." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt clearance and mentoring sessions even after course completion." }
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
            <h1>Become a Skilled SAP PP Consultant with IntelliMindz</h1>
            <p>Career-focused SAP PP training that empowers you to plan and monitor production efficiently using SAP. Step confidently into SAP’s manufacturing and production domain.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP EC Career with Confidence!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP PP Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SAP PP course is designed to provide you with complete knowledge of SAP Production Planning processes such as demand management, capacity planning, MRP, shop floor control, and production order execution. You’ll gain hands-on experience by working on SAP systems and live exercises.</p>
                    <p>Whether you're a fresher exploring a SAP career or an industry professional transitioning into production systems, our SAP PP training in Chennai ensures that you’re equipped to handle real project responsibilities.</p>
                    <p>SAP PP Training in Chennai</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP PP Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Attend SAP PP classroom sessions in Chennai or join our instructor-led online training. Whether you’re a student, job seeker, or working professional, we offer formats that meet your needs and learning preferences." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Get real-time access to the SAP PP environment. Work on BOM creation, routing setup, production orders, MRP runs, and much more through guided labs and assignments." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Engage in SAP PP business case studies, including manufacturing workflows, integration with MM and SD, and production cost tracking." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP PP Experience", description: "Learn from SAP PP consultants with expertise in discrete and process manufacturing. Trainers explain complex production flows in a simplified, actionable manner." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batch sizes to ensure one-on-one support. Our trainers focus on clearing your doubts and strengthening core concepts." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "After each SAP PP module, participate in assessments and reviews. This helps reinforce your skills and prepares you for real project roles." },
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

const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP PP", topics: ["SAP PP Overview and Process Flow", "Integration with MM, SD, and QM", "Role of SAP PP in the Supply Chain", "SAP GUI Navigation Basics", "Enterprise Structure in SAP PP", "Organizational Elements in Manufacturing", "Overview of Planning Types"] },
        { id: 2, title: "Module 2: Master Data in SAP PP", topics: ["Material Master", "Bill of Materials (BOM)", "Work Centers", "Routings", "Production Version", "Master Recipe Overview", "Data Consistency Checks"] },
        { id: 3, title: "Module 3: Demand Management", topics: ["Types of Demand – PIR and CIR", "Planning Strategies", "Consumption Modes", "Planning Horizon Setup", "Transfer of Requirements", "Forecasting and Planning Tools", "Real-Time Examples"] },
        { id: 4, title: "Module 4: Material Requirement Planning (MRP)", topics: ["MRP Concepts and Process Flow", "Lot Sizing Procedures", "MRP Run Types", "Planning File and Planning Parameters", "MRP Results Analysis", "Scheduling in MRP", "Integration with MM and PP"] },
        { id: 5, title: "Module 5: Capacity Planning", topics: ["Work Center Capacity Settings", "Available Capacity Definition", "Capacity Evaluation Tools", "Finite and Infinite Planning", "Capacity Leveling", "Scheduling and Dispatching", "Reporting in Capacity Planning"] },
        { id: 6, title: "Module 6: Production Orders", topics: ["Order Creation and Types", "Order Release and Printing", "Material Staging and Confirmations", "Goods Issue and Goods Receipt", "Order Settlement Process", "Order Status Management", "Order Reporting and Analysis"] },
        { id: 7, title: "Module 7: Shop Floor Control", topics: ["Production Execution Basics", "Confirmations and Time Tickets", "Handling Rejections and Rework", "Activity Allocation", "Progress Tracking", "Work Center Load Monitoring", "Final Confirmation and Closure"] },
        { id: 8, title: "Module 8: Discrete & Repetitive Manufacturing", topics: ["Difference between Discrete & Repetitive", "Product Cost Collector in REM", "Backflushing Technique", "Reporting in REM", "Serial and Batch Management", "Orderless Production", "Variant Configuration"] },
        { id: 9, title: "Module 9: PP Integration with QM, MM, SD", topics: ["Integration with Quality Management", "Integration with Inventory Management", "Posting Goods Movements", "Procurement Planning Linkage", "Sales Order Planning", "Issue Management", "End-to-End Data Flow"] },
        { id: 10, title: "Module 10: Final Project and Interview Readiness", topics: ["Real-Time Mini Project", "Project Documentation", "Final System Walkthrough", "Resume Building Support", "Interview Questions and Mock Interviews", "FAQ Discussion and Troubleshooting", "Career Planning Session"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Course Modules
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
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Tailored for corporate clients, we deliver SAP PP training at your premises, focusing on your production process needs and business flow." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Conducted in training venues for company teams or individuals looking for certification and conceptual clarity." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Live SAP PP classes conducted online. Ideal for professionals across India seeking SAP PP training in Chennai through remote participation." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP PP in Chennai</h2>
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
        { id: 1, name: "Sandeep R.", designation: "Production Planner", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP PP training at IntelliMindz helped me understand real production order processing and planning methods. The practical system access and detailed sessions made a huge difference in my confidence." },
        { id: 2, name: "Preethi G.", designation: "SAP PP End-User", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "Coming from a core factory background, this SAP PP training in Chennai gave me the skills to shift into a consultant role. Trainers covered both basics and project-level scenarios thoroughly." },
        { id: 3, name: "Varun M.", designation: "SAP Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "Thanks to the expert-led sessions, I now consult on SAP PP projects independently. The SAP PP course in Chennai by IntelliMindz is ideal for those aiming to enter the production domain." },
        { id: 4, name: "Kavitha L.", designation: "Manufacturing Executive", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The real-time project-based approach and interactive classes really helped me. This SAP PP training in Chennai is great for beginners as well as working professionals looking to upgrade their skills." },
        { id: 5, name: "Ravi T.", designation: "Logistics and Supply Chain Specialist", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "Even with a full-time job, I completed SAP PP training online from Chennai. The flexible timing and structured syllabus helped me gain a clear understanding of production planning in SAP." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); } return stars; };
    const formatReviewText = (text) => { return text.split('(P)').map((paragraph, index) => (paragraph.trim() && <p key={index}>{paragraph.trim()}</p>)); };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni – SAP PP Training in Chennai</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer" />
                    </div>
                    {/* <div className="floating-star-rating-bubble">
                     {renderStars(5)}
                   </div> */}
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
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SapFicoFaqSection = () => { // Renamed from SapImSyllabus for clarity
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP PP and who should learn it?", description: "SAP PP (Production Planning) is a vital SAP module for professionals managing production, manufacturing, and plant operations. This SAP PP training in Chennai is ideal for mechanical engineers, production planners, and operations managers." },
        { id: 2, title: "Do I need a technical background to join SAP PP training in Chennai?", description: "No, a technical background is not required. Anyone with interest in manufacturing processes or production workflows can take up SAP PP training in Chennai and start a successful SAP career." },
        { id: 3, title: "Is the SAP PP training in Chennai delivered online or in person?", description: "We provide both classroom training at our Chennai center and online instructor-led SAP PP training sessions. You can choose based on your location and flexibility requirements." },
        { id: 4, title: "What is the duration of SAP PP training in Chennai?", description: "Our SAP PP course typically spans 6 to 8 weeks with flexible scheduling options. You can opt for weekday, weekend, or fast-track batches based on your availability." },
        { id: 5, title: "Will I get hands-on access during the SAP PP course in Chennai?", description: "Yes, every participant in our SAP PP training in Chennai receives hands-on system access to work on real-time SAP PP transactions, configuration steps, and production scenarios." },
        { id: 6, title: "Is SAP PP still in demand in today’s job market?", description: "Yes, SAP PP remains a high-demand skill for industries like manufacturing, pharmaceuticals, and automotive. Companies in Chennai and beyond actively seek trained SAP PP professionals." },
        { id: 7, title: "Does this SAP PP training in Chennai include interview preparation?", description: "Absolutely. Our training includes mock interviews, resume preparation, real-time scenario discussions, and commonly asked SAP PP interview questions to ensure you are job-ready." },
        { id: 8, title: "What is the average salary after completing SAP PP training in Chennai?", description: "Freshers may earn 4–6 LPA, while experienced professionals with SAP PP skills can secure positions with salaries of up to 15 LPA, especially in manufacturing-heavy industries." },
        { id: 9, title: "Can I switch to SAP PP from other modules like MM or SD with this training in Chennai?", description: "Yes, many SAP professionals transition from MM or SD to PP. Our SAP PP training in Chennai equips you with the necessary cross-module knowledge and real-world practice." },
        { id: 10, title: "Will I receive a course completion certificate?", description: "Yes. Upon successful completion of the SAP PP training in Chennai, you will receive a certificate from IntelliMindz validating your participation and skill development in SAP PP." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP PP Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to commonly asked questions about our SAP PP training in Chennai:
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
        <HelmetProvider> {/* Wrap your application with HelmetProvider */}
            <div>
                <Saponline openContactModal={openContactModal} />
                <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
            </div>
        </HelmetProvider>
    );
};

const Saponline = ({ openContactModal }) => {
    return (
        <>
            <Helmet> {/* Add Helmet here */}
                <title>SAP PP Training in Chennai | SAP Production Planning Course in Chennai</title>
                <meta name="description" content="Get practical training in manufacturing and production with our SAP PP Training in Chennai. Master planning, execution, and control in our SAP Production Planning course in Chennai." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapFicoCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} /> {/* Passed prop */}
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapFicoFaqSection /> {/* Updated component name */}
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
                <h2 className="intro-h2">Best SAP CS Training Institute in Chennai</h2>
                <h1 className="intro-h1">Master your skills in SAP Customer Service (CS) with expert-led training designed to prepare you for real-time business scenarios and industry implementations.</h1>
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
                    Learn from the Best: SAP CS Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP CS trainers are professionals with in-depth industry experience in service management and customer engagement. Our course blends theoretical knowledge with live practical exposure in configuring and managing SAP CS components.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a comprehensive foundation and progress into advanced SAP CS configuration.</li>
                        <li><span className="icon">✓</span> Learn from certified SAP CS experts with hands-on project background.</li>
                        <li><span className="icon">✓</span> Join the top-rated SAP CS training institute in Chennai for result-oriented learning.</li>
                        <li><span className="icon">✓</span> Career support with resume building and mock interview preparation.</li>
                        <li><span className="icon">✓</span> Apply your knowledge through customer service management case studies.</li>
                        <li><span className="icon">✓</span> Learn at your pace with our flexible and personalized training methodology.</li>
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
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP CS consultants with implementation and support experience in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Experience hands-on SAP CS training in Chennai with real-time ticket resolution." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Batch schedules that fit professionals and students including fast-track weekend options." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions that simulate real business issues in SAP CS modules." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Continue accessing SAP CS learning materials even after course completion." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-training guidance for technical queries and implementation support." }
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
            <h1>Become a Skilled SAP CS Consultant with IntelliMindz</h1>
            <p>Get trained in SAP CS to manage customer support processes, service orders, and technical objects efficiently. Accelerate your SAP career with our hands-on learning experience.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP CS Career with Confidence!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP CS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers the most comprehensive SAP CS training in Chennai, covering key elements like service notifications, maintenance processing, and integration with SD, PM, and MM modules. Our hands-on curriculum prepares you to work on real business use cases and SAP configurations.</p>
                    <p>This course is ideal for fresh graduates, SAP functional consultants, and professionals aiming to specialize in customer service operations using SAP. Learn how to handle service requests, order processing, resource planning, and more with our step-by-step modules and lab exercises.</p>
                    <p>SAP CS Training in Chennai</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP CS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose classroom training in Chennai or attend sessions online. Our SAP CS training in Chennai is designed to suit varied learning styles with expert instructor-led delivery." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Work on real-time SAP CS processes including notification creation, service orders, and billing. System access ensures you gain practical knowledge applicable in real job scenarios." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Master service management in SAP CS through case studies that replicate support and maintenance situations faced by enterprises today." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP CS Experience", description: "Our trainers are professionals from the SAP Customer Service domain who bring real-world examples and implementation tricks to help bridge the theory-practice gap." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Smaller groups enable our trainers to focus on each learner’s understanding and guide them through personalized feedback and mentorship." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Our SAP CS training in Chennai includes frequent evaluations through quizzes, mock projects, and interview-style questions after each module." },
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
        { id: 1, title: "Module 1: SAP CS Overview", topics: ["Introduction to SAP Customer Service", "Overview of CS Components and Architecture", "CS Integration with SD, PM, and MM", "Navigation in SAP GUI", "Enterprise Structure and Organizational Elements", "Technical Objects in SAP CS", "User Roles and Authorizations"] },
        { id: 2, title: "Module 2: Service Notification Management", topics: ["Notification Types and Categories", "Partner Determination", "Reference Objects and Tasks", "Notification Processing Cycle", "Notification Reports and Status Management", "Integration with Workflow", "User-Defined Fields and Enhancements"] },
        { id: 3, title: "Module 3: Service Order Management", topics: ["Service Order Types and Configurations", "Planning and Scheduling", "Resource Assignment and Availability", "Service Order Processing Flow", "Order Confirmation and Completion", "Order Status and Reports", "Integration with SD Billing"] },
        { id: 4, title: "Module 4: Task Lists and Maintenance Plans", topics: ["Single-Cycle and Strategy Plans", "Preventive Maintenance in CS", "Task List Creation and Usage", "Scheduling Parameters and Call Horizon", "Maintenance Strategy Setup", "Performance-Based Planning", "Practical Exercises"] },
        { id: 5, title: "Module 5: Equipment and Functional Location Management", topics: ["Master Data Configuration", "Equipment Records", "Functional Location Hierarchies", "Object History and Warranty Tracking", "Measuring Points and Counters", "Equipment Task Lists", "Integration with PM and CS Orders"] },
        { id: 6, title: "Module 6: Service Contracts", topics: ["Contract Types and Terms", "Master Data and Pricing", "Billing Plans and Scheduling", "Contract Management Cycle", "Integration with FI/SD", "Renewals and Termination Processing", "Contract Reports"] },
        { id: 7, title: "Module 7: Warranty and Claims Management", topics: ["Warranty Types and Conditions", "Claims Processing Lifecycle", "Integration with Equipment Records", "Notifications and Follow-ups", "Claim Settlement Process", "Reports and Analytics", "Custom Enhancements"] },
        { id: 8, title: "Module 8: Service Billing and Pricing", topics: ["Billing Types and Profiles", "Pricing Procedures in CS", "Integration with SD Billing", "Resource-Related Billing", "Debit and Credit Memo Requests", "Tax Handling and Account Assignment", "Billing Reports"] },
        { id: 9, title: "Module 9: User Exits and BAdIs in SAP CS", topics: ["Common Enhancements in CS", "User Exits and Customer Functions", "Business Add-Ins (BAdIs) Implementation", "Workflow Triggers and Events", "Custom Fields and Layouts", "Reporting Enhancements", "Debugging Techniques"] },
        { id: 10, title: "Module 10: SAP CS Project and Certification Preparation", topics: ["Real-Time Project Execution", "CS Configuration Walkthrough", "End-to-End Testing and Support", "Final Assessment and Use Cases", "Interview Questions Discussion", "Resume Review and Job Guidance", "Certification Tips and Exam Preparation"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "We provide custom onsite SAP CS training in Chennai based on your company's service process flows and system requirements." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Conducted at our training center, offsite training offers a distraction-free environment for learners." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Participate in live online SAP CS sessions from anywhere, taught by expert instructors." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP CS in Chennai</h2>
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
        { id: 1, name: "Kamala S.", designation: "SAP CS Functional Consultant", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "Great real-time SAP CS training in Chennai. The instructors were experienced and explained every concept using real-world examples and practical use cases. Their method of teaching made the content very easy to grasp, especially for someone new to SAP CS." },
        { id: 2, name: "Ramesh T.", designation: "Customer Service Manager", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "I highly recommend IntelliMindz for SAP CS training in Chennai. The faculty shared deep insights into critical areas such as service order management, equipment tracking, and CS-PM integration. The hands-on sessions helped me apply what I learned directly to my job." },
        { id: 3, name: "Aarthi M.", designation: "SAP Support Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP CS course modules at IntelliMindz were very detailed and industry-oriented. The trainer support was top-notch, and the personalized guidance I received during system access sessions was extremely beneficial. This training is definitely worth the investment." },
        { id: 4, name: "Gokul N.", designation: "SAP PM/CS Analyst", avatarInitial: "G", rating: 5, companyLogoText: "Intellimindz", reviewText: "Thanks to IntelliMindz’s focused SAP CS training in Chennai, I was able to switch from a PM role to a CS consultant position. The course covered key integration points with PM and SD modules, and the practical labs gave me confidence during real project implementation." },
        { id: 5, name: "Sneha K.", designation: "Service Delivery Executive", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "If you're searching for structured and job-ready SAP CS training in Chennai, IntelliMindz is the right choice. The trainers were very patient, answered every question, and provided excellent real-time examples. The syllabus covers all the essentials needed for the field." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); } return stars; };
    const formatReviewText = (text) => { return text.split('(P)').map((paragraph, index) => (paragraph.trim() && <p key={index}>{paragraph.trim()}</p>)); };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
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
        { id: 1, title: "What is the role of SAP CS in business operations?", description: "SAP Customer Service (CS) module plays a crucial role in managing customer-related service processes such as equipment repairs, service orders, notifications, warranty tracking, and feedback management. It ensures timely service delivery, streamlined communication, and better customer satisfaction, making it essential for any organization that offers post-sales support." },
        { id: 2, title: "Who can benefit the most from SAP CS training in Chennai?", description: "This SAP CS training in Chennai is highly beneficial for service delivery executives, SAP SD or PM consultants, technical support professionals, and freshers looking to specialize in the customer service domain of SAP. It is ideal for professionals aiming to work in industries that rely heavily on customer support and service workflows." },
        { id: 3, title: "Is prior SAP or technical experience required to join SAP CS training in Chennai?", description: "No, you do not need to have any prior experience with SAP or technical systems to enroll. The SAP CS course at IntelliMindz is designed to accommodate both beginners and professionals. It starts with basic concepts and gradually moves towards more advanced topics, complete with hands-on practice sessions and exercises." },
        { id: 4, title: "How is SAP CS different from SAP PM in terms of functionality?", description: "While both modules deal with maintenance and support, SAP CS focuses on external customer service processes such as responding to client service requests and managing warranties. SAP PM, on the other hand, is geared toward internal maintenance activities like equipment inspections and preventive maintenance tasks. Our SAP CS training in Chennai clarifies these differences with real-time case studies." },
        { id: 5, title: "What are the career opportunities after SAP CS training in Chennai?", description: "Upon successful completion of our SAP CS training in Chennai, you can pursue roles such as SAP CS Consultant, Technical Support Analyst, Service Process Manager, Functional Consultant, or SAP PM-CS Integration Specialist. There is a growing demand for SAP CS professionals in industries like manufacturing, utilities, and consumer products." },
        { id: 6, title: "Does IntelliMindz provide hands-on SAP CS system access during training in Chennai?", description: "Yes, we provide full hands-on access to the SAP CS training system in Chennai. You will be able to practice creating service orders, configuring notification types, managing equipment records, and generating reports. This practical exposure is critical for understanding real-world business processes." },
        { id: 7, title: "Can I attend SAP CS training online if I cannot travel to Chennai?", description: "Absolutely. IntelliMindz offers flexible online SAP CS training options with live instructor-led sessions. These virtual classes provide the same quality of training as in-person classes, with added benefits like recorded sessions for review and online doubt-clearing support." },
        { id: 8, title: "Will I receive guidance for SAP CS certification during training in Chennai?", description: "Yes. Our SAP CS training in Chennai includes support for certification preparation. We provide relevant materials, practice tests, and tips to help you pass the certification exam confidently. Our trainers also share insights into exam patterns and commonly asked questions." },
        { id: 9, title: "How long is the duration of the SAP CS training program in Chennai?", description: "The SAP CS training duration typically ranges from 6 to 8 weeks, depending on the batch you choose. We offer both regular-paced and fast-track programs to cater to different schedules. Weekend classes are also available for working professionals in Chennai." },
        { id: 10, title: "Is post-course support available after completing SAP CS training in Chennai?", description: "Yes. Once you complete the course, you will gain access to our dedicated learner support system, including a technical forum, live Q&A sessions, job support guidance, and expert mentoring. This ensures that you continue to get help even during job applications and live project scenarios." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP CS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Find answers to the most common and important queries related to our SAP CS training in Chennai:
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
                <title>SAP CS Training in Chennai | SAP Customer Service Course in Chennai</title>
                <meta name="description" content="Join the best SAP CS Training in Chennai to master service management and customer interaction. Hands-on learning in SAP Customer Service course in Chennai." />
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
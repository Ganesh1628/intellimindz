import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

// Intro Component
const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Best SAP MII Training Institute in Chennai</h2>
                <h1 className="intro-h1">Unlock your technical potential with expert-led SAP MII Training – your gateway to global career opportunities in the manufacturing intelligence and integration space.</h1>
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
                    Learn from the Best: SAP MII Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP MII trainers are seasoned professionals with deep expertise in manufacturing integration and intelligence systems. With strong domain knowledge and real-time project insights, they provide structured guidance for a productive SAP MII learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP MII topics.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP MII Consultants with real-time implementation exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP MII training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time integration scenarios and manufacturing use cases.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and goals.</li>
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
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP MII experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP MII training institute near you that emphasizes practical use cases." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP MII processes and integrations." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP MII concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your knowledge." }
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
            <h1>Become a Skilled SAP MII Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP MII training that enhances your skills in manufacturing intelligence, integration, and system connectivity.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your MII Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP MII Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we offer result-driven SAP MII training to help learners gain technical and project-ready skills in manufacturing operations. Our course covers essential MII topics including data acquisition, system connectivity, performance monitoring, and integration with MES and ERP systems.</p>
                    <p>The training blends interactive lessons, live demonstrations, system walkthroughs, and assignments based on real-time plant floor scenarios. We ensure learners develop both foundational concepts and hands-on abilities to support integration in manufacturing environments.</p>
                    <p>Whether you’re a fresher or an experienced IT/OT professional, our training prepares you for real-world SAP MII project responsibilities.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP MII Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including physical classes and live online training, suitable for professionals, graduates, and those transitioning careers. Choose the method that best fits your learning style and availability." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP MII System Access", description: "Gain real-time exposure with dedicated access to SAP MII systems, allowing you to practice key features like KPI dashboards, machine integration, and data modeling." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Our curriculum includes use cases derived from real industrial environments, helping you analyze, model, and integrate manufacturing data in SAP MII." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP MII Experience", description: "Get trained by professionals who’ve worked on actual SAP MII rollouts. Their guidance ensures you acquire relevant and current skills." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Learn in small groups for personalized support and focused mentoring from instructors." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each training module includes interactive problem-solving, quizzes, and assessments aligned with current SAP MII job requirements." },
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
        { id: 1, title: "Module 1: Introduction to SAP MII", topics: ["Overview of SAP MII Architecture", "Role of MII in Manufacturing Systems", "SAP MII User Interface and Navigation", "Integration Concepts and Data Flow", "Overview of ISA-95 Model", "Introduction to OEE and KPIs", "SAP MII vs MES – Role Clarification"] },
        { id: 2, title: "Module 2: SAP MII Integration Framework", topics: ["Data Integration from Shop Floor Systems", "OPC and PLC Connectivity", "XML and Web Services in MII", "Data Servers and System Tags", "Transaction Templates and Execution", "Connector Configuration and Diagnostics", "Integration with SAP ERP and SAP ME"] },
        { id: 3, title: "Module 3: SAP MII Data Services", topics: ["Data Queries and SQL Integration", "Creating and Using Data Sources", "Data Model Development", "Message Services in MII", "Error Handling and Logging", "Time-Series and Real-Time Data Processing", "SAP Plant Connectivity Integration"] },
        { id: 4, title: "Module 4: Visualization and UI5 Dashboards", topics: ["Building UI5-Based MII Applications", "KPI and Scorecard Design", "Configuring Real-Time Dashboards", "Using SAP Visual Composer", "HTML and JavaScript for UI Customization", "Xacute Queries and Parameter Mapping", "Mashups and Charting Tools"] },
        { id: 5, title: "Module 5: SAP MII Business Logic Services", topics: ["Use of Logic Editors and Expressions", "Using SAP MII Scripting Environment", "Linking Business Logic with Visualization", "Trigger Conditions and Alerting", "Using Timers and Triggers", "Real-time Rule Execution", "Event Management Integration"] },
        { id: 6, title: "Module 6: SAP MII and SAP ERP Integration", topics: ["Overview of BAPI and RFC Calls", "Interfacing MII with SAP PP and PM", "Data Exchange with SAP Business Suite", "Reading/Writing SAP ERP Data", "MII as Middleware for MES", "Handling Master Data from ERP", "Transaction Management and Monitoring"] },
        { id: 7, title: "Module 7: SAP PCo (Plant Connectivity)", topics: ["Introduction to SAP PCo", "Connecting Devices to MII", "Agent Instances and Source Systems", "Configuration of Notification Mechanisms", "Collecting Machine-Level Data", "Data Buffering and Monitoring", "PCo Logs and Diagnostics"] },
        { id: 8, title: "Module 8: Reporting and Performance Monitoring", topics: ["Standard Reports and Custom Reporting", "Visualization of OEE, Downtime, and Yield", "Data Aggregation and Trend Analysis", "Real-Time Alerts and Monitoring Dashboards", "Performance Tuning and Optimization", "Exporting Reports to External Formats", "Analytics with SAP BI Tools"] },
        { id: 9, title: "Module 9: Advanced SAP MII Topics", topics: ["SAP S/4HANA Integration with MII", "Event-Driven Architecture", "REST and OData Services", "Role-Based Access Control", "Security Concepts and System Administration", "Custom Libraries and Extensions", "Workflow and Automation in MII"] },
        { id: 10, title: "Module 10: End-to-End SAP MII Project", topics: ["Requirements Gathering and Blueprinting", "System Configuration and Testing", "UI and Dashboard Design", "Interface Development with ERP", "Live Data Integration and Validation", "User Training and Support Planning", "Go-Live and Post-Go-Live Activities"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP MII Training in Chennai Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your facility, providing hands-on collaborative learning tailored to your specific manufacturing systems and workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Held in professional training spaces, enabling structured team learning and productive discussions outside of the workplace." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual Instructor-Led Training (VILT):", description: "Remote live sessions via online platforms like Zoom or Teams, combining online flexibility with instructor-led engagement." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP MII in Chennai</h2>
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
        { id: 1, name: "Ananya M.", designation: "SAP MII Consultant", avatarInitial: "A", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The SAP MII course at IntelliMindz offered a practical and hands-on understanding of integration in manufacturing environments. The trainers delivered live examples that I could directly relate to in my work." },
        { id: 2, name: "Karthik R.", designation: "Integration Specialist", avatarInitial: "K", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The training helped break down complex integration processes in a simple, understandable way. Trainers were supportive and knowledgeable." },
        { id: 3, name: "Leena T.", designation: "Manufacturing IT Analyst", avatarInitial: "L", rating: 5, companyLogoText: "IntelliMindz", reviewText: "I highly recommend IntelliMindz for SAP MII training in Chennai. The real-time system access and structured learning helped me prepare well for SAP MII job roles." },
        { id: 4, name: "Mohan S.", designation: "SAP Technical Consultant", avatarInitial: "M", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The project-based learning model made this training very effective. I could immediately apply the MII skills in my job." },
        { id: 5, name: "Rajesh K.", designation: "Plant Systems Lead", avatarInitial: "R", rating: 5, companyLogoText: "IntelliMindz", reviewText: "This is one of the best SAP MII training institutes in Chennai. Great support, hands-on practice, and real-world examples throughout the course." }
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
        { id: 1, title: "What is SAP MII used for?", description: "SAP MII (Manufacturing Integration and Intelligence) connects manufacturing operations with enterprise systems, enabling real-time visibility and optimization." },
        { id: 2, title: "Who should attend this SAP MII training in Chennai?", description: "IT professionals, manufacturing engineers, MES consultants, and freshers looking to build careers in integration and intelligence systems." },
        { id: 3, title: "Do I need prior experience to join this SAP MII training in Chennai?", description: "No. Our SAP MII training is beginner-friendly and includes both foundational and advanced modules." },
        { id: 4, title: "Why is SAP MII training in Chennai in high demand?", description: "With the rise in Industry 4.0 initiatives, SAP MII experts are crucial for enabling smart manufacturing – and Chennai’s manufacturing base drives strong job opportunities." },
        { id: 5, title: "How does SAP MII differ from ERP modules like PP or PM?", description: "SAP MII focuses on integration between manufacturing data and ERP systems. Our Chennai training explains how it complements ERP modules effectively." },
        { id: 6, title: "Is SAP MII training in Chennai available online?", description: "Yes. We offer both online and offline SAP MII training options tailored for convenience." },
        { id: 7, title: "Will I get system access during this SAP MII course in Chennai?", description: "Yes. You will receive hands-on access to the SAP MII system to work on real-time scenarios." },
        { id: 8, title: "Is job assistance provided for SAP MII training in Chennai?", description: "Absolutely. We offer resume support, mock interviews, and career guidance for SAP MII professionals." },
        { id: 9, title: "Can I take this SAP MII course while working full-time in Chennai?", description: "Yes. We offer flexible scheduling, including evening and weekend batches." },
        { id: 10, title: "Is this SAP MII training suitable for freshers in Chennai?", description: "Yes. Freshers can begin their SAP career path with this MII training that includes system access and real-time examples." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP MII Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to frequently asked questions about our SAP MII training in Chennai:
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
                <title>SAP MII Training in Chennai | SAP MII Course in Chennai</title>
                <meta name="description" content="Join the best SAP MII Training in Chennai to master manufacturing integration and intelligence. Enroll in our hands-on SAP MII course in Chennai led by industry experts." />
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
import React, { useState } from 'react';
import Meta from '../../components/Meta';
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
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP PLM Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your potential with expert-led SAP PLM Training – your gateway to global career opportunities in product lifecycle management.</h3>
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
                    Learn from the Best: SAP PLM Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP PLM trainers are industry professionals with extensive hands-on experience in product lifecycle management systems. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP PLM learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP PLM concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP PLM Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP PLM training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP PLM Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP PLM experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP PLM training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP PLM processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP PLM concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your understanding." }
    ];
    return (
        <div className="corporate-section">
            <h2 className="corporate-title">Why Choose IntelliMindz?</h2>
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Experience live, instructor-led SAP PLM sessions from the comfort of your home. Includes hands-on exercises, real-time projects, and interactive Q&A.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded SAP PLM videos. Get lifetime access to course materials and updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Join our in-person SAP PLM sessions in Chennai for a focused and immersive learning experience with trainers and peers.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled SAP PLM Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP PLM training to enhance your expertise in product lifecycle management modules.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your PLM Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP PLM Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SAP PLM training is designed to provide learners with both conceptual and hands-on expertise in product lifecycle management. The curriculum covers key PLM topics like Product Structure Management, Document Management, Change Management, and integration with other SAP modules.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By working on real-time PLM business cases, learners gain the confidence to manage SAP PLM functions in enterprise environments.</p>
                    <p>Whether you're new to SAP or an experienced professional looking to specialize in PLM, our training prepares you for high-demand roles in industries like manufacturing and engineering.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP PLM Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Flexible learning modes including classroom and online live training, catering to professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Practice transactions in SAP PLM modules like Document Management and Change Management within an SAP environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work on real SAP PLM projects to enhance problem-solving skills and prepare for interview scenarios." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP PLM Experience", description: "Learn from experts with extensive experience in SAP PLM implementation projects." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Limited batch sizes ensure personalized mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Engage in discussions and assessments aligned with SAP PLM interview requirements." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP PLM Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to SAP PLM", topics: ["Overview of SAP PLM and its Role", "SAP PLM Architecture", "Key PLM Components", "SAP Navigation and Logon", "Integration with Other SAP Modules", "PLM Business Processes"] },
        { id: 2, title: "Module 2: Product Structure Management", topics: ["Material Master Data in PLM", "Bill of Materials (BOM) Management", "Product Structures and Variants", "BOM Explosion and Reporting", "Integration with SAP PP", "Version Control in Product Structures"] },
        { id: 3, title: "Module 3: Document Management System (DMS)", topics: ["Introduction to SAP DMS", "Document Info Records", "Document Creation and Linking", "Version and Status Management", "Document Distribution", "Integration with CAD Systems"] },
        { id: 4, title: "Module 4: Change Management", topics: ["Engineering Change Management (ECM)", "Change Master and Change Requests", "Change Process Workflow", "Impact Analysis and Notifications", "Change Documentation", "Integration with SAP QM"] },
        { id: 5, title: "Module 5: Project Management in PLM", topics: ["SAP Project System (PS) Overview", "Project Definition and WBS Elements", "PLM Project Planning", "Resource and Cost Management", "Project Monitoring and Reporting", "Integration with SAP PLM"] },
        { id: 6, title: "Module 6: Classification and Variant Configuration", topics: ["Classification System in SAP", "Characteristics and Classes", "Variant Configuration Overview", "Configurable Materials", "Dependency Management", "Integration with SAP SD"] },
        { id: 7, title: "Module 7: SAP PLM Technical Aspects", topics: ["PLM Configuration and Customization", "Workflow Setup in PLM", "Reporting and Analytics", "Data Migration Strategies", "Troubleshooting PLM Issues", "Security and Authorizations"] },
        { id: 8, title: "Module 8: Integration Scenarios", topics: ["Integration with SAP ERP (MM, PP, SD)", "Integration with SAP EAM", "SAP NetWeaver and Portal Integration", "Master Data Synchronization", "Cross-System Data Flow"] },
        { id: 9, title: "Module 9: Advanced PLM Topics", topics: ["SAP S/4HANA PLM Features", "PLM in the Cloud", "Mobile Access to PLM", "Analytics and Dashboards in PLM", "Industry 4.0 and PLM", "Performance Optimization"] },
        { id: 10, title: "Module 10: End-to-End PLM Project", topics: ["PLM Implementation Blueprint", "Project Phases and Testing", "Master Data Setup for PLM", "Real-Time PLM Business Case", "End-User Documentation", "Go-Live and Support Strategy"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP PLM Training in Chennai Course Modules
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

// BatchDetailsSection
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite SAP PLM training", title: "Onsite Training", description: "Delivered at your organization’s premises, offering customized SAP PLM training for team upskilling." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite SAP PLM training center", title: "Offsite Training", description: "Held at professional training centers for focused SAP PLM training and certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual SAP PLM training", title: "Virtual Instructor-Led Training (VILT)", description: "Live SAP PLM sessions via Zoom or similar platforms, ideal for remote teams with hands-on projects." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP PLM in Chennai</h2>
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
        { id: 1, name: "Vikram S.", designation: "SAP PLM Consultant", avatarInitial: "V", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The SAP PLM course at IntelliMindz gave me a deep understanding of product lifecycle management. The hands-on sessions with Document Management and Change Management were highly practical." },
        { id: 2, name: "Priya R.", designation: "PLM Analyst", avatarInitial: "P", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The trainers broke down complex PLM modules clearly. Their industry experience made learning engaging and relevant. I secured a PLM role thanks to this course." },
        { id: 3, name: "Arjun K.", designation: "SAP Functional Consultant", avatarInitial: "A", rating: 5, companyLogoText: "IntelliMindz", reviewText: "Real-time case studies and system access were game-changers. The course prepared me thoroughly for SAP PLM interviews and projects." },
        { id: 4, name: "Lakshmi V.", designation: "SAP PLM Associate", avatarInitial: "L", rating: 5, companyLogoText: "IntelliMindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers explained PLM concepts like BOM management clearly, and the labs were excellent." },
        { id: 5, name: "Ravi M.", designation: "Technical PLM Consultant", avatarInitial: "R", rating: 5, companyLogoText: "IntelliMindz", reviewText: "The course’s focus on real-world projects and S/4HANA PLM features was impressive. The mentorship and hands-on practice were key to my success." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); } return stars; };
    const formatReviewTextContent = (text) => { return <p>{text}</p>; };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer for SAP PLM" />
                    </div>
                </div>
                <div className="review-content-area">
                    <div className="review-card">
                        <div className="review-card-header">
                            <span className="review-title-text">{currentReview.companyLogoText || "IntelliMindz"}</span>
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
                            {formatReviewTextContent(currentReview.reviewText)}
                        </div>
                    </div>
                    <div className="slider-navigation">
                        <div className="nav-controls">
                            <button onClick={prevSlide} className="nav-arrow prev-arrow" aria-label="Previous review">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="inherit" height="20" viewBox="0 0 12 20" fill="none" xmlns="https://www.w3.org/2000/svg">
                                    <path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SapFicoFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP PLM used for?", description: "SAP PLM manages the entire product lifecycle, from design and development to production and maintenance, integrating processes like product structure, document, and change management." },
        { id: 2, title: "Who should attend this SAP PLM training in Chennai?", description: "Professionals in product development, engineering, manufacturing, or IT, along with freshers aiming for SAP PLM careers." },
        { id: 3, title: "Do I need experience before taking this PLM training in Chennai?", description: "No prior SAP experience is required. The course is designed for beginners and professionals with foundational to advanced PLM concepts." },
        { id: 4, title: "Why is SAP PLM training in Chennai important now?", description: "With growing adoption of SAP S/4HANA and Industry 4.0, PLM professionals are in demand in manufacturing and engineering sectors." },
        { id: 5, title: "Is there a difference between SAP PLM and SAP PP?", description: "Yes. SAP PLM focuses on product lifecycle management, including design and change management, while SAP PP focuses on production planning and execution." },
        { id: 6, title: "Do you offer SAP PLM training in Chennai online?", description: "Yes. Both classroom and online options are available for flexible SAP PLM training in Chennai." },
        { id: 7, title: "Will this SAP PLM course in Chennai provide system access?", description: "Yes. You will get full SAP PLM system access for hands-on practice throughout the training." },
        { id: 8, title: "Is job placement support available for this PLM course in Chennai?", description: "Yes. We provide resume building, mock interviews, and job alerts to support your SAP PLM career path." },
        { id: 9, title: "Can I take this SAP PLM training in Chennai while working full-time?", description: "Yes. Flexible batches, including weekend and evening sessions, are available for working professionals." },
        { id: 10, title: "Is this SAP PLM course suitable for freshers in Chennai?", description: "Definitely. Our structured approach and hands-on methodology make it ideal for fresh graduates starting their SAP PLM journey." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP PLM Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to frequently asked questions about our SAP PLM training in Chennai, PLM certification, and PLM career opportunities.
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
            <p className="cta-banner-text">Navigate your career ambitions with our expert SAP PLM guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const SAPmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best SAP PLM Training in Chennai | Practical Oriented PLM Course";
    const pageDescription = "Join the top SAP PLM training in Chennai at IntelliMindz. Learn SAP PLM modules with real-time projects, hands-on practice, and expert guidance.";
    const pageKeywords = "sap plm training in chennai, sap plm course, sap plm certification, product lifecycle management, intellimindz";
    const ogUrl = "https://localhost:3000/sap_plm_training_in_chennai";
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
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapFicoCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapFicoFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
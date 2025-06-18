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

const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best Salesforce Admin Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master Salesforce administration with our expert-led training – your pathway to a successful career in CRM and cloud computing.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: Salesforce Admin Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Salesforce Admin trainers are seasoned professionals with extensive experience in CRM administration and Salesforce platform management. With real-world project expertise, they guide you through a comprehensive learning journey in Salesforce administration.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master core and advanced Salesforce administration concepts.</li>
                        <li><span className="icon">✓</span> Learn from experts with hands-on experience in Salesforce projects.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in CRM training.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time Salesforce scenarios to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Customized learning tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Salesforce Admin Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Salesforce experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Salesforce admin training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that fit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on Salesforce administration and CRM tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access Salesforce course materials anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to enhance your learning." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Salesforce admin sessions from anywhere. Includes hands-on configuration exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your convenience with pre-recorded Salesforce admin video sessions, lifetime access to course materials, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person Salesforce admin sessions for immersive learning with direct trainer and peer interaction.", isPopular: false },
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
            <h1>Become a Skilled Salesforce Administrator with IntelliMindz</h1>
            <p>Industry-focused Salesforce admin training to master CRM configuration and cloud-based solutions.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Salesforce Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Salesforce Admin Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers comprehensive Salesforce Admin training in Chennai, designed to provide both theoretical knowledge and practical expertise in managing Salesforce platforms. Our curriculum covers Salesforce fundamentals, user management, data modeling, automation, and reporting.</p>
                    <p>The course includes interactive classes, live configuration sessions, practical exercises, and real-time projects. By working on industry-relevant scenarios, learners gain the skills to manage Salesforce environments effectively in enterprise settings.</p>
                    <p>Whether you’re a beginner or a professional looking to upskill, our Salesforce Admin training equips you to excel in the competitive CRM job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Salesforce Admin Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for CRM professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with Salesforce", description: "Gain hands-on experience with Salesforce platforms, configuring users, workflows, and reports in a real environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Time Case Studies", description: "Work on case studies based on actual Salesforce admin projects to enhance problem-solving and CRM skills." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Trainers", description: "Learn from industry professionals with extensive experience in Salesforce administration and CRM solutions." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized attention and one-on-one mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions & Assessments", description: "Engage in interactive discussions and module-wise assessments to reinforce learning and prepare for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Salesforce Admin Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Salesforce", topics: ["Overview of Salesforce and CRM", "Salesforce Architecture and Editions", "Understanding Cloud Computing", "Salesforce Admin Roles and Responsibilities", "Navigating Salesforce Interface", "Setting Up Salesforce Environment"] },
        { id: 2, title: "Module 2: User and Security Management", topics: ["Creating and Managing Users", "Profiles and Permission Sets", "Role Hierarchies and Sharing Rules", "Organization-Wide Defaults (OWD)", "Login and Access Policies", "Security Best Practices"] },
        { id: 3, title: "Module 3: Data Management", topics: ["Data Modeling Concepts", "Objects, Fields, and Relationships", "Data Import and Export Using Data Loader", "Data Validation Rules", "Managing Duplicate Records", "Data Backup and Recovery"] },
        { id: 4, title: "Module 4: Automation in Salesforce", topics: ["Workflow Rules and Approvals", "Process Builder Basics", "Flow Builder for Automation", "Email Templates and Alerts", "Automating Business Processes", "Testing Automation Scenarios"] },
        { id: 5, title: "Module 5: Reports and Dashboards", topics: ["Creating Custom Reports", "Report Types and Formats", "Building Dashboards", "Scheduling and Sharing Reports", "Data Analysis with Reports", "Real-Time Reporting Scenarios"] },
        { id: 6, title: "Module 6: App Customization", topics: ["Customizing Standard and Custom Apps", "Creating Lightning Pages", "AppExchange and Third-Party Apps", "Page Layouts and Record Types", "Custom Buttons and Links", "Sandboxes for Development"] },
        { id: 7, title: "Module 7: Advanced Salesforce Admin Concepts", topics: ["Salesforce Lightning Experience", "Integration with External Systems", "Change Management and Deployment", "Mobile Administration", "Managing Communities", "Preparing for Salesforce Admin Certification"] },
        { id: 8, title: "Module 8: Real-Time Project and Certification Prep", topics: ["End-to-End Salesforce Admin Project", "Configuring a Salesforce Org", "Testing and Validation of Configurations", "Preparing for Salesforce Admin Certification (ADM 201)", "Interview Preparation and Mock Tests", "Project Documentation and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Salesforce Admin Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Salesforce Admin training", title: "Onsite Training:", description: "Conducted at your company premises for tailored, collaborative learning using your Salesforce environment." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Salesforce Admin training center", title: "Offsite Training:", description: "Held at professional venues for focused learning, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Salesforce Admin training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online training via Zoom or Teams, perfect for remote or distributed teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Salesforce Admin in Chennai</h2>
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
        { id: 1, name: "Arjun P.", designation: "Salesforce Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Salesforce Admin course at IntelliMindz was outstanding. Hands-on projects with user management and workflows prepared me for real-world tasks." },
        { id: 2, name: "Meena S.", designation: "CRM Analyst", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers made complex topics like Process Builder and reports easy to grasp. Real-time projects boosted my confidence." },
        { id: 3, name: "Ravi K.", designation: "Salesforce Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "Flexible batches and practical training made learning Salesforce seamless. The course prepared me well for the ADM 201 certification." },
        { id: 4, name: "Divya R.", designation: "Salesforce Trainee", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers provided excellent support, making Salesforce concepts clear." },
        { id: 5, name: "Karthik V.", designation: "Senior Salesforce Admin", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on real-world scenarios and Lightning Experience added immense value to my CRM expertise." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push( <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span> ); } return stars; };
    const formatReviewText = (text) => { return <p>{text}</p>; };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer Salesforce Admin" />
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

const SapABAPFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is Salesforce Admin?", description: "A Salesforce Administrator manages and configures Salesforce platforms to support business processes and user needs in a CRM environment." },
        { id: 2, title: "Who should take this Salesforce Admin training?", description: "Fresh graduates, IT professionals, business analysts, and anyone interested in a career in CRM administration." },
        { id: 3, title: "Do I need prior CRM knowledge?", description: "No prior CRM knowledge is required. Our course starts from the basics of Salesforce administration." },
        { id: 4, title: "Is Salesforce Admin in demand in 2025?", description: "Yes, with the growth of cloud-based CRM solutions, Salesforce admin skills are highly sought after across industries." },
        { id: 5, title: "What’s the difference between Salesforce Admin and Developer?", description: "Admins focus on configuration and management, while developers customize Salesforce using coding (Apex, Visualforce)." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Salesforce admin training with live, instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get access to Salesforce environments for practical configuration and administration tasks." },
        { id: 8, title: "Do you offer certification preparation?", description: "Yes, we prepare you for the Salesforce Administrator Certification (ADM 201) with mock tests and guidance." },
        { id: 9, title: "Can I switch to Salesforce from another field?", description: "Yes, with basic IT or business knowledge, you can transition to Salesforce with our structured training." },
        { id: 10, title: "Is Salesforce Admin suitable for freshers?", description: "Absolutely, it’s a great starting point for a career in CRM and cloud computing." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Salesforce Admin Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Salesforce Admin course in Chennai.
                </p>
            </div>
            <div className="syllabus-grid">
                {modulesData.map((faqItem) => (
                    <div
                        key={faqItem.id}
                        className={`module-card ${activeModule === faqItem.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveModule(faqItem.id)}
                        onMouseLeave={() => setActiveModule(null)}
                    >
                        <div className="module-number">
                            {String(faqItem.id).padStart(2, '0')}
                        </div>
                        <div className="module-content-syllabus">
                            <p className="module-title">{faqItem.title}</p>
                            <div className="module-description">
                                <p>{faqItem.description}</p>
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

const Salesforcemain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    return (
        <HelmetProvider>
            <div>
                <Saponline openContactModal={openContactModal} />
                {ContactModal && <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />}
            </div>
        </HelmetProvider>
    );
};

const Saponline = ({ openContactModal }) => {
    return (
        <>
            <Helmet>
                <title>Salesforce Admin Training in Chennai | Salesforce Admin Course in Chennai</title>
                <meta name="description" content="Master CRM administration with our Salesforce Admin Training in Chennai. Learn configuration and management through our expert-led course." />
            </Helmet>
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
            <SapABAPFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default Salesforcemain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
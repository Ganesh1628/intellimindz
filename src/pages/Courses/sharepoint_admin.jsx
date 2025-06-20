import React, { useState } from 'react';
import ContactModal from "../../components/Hero-Section/ContactModal";
import Meta from '../../components/Meta';

// Import all your CSS files
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets
import saphomeintro1 from '../../assests/images/saphomeintro1.png';
import homeintro from '../../assests/images/saphomeintro1.png';
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
    <div style={{ width: "100%", height: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "white", overflow: "hidden" }}>
      <img src={homeintro} alt="Background" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }} />
      {/* <div className="intro-container"> */}
      {/* <div className="training-image-container" >
          <img src={homeintro} alt="SharePoint Admin Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best SharePoint Admin Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master SharePoint administration and management with our expert-led SharePoint Admin Training – your gateway to a thriving career in enterprise collaboration.</h3>
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
                    Learn from the Best: SharePoint Admin Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SharePoint Admin trainers are seasoned IT professionals with extensive experience in managing enterprise SharePoint environments. Their real-world expertise ensures a practical, job-oriented learning experience tailored to your career goals.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master SharePoint administration from basics to advanced configurations.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on SharePoint project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven success in SharePoint training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world SharePoint admin tasks to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy personalized learning tailored to your pace and goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SharePoint Admin Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from expert SharePoint administrators at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on SharePoint admin training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on SharePoint administration and configurations." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access SharePoint course materials anytime for revision and reinforcement." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your SharePoint admin expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led SharePoint admin sessions with hands-on exercises, real-world configurations, and interactive Q&A from anywhere." },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded videos, lifetime access to course materials, and regular content updates." },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person SharePoint admin training with direct trainer interaction and collaborative learning." },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support." }
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
            <h1>Become a Skilled SharePoint Administrator with IntelliMindz</h1>
            <p>Gain expertise in SharePoint administration and management with industry-focused training for enterprise collaboration roles.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SharePoint Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SharePoint Admin Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive SharePoint Admin training designed to master the skills needed to manage and configure SharePoint environments. Our curriculum covers core SharePoint administration tasks, including server management, site configuration, security settings, and integration with Microsoft 365.</p>
                    <p>The course includes hands-on labs, real-world scenarios, and practical exercises to develop job-ready skills. Learners work on enterprise-level SharePoint administration tasks, gaining confidence to handle complex organizational requirements.</p>
                    <p>Whether you're an IT professional aiming to specialize or a beginner looking to enter the field, our SharePoint training equips you with the expertise to excel in enterprise collaboration and content management.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SharePoint Admin Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person and online SharePoint training, tailored for IT professionals and beginners to fit their schedules." },
        { id: 2, image: handsonsapImg, title: "Hands-on SharePoint Labs", description: "Gain practical experience with dedicated SharePoint labs for configuring servers, sites, and permissions." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Admin Scenarios", description: "Work on enterprise-level tasks like site management and security configurations to prepare for real-world challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert SharePoint Trainers", description: "Learn from industry professionals with extensive experience in SharePoint administration and Microsoft 365." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Benefit from small batches for one-on-one mentoring, ensuring personalized support and doubt resolution." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Engage in interactive discussions and assessments aligned with SharePoint admin industry requirements." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SharePoint Admin Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to SharePoint", topics: ["Overview of SharePoint and Its Architecture", "SharePoint Editions and Features", "Introduction to Microsoft 365 Integration", "Setting Up SharePoint Environment", "SharePoint Admin Roles and Responsibilities"] },
        { id: 2, title: "Module 2: SharePoint Server Management", topics: ["Installing and Configuring SharePoint Server", "Managing SharePoint Farms", "Central Administration Overview", "Service Applications Management", "Backup and Restore Operations"] },
        { id: 3, title: "Module 3: Site and Content Management", topics: ["Creating and Managing Site Collections", "Configuring Site Settings", "Managing Document Libraries and Lists", "Content Types and Metadata", "Workflows and Business Processes"] },
        { id: 4, title: "Module 4: Security and Permissions", topics: ["SharePoint Security Model", "Managing User Permissions", "Configuring Authentication Providers", "Implementing Single Sign-On (SSO)", "Auditing and Compliance"] },
        { id: 5, title: "Module 5: SharePoint Online Administration", topics: ["Introduction to SharePoint Online", "Managing SharePoint Online via Admin Center", "Configuring Hybrid Environments", "Tenant Settings and Policies", "Migrating to SharePoint Online"] },
        { id: 6, title: "Module 6: Advanced SharePoint Configurations", topics: ["Search Configuration and Optimization", "Business Connectivity Services (BCS)", "Power Apps and Power Automate Integration", "Customizing SharePoint with Apps", "Performance Tuning"] },
        { id: 7, title: "Module 7: Monitoring and Troubleshooting", topics: ["Monitoring SharePoint Health", "Log Analysis and Diagnostics", "Troubleshooting Common Issues", "Patch Management", "Disaster Recovery Planning"] },
        { id: 8, title: "Module 8: Real-World SharePoint Projects", topics: ["End-to-End Site Deployment Project", "Security and Permissions Configuration", "Document Management System Setup", "Hybrid SharePoint Implementation", "Project Review and Optimization"] },
        { id: 9, title: "Module 9: SharePoint Tools and Best Practices", topics: ["Using PowerShell for SharePoint Admin", "Third-Party Tools for Administration", "SharePoint Governance Best Practices", "User Adoption Strategies", "Version Control and Updates"] },
        { id: 10, title: "Module 10: Career and Certification Preparation", topics: ["SharePoint Admin Interview Preparation", "Resume Building for SharePoint Roles", "Microsoft Certification Overview", "Real-World Case Studies", "Capstone Project and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SharePoint Admin Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate SharePoint admin training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers tailored SharePoint admin learning using your infrastructure for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite SharePoint admin training center", title: "Offsite Training:", description: "Held at professional training centers, this mode ensures focused learning for SharePoint certifications and team upskilling." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led SharePoint admin training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online SharePoint admin training via platforms like Zoom, ideal for remote teams with real-time interaction and hands-on labs." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SharePoint Admin in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "SharePoint Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s SharePoint training was exceptional. The hands-on labs for site management and security were practical and engaging. The trainers were highly supportive." },
        { id: 2, name: "Sneha R.", designation: "IT Administrator", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s clear explanations and real-world scenarios made SharePoint administration accessible. It helped me transition into an admin role confidently." },
        { id: 3, name: "Vignesh T.", designation: "SharePoint Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedule and comprehensive curriculum were perfect. The trainers’ expertise in Microsoft 365 integration was invaluable for my career." },
        { id: 4, name: "Ritika S.", designation: "SharePoint Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers explained concepts clearly, and the labs gave me a strong start in SharePoint." },
        { id: 5, name: "Ramesh A.", designation: "Senior SharePoint Admin", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on advanced configurations and troubleshooting was excellent. The trainers’ industry experience made learning highly practical." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer SharePoint Admin" />
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
        { id: 1, title: "What is SharePoint administration used for?", description: "SharePoint administration involves managing and configuring SharePoint environments for enterprise collaboration, document management, and workflow automation." },
        { id: 2, title: "Who should take this SharePoint admin training?", description: "IT professionals, system administrators, and anyone interested in managing SharePoint environments for organizations." },
        { id: 3, title: "Do I need prior experience for SharePoint admin training?", description: "Basic IT administration knowledge is helpful, but our course starts with foundational SharePoint concepts." },
        { id: 4, title: "Is SharePoint administration in demand in 2025?", description: "Yes, SharePoint admins are highly sought-after for managing enterprise collaboration platforms and Microsoft 365 environments." },
        { id: 5, title: "What’s the difference between SharePoint Online and On-Premises?", description: "SharePoint Online is cloud-based, managed by Microsoft, while On-Premises is hosted locally, offering more control but requiring maintenance." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline SharePoint admin training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes real-world SharePoint labs for configuring sites, permissions, and server settings." },
        { id: 8, title: "Do you offer job preparation support?", description: "Yes, we provide mock interviews, resume guidance, and project-based learning for SharePoint admin roles." },
        { id: 9, title: "Can I switch to SharePoint admin from another field?", description: "Yes, with basic IT skills, SharePoint administration is an excellent career path for transitioning professionals." },
        { id: 10, title: "Is SharePoint admin training suitable for freshers?", description: "Definitely, SharePoint admin is beginner-friendly and a great starting point for a career in IT administration." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SharePoint Admin Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SharePoint Admin course in Chennai.
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

const Sharepointadminmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best SharePoint Admin Training in Chennai | Practical Oriented SharePoint Course";
    const pageDescription = "Join IntelliMindz for top SharePoint Admin training in Chennai. Master SharePoint management with hands-on labs, real-world scenarios, and expert guidance.";
    const pageKeywords = "sharepoint admin training in chennai, sharepoint course, sharepoint administration, microsoft 365 training, intellimindz";
    const ogUrl = "https://localhost:3000/sharepoint_admin_training_in_chennai";
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
            <SapABAPFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default Sharepointadminmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
          <img src={homeintro} alt="Blue Prism Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Blue Prism Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Blue Prism Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Blue Prism Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Blue Prism trainers are seasoned RPA professionals with extensive experience in developing and deploying automation processes. Their real-world expertise ensures a practical, job-oriented learning experience tailored to your career goals.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master Blue Prism from basics to advanced process automation.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on RPA project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven success in Blue Prism training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support with resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world Blue Prism projects to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy personalized learning tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Blue Prism Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from expert RPA professionals at our Blue Prism training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Blue Prism training for process automation." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on Blue Prism tools and RPA scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access Blue Prism course materials anytime for revision and reinforcement." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your Blue Prism expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Blue Prism sessions with hands-on process automation projects, real-world RPA scenarios, and interactive Q&A from anywhere." },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded videos, lifetime access to course materials, and regular content updates." },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person Blue Prism training with direct trainer interaction and collaborative learning." },
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
            <h1>Become a Skilled RPA Developer with IntelliMindz</h1>
            <p>Gain expertise in Blue Prism with industry-focused training for robotic process automation roles.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Blue Prism Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Blue Prism Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive Blue Prism training to master robotic process automation (RPA). Our curriculum covers core Blue Prism concepts, including process design, object studio, control room operations, and integration with enterprise systems.</p>
                    <p>The course includes hands-on labs, real-world RPA projects, and practical exercises to develop job-ready skills. Learners work on industry-relevant automation scenarios, gaining confidence to handle complex business process automation challenges.</p>
                    <p>Whether you're a beginner or a professional looking to upskill, our Blue Prism training equips you with the expertise to excel in the rapidly growing RPA industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Blue Prism Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person and online Blue Prism training, tailored for students, professionals, and career switchers to fit their schedules." },
        { id: 2, image: handsonsapImg, title: "Hands-on RPA Projects", description: "Gain practical experience with real-world process automation projects using Blue Prism." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Automation Scenarios", description: "Work on industry-standard automation projects to prepare for real-world RPA challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert RPA Trainers", description: "Learn from industry professionals with extensive experience in Blue Prism and RPA." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Benefit from small batches for one-on-one mentoring, ensuring personalized support and doubt resolution." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Engage in interactive discussions and assessments aligned with Blue Prism industry needs." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Blue Prism Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Blue Prism", topics: ["Overview of Robotic Process Automation (RPA)", "Introduction to Blue Prism", "Blue Prism Architecture", "Setting Up Blue Prism Environment", "Understanding Process Studio and Object Studio"] },
        { id: 2, title: "Module 2: Process Studio Basics", topics: ["Creating Processes in Blue Prism", "Working with Process Flows", "Using Decision and Calculation Stages", "Data Items and Collections", "Error Handling in Processes"] },
        { id: 3, title: "Module 3: Object Studio", topics: ["Creating Business Objects", "Application Modeller Overview", "Spying Elements (HTML, Windows, Java)", "Working with Attributes and Actions", "Debugging Objects"] },
        { id: 4, title: "Module 4: Control Room Operations", topics: ["Control Room Interface", "Managing Processes and Queues", "Scheduling and Work Queues", "Session Management", "Monitoring and Reporting"] },
        { id: 5, title: "Module 5: Advanced Blue Prism Features", topics: ["Exception Handling and Recovery", "Work Queues and Load Balancing", "Surface Automation Techniques", "Credential Management", "Integration with External Systems"] },
        { id: 6, title: "Module 6: Blue Prism Development Best Practices", topics: ["Process Design Best Practices", "Object Reusability", "Logging and Debugging Techniques", "Version Control in Blue Prism", "Performance Optimization"] },
        { id: 7, title: "Module 7: Real-World RPA Projects", topics: ["End-to-End Process Automation Project", "Invoice Processing Automation", "Customer Support Automation", "Data Migration Automation", "Project Review and Optimization"] },
        { id: 8, title: "Module 8: Blue Prism Security and Governance", topics: ["Securing Blue Prism Processes", "Role-Based Access Control", "Credential Store Management", "Compliance and Audit Trails", "Data Encryption Techniques"] },
        { id: 9, title: "Module 9: Integration and Automation", topics: ["Integrating Blue Prism with Web Services", "Automating ERP and CRM Systems", "Using APIs in Blue Prism", "Orchestrating Multiple Processes", "Blue Prism Marketplace"] },
        { id: 10, title: "Module 10: Career and Certification Preparation", topics: ["Blue Prism Interview Preparation", "Resume Building for RPA Roles", "Blue Prism Certification Overview", "Real-World Case Studies", "Capstone Project and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Blue Prism Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Blue Prism training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers tailored Blue Prism learning using your infrastructure for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Blue Prism training center", title: "Offsite Training:", description: "Held at professional training centers, this mode ensures focused learning for Blue Prism certifications and team upskilling." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Blue Prism training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online Blue Prism training via platforms like Zoom, ideal for remote teams with real-time interaction and hands-on projects." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Blue Prism in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "RPA Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Blue Prism training was exceptional. The hands-on process automation projects were practical and engaging. The trainers were highly knowledgeable." },
        { id: 2, name: "Sneha R.", designation: "Automation Engineer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s clear explanations and real-world RPA projects made automation concepts accessible. It helped me transition into an RPA role with confidence." },
        { id: 3, name: "Vignesh T.", designation: "RPA Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedule and comprehensive curriculum were perfect. The trainers’ expertise in Blue Prism was invaluable for my career." },
        { id: 4, name: "Ritika S.", designation: "RPA Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers explained complex RPA concepts clearly, and the projects gave me a strong start." },
        { id: 5, name: "Ramesh A.", designation: "Senior RPA Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on advanced Blue Prism techniques and integration was outstanding. The trainers’ industry experience made learning highly practical." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Blue Prism" />
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
        { id: 1, title: "What is Blue Prism used for?", description: "Blue Prism is used for robotic process automation (RPA) to automate repetitive business processes like data entry, invoice processing, and customer service operations." },
        { id: 2, title: "Who should take this Blue Prism training?", description: "Business analysts, IT professionals, developers, and anyone interested in automating business processes with RPA." },
        { id: 3, title: "Do I need prior coding experience for Blue Prism?", description: "No coding experience is required, but basic programming knowledge is helpful. Our course starts with foundational RPA concepts." },
        { id: 4, title: "Is Blue Prism in demand in 2025?", description: "Yes, Blue Prism is highly sought-after for roles in RPA development and process automation across industries." },
        { id: 5, title: "What’s the difference between Blue Prism and Automation Anywhere?", description: "Both are RPA tools, but Blue Prism focuses on enterprise-grade automation with strong governance, while Automation Anywhere emphasizes cognitive automation and ease of use." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Blue Prism training with live instructor-led sessions and hands-on projects." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes real-world RPA projects and process automation labs." },
        { id: 8, title: "Do you offer job preparation support?", description: "Yes, we provide mock interviews, resume guidance, and project-based learning for Blue Prism roles." },
        { id: 9, title: "Can I switch to Blue Prism from another field?", description: "Yes, with basic IT or business process knowledge, Blue Prism is an excellent field to transition into." },
        { id: 10, title: "Is Blue Prism suitable for freshers?", description: "Definitely, Blue Prism is beginner-friendly and a great starting point for a career in RPA." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Blue Prism Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Blue Prism course in Chennai.
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

const Blueprismmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Blue Prism Training in Chennai | Practical Oriented RPA Course";
    const pageDescription = "Join IntelliMindz for top Blue Prism training in Chennai. Master robotic process automation with hands-on projects, real-world scenarios, and expert guidance.";
    const pageKeywords = "blue prism training in chennai, rpa course, blue prism training, robotic process automation, intellimindz";
    const ogUrl = "https://localhost:3000/blue_prism_training_in_chennai";
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

export default Blueprismmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
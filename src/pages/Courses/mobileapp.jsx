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
import saphomeintro1 from '../../assests/images/mobile_application_testing_image1.png';
import homeintro from '../../assests/images/mobile_application_testing_image.png';
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
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={homeintro}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

        {/* <div className="intro-container"> */}
            {/* <div className="training-image-container" >
                <img src={homeintro} alt="Ab Initio Training" />
            </div> */}
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best Ab Initio Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Ab Initio Training – your gateway to a thriving career in data management.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
        // </div>
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: Mobile Application Testing Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Mobile Application Testing trainers are seasoned professionals with extensive experience in quality assurance and mobile app testing. With real-world project expertise, they guide you through a comprehensive learning journey in mobile testing.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master core and advanced mobile testing concepts for iOS and Android.</li>
                        <li><span className="icon">✓</span> Learn from experts with hands-on experience in mobile app testing projects.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in software testing training.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time mobile testing scenarios to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Customized learning tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Mobile Application Testing Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from mobile testing experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on mobile app testing training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that fit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on mobile testing techniques and tools." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access mobile testing course materials anytime for revision." },
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led mobile testing sessions from anywhere. Includes hands-on testing exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your convenience with pre-recorded mobile testing video sessions, lifetime access to course materials, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person mobile testing sessions for immersive learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support.", isPopular: false }
    ];
    return (
        <div className="training-modes-section">
            <h2 className="training-modes-title">Our Modes of Testing Training</h2>
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
            <h1>Become a Skilled Mobile Application Tester with IntelliMindz</h1>
            <p>Industry-focused mobile testing training to master quality assurance for iOS and Android applications.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Mobile Testing Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Mobile Application Testing Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers comprehensive Mobile Application Testing training in Chennai, designed to provide both theoretical knowledge and practical expertise in quality assurance for mobile apps. Our curriculum covers manual and automated testing, testing tools like Appium and Selenium, and testing methodologies for iOS and Android platforms.</p>
                    <p>The course includes interactive classes, live testing sessions, practical exercises, and real-time projects. By working on industry-relevant scenarios, learners gain the skills to ensure high-quality mobile applications in enterprise environments.</p>
                    <p>Whether you’re a beginner or a professional looking to upskill, our Mobile Application Testing training equips you to excel in the competitive software testing job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Mobile Application Testing Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for QA professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with Testing Tools", description: "Gain hands-on experience with tools like Appium, Selenium, and TestNG, testing real mobile applications." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Time Case Studies", description: "Work on case studies based on actual mobile testing projects to enhance problem-solving and QA skills." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Trainers", description: "Learn from industry professionals with extensive experience in mobile app testing across iOS and Android." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized attention and one-on-one mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions & Assessments", description: "Engage in interactive discussions and module-wise assessments to reinforce learning and prepare for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Mobile Application Testing Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Mobile Application Testing", topics: ["Overview of Mobile Application Testing", "Types of Mobile Apps (Native, Hybrid, Web)", "Mobile Testing Challenges", "Testing Environment Setup", "Introduction to iOS and Android Platforms", "Testing Lifecycle and Methodologies"] },
        { id: 2, title: "Module 2: Manual Testing for Mobile Apps", topics: ["Test Case Design and Execution", "Functional Testing", "Usability Testing", "Compatibility Testing", "Performance and Security Testing", "Exploratory Testing Techniques"] },
        { id: 3, title: "Module 3: Automation Testing Tools", topics: ["Introduction to Automation Testing", "Overview of Appium and Selenium", "Setting Up Appium for Mobile Testing", "Creating Test Scripts for Android and iOS", "TestNG Framework Integration", "Automating Test Scenarios"] },
        { id: 4, title: "Module 4: Mobile Testing Frameworks", topics: ["Introduction to Testing Frameworks", "Working with TestNG and JUnit", "Building Test Suites", "Data-Driven Testing", "Cross-Platform Testing Strategies", "Reporting and Analysis"] },
        { id: 5, title: "Module 5: Performance and Security Testing", topics: ["Performance Testing for Mobile Apps", "Load and Stress Testing", "Security Testing Fundamentals", "Testing for Data Privacy", "Tools for Performance Testing (JMeter, LoadRunner)", "Real-Time Performance Scenarios"] },
        { id: 6, title: "Module 6: Device and Emulator Testing", topics: ["Testing on Real Devices vs. Emulators", "Configuring Emulators for Android and iOS", "Cloud-Based Testing Platforms", "Device Fragmentation Testing", "Handling Device-Specific Issues", "Best Practices for Device Testing"] },
        { id: 7, title: "Module 7: Advanced Testing Techniques", topics: ["API Testing for Mobile Apps", "Integration Testing with Backend Systems", "Testing for Accessibility", "Localization and Internationalization Testing", "Continuous Integration with Jenkins", "Regression Testing Strategies"] },
        { id: 8, title: "Module 8: Real-Time Project and Certification Prep", topics: ["End-to-End Mobile Testing Project", "Creating Test Plans and Reports", "Bug Tracking and Management", "Preparing for ISTQB Mobile Testing Certification", "Interview Preparation and Mock Tests", "Project Documentation and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Mobile Application Testing Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Mobile Testing training", title: "Onsite Training:", description: "Conducted at your company premises for tailored, collaborative learning using your testing environment." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Mobile Testing training center", title: "Offsite Training:", description: "Held at professional venues for focused learning, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Mobile Testing training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online training via Zoom or Teams, perfect for remote or distributed teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Mobile Application Testing in Chennai</h2>
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
        { id: 1, name: "Vikram S.", designation: "QA Engineer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Mobile Application Testing course at IntelliMindz was excellent. Hands-on projects with Appium and real devices boosted my skills." },
        { id: 2, name: "Anusha R.", designation: "Test Automation Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers simplified automation testing concepts. Real-time projects helped me transition to a QA role confidently." },
        { id: 3, name: "Karthik M.", designation: "Mobile QA Specialist", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "Flexible batches and practical training made learning mobile testing easy. The course prepared me well for interviews." },
        { id: 4, name: "Priya T.", designation: "QA Trainee", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers supported me throughout, making testing concepts clear." },
        { id: 5, name: "Suresh K.", designation: "Senior QA Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on real-world testing scenarios and tools like Selenium added immense value to my QA expertise." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Mobile Testing" />
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
        { id: 1, title: "What is Mobile Application Testing?", description: "Mobile Application Testing involves verifying the functionality, usability, and performance of mobile apps on iOS and Android platforms to ensure quality." },
        { id: 2, title: "Who should take this Mobile Testing training?", description: "Fresh graduates, QA professionals, developers, and anyone interested in a career in software quality assurance." },
        { id: 3, title: "Do I need prior testing knowledge?", description: "No prior testing knowledge is required. Our course starts from the basics of mobile testing." },
        { id: 4, title: "Is Mobile Testing in demand in 2025?", description: "Yes, with the rise in mobile app usage, mobile testing skills are highly sought after in IT and QA industries." },
        { id: 5, title: "What’s the difference between manual and automated testing?", description: "Manual testing involves human intervention to execute test cases, while automated testing uses tools like Appium for faster, repetitive testing." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline mobile testing training with live, instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get access to testing tools and real devices/emulators for practical mobile testing." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, resume tips, and real-world testing scenarios for job readiness." },
        { id: 9, title: "Can I switch to Mobile Testing from another field?", description: "Yes, with basic IT knowledge, you can transition to mobile testing with our structured training." },
        { id: 10, title: "Is Mobile Testing suitable for freshers?", description: "Absolutely, it’s a great starting point for a career in software testing and quality assurance." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Mobile Application Testing Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Mobile Application Testing course in Chennai.
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

const Mobileappmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Mobile App Development Training in Chennai | Practical Oriented Mobile App Course";
const pageDescription = "Join IntelliMindz for mobile app development training in Chennai. Learn Android, iOS, and hybrid apps.";
const pageKeywords = "mobile app training in chennai, mobile development, intellimindz mobile course";
const ogUrl = "https://localhost:3000/mobile_application_training_in_chennai";
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

export default Mobileappmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best AngularJS Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master AngularJS to create dynamic and responsive web applications with our expert-led training, designed for a successful career in web development.</h3>
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
                    Expert-Led AngularJS Training by <span>Industry Professionals</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our AngularJS trainers are seasoned developers with extensive experience in building scalable web applications. Their real-world expertise ensures you gain practical skills to excel in AngularJS development.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Develop a solid foundation in AngularJS for creating dynamic web applications.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on experience in AngularJS projects.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz’s proven track record in delivering top-notch AngularJS training.</li>
                        <li><span className="icon">✓</span> Receive dedicated career support, including resume building and mock interviews.</li>
                        <li><span className="icon">✓</span> Work on real-world projects to build job-ready AngularJS skills.</li>
                        <li><span className="icon">✓</span> Enjoy personalized training tailored to your learning pace and goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="AngularJS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Expert Trainers", paragraph: "Learn from AngularJS professionals at our leading training institute in Chennai." },
        { image: runningIcon, heading: "Hands-On Learning", paragraph: "Perfect for developers seeking practical AngularJS training with real-world applications." },
        { image: staffIcon, heading: "Flexible Schedules", paragraph: "Choose batch timings that suit your availability for a seamless learning experience." },
        { image: liveclass, heading: "Interactive Classes", paragraph: "Participate in engaging sessions focused on practical AngularJS development tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access AngularJS course materials anytime to support continuous learning." },
        { image: jobopening, heading: "Ongoing Support", paragraph: "Benefit from continuous doubt-clearing sessions to master AngularJS." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led AngularJS sessions from anywhere with hands-on coding, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn AngularJS at your own pace with pre-recorded videos, lifetime access to course materials, and regular content updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person AngularJS training in Chennai for focused learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and in-person learning, allowing you to switch modes based on your schedule and needs.", isPopular: false }
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
            <h1>Become an Expert AngularJS Developer with IntelliMindz</h1>
            <p>Master AngularJS to build dynamic, responsive, and scalable web applications, empowering your career in front-end development.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your AngularJS Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our AngularJS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers top-tier AngularJS training in Chennai, combining theoretical knowledge with practical expertise in front-end web development. Our comprehensive curriculum covers AngularJS essentials, including two-way data binding, directives, controllers, services, and integration with RESTful APIs.</p>
                    <p>The course features interactive sessions, live coding exercises, and real-world projects to ensure hands-on learning. You’ll work on industry-relevant applications, gaining the confidence to develop robust web solutions.</p>
                    <p>Whether you’re a beginner or an experienced developer, our AngularJS training equips you with the skills to excel in the fast-evolving web development industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="AngularJS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Flexible Learning Options", description: "Choose between in-person classroom training or online sessions, designed for professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-On AngularJS Projects", description: "Gain practical experience by building real-world applications with AngularJS, focusing on components, services, and APIs." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Work on industry-based projects to develop problem-solving skills and prepare for real-world development challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Industry-Expert Trainers", description: "Learn from professionals with years of experience in AngularJS development, offering practical insights and guidance." },
        { id: 5, image: personalizedmentorImg, title: "Personalized Mentorship", description: "Small batch sizes ensure one-on-one attention, addressing your queries for a tailored learning experience." },
        { id: 6, image: interactiveImg, title: "Interactive Learning", description: "Engage in hands-on labs, quizzes, and discussions aligned with AngularJS development to prepare for job roles." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>AngularJS Training in Chennai Key Features</h2>
            <div className="sap-fico-features-grid">
                {features.map((item) => (
                    <div key={item.id} className="feature-card">
                        <div className="feature-icon-placeholder">
                            {item.image ? (<img src={item.image} alt={item.title} />) : (item.iconPlaceholder)}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to AngularJS", topics: ["Overview of AngularJS", "MVC Architecture", "Setting Up Development Environment", "Two-Way Data Binding", "AngularJS Scope and Controllers", "Introduction to Directives"] },
        { id: 2, title: "Module 2: Directives and Filters", topics: ["Built-in Directives (ng-model, ng-repeat, etc.)", "Creating Custom Directives", "Working with Filters", "Custom Filter Creation", "Directive Scope and Binding", "Directive Templates"] },
        { id: 3, title: "Module 3: Services and Factories", topics: ["Understanding Services and Factories", "Creating Custom Services", "Dependency Injection", "Using $http for API Calls", "Handling Promises", "Service Best Practices"] },
        { id: 4, title: "Module 4: Routing in AngularJS", topics: ["Setting Up ngRoute", "Configuring Routes", "Route Parameters", "Nested Views with ui-router", "Route Resolves", "Navigation Techniques"] },
        { id: 5, title: "Module 5: Forms and Validation", topics: ["Form Handling in AngularJS", "Built-in Form Validations", "Custom Validation Directives", "Form Submission", "Error Handling and Display", "Dynamic Form Controls"] },
        { id: 6, title: "Module 6: Advanced AngularJS Concepts", topics: ["Working with $scope Events", "AngularJS Digest Cycle", "Custom Filters and Pipes", "Using $resource for RESTful Services", "Performance Optimization", "AngularJS Security Best Practices"] },
        { id: 7, title: "Module 7: Building Single-Page Applications", topics: ["SPA Architecture", "Integrating AngularJS with Backend APIs", "Managing Application State", "Authentication and Authorization", "Real-Time Data with WebSockets", "SPA Best Practices"] },
        { id: 8, title: "Module 8: Testing in AngularJS", topics: ["Unit Testing with Karma and Jasmine", "Testing Controllers and Services", "Mocking Dependencies", "End-to-End Testing with Protractor", "Test-Driven Development", "Debugging AngularJS Apps"] },
        { id: 9, title: "Module 9: AngularJS Project Development", topics: ["Building a Full-Fledged SPA", "Integrating with REST APIs", "User Authentication Implementation", "Optimizing Application Performance", "Deploying AngularJS Apps", "Project Review and Feedback"] },
        { id: 10, title: "Module 10: Career Preparation", topics: ["Building a Developer Portfolio", "Resume Preparation for AngularJS Roles", "Mock Interview Sessions", "Job Search Strategies", "AngularJS Certification Overview", "Real-World Project Scenarios"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                AngularJS Course Modules
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Ideal for Freshers", "Non-IT to IT Career Switchers"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.5 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Working Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate AngularJS training", title: "Onsite Training:", description: "Tailored AngularJS training conducted at your workplace, using your development environment for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite AngularJS training center", title: "Offsite Training:", description: "Held at our professional training centers in Chennai, offering a distraction-free environment for focused learning." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led AngularJS training", title: "Virtual Instructor-Led Training (VILT):", description: "Live, interactive AngularJS training via Zoom or Teams, ideal for remote teams with real-time collaboration." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for AngularJS in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "Front-End Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s AngularJS training was transformative. The hands-on projects on building SPAs gave me the confidence to secure a front-end role." },
        { id: 2, name: "Priya V.", designation: "Web Developer", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The practical approach and expert guidance simplified AngularJS for me. The real-world projects were key to my career transition." },
        { id: 3, name: "Suresh R.", designation: "AngularJS Developer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Flexible timings and in-depth content made this course perfect. The trainers’ industry insights prepared me for real-world challenges." },
        { id: 4, name: "Anitha M.", designation: "Junior Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course easy to follow. The hands-on labs and supportive trainers helped me kickstart my career in AngularJS." },
        { id: 5, name: "Vijay K.", designation: "Senior Web Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on advanced topics like routing and testing was outstanding. Highly recommend for developers aiming to upskill." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer AngularJS" />
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
        { id: 1, title: "What is AngularJS used for?", description: "AngularJS is a JavaScript framework for building dynamic, single-page web applications with features like two-way data binding and dependency injection." },
        { id: 2, title: "Who can enroll in this AngularJS course?", description: "Aspiring web developers, front-end developers, and professionals transitioning to web development roles can benefit from this course." },
        { id: 3, title: "Is prior coding experience required?", description: "Basic knowledge of HTML, CSS, and JavaScript is recommended, but our course starts with fundamentals to accommodate beginners." },
        { id: 4, title: "Is AngularJS still relevant in 2025?", description: "Yes, AngularJS is widely used in legacy applications and remains relevant for maintaining and upgrading existing systems." },
        { id: 5, title: "How does AngularJS differ from Angular?", description: "AngularJS (1.x) uses JavaScript and MVC, while Angular (2+) is a TypeScript-based platform with enhanced performance and modularity." },
        { id: 6, title: "Is online training available?", description: "Yes, we offer both online and offline AngularJS training with live, instructor-led sessions and hands-on practice." },
        { id: 7, title: "Will I get hands-on practice?", description: "Absolutely, our course includes live coding sessions and projects to build real-world AngularJS applications." },
        { id: 8, title: "Do you offer job placement support?", description: "Yes, we provide resume guidance, mock interviews, and career support to help you land AngularJS developer roles." },
        { id: 9, title: "Can I transition to AngularJS from another IT field?", description: "Yes, with basic web development knowledge, you can easily transition to AngularJS with our structured training." },
        { id: 10, title: "Is this course suitable for freshers?", description: "Definitely, our beginner-friendly course is ideal for freshers aiming to start a career in web development." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question About Our <span className="highlighted-course-title">AngularJS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Find answers to your queries about our AngularJS training in Chennai.
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
            <p className="cta-banner-text">Shape your career with expert-led AngularJS training.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Angularjsmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best AngularJS Training in Chennai | Hands-On AngularJS Course";
    const pageDescription = "Join IntelliMindz for the best AngularJS training in Chennai. Master dynamic web development with hands-on projects, expert trainers, and career support.";
    const pageKeywords = "angularjs training in chennai, angularjs course, web development training, front-end development, intellimindz";
    const ogUrl = "https://chennaitraining.in/angular-js-training-in-chennai/";
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

export default Angularjsmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
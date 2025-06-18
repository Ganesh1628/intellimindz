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
                <h1 className="intro-h1">Best ITIL Training Institute in Chennai</h1>
                <h3 className="intro-h3">Elevate your IT service management career with expert-led ITIL Training – your gateway to global opportunities in IT service excellence.</h3>
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
                    Learn from the Best: ITIL Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our ITIL trainers are seasoned professionals with extensive experience in IT service management. With practical exposure to global ITIL implementations, our trainers provide in-depth insights to guide your ITIL certification journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master ITIL frameworks and processes with expert guidance.</li>
                        <li><span className="icon">✓</span> Learn from certified ITIL consultants with real-world expertise.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record in ITIL training success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume and interview prep.</li>
                        <li><span className="icon">✓</span> Engage in practical exercises and case studies for hands-on learning.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="ITIL Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by ITIL experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an ITIL training center that emphasizes practical ITSM skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions on real-world ITIL processes and frameworks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit ITIL course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your ITIL knowledge." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led ITIL sessions from anywhere. Our online training includes interactive case studies, practical exercises, and Q&A sessions for effective learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded ITIL video sessions. Get lifetime access to course materials, resources, and updates to stay current with ITIL practices.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person ITIL sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Certified ITIL Professional with IntelliMindz</h1>
            <p>Industry-aligned ITIL training to enhance your IT service management expertise and career prospects.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your ITIL Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our ITIL Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our ITIL training is designed to provide both theoretical knowledge and practical skills in IT service management. Our curriculum covers key ITIL processes, including service strategy, design, transition, operation, and continual service improvement, ensuring comprehensive expertise.</p>
                    <p>The course includes interactive sessions, real-world case studies, and practical exercises aligned with ITIL v4 principles. By working on ITSM scenarios, learners gain the confidence to implement ITIL practices in enterprise environments.</p>
                    <p>Whether you're an IT professional aiming for ITIL certification or a beginner entering the ITSM field, our training equips you with the skills to excel in the competitive IT service management job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="ITIL Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual ITIL training modes, ensuring accessibility for working professionals, students, and job seekers. Choose the format that best fits your schedule and learning preferences for a seamless experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Exercises", description: "Our training emphasizes practical learning through case studies and exercises simulating real ITSM scenarios, helping you apply ITIL concepts effectively and gain confidence in service management tasks." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Work on case studies based on actual ITIL implementations to enhance your problem-solving skills and prepare for ITIL certification exams and job interviews with practical knowledge." },
        { id: 4, image: ExperiencedtrainersImg, title: "Certified ITIL Trainers", description: "Learn from ITIL-certified professionals with extensive experience in ITSM projects across industries. Our trainers provide expert guidance and share best practices for ITIL implementation." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "Our limited batch sizes ensure individual attention and one-on-one mentoring, allowing trainers to address your queries and provide tailored support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions and assessments aligned with ITIL certification requirements, helping you retain knowledge and prepare for exams and interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>ITIL Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to ITIL", topics: ["Overview of IT Service Management", "Introduction to ITIL Framework", "ITIL Lifecycle Phases", "Key ITIL Principles and Concepts", "ITIL v4 Certification Path", "Role of ITIL in Business"] },
        { id: 2, title: "Module 2: Service Strategy", topics: ["Service Strategy Processes", "Value Creation and Service Assets", "Service Portfolio Management", "Financial Management for IT Services", "Demand Management", "Business Relationship Management"] },
        { id: 3, title: "Module 3: Service Design", topics: ["Service Design Principles", "Service Catalog Management", "Service Level Management", "Availability and Capacity Management", "IT Service Continuity Management", "Information Security Management"] },
        { id: 4, title: "Module 4: Service Transition", topics: ["Service Transition Processes", "Change Management", "Release and Deployment Management", "Service Asset and Configuration Management", "Knowledge Management", "Transition Planning and Support"] },
        { id: 5, title: "Module 5: Service Operation", topics: ["Service Operation Principles", "Incident Management", "Problem Management", "Request Fulfillment", "Event Management", "Access Management"] },
        { id: 6, title: "Module 6: Continual Service Improvement", topics: ["CSI Principles and Models", "7-Step Improvement Process", "Key Performance Indicators (KPIs)", "Service Measurement and Reporting", "Benchmarking and Maturity Assessments"] },
        { id: 7, title: "Module 7: ITIL Practices and Value System", topics: ["ITIL Service Value System (SVS)", "Guiding Principles of ITIL", "Value Co-Creation", "Governance and Management Practices", "Service Value Chain Activities"] },
        { id: 8, title: "Module 8: ITIL Certification Preparation", topics: ["ITIL Foundation Exam Overview", "Sample Questions and Mock Tests", "Exam Strategies and Tips", "Case Study Analysis", "Review of Key Concepts"] },
        { id: 9, title: "Module 9: Practical ITSM Scenarios", topics: ["Implementing ITIL in Organizations", "Real-World ITSM Case Studies", "Process Integration and Optimization", "Handling Common ITSM Challenges", "Role-Playing Scenarios"] },
        { id: 10, title: "Module 10: Advanced ITIL and Project", topics: ["Overview of ITIL Expert and Master Levels", "ITIL in Agile and DevOps Environments", "Digital Transformation and ITIL", "Group Project: ITSM Implementation Plan", "Presentation and Feedback"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                ITIL Course Modules
                <span className="java-title-underline"></span>
            </h2>
            <div className="java-course-layout-container">
                <div className="java-syllabus-modules-panel">
                    <div className="java-syllabus-header">Course Syllabus</div>
                    <ul className="java-modules-list">
                        {allModulesData.map((module) => (
                            <li key={module.id} className={`java-module-item ${module.id === activeModuleId ? 'java-active-module' : ''}`} onClick={() => setActiveModuleId(module.id)}>
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate ITIL training", title: "Onsite Training:", description: "Conducted at your organization’s premises, this ITIL training provides a tailored learning experience in your ITSM environment, ideal for team upskilling and process alignment." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite ITIL training center", title: "Offsite Training:", description: "Held at dedicated training venues, this ITIL training offers a distraction-free setting for focused learning, perfect for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led ITIL training", title: "Virtual Training:", component:", is ideal for remote teams, offering live sessions with expert instructors and interactive tools for effective ITIL training." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for ITIL in Chennai</h2> {/* Title updated */}
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
        { id: 1, name: "Arun M.", designation: "ITIL Service Manager", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The ITIL course at Intellimindz was perfectly structured. The real-world ITSM scenarios and case studies helped me apply concepts practically. The trainer’s expertise was exceptional." },
        { id: 2, name: "Sneha R.", designation: "ITSM Consultant", avatarInitial: "S", rating: 5, companyLogoText:"Intellimindz", reviewText: "Clear explanations of ITIL processes and hands-on exercises. The trainer’s real-world insights helped me transition to ITSM confidently from a non-IT background." },
        { id: 3, name: "Vignesh T.", designation: "ITIL Specialist", avatarInitial: "V", rating: 5, companyLogoText:"Intellimindz", reviewText: "Intellimindz’s reputation for ITIL training is well-earned. The certification prep and case studies were invaluable. Flexible batches fit perfectly with my work schedule." },
        { id: 4, name: "Ritika S.", designation: "ITIL Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the ITIL course easy to follow. The trainers provided excellent support, covering all concepts from scratch. It kickstarted my ITSM career." },
        { id: 5, name: "Ramesh A.", designation: "Senior ITSM Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The depth of ITIL content and practical sessions made complex topics like service operation and CSI easy. The trainers’ industry experience added immense value." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); return stars; };
    const formatReviewText = (text) => <p>{text}</p>;

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer ITIL" />
                    </div>
                </div>
                <div className="review-content-area">
                    <div className="review-card">
                        <div className="review-card-header">
                            <span className="review-logo-text">{currentReview.companyLogoText || "Intellimindz"}</span>
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
        { id: 1, title: "What is ITIL used for?", description: "ITIL is a framework for IT service management, helping organizations align IT services with business needs through best practices in service strategy, design, transition, operation, and improvement." },
        { id: 2, title: "Who should take ITIL training?", description: "IT professionals, service desk staff, project managers, and anyone seeking to enhance their ITSM skills or achieve ITIL certification." },
        { id: 3, title: "Do I need prior experience for ITIL training?", description: "No prior experience is required for ITIL Foundation, though basic IT knowledge is helpful. Advanced levels may require prior certifications." },
        { id: 4, title: "Is ITIL in demand in 2025?", description: "Yes, ITIL remains highly relevant as organizations prioritize efficient IT service delivery and digital transformation." },
        { id: 5, title: "What’s the difference between ITIL and PMP?", description: "ITIL focuses on IT service management, while PMP is a project management certification. ITIL is process-oriented; PMP is project-oriented." },
        { id: 6, title: "Is ITIL training available online?", description: "Yes, we offer both online and offline ITIL training with live instructor-led sessions and interactive exercises." },
        { id: 7, title: "Will there be practical exercises?", description: "Yes, our training includes case studies and exercises simulating real-world ITSM scenarios to reinforce ITIL concepts." },
        { id: 8, title: "Do you provide certification exam prep?", description: "Yes, we offer mock exams, sample questions, and tips to prepare for ITIL Foundation and higher-level certifications." },
        { id: 9, title: "Can I switch to ITSM with ITIL training?", description: "Absolutely. ITIL is an excellent entry point for transitioning to ITSM roles from other IT or non-IT fields." },
        { id: 10, title: "Is ITIL useful for freshers?", description: "Yes, ITIL Foundation is ideal for freshers looking to start a career in IT service management." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">ITIL Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our ITIL course in Chennai.
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

const Itilmain = () => {
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
                <title>ITIL Training in Chennai | ITIL Course in Chennai</title>
                <meta name="description" content="Master IT service management with our ITIL Training in Chennai. Learn ITIL v4 frameworks through our expert-led ITIL course in Chennai." />
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

export default Itilmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
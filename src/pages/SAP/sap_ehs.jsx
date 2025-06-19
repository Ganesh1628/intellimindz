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

const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP EHS Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP EHS Training – your gateway to global career opportunities in the enterprise environment, health, and safety management domain.</h3>
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
                    Learn from the Best: SAP EHS Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP EHS trainers are industry professionals with extensive real-time experience in environmental compliance and occupational health systems. With strong domain expertise and project exposure, our trainers deliver practical knowledge to guide your SAP EHS learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation and explore advanced SAP EHS functionalities.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP EHS Consultants with live project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's successful track record in SAP EHS training and placements.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume building and interview guidance.</li>
                        <li><span className="icon">✓</span> Work on real-time case studies and hands-on assignments to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Experience tailored learning that fits your career goals and pace.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP EHS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP EHS professionals at our training institute in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals looking for an SAP EHS training institute near you that focuses on hands-on learning." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your professional schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Real-world SAP EHS use cases and process-based discussions." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Review course materials and revise SAP EHS concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-training doubt sessions to reinforce your understanding." }
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
            <h1>Become a Certified SAP EHS Consultant with IntelliMindz</h1>
            <p>Industry-relevant SAP EHS training in Chennai designed to deepen your understanding of safety, compliance, and environmental management.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP EHS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SAP EHS course provides in-depth training focused on regulatory compliance, product safety, and incident management within enterprise systems. Our curriculum is designed for comprehensive learning of SAP EHS through a mix of theoretical and practical approaches.</p>
                    <p>The course includes instructor-led sessions, scenario-based training, interactive exercises, and case-based learning. By simulating real-world environments, learners gain practical knowledge that helps manage EHS processes effectively.</p>
                    <p>Whether you're new to EHS or an experienced professional seeking ERP specialization, this training helps you build a career in one of the most in-demand SAP domains.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP EHS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer instructor-led classroom and virtual sessions to suit working professionals, students, and career switchers. Choose the learning method that matches your availability and pace." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP EHS System Access", description: "Experience real-time scenarios with system access to SAP EHS modules. Practice key configurations and workflows used in the domain of safety, product compliance, and health reporting." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Explore use cases adapted from actual SAP EHS implementations. These will help you understand challenges and prepare confidently for project and job responsibilities." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP EHS Experience", description: "All our instructors are working professionals who have handled EHS projects in manufacturing, chemical, pharma, and energy sectors. They deliver guidance aligned with industry practices." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small student-to-trainer ratios, offering individual attention to address personal queries and career goals in EHS." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module includes interactive discussions, assignments, and performance evaluations based on industry interview models and case-based assessments." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP EHS Training in Chennai Key Features</h2>
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

const SapEHSCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP EHS", topics: ["Overview of SAP EHS Functions", "Compliance and Safety Concepts", "EHS Sub-Modules Overview", "Navigation in EHS Environment", "Integration with SAP ERP"] },
        { id: 2, title: "Module 2: Product Safety and Stewardship", topics: ["Specification Management", "Report Management System (RMS)", "MSDS and Labeling", "Dangerous Goods Management", "Product Compliance Processes"] },
        { id: 3, title: "Module 3: Industrial Hygiene and Safety", topics: ["Risk Assessment Setup", "Exposure Limits and Control Measures", "Incident Logging and Follow-up", "Monitoring Plans", "Work Area Management"] },
        { id: 4, title: "Module 4: Occupational Health", topics: ["Medical Protocol Configuration", "Health Surveillance", "Examinations and Health Tests", "Integration with HR", "Vaccination and Fitness Status"] },
        { id: 5, title: "Module 5: Environment Management", topics: ["Waste Management", "Emission Monitoring", "Permit Management", "Reporting of Environmental Data", "Compliance Management"] },
        { id: 6, title: "Module 6: Hazardous Substance Management", topics: ["Substance Volume Tracking", "Inventory and Reporting", "Global Compliance Rules", "Label Management", "Regulatory Reporting"] },
        { id: 7, title: "Module 7: Incident Management", topics: ["Incident Recording and Investigation", "Corrective Action Planning", "Root Cause Analysis", "Workflow for Incident Closure", "Incident Analytics and KPIs"] },
        { id: 8, title: "Module 8: SAP EHS Reporting and Analytics", topics: ["Predefined Reports", "Custom Report Configuration", "Use of SAP Query and ALV", "Real-Time Dashboards", "Integration with SAP BI"] },
        { id: 9, title: "Module 9: SAP S/4HANA for EHS", topics: ["Overview of EHS in S/4HANA", "Fiori Apps for EHS", "Embedded Analytics", "New Functionalities in S/4HANA", "Migration from ECC"] },
        { id: 10, title: "Module 10: End-to-End SAP EHS Project", topics: ["Business Blueprint", "System Configuration and Testing", "Data Upload and Simulation", "Project Closure Activities", "End-User Documentation", "Go-Live & Post-Implementation Support"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP EHS Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate EHS training", title: "Onsite Training:", description: "Conducted at your office location. Customize training for your company’s EHS system workflows and documentation procedures." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite EHS training center", title: "Offsite Training:", description: "Held in fully equipped training facilities away from your work distractions, offering collaborative and immersive learning." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led EHS training", title: "Virtual Instructor-Led Training (VILT):", description: "Attend live sessions online through Zoom or Teams, ideal for remote learners. Engage in real-time Q&A and case study discussions." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP EHS in Chennai</h2>
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
        { id: 1, name: "Deepa V.", designation: "SAP EHS Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP EHS course at IntelliMindz was highly practical and relevant. The trainers shared real-time insights and guided us through complex scenarios." },
        { id: 2, name: "Gowtham P.", designation: "Compliance Analyst", avatarInitial: "G", rating: 5, companyLogoText: "Intellimindz", reviewText: "Every module was covered in depth. The trainers had solid industry knowledge, and I was able to apply concepts immediately at work." },
        { id: 3, name: "Kavitha S.", designation: "EHS System Specialist", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "Assignments and case studies provided real project experience. IntelliMindz is the best SAP EHS training institute in Chennai for practical learning." },
        { id: 4, name: "Harish M.", designation: "Safety & Compliance Lead", avatarInitial: "H", rating: 5, companyLogoText: "Intellimindz", reviewText: "The hands-on environment and system access helped me build confidence. The training was structured and effective for project readiness." },
        { id: 5, name: "Nikhil R.", designation: "SAP EHS Functional Consultant", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course helped me understand regulatory compliance thoroughly. Excellent guidance from faculty and useful job interview preparation." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer EHS" />
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

const SapEHSFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP EHS used for?", description: "SAP EHS (Environment, Health, and Safety) is used by organizations to manage compliance, occupational health, product safety, and environmental regulations within the SAP system for sustainable business practices." },
        { id: 2, title: "Who should attend this SAP EHS training in Chennai?", description: "This course is ideal for professionals in safety management, compliance, quality, and environment departments, as well as graduates aiming for careers in SAP EHS implementation or support roles." },
        { id: 3, title: "Do I need experience before taking this EHS training in Chennai?", description: "No prior experience in SAP is required. Our SAP EHS training in Chennai covers foundational topics through advanced concepts, making it suitable for both beginners and experienced professionals." },
        { id: 4, title: "Why is SAP EHS training in Chennai important now?", description: "With increasing emphasis on environmental compliance and workplace safety, companies are seeking trained SAP EHS consultants. Chennai is a growing hub for enterprise SAP implementations, offering many career opportunities." },
        { id: 5, title: "Is SAP EHS different from other SAP modules like MM or FI?", description: "Yes, SAP EHS focuses specifically on safety, compliance, and regulatory reporting, while modules like MM or FI are related to materials and finance. Our training in Chennai gives clarity on these differences." },
        { id: 6, title: "Do you offer SAP EHS training in Chennai online?", description: "Yes, we offer both classroom sessions and live online training in Chennai to accommodate different learning preferences and schedules, especially for working professionals or remote learners." },
        { id: 7, title: "Will this SAP EHS course in Chennai provide SAP system access?", description: "Absolutely. We provide full SAP EHS system access so learners can practice on live modules, work on real-time scenarios, and gain hands-on experience essential for mastering the tool." },
        { id: 8, title: "Is job placement support available for this EHS course in Chennai?", description: "Yes, we support learners with resume writing, mock interviews, interview tips, and job alerts, helping them confidently enter the job market after completing their SAP EHS training in Chennai." },
        { id: 9, title: "Can I attend SAP EHS training in Chennai while working full-time?", description: "Definitely. We offer flexible batches during evenings and weekends in Chennai to help working professionals manage their jobs while upgrading their SAP EHS skills conveniently." },
        { id: 10, title: "Is this SAP EHS course suitable for freshers in Chennai?", description: "Yes. Freshers with an interest in safety, environment, or compliance domains can greatly benefit from this course, as it includes beginner-friendly training modules and real-world EHS use cases." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP EHS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP EHS course in Chennai.
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

const SAPmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
const pageTitle = "Best SAP EHS Training in Chennai | Expert-Led SAP EHS Course";
const pageDescription = "Enroll in top-rated SAP EHS training in Chennai at Intellimindz. Master SAP EHS concepts with real-time projects and expert guidance.";
const pageKeywords = "sap ehs training in chennai, sap ehs course, sap ehs certification, intellimindz";
const ogUrl = "https://localhost:3000/sap_ehs_training_in_chennai";
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
            <SapEHSCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapEHSFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP QM Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP QM Training – your gateway to global career opportunities in the SAP quality management domain.</h3>
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
                    Learn from the Best: SAP QM Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP QM trainers are industry professionals with extensive hands-on experience in SAP Quality Management. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP QM learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP QM concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP QM Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP QM training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP QM Training" /> {/* Alt text updated */}
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP QM experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP QM training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP QM processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP QM concepts anytime." },
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
    // Content for this section was not in the new provided text, so keeping original generic content.
    // This section is generic and can apply to QM training.
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

// This component was SAPHeroSection, now updated for QM
const SAPHeroSection = ({ openContactModal }) => {
    return (
        <div className="sap-fico-expert-section"> {/* CSS class name kept as per "don't change code" */}
            <h1>Become a Skilled SAP QM Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP QM training that enhances your expertise in SAP quality management modules.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your QM Journey Today!</button>
        </div>
    );
};

// This component was SAPAboutSection, now updated for QM
const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section"> {/* CSS class name kept */}
            <h2>About Our SAP QM Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai, we deliver practical, industry-focused SAP QM training designed to equip learners with both conceptual knowledge and hands-on project experience. Our comprehensive curriculum covers essential QM topics such as quality planning, quality inspection, quality control, audit management, and QM integration with other SAP modules, ensuring well-rounded technical competence.</p>
                    <p>The course includes interactive lessons, live system demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and end-to-end QM implementations, learners gain confidence and the ability to manage SAP QM functions effectively in diverse enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your QM skills, our expert-led training program prepares you for success in the competitive SAP job market and supports long-term career growth.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP QM Training in Chennai" /> {/* Alt text updated, image kept */}
                </div>
            </div>
        </div>
    );
};

// This component was KeyFeaturesSection, now updated for QM
const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference, ensuring a smooth training experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP QM system access. You will practice creating quality plans, inspections, and results recording directly within an SAP environment, reinforcing your theoretical understanding and boosting practical skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP QM projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP QM Experience", description: "Our trainers have extensive industry experience with SAP QM, having handled multiple implementation projects. Their insights and guidance ensure you learn best practices and relevant skills for the SAP quality management domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, which helps students master SAP QM competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP QM interview requirements, helping reinforce knowledge and build confidence for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section"> {/* CSS class name kept */}
            <h2>SAP QM Training in Chennai Key Features</h2> {/* Heading updated */}
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

// This component was SapFicoCourseContentSection, now updated for QM content. Name and CSS classes kept.
const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP QM", topics: ["Overview of ERP and SAP", "SAP NetWeaver Architecture Basics", "SAP Modules Overview and QM’s Role", "SAP Logon and System Navigation", "Introduction to SAP QM Module", "Structure of QM Master Data", "Quality Management Basics"] },
        { id: 2, title: "Module 2: Quality Planning", topics: ["Material Master and QM Views", "Quality Planning Processes", "Inspection Plans and Characteristics", "QM Data in Material Master", "Quality Info Records", "Master Inspection Characteristics", "Quality Control Cycles"] },
        { id: 3, title: "Module 3: Quality Inspection", topics: ["Inspection Types and Lots", "Inspection Points and Sampling Procedures", "Usage Decisions and Defects Recording", "Results Recording and Notifications", "Inspection Lot Processing", "Inspection Reports", "Quality Certificates"] },
        { id: 4, title: "Module 4: Quality Control", topics: ["Quality Certificates and Management", "Control Charts and Quality Notifications", "Quality Audits and Management", "QM Integration with MM, PP, and PM", "Non-Conformance Management", "Quality Costs and Reporting", "Quality Improvement Techniques"] },
        { id: 5, title: "Module 5: QM Master Data Management", topics: ["Material Master in QM Context", "Vendor and Customer QM Data", "Inspection Plans and Catalogs", "Work Centers and QM Views", "Defect Codes and Codes Groups", "QM Info Records", "Batch Management in QM"] },
        { id: 6, title: "Module 6: QM in Procurement and Production", topics: ["Incoming Quality Inspection", "In-Process Inspection", "Final Inspection and Usage Decision", "QM in Production Orders", "QM in Purchase Orders", "Inspection Lot Processing Workflow", "Integration with Other SAP Modules"] },
        { id: 7, title: "Module 7: Quality Notifications and Reporting", topics: ["Quality Notification Types", "Notification Processing", "Defect Recording and Analysis", "Reporting Tools in QM", "Alerts and Quality Messages", "Statistical Process Control", "Real-Time Reporting Scenarios"] },
        { id: 8, title: "Module 8: QM Audits and Improvements", topics: ["Quality Audits Process", "Audit Planning and Execution", "Audit Reports and Follow-up", "Corrective and Preventive Actions (CAPA)", "Quality Management Cycle", "Process Optimization Techniques", "Real-Time Improvement Projects"] },
        { id: 9, title: "Module 9: QM Integration and Advanced Topics", topics: ["QM and SAP MM Integration", "QM and SAP PP Integration", "QM and SAP PM Integration", "QM in S/4HANA", "Reporting with CDS Views", "Quality Certificates Management", "Real-Time Project Work"] },
        { id: 10, title: "Module 10: End-to-End Real-Time Project", topics: ["Planning and Execution of Quality Processes", "Integration with SAP ERP Modules", "Problem Solving and Troubleshooting", "QM Reporting and Analysis", "Performance Optimization", "Project Review and Code Quality", "Deployment and Go-Live Support"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section"> {/* CSS class name kept */}
            <h2 className="java-section-title">
                SAP QM Course Modules {/* Title updated */}
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

// BatchDetailsSection - Content not provided in new QM text, keeping original generic data.
const BatchDetailsSection = ({ openContactModal }) => {
    const batchInfo = [
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Professionals seeking QM skills"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for working Professionals"] }
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

// This component was CorporateTrainingModesSection, now updated for QM
const CorporateTrainingModesSection = () => {
    const trainingModesData = [
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate QM training", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows for practical relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite QM training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation and team synergy." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led QM training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction and engagement tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP QM in Chennai</h2> {/* Title updated */}
            <div className="modes-container-grid">
                {trainingModesData.map(mode => (
                    <div key={mode.id} className="mode-card-item">
                        <img src={mode.imageSrc || '../assests/images/placeholder_image.png'} alt={mode.altText} className="mode-image" />
                        <h3 className="mode-title">{mode.title}</h3>
                        <p className="mode-description">{mode.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// This component was AlumniReviewsSection, now updated for QM
const AlumniReviewsSection = () => {
    const reviewsData = [
        { id: 1, name: "Karthik S.", designation: "SAP QM Consultant", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The structure of IntelliMindz’s SAP QM course was exceptional and well-organized. Hands-on work with real-world quality management scenarios significantly strengthened my practical skills. The trainer patiently explained complex QM concepts, system usage, and best practices with clarity and real-time examples." },
        { id: 2, name: "Divya M.", designation: "Quality Management Specialist", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "Clear, step-by-step explanations of quality planning, inspection, and notifications made the concepts easy to follow. The instructor used real-time projects and case studies, which helped me confidently switch to SAP QM from a functional background. The course was comprehensive and highly valuable for career progression." },
        { id: 3, name: "Siddharth R.", designation: "SAP QM Freelancer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "I selected IntelliMindz due to their strong reputation and industry-aligned content focused on real business needs. The interview preparation sessions and case studies were incredibly helpful and helped me ace my job interviews. Flexible batch timings and one-on-one support suited my freelance schedule perfectly." },
        { id: 4, name: "Neha T.", designation: "SAP Trainee", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I started with absolutely no knowledge of SAP or QM modules. The course covered every topic thoroughly, starting from the fundamentals to advanced concepts, with excellent trainer support throughout. It was the best decision to launch my SAP QM career with IntelliMindz." },
        { id: 5, name: "Praveen K.", designation: "Senior QM Developer", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The depth of content and practical teaching style at IntelliMindz made even difficult topics like audit management and quality notifications easy to grasp. Real-time examples, practical sessions, and hands-on system practice added great value to my learning experience and job performance." }
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
                        <img src={alumniReviewImg || '../assests/images/placeholder_avatar.png'} alt="Alumni Reviewer QM" /> {/* Alt text updated */}
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

// This component was SapImSyllabus (FAQ), now updated for QM FAQ. Name and CSS classes kept.
const SapQMFaqSection = () => { // Renamed from SapImSyllabus to SapQMFaqSection for clarity
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP QM used for?", description: "SAP QM is a module used to manage and control quality processes in manufacturing and procurement, including inspections, notifications, and audits." },
        { id: 2, title: "Who should take this SAP QM training?", description: "Quality professionals, SAP functional consultants, fresh graduates with interest in SAP quality management, and IT professionals wanting to expand their SAP skills." },
        { id: 3, title: "Do I need prior SAP experience before learning QM?", description: "No prior SAP experience is mandatory, but understanding business processes and quality management concepts is helpful." },
        { id: 4, title: "Is SAP QM still relevant in 2025?", description: "Yes. SAP QM remains essential for organizations focused on quality compliance, audit management, and integration with S/4HANA projects." },
        { id: 5, title: "What is the difference between SAP QM and SAP MM?", description: "SAP QM focuses on quality processes, while SAP MM handles material management. QM often integrates with MM for quality inspections on materials." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer SAP QM training in both classroom and online modes, with live instructor-led sessions and SAP system access." },
        { id: 7, title: "Will I get hands-on practice?", description: "Absolutely. Our course includes access to SAP QM systems for practical exercises in quality planning, inspection, and notifications." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes. Each module features mock interview questions, resume tips, and real-world scenarios tailored to SAP QM job roles." },
        { id: 9, title: "Can I shift to SAP QM from another SAP module or IT domain?", description: "Yes, especially if you have experience in SAP or quality processes. Our training helps you transition smoothly." },
        { id: 10, title: "Is SAP QM suitable for freshers?", description: "Definitely. SAP QM is a great starting point for freshers interested in SAP technical and functional quality management careers." }
    ];
    return (
        <div className="sapim-syllabus"> {/* CSS class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP QM Course?</span> {/* Title updated */}
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to common queries about our SAP QM training in Chennai: {/* Subtitle updated */}
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

// CallToActionBanner - Content not provided in new QM text, keeping original generic content.
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
                {ContactModal && <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />}
            </div>
        </HelmetProvider>
    );
};

const Saponline = ({ openContactModal }) => {
    return (
        <>
            <Helmet> {/* Add Helmet here */}
                <title>SAP QM Training in Chennai | SAP Quality Management Course in Chennai</title>
                <meta name="description" content="Advance your career with SAP QM Training in Chennai. Get hands-on experience in quality planning, inspection, and control with our SAP Quality Management course in Chennai." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapFicoCourseContentSection openContactModal={openContactModal} /> {/* Name kept as is for CSS, content is QM */}
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            {AskForDemo && <AskForDemo />}
            <Onlineheader />
            <SapQMFaqSection /> {/* Updated component name */}
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

// Onlineheader component kept as is (empty container).
const Onlineheader = () => {
    return <div className="online_container"></div>;
};
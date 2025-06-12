import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all CSS files
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all image assets
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
                <h1 className="intro-h1">Best SAP SCM Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP SCM Training – your gateway to global career opportunities in the supply chain management landscape.</h3>
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
                    Learn from the Best: SAP SCM Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP SCM trainers are industry professionals with extensive hands-on experience in supply chain management systems. With strong expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP SCM journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP SCM concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP SCM Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP SCM training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP SCM Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP SCM experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP SCM training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP SCM processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP SCM concepts anytime." },
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led sessions from anywhere. Our online SAP SCM training includes hands-on exercises, real-time projects, and interactive Q&A to ensure practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded video sessions. Get lifetime access to SAP SCM course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person sessions for an immersive SAP SCM learning experience. Ideal for collaborative and structured learning with direct trainer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Our hybrid SAP SCM model lets you switch formats based on your convenience.", isPopular: false }
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
            <h1>Become a Skilled SAP SCM Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP SCM training that enhances your expertise in supply chain management modules.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SCM Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP SCM Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we deliver practical SAP SCM training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential SCM topics such as planning, logistics, warehousing, procurement, and transportation management to ensure comprehensive technical competence.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and SCM implementations, learners gain confidence and the ability to manage SAP SCM functions effectively in enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your SCM skills, our training prepares you for success in the competitive SAP SCM job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP SCM Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP SCM system access. You will practice transactions in modules such as APO, EWM, TM, and PP/MM directly within an SAP environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP SCM projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP SCM Experience", description: "Our trainers have extensive industry experience with SAP SCM, having handled multiple implementation projects. Their insights ensure you learn best practices and relevant skills for the supply chain management domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, helping students master SAP SCM competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP SCM interview requirements, helping reinforce knowledge and build confidence for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP SCM Training in Chennai Key Features</h2>
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

const SapScmCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP SCM", topics: ["Overview of SCM and SAP Architecture", "SAP NetWeaver Technology for SCM", "SAP SCM System Components", "SAP Logon and Navigation for SCM", "Introduction to Key SCM Modules", "Business Process Integration in SAP SCM", "Overview of Supply Chain Structures"] },
        { id: 2, title: "Module 2: SAP Advanced Planning and Optimization (APO)", topics: ["Demand Planning and Forecasting", "Supply Network Planning (SNP)", "Production Planning and Detailed Scheduling (PP/DS)", "Global Available-to-Promise (GATP)", "Core Interface (CIF) Integration", "Master Data in SAP APO", "Reporting in SAP APO"] },
        { id: 3, title: "Module 3: SAP Extended Warehouse Management (EWM)", topics: ["Warehouse Structure and Master Data", "Inbound and Outbound Processing", "Internal Warehouse Processes", "Physical Inventory and Posting Changes", "Resource Management in EWM", "Integration with ECC/S/4HANA", "Cross-Docking and Value-Added Services"] },
        { id: 4, title: "Module 4: SAP Transportation Management (TM)", topics: ["Transportation Planning and Optimization", "Freight Order Management", "Carrier Selection and Tendering", "Freight Settlement and Cost Distribution", "Event Management in TM", "Integration with SCM and ECC", "Analytics for Transportation"] },
        { id: 5, title: "Module 5: SAP Production Planning (PP) in SCM Context", topics: ["Master Data for Production in SCM", "Bill of Materials and Work Centers (SCM perspective)", "Production Orders and Planning Strategies (SCM integration)", "Capacity Planning (SCM integration)", "Material Requirement Planning (MRP) in SCM", "Shop Floor Control (SCM integration)", "Integration with MM and SD in SCM"] },
        { id: 6, title: "Module 6: SAP Materials Management (MM) in SCM Context", topics: ["Purchasing and Vendor Management (SCM focus)", "Inventory Management and Goods Movement (SCM focus)", "Invoice Verification and Procurement Cycle (SCM integration)", "Purchase Requisition and Orders (SCM integration)", "Material Master Data (SCM relevance)", "Valuation and Pricing Procedures (SCM impact)", "Stock Transfer and Consumption (SCM processes)"] },
        { id: 7, title: "Module 7: SAP Sales and Distribution (SD) in SCM Context", topics: ["Sales Order Processing (SCM interaction)", "Shipping and Delivery (SCM logistics)", "Pricing and Conditions (SCM impact)", "Billing and Invoicing (SCM integration)", "Returns and Credit Management (SCM processes)", "Customer Master Data (SCM relevance)", "Reporting and Sales Analytics (SCM insights)"] },
        { id: 8, title: "Module 8: SAP SCM Reporting and Analytics", topics: ["Standard Reports across SCM Modules", "Custom Report Development for SCM", "Use of SAP Business Explorer for SCM", "Real-Time Analytics and Dashboards for SCM", "Exporting SCM Data for Business Use", "Module-Wise Performance Tracking in SCM", "SAP BI Integration for SCM"] },
        { id: 9, title: "Module 9: Advanced SCM Topics", topics: ["SAP S/4HANA Supply Chain Introduction", "Data Migration Techniques for SCM", "Business Process Reengineering in SCM", "SAP Fiori Overview for SCM Applications", "Role-Based Security in SCM", "IDoc and EDI Concepts for SCM", "Workflow Configuration in SCM"] },
        { id: 10, title: "Module 10: End-to-End SCM Project", topics: ["Project Blueprinting for SCM", "Implementation Phases and Testing for SCM", "Master Data Setup for SCM", "Real-Time Business Case Execution in SCM", "End-User Documentation for SCM", "Go-Live Strategy for SCM", "Post Go-Live Support for SCM"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP SCM Course Modules
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
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Logistics Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate SCM training", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite SCM training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led SCM training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP SCM in Chennai</h2>
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
        { id: 1, name: "Ananya M.", designation: "SAP SCM Consultant", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP SCM course at IntelliMindz provided me with an in-depth and comprehensive understanding of how supply chain systems function across various business processes. The hands-on sessions and real-world examples were very practical, insightful, and directly applicable to my daily work." },
        { id: 2, name: "Karthik R.", designation: "Functional Analyst", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "I appreciated how each SCM module was broken down clearly and methodically. The trainers were very patient, knowledgeable, and supportive. Their strong domain expertise made it easy for me to grasp even the most complex processes with confidence." },
        { id: 3, name: "Leena T.", designation: "SCM Analyst", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: "The training included real-time SCM case studies, interactive discussions, and practical exercises, which truly helped me prepare effectively for job interviews. I highly recommend this course for SAP SCM learners seeking quality training in Chennai." },
        { id: 4, name: "Mohan S.", designation: "SAP Project Lead", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "The comprehensive curriculum and excellent faculty made a significant difference in my learning experience. I was able to apply the knowledge and skills I gained immediately in my role managing complex SAP SCM projects efficiently." },
        { id: 5, name: "Rajesh K.", designation: "Technical SCM Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The access to SCM systems and hands-on assignments provided me with valuable real-world exposure. IntelliMindz is truly one of the best SAP SCM training institutes in Chennai, delivering quality education and practical experience." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer SCM" />
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

const SapSCMFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP SCM used for?", description: "SAP SCM is a comprehensive platform managing supply chain processes like planning, logistics, and warehousing, crucial for optimizing efficiency and responsiveness in global operations." },
        { id: 2, title: "Who should attend this SAP SCM training in Chennai?", description: "Professionals in logistics, operations, procurement, or IT aiming for SCM roles, along with freshers interested in SAP SCM careers, will benefit from this training in Chennai." },
        { id: 3, title: "Do I need experience before taking this SCM training in Chennai?", description: "No prior SAP SCM experience is required for this training in Chennai. The course is designed for both beginners and experienced professionals, covering foundational to advanced concepts." },
        { id: 4, title: "Why is SAP SCM training in Chennai important now?", description: "With increasing adoption of advanced supply chain solutions, SAP SCM professionals are highly sought after. Chennai is a key hub for SAP SCM opportunities, making this training valuable." },
        { id: 5, title: "Is there a difference between SAP SCM and SAP modules like APO or EWM?", description: "Yes. SAP SCM encompasses all core modules like APO, EWM, and TM. Our training in Chennai offers an integrated view across these essential SCM modules." },
        { id: 6, title: "Do you offer SAP SCM training in Chennai online?", description: "Yes. Both classroom and online options are available for learners who prefer flexible learning for our SAP SCM training in Chennai." },
        { id: 7, title: "Will this SAP SCM course in Chennai provide system access?", description: "Yes. You will get full SAP SCM system access for practice throughout the training in Chennai." },
        { id: 8, title: "Is job placement support available for this SCM course in Chennai?", description: "Absolutely. We provide resume building, mock interviews, and job alerts to support your SAP SCM career path after completing the training in Chennai." },
        { id: 9, title: "Can I take this SAP SCM training in Chennai while working full-time?", description: "Yes. Flexible batches including weekend and evening sessions are available for working professionals interested in our SAP SCM training in Chennai." },
        { id: 10, title: "Is this SAP SCM course suitable for freshers in Chennai?", description: "Definitely. Our structured approach and hands-on methodology make it perfect for fresh graduates starting their SAP SCM journey in Chennai." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP SCM Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP SCM course in Chennai.
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
                <title>SAP SCM Training in Chennai | SAP SCM Course in Chennai</title>
                <meta name="description" content="Enroll in our SAP SCM Training in Chennai to master supply chain management skills. Get certified with our hands-on SAP SCM course in Chennai, led by industry experts." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapScmCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapSCMFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
                <h1 className="intro-h1">Best SAP RE Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP RE Training – your gateway to global career opportunities in real estate and asset management within enterprise systems.</h3>
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
                    Learn from the Best: SAP RE Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP RE trainers are industry professionals with extensive hands-on experience in real estate and asset lifecycle management. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP RE learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP RE concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP RE Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP RE training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP RE Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP RE experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP RE training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP RE processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP RE concepts anytime." },
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
            <h1>Become a Skilled SAP RE Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP RE training that enhances your expertise in managing real estate portfolios and lease contracts.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP RE Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP RE Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we deliver practical SAP RE training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential real estate functions such as asset management, lease contracts, portfolio reporting, and integration with FI and PM modules to ensure complete technical competence.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and SAP RE implementations, learners gain confidence and the ability to manage real estate operations effectively in enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your RE skills, our training prepares you for success in the competitive SAP job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP RE Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference, ensuring a smooth training experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP RE system access. You will practice transactions in modules such as property management, lease administration, and contract accounting within an SAP environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP RE projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP RE Experience", description: "Our trainers have extensive industry experience with SAP RE, having handled multiple implementation projects. Their insights and guidance ensure you learn best practices and relevant skills for the real estate domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, which helps students master SAP RE competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP RE interview requirements, helping reinforce knowledge and build confidence for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP RE Training in Chennai Key Features</h2>
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

const SapRECourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP RE", topics: ["Overview of SAP RE (Real Estate)", "Real Estate Lifecycle Management", "Integration with SAP FI, PM, and CO", "Organizational Units in RE", "Navigation and User Roles", "Portfolio and Asset Structure"] },
        { id: 2, title: "Module 2: Master Data Management", topics: ["Building Master and Land Management", "Rental Objects and Business Entities", "Architectural Objects", "Address Management", "Master Data Relationships", "Real Estate Object Categories"] },
        { id: 3, title: "Module 3: Contract Management", topics: ["Types of Real Estate Contracts", "Contract Creation and Maintenance", "Lease-Out and Lease-In Processes", "Notice and Renewal Management", "Termination and Archival", "Contract History Tracking"] },
        { id: 4, title: "Module 4: Rental and Lease Accounting", topics: ["Posting Rents and Service Charges", "Integration with FI and CO", "Advance Payments and Security Deposits", "Rent Adjustment Mechanisms", "Payment Schedule Creation", "Periodic Posting Jobs"] },
        { id: 5, title: "Module 5: Space Management and Planning", topics: ["Space Allocation and Utilization", "CAD Integration Overview", "Planning Scenarios and Space Reporting", "Area Calculation Rules", "Capacity and Usage Analysis", "Forecasting Tools"] },
        { id: 6, title: "Module 6: Real Estate Business Processes", topics: ["Sales and Acquisition of Property", "Internal Orders and Asset Management", "Condition Adjustments and Indexation", "Service Charge Settlement", "Real Estate Process Chains", "Workflow and Alerts"] },
        { id: 7, title: "Module 7: Integration with Other SAP Modules", topics: ["Integration with PM, FI, CO, and PS", "Posting Interfaces and Data Flow", "Master Data Synchronization", "Financial Reconciliation", "Reporting Integration", "Cost Allocations"] },
        { id: 8, title: "Module 8: Reporting and Analytics", topics: ["Standard and Custom Reports in SAP RE", "Lease Schedule Reports", "Forecast and Trend Analysis", "SAP BW and BI Integration", "Legal Compliance Reporting", "Dashboard Creation"] },
        { id: 9, title: "Module 9: Advanced RE Concepts", topics: ["SAP Flexible Real Estate Management (RE-FX)", "IFRS 16 Compliance", "Investment Management", "Cost Planning and Budgeting", "Taxation and Valuation Techniques", "Automation and IDoc Use"] },
        { id: 10, title: "Module 10: End-to-End SAP RE Project", topics: ["Project Phases and Real Estate Scenarios", "Real-Time Lease Management Implementation", "Data Migration Tools", "Business Process Reengineering", "Testing and Go-Live Strategy", "Support and Documentation"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP RE Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate RE training", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows for practical relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite RE training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation and team synergy." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led RE training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction and engagement tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP RE in Chennai</h2>
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
        { id: 1, name: "Deepika S.", designation: "SAP RE Functional Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP RE training helped me deeply understand lease and property management. IntelliMindz offers a practical and well-paced learning environment." },
        { id: 2, name: "Gokul V.", designation: "Real Estate Process Analyst", avatarInitial: "G", rating: 5, companyLogoText: "Intellimindz", reviewText: "Course modules were structured and easy to follow. Trainers provided real examples, making complex processes understandable and relatable." },
        { id: 3, name: "Nithya R.", designation: "ERP Functional Executive", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "The live system access and business case scenarios made a big difference in how I understood real estate management in SAP." },
        { id: 4, name: "Ramesh T.", designation: "SAP Real Estate Project Lead", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "I gained solid knowledge of configuration, contracts, and RE-specific reporting. The course prepared me well for handling client projects." },
        { id: 5, name: "Surya P.", designation: "Property Management Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Hands-on exercises and access to SAP RE made this course stand out. I highly recommend IntelliMindz as one of the best SAP RE training institutes in Chennai." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer RE" />
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

const SapREFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP RE used for?", description: "SAP RE is used to manage the real estate portfolio of an organization, including rental contracts, property data, and lease management." },
        { id: 2, title: "Who should attend this SAP RE training in Chennai?", description: "Professionals in real estate, finance, asset management, and facilities who want to work in SAP RE roles and manage property operations." },
        { id: 3, title: "Do I need experience before taking this RE training in Chennai?", description: "No experience is necessary. Our SAP RE course in Chennai covers basics to advanced topics and is ideal for beginners and working professionals." },
        { id: 4, title: "Why is SAP RE training in Chennai important now?", description: "With growing focus on real estate automation and compliance (like IFRS 16), SAP RE professionals are highly sought after, especially in enterprise hubs like Chennai." },
        { id: 5, title: "Is SAP RE different from SAP FI or PM modules?", description: "Yes. SAP RE focuses specifically on real estate processes, while other modules like FI or PM serve different business functions. Integration is key in our training in Chennai." },
        { id: 6, title: "Do you offer SAP RE training in Chennai online?", description: "Yes, we offer both classroom and online SAP RE training in Chennai for learners seeking flexible study options." },
        { id: 7, title: "Will this SAP RE course in Chennai provide system access?", description: "Absolutely. Learners get complete access to the SAP RE environment to practice transactions and apply concepts." },
        { id: 8, title: "Is job placement support available for this RE course in Chennai?", description: "Yes. We offer job alerts, resume building, and interview preparation to help you succeed post-training." },
        { id: 9, title: "Can I take this SAP RE training in Chennai while working full-time?", description: "Yes, our weekend and evening batches are perfect for working professionals looking to upskill." },
        { id: 10, title: "Is this SAP RE course suitable for freshers in Chennai?", description: "Definitely. Our beginner-friendly SAP RE training in Chennai provides hands-on practice and industry insights for freshers starting their careers." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP RE Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP RE course in Chennai.
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
                <title>SAP RE Training in Chennai | SAP RE Course in Chennai</title>
                <meta name="description" content="Enroll in our SAP RE Training in Chennai to master real estate management. Get certified through our hands-on SAP RE course in Chennai, led by domain experts." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapRECourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapREFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
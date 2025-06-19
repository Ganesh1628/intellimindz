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
                <h1 className="intro-h1">Best SAP BI Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your analytical potential with expert-led SAP BI Training – your pathway to global opportunities in business intelligence and reporting.</h3>
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
                    Learn from the Best: SAP BI Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP BI trainers are seasoned professionals with rich project experience in business intelligence. With strong domain expertise and real-time knowledge, they deliver a powerful learning journey in SAP BI.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation and progress to advanced SAP BI concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP BI Consultants with hands-on data analytics exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven placement record in SAP BI training.</li>
                        <li><span className="icon">✓</span> Get complete career support, from resume help to interview readiness.</li>
                        <li><span className="icon">✓</span> Practice real-time case studies and analytical reporting tasks.</li>
                        <li><span className="icon">✓</span> Enjoy a personalized learning path suited to your career growth.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP BI Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP BI experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP BI training institute near you that emphasizes real-world knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose timings that suit your schedule and pace." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Live discussions focused on analytical and reporting use cases in SAP BI." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Review training materials and revise concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-course doubt-clearing and query resolution support." }
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
            <h1>Become a Skilled SAP BI Consultant with IntelliMindz</h1>
            <p>Industry-focused SAP BI training in Chennai that sharpens your data reporting, analysis, and visualization skills.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your BI Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP BI Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we provide practical SAP BI training aimed at imparting both theoretical understanding and real-time application. The course curriculum includes concepts like data warehousing, ETL processes, business analytics, data visualization, and performance reporting.</p>
                    <p>You will benefit from live instructor-led sessions, practical lab exercises, and guided assignments. By working on real-time BI projects and datasets, learners acquire confidence and capability to deploy SAP BI in enterprise environments.</p>
                    <p>This training is ideal for both freshers and working professionals aspiring to build or elevate their career in SAP Business Intelligence.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP BI Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer SAP BI training through classroom sessions and virtual classes, catering to students, job seekers, and professionals. This ensures flexible learning experiences tailored to individual preferences." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP BI System Access", description: "Our program enables real-time system access to SAP BI tools like BEx, BW, and BO. You’ll engage in data modeling, reporting, and dashboard design to build practical BI skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Get exposure to real-world SAP BI case studies and data analytics problems. This practical training builds competence in data-driven decision making and reporting." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP BI Experience", description: "Our trainers possess years of hands-on experience in SAP BI projects across domains. Their guidance helps you learn best practices in BI design, query building, and performance tuning." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "With small groups, we ensure personalized mentoring. Trainers are able to assist students with individual challenges and offer practical insights on SAP BI functionalities." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each SAP BI module includes interactive discussions, assignments, and assessments. These prepare you for interviews and practical job scenarios." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP BI Training in Chennai Key Features</h2>
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

const SapBICourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP BI", topics: ["Overview of Business Intelligence and Data Warehousing", "SAP BI Architecture and Components", "SAP BW vs SAP BO Overview", "Data Flow and Extraction Process", "SAP NetWeaver BI Concepts", "Navigation and BI Portal"] },
        { id: 2, title: "Module 2: Data Modeling in SAP BI", topics: ["InfoObjects and InfoProviders", "Data Store Objects (DSO)", "MultiProviders and InfoCubes", "Data Flow Modeling", "Characteristics and Key Figures", "Data Schema Design"] },
        { id: 3, title: "Module 3: ETL Process and Data Loading", topics: ["Source Systems and Data Extraction", "Transformations and Transfer Rules", "DataSource and PSA Tables", "Loading using InfoPackages and DTP", "Monitoring Data Loads", "Delta and Full Load Concepts"] },
        { id: 4, title: "Module 4: SAP Business Explorer (BEx)", topics: ["Introduction to BEx Tools", "BEx Query Designer and Analyzer", "Creating Variables and Filters", "Calculated and Restricted Key Figures", "Exceptions and Conditions", "Workbook Creation and Analysis"] },
        { id: 5, title: "Module 5: SAP BO (BusinessObjects) Integration", topics: ["Overview of BO Tools – Web Intelligence, Crystal Reports", "SAP BI – BO Architecture", "Connecting BI Data to BO", "Report Creation and Scheduling", "BO Dashboards and Visualizations", "Security and Publishing"] },
        { id: 6, title: "Module 6: Performance Optimization", topics: ["Query Performance Tuning", "Aggregates and Compression", "Indexes and Statistics", "Parallel Processing Techniques", "BI Accelerator Overview", "Real-Time Data Loading"] },
        { id: 7, title: "Module 7: Reporting and Analytics", topics: ["Analytical Applications", "Ad Hoc Reporting Techniques", "Drilldown and Navigation", "Dashboards and KPIs", "Mobile BI and Cloud Integration", "Advanced Visualizations"] },
        { id: 8, title: "Module 8: Data Management and Security", topics: ["Data Reconciliation and Validation", "Authorizations and Roles", "Transport Management", "Archiving Strategies", "User Management", "Audit Trails and Logs"] },
        { id: 9, title: "Module 9: SAP BI with HANA", topics: ["Introduction to SAP HANA", "Modeling Views (Attribute, Analytic, Calculation)", "Data Provisioning in HANA", "BI on HANA – Architecture", "Performance Benefits of HANA", "Reporting on HANA"] },
        { id: 10, title: "Module 10: SAP BI End-to-End Project", topics: ["Requirement Gathering and Blueprint", "ETL Setup and Data Modeling", "Query Design and BO Reporting", "Testing and Data Validation", "Go-Live Activities", "Documentation and Support"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP BI Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate BI training", title: "Onsite Training:", description: "Customized training delivered at your office location, integrating your BI datasets and use cases for contextual learning." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite BI training center", title: "Offsite Training:", description: "Hosted at dedicated training centers or venues. Ideal for team-based workshops, focused learning, and business intelligence labs." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led BI training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions on platforms like Zoom or Teams. Combines the flexibility of online training with interactive teaching methods." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP BI in Chennai</h2>
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
        { id: 1, name: "Aarav N.", designation: "BI Analyst", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP BI course gave me deep insights into data reporting and visualization. I appreciated the real-world approach and hands-on assignments using actual BI tools." },
        { id: 2, name: "Shalini V.", designation: "SAP BI Developer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Every concept was clearly explained with real project references. The trainer's ability to simplify technical topics made learning engaging and effective." },
        { id: 3, name: "Manoj D.", designation: "Reporting Specialist", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "The structured modules and live use-case exercises made this training very job-oriented. I could confidently handle interviews and BI tasks in my current role." },
        { id: 4, name: "Divya K.", designation: "SAP BW Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "I was impressed by the depth of SAP BW coverage and the industry-relevant approach. IntelliMindz is truly the best SAP BI training institute in Chennai." },
        { id: 5, name: "Rahul S.", designation: "Business Intelligence Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The system access and case studies really helped me apply the concepts. The support from trainers was excellent throughout the learning journey." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer BI" />
                    </div>
                </div>
                <div className="review-content-area">
                    <div className="review-card">
                        <div className="review-card-header">
                            <span className="review-company-logo-text">{currentReview.companyLogoText || "IntelliMindz"}</span>
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SapBIFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP BI used for?", description: "SAP BI (Business Intelligence) is used for analyzing business data to support decision-making. It helps in reporting, visualization, and business performance management using integrated tools and dashboards." },
        { id: 2, title: "Who should attend this SAP BI training in Chennai?", description: "Professionals in data analysis, IT, or business domains, and freshers interested in data-driven roles can benefit from our SAP BI training in Chennai to advance their analytics careers." },
        { id: 3, title: "Do I need experience before taking this SAP BI training in Chennai?", description: "No prior experience in SAP BI is required. Our training in Chennai starts with the basics and gradually moves into advanced reporting and analytics concepts suitable for all learners." },
        { id: 4, title: "Why is SAP BI training in Chennai important now?", description: "With growing demand for data professionals, SAP BI training in Chennai is valuable to build expertise in analytics and reporting, which are crucial for today’s data-driven enterprises." },
        { id: 5, title: "Is there a difference between SAP BI and other SAP modules?", description: "Yes, SAP BI focuses on data analysis and reporting, whereas modules like FI or MM handle business operations. Our training in Chennai provides clarity on BI-specific processes and tools." },
        { id: 6, title: "Do you offer SAP BI training in Chennai online?", description: "Yes, we offer both classroom and online SAP BI training in Chennai, enabling flexible access to expert guidance, practical sessions, and interactive learning." },
        { id: 7, title: "Will this SAP BI course in Chennai provide system access?", description: "Absolutely, learners get access to the SAP BI environment during the training in Chennai to practice real-time reporting, dashboards, and analytics tasks." },
        { id: 8, title: "Is job placement support available for this BI course in Chennai?", description: "Yes, we offer career assistance through resume preparation, mock interviews, and job placement support as part of our SAP BI training in Chennai." },
        { id: 9, title: "Can I take this SAP BI training in Chennai while working full-time?", description: "Certainly, our flexible batch schedules, including evenings and weekends, allow working professionals to upskill in SAP BI without disrupting their careers." },
        { id: 10, title: "Is this SAP BI course suitable for freshers in Chennai?", description: "Yes, our beginner-friendly SAP BI training in Chennai includes hands-on practice and prepares fresh graduates for entry-level BI roles with confidence." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP BI Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP BI course in Chennai.
                </p>
            </div>
            <div className="syllabus-grid">
                {modulesData.map((faqItem) => (
                    <div
                        key={faqItem.id || faqItem.index}
                        className={`module-card ${activeModule === (faqItem.id || faqItem.index) ? 'active' : ''}`}
                        onMouseEnter={() => setActiveModule(faqItem.id || faqItem.index)}
                        onMouseLeave={() => setActiveModule(null)}
                    >
                        <div className="module-number">
                            {String(faqItem.id || faqItem.index).padStart(2, '0')}
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
const pageTitle = "Best SAP BI Training in Chennai | Expert-Led SAP BI Course";
const pageDescription = "Enroll in top-rated SAP BI training in Chennai at Intellimindz. Master SAP BI concepts with real-time projects and expert guidance.";
const pageKeywords = "sap bi training in chennai, sap bi course, sap bi certification, intellimindz";
const ogUrl = "https://localhost:3000/sap_bi_training_in_chennai";
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
            <SapBICourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapBIFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
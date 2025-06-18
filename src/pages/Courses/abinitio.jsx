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
                <h1 className="intro-h1">Best Ab Initio Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Ab Initio Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Ab Initio Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Ab Initio trainers are seasoned professionals with extensive experience in data integration and ETL development. With real-world project expertise, they guide you through a comprehensive learning journey in Ab Initio.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master core and advanced Ab Initio concepts for data processing.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on ETL project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in data integration training.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time ETL scenarios to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Customized learning tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Ab Initio Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Ab Initio experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Ab Initio training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that fit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world ETL and data integration tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access Ab Initio course materials anytime for revision." },
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Ab Initio sessions from anywhere. Includes hands-on ETL exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your convenience with pre-recorded Ab Initio video sessions, lifetime access to course materials, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person Ab Initio sessions for immersive learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled Ab Initio Developer with IntelliMindz</h1>
            <p>Industry-focused Ab Initio training to master ETL processes and data integration solutions.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Ab Initio Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Ab Initio Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers comprehensive Ab Initio training in Chennai, designed to provide both theoretical knowledge and practical expertise in data integration and ETL processes. Our curriculum covers key Ab Initio components like GDE, CoOperating System, Data Profiler, ConductIt, and more.</p>
                    <p>The course includes interactive classes, live ETL development sessions, practical exercises, and real-time projects. By working on industry-relevant scenarios, learners gain the skills to handle large-scale data integration tasks in enterprise environments.</p>
                    <p>Whether you’re a beginner or a professional looking to upskill, our Ab Initio training equips you to excel in the competitive data management job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Ab Initio Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for working professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with Ab Initio Access", description: "Gain hands-on experience with Ab Initio tools like GDE and Co>Operating System, allowing you to develop and test ETL processes in a real environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Time Case Studies", description: "Work on case studies based on actual data integration projects to enhance problem-solving and prepare for industry challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Trainers", description: "Learn from industry professionals with extensive experience in Ab Initio and large-scale data integration projects." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized attention and one-on-one mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions & Assessments", description: "Engage in interactive discussions and module-wise assessments to reinforce learning and prepare for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Ab Initio Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Ab Initio", topics: ["Overview of ETL and Data Integration", "Introduction to Ab Initio Architecture", "Role of Ab Initio in Data Warehousing", "Ab Initio Components Overview", "Installation and Setup Basics", "Understanding GDE (Graphical Development Environment)"] },
        { id: 2, title: "Module 2: Ab Initio Co>Operating System", topics: ["Co>Operating System Architecture", "File Systems and Data Storage", "Parallel Processing Concepts", "Sandbox and Parameter Management", "Command Line Interface Basics", "Error Handling in Co>Operating System"] },
        { id: 3, title: "Module 3: Ab Initio GDE", topics: ["Creating Graphs in GDE", "Components: Transform, Sort, Join, Rollup", "Data Flow and Graph Execution", "Debugging Graphs", "Parameterization in Graphs", "Performance Tuning in GDE"] },
        { id: 4, title: "Module 4: Data Manipulation and Transformation", topics: ["Data Transformation Techniques", "Working with DML (Data Manipulation Language)", "Handling Complex Data Formats", "Partitioning and De-partitioning", "Lookup and Join Operations", "Real-Time Data Transformation Scenarios"] },
        { id: 5, title: "Module 5: Conduct>It and Plans", topics: ["Introduction to Conduct>It", "Creating and Managing Plans", "Scheduling and Monitoring ETL Jobs", "Dependency Analysis", "Error Handling in Plans", "Real-Time Plan Implementation"] },
        { id: 6, title: "Module 6: Data Profiler and Data Quality", topics: ["Introduction to Data Profiler", "Data Quality Rules and Validation", "Profiling Techniques for Data Analysis", "Handling Data Anomalies", "Integrating Data Quality in ETL", "Real-Time Profiling Exercises"] },
        { id: 7, title: "Module 7: Advanced Ab Initio Concepts", topics: ["Continuous Flows and Real-Time Processing", "Ab Initio Metadata Hub", "Integration with Databases (SQL, Oracle, etc.)", "Web Services and API Integration", "Performance Optimization Techniques", "High Availability and Fault Tolerance"] },
        { id: 8, title: "Module 8: Real-Time Project and Deployment", topics: ["End-to-End ETL Project Development", "Data Migration Scenarios", "Testing and Validation of ETL Processes", "Deployment Strategies", "Performance Monitoring and Tuning", "Project Documentation and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Ab Initio Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Ab Initio training", title: "Onsite Training:", description: "Conducted at your company premises for tailored, collaborative learning using your data environment." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Ab Initio training center", title: "Offsite Training:", description: "Held at professional venues for focused learning, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Ab Initio training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online training via Zoom or Teams, perfect for remote or distributed teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Ab Initio in Chennai</h2>
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
        { id: 1, name: "Karthik V.", designation: "ETL Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Ab Initio course at IntelliMindz was well-structured. Hands-on projects helped me master graph development and ETL processes." },
        { id: 2, name: "Priya S.", designation: "Data Engineer", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers explained complex concepts like partitioning and Conduct>It clearly. Real-time projects boosted my confidence." },
        { id: 3, name: "Suresh K.", designation: "Data Integration Specialist", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Flexible batches and practical training made learning Ab Initio easy. The course prepared me well for interviews." },
        { id: 4, name: "Anitha R.", designation: "ETL Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers supported me throughout, and I’m now confident in ETL development." },
        { id: 5, name: "Vijay M.", designation: "Senior ETL Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on real-time scenarios and performance tuning was excellent. It helped me enhance my existing ETL skills." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Ab Initio" />
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
        { id: 1, title: "What is Ab Initio used for?", description: "Ab Initio is a powerful ETL tool used for data integration, processing, and managing large-scale data in enterprise environments." },
        { id: 2, title: "Who should take this Ab Initio training?", description: "Fresh graduates, data analysts, ETL developers, and professionals looking to specialize in data integration." },
        { id: 3, title: "Do I need prior coding knowledge?", description: "Basic knowledge of databases or programming is helpful but not mandatory. Our course starts from the basics." },
        { id: 4, title: "Is Ab Initio in demand in 2025?", description: "Yes, with the rise in big data and analytics, Ab Initio skills are highly sought after in industries like finance and telecom." },
        { id: 5, title: "What’s the difference between Ab Initio and Informatica?", description: "Both are ETL tools, but Ab Initio is known for its high performance and scalability in handling complex data transformations." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Ab Initio training with live, instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get access to Ab Initio tools for practical ETL development and graph creation." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, resume tips, and real-world ETL scenarios for job readiness." },
        { id: 9, title: "Can I switch to Ab Initio from another field?", description: "Yes, with basic database knowledge, you can transition to Ab Initio with our structured training." },
        { id: 10, title: "Is Ab Initio suitable for freshers?", description: "Absolutely, it’s a great entry point for a career in data integration and ETL development." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Ab Initio Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Ab Initio course in Chennai.
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

const Abinitiomain = () => {
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
                <title>Ab Initio Training in Chennai | Ab Initio Course in Chennai</title>
                <meta name="description" content="Master data integration and ETL with our Ab Initio Training in Chennai. Learn advanced data processing through our expert-led Ab Initio course." />
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

export default Abinitiomain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
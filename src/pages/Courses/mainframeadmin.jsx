import React, { useState } from 'react';
import Meta from '../../components/Meta';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (unchanged)
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets (unchanged)
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
          <img src={homeintro} alt="Mainframe Admin Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Mainframe Admin Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Mainframe Admin Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from Experts: Mainframe Admin Training by <span>Industry Professionals</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Mainframe Admin trainers are seasoned professionals with extensive experience in managing enterprise mainframe systems. With deep industry knowledge and hands-on expertise, they guide you through a comprehensive learning journey in Mainframe Administration.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in Mainframe concepts and advance to expert-level skills.</li>
                        <li><span className="icon">✓</span> Learn from Mainframe Administrators with real-world project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in Mainframe training success.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios to develop job-ready Mainframe skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Mainframe Admin Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Mainframe experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Mainframe Admin training with practical skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world Mainframe administration tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit Mainframe course content anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your understanding." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Mainframe Admin sessions from anywhere. Our online training includes hands-on exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Mainframe Admin video sessions. Get lifetime access to course materials and periodic updates to stay current.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person Mainframe Admin training in Chennai for collaborative learning with trainers and peers.", isPopular: false },
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
            <h1>Become a Skilled Mainframe Administrator with IntelliMindz</h1>
            <p>Industry-focused Mainframe Admin training to build expertise in managing enterprise systems.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Mainframe Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Mainframe Admin Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our Mainframe Admin training is designed to provide hands-on expertise in managing IBM Mainframe systems. Our curriculum covers essential topics like z/OS, JCL, VSAM, CICS, DB2, and system performance tuning, ensuring comprehensive technical competence.</p>
                    <p>The course includes interactive sessions, live system access, practical exercises, and real-world scenarios to prepare you for enterprise environments. You’ll work on case studies and simulations to gain confidence in handling Mainframe administration tasks.</p>
                    <p>Whether you're a beginner entering the IT infrastructure field or a professional seeking to specialize in Mainframe systems, our training equips you with the skills to excel in the competitive IT job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Mainframe Admin Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online training, tailored for working professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Mainframe System Access", description: "Gain practical experience with dedicated access to IBM Mainframe systems, allowing you to perform real administrative tasks." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Work on case studies modeled after actual Mainframe administration scenarios to enhance problem-solving skills and interview readiness." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Mainframe Trainers", description: "Learn from industry professionals with extensive experience in Mainframe system administration across various domains." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized attention and one-on-one mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Assessments", description: "Engage in module-wise discussions, quizzes, and assessments aligned with Mainframe interview topics." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Mainframe Admin Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Mainframe", topics: ["Overview of Mainframe Computing", "Introduction to IBM z/OS", "Mainframe Hardware and Architecture", "Role of Mainframe Administrators", "Navigating z/OS Environment", "Mainframe Security Basics"] },
        { id: 2, title: "Module 2: z/OS Fundamentals", topics: ["z/OS Operating System Overview", "TSO/ISPF Interface", "JCL (Job Control Language) Basics", "System Libraries and Datasets", "File Systems (PDS, PDSE, VSAM)", "z/OS Commands and Utilities"] },
        { id: 3, title: "Module 3: Job Control Language (JCL)", topics: ["JCL Syntax and Structure", "JOB, EXEC, and DD Statements", "JCL Procedures and Catalogs", "GDG (Generation Data Groups)", "JCL Debugging and Error Handling", "Real-Time JCL Exercises"] },
        { id: 4, title: "Module 4: VSAM and Data Management", topics: ["Introduction to VSAM", "KSDS, ESDS, RRDS File Types", "VSAM Dataset Creation and Management", "Access Method Services (IDCAMS)", "Backup and Recovery Techniques", "Performance Tuning for VSAM"] },
        { id: 5, title: "Module 5: CICS Administration", topics: ["Overview of CICS", "CICS Regions and Transactions", "CICS Resource Definitions", "Monitoring and Managing CICS Systems", "CICS Performance Tuning", "Troubleshooting CICS Issues"] },
        { id: 6, title: "Module 6: DB2 Administration", topics: ["Introduction to DB2 on Mainframe", "DB2 Database Structure", "Table Spaces and Indexes", "DB2 Utilities and Commands", "Backup and Recovery in DB2", "Performance Monitoring in DB2"] },
        { id: 7, title: "Module 7: System Performance and Tuning", topics: ["Mainframe Performance Metrics", "Workload Manager (WLM)", "SMF and RMF Reports", "Capacity Planning", "System Monitoring Tools", "Performance Optimization Techniques"] },
        { id: 8, title: "Module 8: Security and Access Control", topics: ["RACF (Resource Access Control Facility)", "User and Group Management", "Access Control Lists (ACLs)", "Security Policies and Auditing", "Mainframe Security Best Practices", "Troubleshooting Security Issues"] },
        { id: 9, title: "Module 9: Automation and Tools", topics: ["Mainframe Automation Concepts", "Using REXX for Automation", "ISPF Macros and Customization", "Third-Party Tools Overview", "Batch Scheduling Tools", "Automating Routine Tasks"] },
        { id: 10, title: "Module 10: Real-Time Project and Advanced Topics", topics: ["Mainframe Project: System Administration", "Disaster Recovery Planning", "Mainframe Modernization Trends", "Cloud Integration with Mainframe", "Case Studies on System Failures", "End-to-End Project Deployment"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Mainframe Admin Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite Mainframe Admin training", title: "Onsite Training:", description: "Conducted at your premises, offering a tailored environment for upskilling teams in Mainframe administration." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Mainframe training center", title: "Offsite Training:", description: "Held at professional training centers for focused learning, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual Mainframe training", title: "Virtual Instructor-Led Training (VILT):", description: "Live training via platforms like Zoom, perfect for remote teams with interactive sessions." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Mainframe Admin in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "Mainframe Administrator", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Mainframe Admin course at IntelliMindz was exceptional. Hands-on z/OS and JCL exercises helped me master real-world tasks. The trainers were patient and knowledgeable." },
        { id: 2, name: "Priya V.", designation: "System Administrator", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course structure was clear, with practical sessions on CICS and DB2. The trainers used real-time scenarios, making it easy to transition into a Mainframe role." },
        { id: 3, name: "Suresh M.", designation: "Mainframe Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s reputation is well-earned. The course content, interview prep, and flexible schedules were perfect for my career shift into Mainframe administration." },
        { id: 4, name: "Anitha R.", designation: "Mainframe Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers explained z/OS and VSAM from scratch, and the hands-on practice was invaluable." },
        { id: 5, name: "Vijay K.", designation: "Senior Mainframe Admin", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course made complex topics like performance tuning and RACF easy to understand. The practical sessions and case studies added immense value." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Mainframe" />
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
        { id: 1, title: "What is Mainframe Administration?", description: "Mainframe Administration involves managing IBM Mainframe systems, including z/OS, JCL, VSAM, CICS, and DB2, to ensure system performance, security, and reliability." },
        { id: 2, title: "Who should take this Mainframe Admin training?", description: "Fresh graduates, IT professionals, and system administrators looking to specialize in Mainframe systems or transition to enterprise IT roles." },
        { id: 3, title: "Do I need prior experience to learn Mainframe Admin?", description: "Basic IT knowledge is helpful, but our course starts from scratch, making it accessible to beginners." },
        { id: 4, title: "Are Mainframe skills in demand in 2025?", description: "Yes, Mainframes remain critical for industries like banking, insurance, and retail, with high demand for skilled administrators." },
        { id: 5, title: "What’s the difference between Mainframe Admin and SAP ABAP?", description: "Mainframe Admin focuses on system management (z/OS, CICS), while SAP ABAP is about programming for SAP applications." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Mainframe Admin training with live instructor-led sessions and system access." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get access to Mainframe systems for practical exercises in JCL, VSAM, CICS, and more." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and real-world scenarios to prepare you for Mainframe jobs." },
        { id: 9, title: "Can I switch to Mainframe from another IT field?", description: "Absolutely, with basic IT skills, you can transition to Mainframe administration through our training." },
        { id: 10, title: "Is Mainframe Admin suitable for freshers?", description: "Yes, it’s a great entry point for freshers aiming for a career in enterprise IT infrastructure." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Mainframe Admin Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Get answers to your questions about our Mainframe Admin course in Chennai.
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
            <p className="cta-banner-text">Launch your Mainframe career with expert guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Mainframeadminmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Mainframe Admin Training in Chennai | Practical Oriented Mainframe Admin Course";
const pageDescription = "Master mainframe administration with IntelliMindz training in Chennai. Get hands-on with RACF, SDSF, and more.";
const pageKeywords = "mainframe admin training in chennai, mainframe support course, intellimindz admin";
const ogUrl = "https://localhost:3000/mainframe_admin_training_in_chennai";
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

export default Mainframeadminmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
          <img src={homeintro} alt="Mainframe Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Mainframe Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Mainframe Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Mainframe Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At Chennai Trainings, our Mainframe trainers are seasoned professionals with extensive experience in mainframe development and administration. They bring real-world expertise to guide you through mastering mainframe technologies like COBOL, JCL, and DB2, ensuring you’re job-ready.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain a strong foundation in mainframe technologies from basics to advanced concepts.</li>
                        <li><span className="icon">✓</span> Learn from expert mainframe professionals with hands-on project experience.</li>
                        <li><span className="icon">✓</span> Benefit from Chennai Trainings’ proven expertise in delivering high-quality mainframe training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world mainframe projects to develop enterprise-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Mainframe Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from mainframe experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on mainframe training to build enterprise skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world mainframe tasks like COBOL and JCL." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access mainframe course materials anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your mainframe knowledge." }
    ];
    return (
        <div className="corporate-section">
            <h2 className="corporate-title">Why Choose Chennai Trainings?</h2>
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Mainframe sessions from anywhere. Our online training includes hands-on exercises in COBOL, JCL, and DB2, with interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn Mainframe technologies at your own pace with pre-recorded videos. Get lifetime access to course materials, resources, and updates to stay current.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Mainframe sessions for an immersive experience. Our classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Our hybrid model lets you switch formats to suit your schedule and learning preferences.", isPopular: false }
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
            <h1>Become a Skilled Mainframe Developer with Chennai Trainings</h1>
            <p>Master mainframe technologies with industry-relevant training to excel in enterprise IT environments.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Mainframe Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Mainframe Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At Chennai Trainings, our Mainframe training is designed to provide hands-on experience and in-depth knowledge of mainframe technologies. Our comprehensive curriculum covers COBOL, JCL, DB2, CICS, and VSAM, ensuring you gain practical skills for enterprise applications.</p>
                    <p>The course includes live coding sessions, practical exercises, and project-based learning. By working on real-world mainframe scenarios, learners develop the confidence to handle enterprise-level tasks in industries like banking, insurance, and finance.</p>
                    <p>Whether you’re a beginner or an experienced professional looking to specialize in mainframe technologies, our training equips you to succeed in the competitive IT industry with practical expertise.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Mainframe Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual Mainframe training, making it accessible for working professionals, students, and job seekers. Choose the mode that fits your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-on Mainframe Access", description: "Our training provides access to mainframe environments for practical exercises in COBOL, JCL, and DB2, ensuring real-world experience." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Work on case studies based on actual mainframe projects in banking and finance to enhance problem-solving skills and prepare for industry challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Mainframe Trainers", description: "Learn from industry professionals with extensive experience in mainframe development and administration across enterprise environments." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "Our limited batch sizes ensure individual attention, allowing trainers to address queries and provide tailored guidance." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and assessments aligned with mainframe job roles to prepare you for interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Mainframe Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Mainframe", topics: ["Overview of Mainframe Systems", "Mainframe Architecture and Components", "Introduction to z/OS", "TSO/ISPF Usage", "Mainframe Job Roles", "Mainframe vs. Distributed Systems"] },
        { id: 2, title: "Module 2: JCL (Job Control Language)", topics: ["JCL Syntax and Structure", "JOB, EXEC, and DD Statements", "Cataloged and Instream Procedures", "Condition Codes and Restart", "JCL Utilities (IEBGENER, SORT)", "Debugging JCL Errors"] },
        { id: 3, title: "Module 3: COBOL Programming", topics: ["COBOL Program Structure", "Data Division and Working Storage", "Procedure Division and Logic", "File Handling in COBOL", "Arithmetic and Conditional Statements", "Subprograms and Linkage Section"] },
        { id: 4, title: "Module 4: DB2 for Mainframe", topics: ["Introduction to DB2", "DB2 Architecture and Objects", "SQL Queries (SELECT, INSERT, UPDATE, DELETE)", "Embedded SQL in COBOL", "DB2 Utilities and Tools", "Performance Tuning Basics"] },
        { id: 5, title: "Module 5: CICS (Customer Information Control System)", topics: ["CICS Overview and Architecture", "CICS Transactions and Programs", "Basic Mapping Support (BMS)", "File Control and VSAM in CICS", "Error Handling in CICS", "CICS Debugging"] },
        { id: 6, title: "Module 6: VSAM (Virtual Storage Access Method)", topics: ["VSAM File Types (KSDS, ESDS, RRDS)", "VSAM Dataset Creation and Management", "Accessing VSAM Files in COBOL", "VSAM Utilities (IDCAMS)", "Alternate Indexes", "VSAM Performance Optimization"] },
        { id: 7, title: "Module 7: Mainframe Tools and Utilities", topics: ["File-AID for Data Management", "Endevor for Version Control", "XPEDITER for Debugging", " Abend-AID for Error Analysis", "Mainframe SORT Utility", "Dataset Management Tools"] },
        { id: 8, title: "Module 8: Batch and Online Processing", topics: ["Batch Job Processing Overview", "Scheduling Jobs with Control-M", "Online Transaction Processing", "Batch vs. Online Systems", "Error Handling in Batch Jobs", "Performance Monitoring"] },
        { id: 9, title: "Module 9: Mainframe Security and Administration", topics: ["Introduction to RACF", "Mainframe Security Concepts", "User Access Management", "Dataset Security", "System Monitoring Basics", "Backup and Recovery Overview"] },
        { id: 10, title: "Module 10: Real-World Project and Advanced Topics", topics: ["End-to-End Mainframe Project", "COBOL-DB2 Integration", "CICS Application Development", "Performance Tuning Techniques", "Mainframe Modernization Concepts", "Project Review and Presentation"] }
    ];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Mainframe Course Modules
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
                        {allModulesData.find(module => module.id === activeModuleId).topics.map((item, index) => (<li key={index}>{item}</li>))}
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Freshers", "Non-IT to IT Transition"] },
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Mainframe training", title: "Onsite Training:", description: "Conducted at your company premises, this training offers a tailored experience using your mainframe environment, ideal for upskilling teams in COBOL and JCL." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Mainframe training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides focused Mainframe training without workplace distractions, perfect for certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Mainframe training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via platforms like Zoom, VILT offers flexibility for remote teams with real-time interaction and hands-on Mainframe exercises." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Mainframe in Chennai</h2>
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
        { id: 1, name: "Ravi K.", designation: "Mainframe Developer", avatarInitial: "R", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The Mainframe course at Chennai Trainings was outstanding. The hands-on COBOL and DB2 projects prepared me for real-world tasks, and the trainers were very supportive." },
        { id: 2, name: "Latha M.", designation: "Mainframe Analyst", avatarInitial: "L", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The JCL and CICS modules were explained clearly with practical examples. The trainers’ industry experience made complex concepts easy to grasp." },
        { id: 3, name: "Arun S.", designation: "Mainframe Programmer", avatarInitial: "A", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The flexible batch timings and real-world projects helped me balance work and learning. The interview preparation was crucial for landing my mainframe job." },
        { id: 4, name: "Sneha P.", designation: "Mainframe Trainee", avatarInitial: "S", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "As a fresher, I found the course very beginner-friendly. The trainers covered COBOL and JCL from scratch, and the projects boosted my confidence." },
        { id: 5, name: "Vijay R.", designation: "Mainframe Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The DB2 and CICS modules were particularly valuable. The practical sessions and real-world scenarios helped me excel in my mainframe consulting role." }
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
                            <span className="review-company-logo-text">{currentReview.companyLogoText || "Chennai Trainings"}</span>
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
        { id: 1, title: "What is Mainframe used for?", description: "Mainframes are used for large-scale data processing in industries like banking, insurance, and finance, handling critical applications with high reliability." },
        { id: 2, title: "Who should take this Mainframe training?", description: "Freshers, IT professionals, and developers looking to specialize in mainframe technologies like COBOL, JCL, and DB2 for enterprise roles." },
        { id: 3, title: "Do I need prior experience to learn Mainframe?", description: "No prior mainframe experience is required. Basic programming knowledge is helpful, but our course starts from the basics." },
        { id: 4, title: "Is Mainframe in demand in 2025?", description: "Yes, mainframes remain critical in industries like banking and finance, with demand for skilled professionals in COBOL and DB2." },
        { id: 5, title: "What’s the difference between Mainframe and other IT systems?", description: "Mainframes are designed for high-volume, reliable transaction processing, unlike distributed systems that focus on scalability and flexibility." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Mainframe training with live instructor-led sessions and hands-on practice." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, our training provides access to mainframe environments for practical exercises in COBOL, JCL, and DB2." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, resume guidance, and real-world scenarios to prepare you for mainframe job roles." },
        { id: 9, title: "Can I switch to Mainframe from another IT field?", description: "Yes, with basic programming skills, you can transition to mainframe development, which offers stable career opportunities." },
        { id: 10, title: "Is Mainframe suitable for freshers?", description: "Absolutely, Mainframe training is ideal for freshers aiming for careers in enterprise IT with technologies like COBOL and DB2." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Mainframe Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Mainframe course in Chennai.
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
            <p className="cta-banner-text">Launch your career in enterprise IT with our expert Mainframe training.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Mainframemain = () => {
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
                <title>Mainframe Training in Chennai | Mainframe Course in Chennai</title>
                <meta name="description" content="Join our Mainframe Training in Chennai to master COBOL, JCL, DB2, and more. Expert-led Mainframe course with hands-on projects for enterprise IT careers." />
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

export default Mainframemain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
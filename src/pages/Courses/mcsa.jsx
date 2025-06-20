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
      {/* <div className="intro-container"> */}
      {/* <div className="training-image-container" >
          <img src={homeintro} alt="MCSA Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best MCSA Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led MCSA Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: MCSA Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our MCSA trainers are experienced IT professionals with extensive real-world expertise in Microsoft technologies. With practical knowledge from industry projects, our trainers provide a comprehensive learning experience tailored to your MCSA certification goals.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation in Microsoft technologies with expert guidance.</li>
                        <li><span className="icon">✓</span> Learn from certified Microsoft professionals with hands-on project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in delivering successful MCSA training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on practical labs and real-world scenarios to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a personalized learning experience tailored to your career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="MCSA Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by certified Microsoft professionals at our MCSA training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an MCSA training center offering hands-on, practical skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that fit your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in real-time discussions focused on Microsoft technologies." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access MCSA course materials anytime for revision and reinforcement." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your Microsoft skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led MCSA sessions from anywhere. Our online training includes hands-on labs, real-world scenarios, and interactive Q&A for effective learning." },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Study at your own pace with pre-recorded videos. Get lifetime access to course materials, downloadable resources, and regular updates to stay current." },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person MCSA training with direct trainer interaction and peer collaboration for a structured learning environment." },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning, allowing you to switch modes based on your schedule and preferences." }
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
            <h1>Become a Certified MCSA Professional with IntelliMindz</h1>
            <p>Gain expertise in Microsoft technologies with industry-focused MCSA training designed for IT career success.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your MCSA Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our MCSA Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive MCSA training to equip learners with the skills needed for Microsoft certifications. Our curriculum covers key areas such as Windows Server, Microsoft Azure, and SQL Server, ensuring a strong foundation in Microsoft technologies.</p>
                    <p>The course includes hands-on labs, real-world scenarios, and interactive sessions to build practical expertise. Learners work on industry-relevant tasks, gaining the confidence to handle real IT challenges in enterprise environments.</p>
                    <p>Whether you're a beginner or an IT professional looking to advance your career, our MCSA training provides the knowledge and hands-on experience to excel in the competitive IT industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="MCSA Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, designed for working professionals, students, and IT enthusiasts to suit varied schedules and preferences." },
        { id: 2, image: handsonsapImg, title: "Hands-on Labs with Real Microsoft Systems", description: "Gain practical experience with dedicated access to Microsoft systems for hands-on labs, enabling you to configure, manage, and troubleshoot real-world IT scenarios." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World IT Scenarios and Case Studies", description: "Work on case studies modeled after real IT challenges, enhancing your problem-solving skills and preparing you for MCSA certification exams and job interviews." },
        { id: 4, image: ExperiencedtrainersImg, title: "Certified Microsoft Trainers", description: "Learn from industry experts with extensive experience in Microsoft technologies, providing insights into best practices and real-world applications." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Benefit from small batch sizes for one-on-one mentoring, ensuring your doubts are resolved and you receive tailored guidance to achieve your MCSA goals." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Engage in interactive discussions and module-wise assessments aligned with MCSA certification topics, preparing you for exams and technical interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>MCSA Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to MCSA", topics: ["Overview of Microsoft Certifications", "Introduction to Windows Server", "Understanding Microsoft Azure", "Basics of SQL Server", "MCSA Certification Path"] },
        { id: 2, title: "Module 2: Windows Server Administration", topics: ["Installing and Configuring Windows Server", "Managing Active Directory", "Group Policy Management", "Server Roles and Features", "Storage Solutions"] },
        { id: 3, title: "Module 3: Networking with Windows Server", topics: ["TCP/IP Configuration", "DNS and DHCP Management", "IP Address Management (IPAM)", "VPN and DirectAccess", "Network Troubleshooting"] },
        { id: 4, title: "Module 4: Identity with Windows Server", topics: ["Active Directory Domain Services (AD DS)", "Federation Services", "Certificate Services", "Rights Management Services", "Identity Management"] },
        { id: 5, title: "Module 5: Microsoft Azure Fundamentals", topics: ["Introduction to Azure", "Azure Virtual Machines", "Azure Networking", "Azure Storage", "Azure Identity and Access Management"] },
        { id: 6, title: "Module 6: SQL Server Basics", topics: ["Installing SQL Server", "Database Creation and Management", "T-SQL Queries", "Backup and Restore Operations", "SQL Server Security"] },
        { id: 7, title: "Module 7: Advanced Windows Server Features", topics: ["Hyper-V Virtualization", "Failover Clustering", "Windows Server Update Services (WSUS)", "PowerShell Scripting", "Server Monitoring and Performance Tuning"] },
        { id: 8, title: "Module 8: MCSA Exam Preparation", topics: ["Exam Strategies and Tips", "Practice Questions and Mock Tests", "Real-World Scenario Analysis", "Certification Exam Objectives", "Review and Q&A Sessions"] },
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                MCSA Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate MCSA training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored learning experience using your IT infrastructure for maximum relevance and team upskilling." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite MCSA training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides a distraction-free environment for focused learning, ideal for certifications and team-building." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led MCSA training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online training via platforms like Zoom, perfect for remote teams, combining flexibility with real-time instructor interaction and hands-on labs." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for MCSA in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "System Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s MCSA training was exceptional. The hands-on labs and real-world scenarios helped me master Windows Server administration. The trainers were patient and provided in-depth guidance." },
        { id: 2, name: "Sneha R.", designation: "IT Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The MCSA course offered clear explanations and practical tasks that made complex concepts like Active Directory easy to understand. It helped me transition into IT seamlessly." },
        { id: 3, name: "Vignesh T.", designation: "Network Administrator", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible batch timings and comprehensive curriculum were perfect for my busy schedule. The mock exams and interview prep were incredibly helpful for my MCSA certification." },
        { id: 4, name: "Ritika S.", designation: "MCSA Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course very beginner-friendly. The trainers explained every concept clearly, and the hands-on labs gave me confidence to pursue an IT career." },
        { id: 5, name: "Ramesh A.", designation: "Senior IT Specialist", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on real-world scenarios and PowerShell scripting was a game-changer. The trainers’ industry experience made complex topics accessible and engaging." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer MCSA" />
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
        { id: 1, title: "What is MCSA certification used for?", description: "MCSA certification validates skills in Microsoft technologies like Windows Server, Azure, and SQL Server, essential for IT roles such as system administrator and network engineer." },
        { id: 2, title: "Who should take this MCSA training?", description: "IT professionals, fresh graduates with basic IT knowledge, and those looking to transition into Microsoft technology roles." },
        { id: 3, title: "Do I need prior IT experience for MCSA?", description: "Basic IT knowledge is helpful, but our training is designed for beginners and professionals alike, starting from foundational concepts." },
        { id: 4, title: "Is MCSA still relevant in 2025?", description: "Yes, MCSA remains valuable for roles in server administration, cloud computing, and database management, especially with Microsoft’s continued dominance in IT." },
        { id: 5, title: "What’s the difference between MCSA and MCSE?", description: "MCSA is an associate-level certification focusing on core skills, while MCSE is an expert-level certification for advanced IT expertise." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline MCSA training with live instructor-led sessions and hands-on lab access." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes access to Microsoft systems for practical labs in server management, Azure, and SQL Server." },
        { id: 8, title: "Do you offer exam preparation?", description: "Yes, our course includes mock exams, practice questions, and strategies to prepare for MCSA certification exams." },
        { id: 9, title: "Can I switch to MCSA from another IT field?", description: "Yes, with basic IT knowledge, MCSA is an excellent way to specialize in Microsoft technologies." },
        { id: 10, title: "Is MCSA suitable for freshers?", description: "Definitely, MCSA is a great entry point for freshers aiming to build a career in IT administration or cloud technologies." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">MCSA Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our MCSA course in Chennai.
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

const Mcsamain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best MCSA Training in Chennai | Practical Oriented MCSA Course";
    const pageDescription = "Join IntelliMindz for top MCSA training in Chennai. Master Microsoft technologies with hands-on labs, real-world projects, and expert guidance.";
    const pageKeywords = "mcsa training in chennai, mcsa course, mcsa certification, microsoft training, intellimindz";
    const ogUrl = "https://localhost:3000/mcsa_training_in_chennai";
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

export default Mcsamain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
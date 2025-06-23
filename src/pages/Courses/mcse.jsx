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
import saphomeintro1 from '../../assests/images/mcse_image1.jpg';
import homeintro from '../../assests/images/mcse_image.jpg';
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
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={homeintro}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

        {/* <div className="intro-container"> */}
            {/* <div className="training-image-container" >
                <img src={homeintro} alt="Ab Initio Training" />
            </div> */}
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best Ab Initio Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Ab Initio Training – your gateway to a thriving career in data management.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
        // </div>
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: MCSE Training by <span>Microsoft Certified Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our MCSE trainers are Microsoft-certified professionals with extensive experience in IT infrastructure and cloud solutions. With hands-on expertise in Microsoft technologies, our trainers guide you through a comprehensive MCSE certification journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in Microsoft server and cloud technologies.</li>
                        <li><span className="icon">✓</span> Learn from certified MCSE professionals with real-world experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in MCSE training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world labs and projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Experience a customized learning path tailored to your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="MCSE Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by Microsoft-certified MCSE experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on MCSE training to master Microsoft technologies." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world Microsoft server and cloud scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit MCSE course content and resources anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your MCSE knowledge." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led MCSE sessions from anywhere. Our online training includes hands-on labs, real-world scenarios, and interactive Q&A for effective learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded MCSE video sessions. Get lifetime access to course materials, labs, and updates to stay current with Microsoft technologies.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person MCSE sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Certified MCSE Professional with IntelliMindz</h1>
            <p>Industry-aligned MCSE training to master Microsoft server and cloud technologies for a successful IT career.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your MCSE Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our MCSE Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our MCSE training is designed to provide comprehensive knowledge and hands-on skills in Microsoft server and cloud technologies. Our curriculum covers key areas like Windows Server administration, Azure cloud solutions, Active Directory, and virtualization, preparing you for MCSE certification.</p>
                    <p>The course includes interactive sessions, hands-on labs, and real-world projects to ensure practical expertise. By working on scenarios like server configuration and cloud deployment, learners gain the confidence to manage enterprise IT environments.</p>
                    <p>Whether you're an IT professional aiming for MCSE certification or a beginner entering the IT infrastructure field, our training equips you with the skills to excel in the competitive IT job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="MCSE Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual MCSE training, ensuring accessibility for professionals, students, and job seekers. Choose the format that suits your schedule and learning style." },
        { id: 2, image: handsonsapImg, title: "Hands-on Labs and Projects", description: "Our training emphasizes practical learning with hands-on labs on Windows Server, Azure, and Active Directory, enabling you to build real-world IT infrastructure skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Scenarios", description: "Work on practical scenarios like server management and cloud deployment to enhance problem-solving skills and prepare for MCSE certification exams." },
        { id: 4, image: ExperiencedtrainersImg, title: "Microsoft-Certified Trainers", description: "Learn from MCSE-certified professionals with extensive experience in Microsoft technologies, providing expert guidance and industry best practices." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "Limited batch sizes ensure individual attention and one-on-one mentoring, allowing trainers to address queries and provide tailored support." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions and assessments aligned with MCSE certification requirements, helping you prepare for exams and interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>MCSE Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to MCSE and Microsoft Technologies", topics: ["Overview of Microsoft Certifications", "Introduction to MCSE Tracks", "Windows Server Fundamentals", "Overview of Azure Cloud Services", "IT Infrastructure Basics", "MCSE Certification Path"] },
        { id: 2, title: "Module 2: Windows Server Administration", topics: ["Installing and Configuring Windows Server", "Managing Server Roles and Features", "Active Directory Domain Services (AD DS)", "Group Policy Management", "File and Storage Services", "Server Backup and Recovery"] },
        { id: 3, title: "Module 3: Networking with Windows Server", topics: ["TCP/IP Fundamentals", "Configuring DNS and DHCP", "IP Address Management (IPAM)", "Implementing VPN and DirectAccess", "Network Load Balancing", "Troubleshooting Network Issues"] },
        { id: 4, title: "Module 4: Identity and Access Management", topics: ["Active Directory Configuration", "User and Group Management", "Federation Services (AD FS)", "Certificate Services (AD CS)", "Rights Management Services", "Single Sign-On (SSO) Solutions"] },
        { id: 5, title: "Module 5: Virtualization with Hyper-V", topics: ["Introduction to Hyper-V", "Creating and Managing Virtual Machines", "Virtual Network Configuration", "Hyper-V High Availability", "Live Migration and Failover Clustering", "Backup and Recovery for VMs"] },
        { id: 6, title: "Module 6: Microsoft Azure Fundamentals", topics: ["Introduction to Azure Cloud", "Azure Virtual Machines and Networking", "Azure Active Directory", "Managing Azure Resources", "Azure Storage Solutions", "Azure Security and Compliance"] },
        { id: 7, title: "Module 7: Advanced Server Management", topics: ["Windows Server Performance Tuning", "PowerShell for Automation", "Monitoring and Diagnostics", "Server Security Best Practices", "Patch Management", "Disaster Recovery Planning"] },
        { id: 8, title: "Module 8: MCSE Certification Preparation", topics: ["MCSE Exam Overview", "Sample Questions and Mock Tests", "Exam Strategies and Tips", "Case Study Analysis", "Review of Key Concepts"] },
        { id: 9, title: "Module 9: Practical Labs and Scenarios", topics: ["Configuring Windows Server Environments", "Setting Up Azure Infrastructure", "Active Directory Deployment", "Troubleshooting Real-World Scenarios", "Group Policy Implementation"] },
        { id: 10, title: "Module 10: Capstone Project and Advanced Topics", topics: ["Hybrid Cloud Integration", "Azure and On-Premises Integration", "Automating IT Tasks with PowerShell", "Capstone Project: Design an IT Infrastructure", "Project Presentation and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                MCSE Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate MCSE training", title: "Onsite Training:", description: "Conducted at your organization’s premises, this MCSE training provides tailored learning in your IT environment, ideal for upskilling teams in Microsoft technologies." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite MCSE training center", title: "Offsite Training:", description: "Held at dedicated training venues, this MCSE training offers a focused setting for certifications and hands-on workshops in Microsoft server and cloud solutions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led MCSE training", title: "Virtual Instructor-Led Training:", description: "Delivered live via Zoom or Microsoft Teams, this training is perfect for remote teams, combining flexibility with real-time instructor interaction for MCSE certification." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for MCSE in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "System Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The MCSE course at Intellimindz was exceptional. The hands-on labs on Windows Server and Azure were practical and relevant. The trainers’ expertise made complex topics easy to understand." },
        { id: 2, name: "Sneha R.", designation: "Cloud Engineer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The clear explanation of Active Directory and Azure solutions was outstanding. The real-world projects helped me transition confidently to a cloud-focused role." },
        { id: 3, name: "Vignesh T.", designation: "IT Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "Intellimindz’s MCSE training is top-notch. The certification prep and practical labs were spot-on, and the flexible batches fit perfectly with my work schedule." },
        { id: 4, name: "Ritika S.", designation: "MCSE Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the MCSE course easy to follow. The trainers covered concepts from scratch and provided excellent support, kickstarting my IT career." },
        { id: 5, name: "Ramesh A.", designation: "Senior Systems Engineer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The depth of content and hands-on labs on Hyper-V and Azure made this course exceptional. The trainers’ industry experience added immense value." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); } return stars; };
    const formatReviewText = (text) => { return <p>{text}</p>; };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer MCSE" />
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
        { id: 1, title: "What is MCSE certification?", description: "MCSE (Microsoft Certified Solutions Expert) is a certification that validates expertise in Microsoft server and cloud technologies, including Windows Server and Azure." },
        { id: 2, title: "Who should take MCSE training?", description: "IT professionals, system administrators, and those seeking to specialize in Microsoft infrastructure and cloud solutions." },
        { id: 3, title: "Do I need prior experience for MCSE?", description: "Basic IT knowledge or experience with Windows Server is helpful, but our training starts from fundamentals for beginners." },
        { id: 4, title: "Is MCSE in demand in 2025?", description: "Yes, with the rise of cloud computing and Microsoft Azure adoption, MCSE-certified professionals are highly sought after." },
        { id: 5, title: "What’s the difference between MCSE and MCSA?", description: "MCSA is an associate-level certification for foundational skills, while MCSE is an expert-level certification for advanced Microsoft technology expertise." },
        { id: 6, title: "Is MCSE training available online?", description: "Yes, we offer both online and offline MCSE training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be practical labs?", description: "Yes, our training includes hands-on labs on Windows Server, Azure, and Active Directory to build practical skills." },
        { id: 8, title: "Do you offer MCSE exam preparation?", description: "Yes, we provide mock exams, sample questions, and strategies to prepare for MCSE certification exams." },
        { id: 9, title: "Can I switch to a Microsoft-focused role with MCSE?", description: "Absolutely, MCSE training is ideal for transitioning to roles like system administrator or cloud engineer." },
        { id: 10, title: "Is MCSE suitable for freshers?", description: "Yes, MCSE is a great starting point for freshers aiming for a career in IT infrastructure and cloud technologies." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">MCSE Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our MCSE course in Chennai.
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

const Mcsemain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best MCSE Training in Chennai | Practical Oriented MCSE Course";
const pageDescription = "Join IntelliMindz for MCSE certification training in Chennai. Prepare for Windows Server and network solutions.";
const pageKeywords = "mcse training in chennai, windows server course, microsoft certification, intellimindz mcse";
const ogUrl = "https://localhost:3000/mcse_training_in_chennai";
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

export default Mcsemain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};

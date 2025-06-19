import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from Experts: IoT Training by <span>Industry Professionals</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our IoT trainers are seasoned professionals with extensive experience in developing IoT solutions for smart systems. Their industry expertise ensures a practical and impactful learning journey in IoT technologies.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build expertise in IoT from sensors to cloud integration.</li>
                        <li><span className="icon">✓</span> Learn from IoT professionals with real-world project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven success in IoT training and placements.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time IoT projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="IoT Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from IoT experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on IoT training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world IoT development tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit IoT course content anytime for revision." },
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led IoT sessions from anywhere. Includes hands-on projects, real-time prototyping, and interactive Q&A.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded IoT videos. Get lifetime access to course materials and updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person IoT training in Chennai for collaborative learning with trainers and peers.", isPopular: false },
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
            <h1>Become a Skilled IoT Developer with IntelliMindz</h1>
            <p>Industry-focused IoT training to master smart devices, sensors, and cloud integration.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your IoT Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our IoT Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our IoT training equips you with expertise in building Internet of Things solutions. The curriculum covers IoT architecture, sensor integration, communication protocols (MQTT, CoAP), and cloud platforms like AWS IoT and Azure IoT.</p>
                    <p>Our course includes hands-on labs, real-time IoT projects, and interactive sessions to ensure practical mastery. You’ll work on industry-relevant scenarios like smart home systems, industrial IoT, and wearable devices.</p>
                    <p>Whether you're a beginner or a professional aiming to specialize in IoT, our training prepares you for the fast-growing IoT job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="IoT Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person or online IoT training, tailored for professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on IoT Prototyping", description: "Gain practical experience with IoT hardware (Arduino, Raspberry Pi) and cloud platforms." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World IoT Projects", description: "Work on industry-modeled IoT scenarios to enhance problem-solving and interview readiness." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert IoT Trainers", description: "Learn from professionals with extensive experience in IoT solution development." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Assessments", description: "Engage in module-wise discussions and assessments aligned with IoT interview topics." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>IoT Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to IoT", topics: ["Overview of Internet of Things", "IoT Architecture and Ecosystem", "Applications of IoT (Smart Homes, Industry 4.0)", "IoT Hardware and Software Components", "IoT Development Tools", "IoT Market Trends"] },
        { id: 2, title: "Module 2: IoT Hardware Platforms", topics: ["Introduction to Microcontrollers (Arduino, ESP32)", "Working with Raspberry Pi", "Sensors and Actuators", "Interfacing Sensors with Microcontrollers", "Power Management in IoT Devices", "Hardware Prototyping Basics"] },
        { id: 3, title: "Module 3: IoT Communication Protocols", topics: ["Overview of IoT Protocols (MQTT, CoAP, HTTP)", "MQTT Broker Setup and Messaging", "CoAP for Constrained Devices", "Wireless Technologies (Wi-Fi, Bluetooth, Zigbee)", "LPWAN (LoRa, NB-IoT)", "Protocol Selection for IoT Projects"] },
        { id: 4, title: "Module 4: IoT Programming", topics: ["Programming Arduino and ESP32", "Python for Raspberry Pi", "Embedded C for IoT Devices", "Real-Time Data Processing", "IoT Device Firmware Development", "Debugging IoT Code"] },
        { id: 5, title: "Module 5: IoT Cloud Integration", topics: ["Introduction to IoT Cloud Platforms (AWS IoT, Azure IoT)", "Device Registration and Authentication", "Data Ingestion and Storage", "Cloud-Based IoT Analytics", "Real-Time Dashboards", "Serverless Computing for IoT"] },
        { id: 6, title: "Module 6: IoT Security", topics: ["IoT Security Challenges", "Device Authentication and Encryption", "Secure Communication Protocols", "Data Privacy in IoT", "Firmware Security Best Practices", "IoT Security Tools"] },
        { id: 7, title: "Module 7: IoT Data Analytics", topics: ["IoT Data Collection and Processing", "Time-Series Data Analysis", "Edge Computing in IoT", "Machine Learning for IoT", "Visualizing IoT Data", "Predictive Maintenance Use Cases"] },
        { id: 8, title: "Module 8: Industrial IoT (IIoT)", topics: ["Overview of Industry 4.0", "IIoT Architecture", "IoT in Manufacturing and Supply Chain", "Smart Sensors for Industrial Applications", "IIoT Case Studies", "Integration with SCADA Systems"] },
        { id: 9, title: "Module 9: IoT Project Development", topics: ["End-to-End IoT Project Planning", "Smart Home Automation Project", "Wearable Device Development", "Environmental Monitoring System", "IoT Prototype Testing", "Project Documentation"] },
        { id: 10, title: "Module 10: Advanced IoT and Deployment", topics: ["IoT Scalability and Performance", "Over-the-Air (OTA) Updates", "IoT Device Management", "Deploying IoT Solutions in Production", "IoT Standards and Compliance", "Real-World IoT Case Studies"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                IoT Course Modules
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
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat-Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite IoT training", title: "Onsite Training:", description: "Conducted at your premises, offering tailored IoT training for team upskilling in smart solutions." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite IoT training center", title: "Offsite Training:", description: "Held at professional training centers for focused IoT training and prototyping." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual IoT training", title: "Virtual Instructor-Led Training (VILT):", description: "Live IoT training via platforms like Zoom, ideal for remote teams with hands-on prototyping." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for IoT in Chennai</h2>
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
        { id: 1, name: "Karthik R.", designation: "IoT Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s IoT course was exceptional. Hands-on projects with Arduino and cloud platforms were highly practical. The trainers were outstanding." },
        { id: 2, name: "Sneha M.", designation: "IoT Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered IoT protocols and cloud integration thoroughly. Real-time projects helped me transition into an IoT role confidently." },
        { id: 3, name: "Arun V.", designation: "IoT Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedules and industry-relevant projects were perfect. The IoT interview prep and mock sessions were spot-on." },
        { id: 4, name: "Priya S.", designation: "IoT Trainee", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers explained sensors and MQTT clearly, and the hands-on labs were invaluable." },
        { id: 5, name: "Vijay T.", designation: "Senior IoT Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course simplified complex topics like IoT security and IIoT. The practical projects and real-world examples added immense value." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { 
        let stars = []; 
        for (let i = 0; i < 5; i++) { 
            stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); 
        } 
        return stars; 
    };
    const formatReviewText = (text) => { return <p>{text}</p>; };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer IoT" />
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
        { id: 1, title: "What is IoT used for?", description: "IoT connects devices to enable data exchange, used in smart homes, industrial automation, healthcare, and more." },
        { id: 2, title: "Who should take this IoT training?", description: "Freshers, electronics engineers, and IT professionals interested in smart device development." },
        { id: 3, title: "Do I need prior experience to learn IoT?", description: "Basic programming or electronics knowledge is helpful, but the course is beginner-friendly." },
        { id: 4, title: "Is IoT in demand in 2025?", description: "Yes, IoT is in high demand across industries like manufacturing, healthcare, and smart cities." },
        { id: 5, title: "What’s the difference between IoT and embedded systems?", description: "IoT involves connected devices with Internet capabilities; embedded systems are standalone devices." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline IoT training with live instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll work with IoT hardware like Arduino and cloud platforms for prototyping." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and real-world IoT scenarios." },
        { id: 9, title: "Can I switch to IoT from another IT field?", description: "Yes, with basic programming skills, you can transition to IoT through our training." },
        { id: 10, title: "Is IoT suitable for freshers?", description: "Absolutely, it’s a great entry point for freshers aiming for a career in smart technologies." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">IoT Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Get answers to your questions about our IoT course in Chennai.
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
            <p className="cta-banner-text">Launch your IoT career with expert guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Iotmain = () => {
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
                <title>IoT Training in Chennai | IoT Course in Chennai</title>
                <meta name="description" content="Master IoT with our expert-led training in Chennai. Learn sensors, protocols, and cloud integration through our comprehensive IoT course." />
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

export default Iotmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
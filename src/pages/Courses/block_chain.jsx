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
          <img src={homeintro} alt="Blockchain Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Blockchain Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Blockchain Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Blockchain Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Blockchain trainers are experienced professionals with deep expertise in decentralized technologies and smart contract development. Their real-world project experience ensures a practical, job-oriented learning journey tailored to your career goals.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master blockchain from fundamentals to advanced decentralized applications.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on blockchain project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven success in blockchain training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support with resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world blockchain projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy personalized learning tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Blockchain Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from expert blockchain developers at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on blockchain training for decentralized applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on blockchain technologies and smart contracts." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access blockchain course materials anytime for revision and reinforcement." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your blockchain expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led blockchain sessions with hands-on projects, real-world applications, and interactive Q&A from anywhere." },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded videos, lifetime access to course materials, and regular content updates." },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person blockchain training with direct trainer interaction and collaborative learning." },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support." }
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
            <h1>Become a Skilled Blockchain Developer with IntelliMindz</h1>
            <p>Gain expertise in blockchain technology and smart contracts with industry-focused training for decentralized application development.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Blockchain Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Blockchain Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive blockchain training to master decentralized technologies and smart contract development. Our curriculum covers core blockchain concepts, including distributed ledgers, cryptography, Ethereum, Hyperledger, and decentralized applications (DApps).</p>
                    <p>The course includes hands-on projects, real-world blockchain applications, and practical exercises to develop job-ready skills. Learners work on industry-relevant projects, gaining confidence to tackle real-world blockchain challenges.</p>
                    <p>Whether you're a beginner or a professional looking to upskill, our blockchain training equips you with the expertise to excel in the rapidly evolving blockchain industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Blockchain Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person and online blockchain training, tailored for students, professionals, and career switchers to fit their schedules." },
        { id: 2, image: handsonsapImg, title: "Hands-on Blockchain Projects", description: "Gain practical experience with real-world blockchain projects, including smart contracts and DApps." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Blockchain Applications", description: "Work on projects like decentralized finance (DeFi) and supply chain solutions to prepare for industry challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Blockchain Trainers", description: "Learn from industry professionals with extensive experience in blockchain and decentralized technologies." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Benefit from small batches for one-on-one mentoring, ensuring personalized support and doubt resolution." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Engage in interactive discussions and assessments aligned with blockchain industry needs." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Blockchain Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Blockchain", topics: ["Overview of Blockchain Technology", "Distributed Ledger Concepts", "Cryptography Basics", "Blockchain Use Cases", "Setting Up Blockchain Environment"] },
        { id: 2, title: "Module 2: Blockchain Fundamentals", topics: ["Consensus Mechanisms (PoW, PoS)", "Public vs. Private Blockchains", "Blockchain Architecture", "Hashing and Digital Signatures", "Blockchain Security"] },
        { id: 3, title: "Module 3: Ethereum and Smart Contracts", topics: ["Introduction to Ethereum", "Solidity Programming", "Smart Contract Development", "Deploying Smart Contracts", "Interacting with Ethereum Blockchain"] },
        { id: 4, title: "Module 4: Hyperledger Framework", topics: ["Introduction to Hyperledger", "Hyperledger Fabric Setup", "Chaincode Development", "Permissioned Blockchain Networks", "Hyperledger Use Cases"] },
        { id: 5, title: "Module 5: Decentralized Applications (DApps)", topics: ["DApp Architecture", "Building DApps with Ethereum", "Web3.js Integration", "Testing and Deploying DApps", "Real-World DApp Examples"] },
        { id: 6, title: "Module 6: Blockchain for DeFi and NFTs", topics: ["Introduction to Decentralized Finance (DeFi)", "Creating NFTs on Ethereum", "Smart Contracts for DeFi", "Interacting with DeFi Protocols", "NFT Marketplace Development"] },
        { id: 7, title: "Module 7: Blockchain Scalability and Interoperability", topics: ["Layer 2 Solutions (e.g., Lightning Network)", "Cross-Chain Interoperability", "Sidechains and Sharding", "Scalability Challenges", "Interoperability Protocols"] },
        { id: 8, title: "Module 8: Real-World Blockchain Projects", topics: ["End-to-End Blockchain Project", "Supply Chain Management Project", "DeFi Application Development", "NFT-Based Project", "Project Deployment and Testing"] },
        { id: 9, title: "Module 9: Blockchain Tools and Ecosystem", topics: ["Truffle and Remix for Development", "MetaMask Integration", "IPFS for Decentralized Storage", "Blockchain Explorers", "Version Control with Git"] },
        { id: 10, title: "Module 10: Blockchain Career and Industry Insights", topics: ["Blockchain Interview Preparation", "Resume Building for Blockchain Roles", "Real-World Case Studies", "Blockchain Ethics and Regulations", "Project Capstone and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Blockchain Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate blockchain training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers tailored blockchain learning using your infrastructure for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite blockchain training center", title: "Offsite Training:", description: "Held at professional training centers, this mode ensures focused learning for blockchain certifications and team upskilling." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led blockchain training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online blockchain training via platforms like Zoom, ideal for remote teams with real-time interaction and hands-on projects." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Blockchain in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "Blockchain Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s blockchain training was outstanding. The hands-on projects in smart contracts and DApps were practical and engaging. The trainers were highly knowledgeable." },
        { id: 2, name: "Sneha R.", designation: "Blockchain Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s clear explanations and real-world projects made blockchain concepts accessible. It helped me transition into a blockchain role with confidence." },
        { id: 3, name: "Vignesh T.", designation: "Smart Contract Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedule and comprehensive curriculum were perfect. The trainers’ expertise in Ethereum and Hyperledger was invaluable for my career." },
        { id: 4, name: "Ritika S.", designation: "Blockchain Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers explained complex concepts clearly, and the projects gave me a strong start in blockchain." },
        { id: 5, name: "Ramesh A.", designation: "Senior Blockchain Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on DeFi and NFTs was a game-changer. The trainers’ industry experience made complex blockchain topics engaging and practical." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Blockchain" />
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
        { id: 1, title: "What is blockchain used for?", description: "Blockchain is used for secure, decentralized applications like cryptocurrencies, smart contracts, supply chain management, and DeFi." },
        { id: 2, title: "Who should take this blockchain training?", description: "Developers, IT professionals, and anyone interested in decentralized technologies and smart contract development." },
        { id: 3, title: "Do I need prior coding experience for blockchain?", description: "Basic programming knowledge (e.g., Python, JavaScript) is helpful, but our course starts with foundational concepts." },
        { id: 4, title: "Is blockchain relevant in 2025?", description: "Yes, blockchain is in high demand for roles in cryptocurrency, DeFi, NFTs, and enterprise solutions." },
        { id: 5, title: "What’s the difference between blockchain and Bitcoin?", description: "Blockchain is the underlying technology for decentralized ledgers, while Bitcoin is a cryptocurrency built on a blockchain." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline blockchain training with live instructor-led sessions and hands-on projects." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes real-world blockchain projects, smart contract development, and DApp creation." },
        { id: 8, title: "Do you offer job preparation support?", description: "Yes, we provide mock interviews, resume guidance, and project-based learning for blockchain roles." },
        { id: 9, title: "Can I switch to blockchain from another field?", description: "Yes, with basic programming skills, blockchain is an excellent field to transition into." },
        { id: 10, title: "Is blockchain suitable for freshers?", description: "Definitely, blockchain is beginner-friendly and a great starting point for a career in decentralized technologies." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Blockchain Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Blockchain course in Chennai.
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

const Blockchainmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Blockchain Training in Chennai | Practical Oriented Blockchain Course";
    const pageDescription = "Join IntelliMindz for top Blockchain training in Chennai. Master decentralized technologies with hands-on projects, smart contracts, and expert guidance.";
    const pageKeywords = "blockchain training in chennai, blockchain course, smart contracts training, dapps training, intellimindz";
    const ogUrl = "https://localhost:3000/blockchain_training_in_chennai";
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

export default Blockchainmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
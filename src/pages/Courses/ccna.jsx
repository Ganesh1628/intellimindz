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
                <h1 className="intro-h1">Best CCNA Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master networking fundamentals with expert-led CCNA Training – your pathway to becoming a Cisco Certified Network Associate and excelling in IT networking.</h3>
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
                    Learn from the Best: CCNA Training by <span>CCIE Certified Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our CCNA trainers are CCIE-certified professionals with over 10 years of experience in networking. With hands-on expertise in configuring Cisco routers and switches, our trainers guide you to master networking concepts and prepare for the CCNA 200-301 certification.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in routing, switching, and network security.</li>
                        <li><span className="icon">✓</span> Learn from CCIE-certified trainers with real-world experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in CCNA training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time networking projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="CCNA Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by CCIE-certified experts at our CCNA training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on skills in routing and switching." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world networking scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit CCNA course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your networking skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led CCNA sessions from anywhere. Our online training includes hands-on labs with Cisco Packet Tracer, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded CCNA video sessions. Get lifetime access to course materials, labs, and updates to stay current with networking trends.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person CCNA sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom CCNA learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled Network Engineer with IntelliMindz</h1>
            <p>Industry-relevant CCNA training to build your expertise in configuring and managing Cisco networks.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your CCNA Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our CCNA Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our CCNA Training is designed to equip learners with comprehensive knowledge and practical skills in Cisco networking. Our curriculum covers network fundamentals, routing, switching, IP connectivity, security, and automation, preparing you for the CCNA 200-301 certification exam.</p>
                    <p>The course includes interactive classes, hands-on labs using Cisco Packet Tracer, and real-time projects. By working on practical scenarios, learners gain the confidence to configure routers, switches, and troubleshoot networks in enterprise environments.</p>
                    <p>Whether you're a beginner in networking or an IT professional aiming to earn Cisco certification, our training provides the skills to excel in the competitive networking job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="CCNA Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual CCNA training, ensuring accessibility for working professionals, students, and job seekers. Choose the format that suits your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-on Networking Labs", description: "Our training emphasizes practical experience with dedicated labs using Cisco Packet Tracer, allowing you to configure routers, switches, and troubleshoot networks." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Networking Projects", description: "Work on case studies modeled after actual networking projects to enhance your problem-solving skills and prepare for real-world IT challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert CCNA Trainers", description: "Learn from CCIE-certified professionals with extensive experience in Cisco networking across industries, ensuring expert guidance." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Our limited batch sizes ensure personalized mentoring, addressing individual queries and providing focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions and assessments aligned with CCNA exam requirements, helping you retain knowledge and prepare for certification." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>CCNA Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Network Fundamentals", topics: ["OSI and TCP/IP Models", "Network Topologies and Components", "Ethernet and Cabling Standards", "IP Addressing and Subnetting", "Introduction to Cisco IOS"] },
        { id: 2, title: "Module 2: Network Access", topics: ["VLAN Configuration and Verification", "Interswitch Connectivity", "Layer 2 Protocols (STP, EtherChannel)", "Cisco Wireless Architectures", "Access Point Modes"] },
        { id: 3, title: "Module 3: IP Connectivity", topics: ["Routing Concepts and Tables", "Static Routing Configuration", "Dynamic Routing (OSPF, EIGRP)", "IPv6 Addressing and Routing", "First Hop Redundancy Protocols"] },
        { id: 4, title: "Module 4: IP Services", topics: ["NAT and PAT Configuration", "DHCP Server and Client Setup", "DNS and NTP Configuration", "Syslog and SNMP Monitoring", "Quality of Service (QoS) Basics"] },
        { id: 5, title: "Module 5: Security Fundamentals", topics: ["Access Control Lists (ACLs)", "Port Security and VLAN Security", "AAA Authentication", "VPN and IPsec Basics", "Threat Mitigation Techniques"] },
        { id: 6, title: "Module 6: Automation and Programmability", topics: ["Network Automation Concepts", "REST APIs and JSON", "Cisco DNA Center Overview", "Configuration Management Tools", "Software-Defined Networking (SDN)"] },
        { id: 7, title: "Module 7: Router and Switch Configuration", topics: ["Router Interface Configuration", "Switch Port Configuration", "Basic Commands and Modes", "Backup and Restore Configurations", "Troubleshooting Connectivity Issues"] },
        { id: 8, title: "Module 8: Subnetting and VLSM", topics: ["Classful and Classless Addressing", "Variable Length Subnet Masking (VLSM)", "Subnetting Practice Scenarios", "IPv4 and IPv6 Subnetting", "Supernetting Concepts"] },
        { id: 9, title: "Module 9: Real-World CCNA Projects", topics: ["Designing Small to Medium Networks", "Configuring LAN and WAN Connections", "Troubleshooting Network Issues", "Implementing Security Policies", "Project Presentation and Review"] },
        { id: 10, title: "Module 10: CCNA Exam Preparation", topics: ["CCNA 200-301 Exam Blueprint", "Mock Exams and Practice Questions", "Resume Building for Networking Roles", "Interview Preparation for CCNA Jobs", "Cisco Certification Guidance"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                CCNA Course Modules
                <span className="java-title-underline"></span>
            </h2>
            <div className="java-course-layout-container">
                <div className="java-syllabus-modules-panel">
                    <div className="java-syllabus-header">Course Syllabus</div>
                    <ul className="java-modules-list">
                        {allModulesData.map((module) => (
                            <li key={module.id} className={`java-module-item ${module.id === activeModuleId ? 'java-active-module' : ''}`} onClick={() => setActiveModuleId(module.id)}>
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
                                {batch.suitability.map((sText, sIndex) => (
                                    <p key={sIndex} className="suitability-text">{sText}</p>
                                ))}
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate CCNA training", title: "Onsite Training:", description: "Conducted at your premises, this CCNA training offers a tailored experience using your Cisco equipment, ideal for upskilling teams in networking." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite CCNA training center", title: "Offsite Training:", description: "Held at professional training venues, this CCNA training provides a focused environment for hands-on router and switch configuration." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led CCNA training", title: "Virtual Instructor-Led Training:", description: "Delivered live via online platforms, this CCNA training is perfect for remote teams, combining flexibility with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for CCNA in Chennai</h2>
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
        { id: 1, name: "Arun S.", designation: "Network Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s CCNA training was exceptional. The hands-on labs with Cisco Packet Tracer and real-world projects helped me pass the CCNA exam with confidence." },
        { id: 2, name: "Sneha K.", designation: "Network Administrator", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The CCNA course was practical and well-structured. The trainers’ expertise in routing and switching made complex topics easy to understand, aiding my career transition." },
        { id: 3, name: "Vikram R.", designation: "Network Support Specialist", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s CCNA training was a turning point. The mock interviews and project work were key to landing my job. Flexible batches were very convenient." },
        { id: 4, name: "Lakshmi P.", designation: "CCNA Trainee", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the CCNA course was easy to follow. The trainers explained networking concepts clearly, helping me kickstart my career in IT networking." },
        { id: 5, name: "Ravi M.", designation: "Senior Network Engineer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The CCNA course covered advanced topics like automation and security. The practical labs and trainer insights were invaluable for my professional growth." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer CCNA" />
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
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
        { id: 1, title: "What is CCNA Certification?", description: "CCNA (Cisco Certified Network Associate) is a globally recognized certification that validates skills in installing, configuring, and troubleshooting medium-sized networks." },
        { id: 2, title: "Who can take CCNA training?", description: "Freshers, IT graduates, system administrators, and anyone interested in networking or transitioning to an IT career can join CCNA training." },
        { id: 3, title: "Do I need prior experience for CCNA?", description: "No formal prerequisites are required, but basic computer and IT knowledge is beneficial. Our course starts from networking fundamentals." },
        { id: 4, title: "Is CCNA certification in demand in 2025?", description: "Yes, CCNA-certified professionals are highly demanded in IT for roles like network engineer, with opportunities in MNCs in Chennai and globally." },
        { id: 5, title: "What tools are used in CCNA training?", description: "We use Cisco Packet Tracer for hands-on labs, along with real Cisco devices for practical configuration and troubleshooting." },
        { id: 6, title: "Is CCNA training available online?", description: "Yes, we offer both online and offline CCNA training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be practical labs in CCNA training?", description: "Yes, our training includes extensive labs for configuring routers, switches, and implementing security using Cisco tools." },
        { id: 8, title: "Do you offer CCNA exam preparation?", description: "Yes, we provide mock exams, practice questions, and guidance to pass the CCNA 200-301 certification exam." },
        { id: 9, title: "Can I switch to networking with CCNA?", description: "Absolutely. CCNA is an excellent entry point for transitioning to networking roles like network engineer or administrator." },
        { id: 10, title: "How long does CCNA training take?", description: "Our CCNA course typically lasts 3 months, with flexible schedules for weekdays, weekends, plus fast-track options." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">CCNA Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get answers to your questions about our CCNA training in Chennai.
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
            <p className="cta-banner-text">Navigate your career ambitions with our expert CCNA guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Ccnamain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best CCNA Training in Chennai | Practical Oriented CCNA Course";
const pageDescription = "Join IntelliMindz for expert-led CCNA training in Chennai. Get certified with real-world networking labs.";
const pageKeywords = "ccna training in chennai, ccna certification, networking course, intellimindz ccna";
const ogUrl = "https://localhost:3000/ccna_training_in_chennai";
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

export default Ccnamain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
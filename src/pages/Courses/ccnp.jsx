import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (unchanged)
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets
import ccnphomeintro1 from '../../assests/images/saphomeintro1.png';
import homeintro from '../../assests/images/saphomeintro1.png';
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutccnpImg from '../../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../../assests/images/Classroom_training.jpeg';
import handsonccnpImg from '../../assests/images/handsonsap.jpeg';
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
                    Learn from the Best: CCNP Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our CCNP trainers are seasoned professionals with extensive experience in designing and managing enterprise networks using Cisco technologies. With hands-on expertise in real-world networking projects, our trainers provide practical insights to guide your CCNP learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in CCNP and advance to expert-level networking skills.</li>
                        <li><span className="icon">✓</span> Learn from working network engineers with real-time Cisco project experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz's proven expertise in CCNP training and student success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time networking scenarios and practical labs to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={ccnphomeintro1} alt="CCNP Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by CCNP experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a CCNP training center that emphasizes hands-on Cisco networking skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world Cisco network configuration tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key CCNP concepts and course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your CCNP knowledge." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led CCNP sessions from anywhere. Our online training includes hands-on Cisco labs, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded CCNP video sessions. Get lifetime access to course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person CCNP sessions for an immersive learning experience. Ideal for collaborative learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Switch between formats based on your convenience, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled CCNP Professional with IntelliMindz</h1>
            <p>Industry-relevant CCNP training to build expertise in designing and managing enterprise Cisco networks.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your CCNP Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our CCNP Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz’s CCNP Training in Chennai is designed to provide hands-on expertise in Cisco Certified Network Professional (CCNP) Enterprise certification, enabling learners to design, implement, and troubleshoot advanced enterprise networks. Our curriculum covers core CCNP concepts like routing, switching, automation, and security, ensuring comprehensive skill development.</p>
                    <p>The course includes interactive classes, live Cisco lab sessions, practical exercises, and real-world networking projects. By working on industry-relevant scenarios, learners gain the confidence to handle CCNP tasks in enterprise environments.</p>
                    <p>Whether you’re a network engineer aiming for CCNP certification or a professional seeking to enhance your Cisco networking skills, our training equips you with practical mastery to excel in the competitive networking job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutccnpImg} alt="CCNP Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for working professionals, students, and job seekers." },
        { id: 2, image: handsonccnpImg, title: "Hands-on Practical Sessions with Cisco Labs", description: "Gain practical experience with dedicated Cisco lab access, allowing you to configure, test, and troubleshoot enterprise networks." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work on case studies modeled after real networking projects to enhance problem-solving skills and prepare for CCNP exam questions." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth CCNP Experience", description: "Learn from industry professionals with extensive experience in CCNP and Cisco network implementations across various domains." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Limited batch sizes ensure personalized mentoring, prompt doubt resolution, and focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Engage in interactive discussions and assessments aligned with CCNP exam requirements to reinforce learning and prepare for certification." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>CCNP Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to CCNP Enterprise", topics: ["Overview of CCNP Certification", "CCNP Enterprise Exam Structure", "Cisco Enterprise Network Architecture", "Introduction to Cisco IOS", "Lab Setup and Tools"] },
        { id: 2, title: "Module 2: Advanced Routing Protocols", topics: ["OSPF Configuration and Optimization", "EIGRP Configuration and Troubleshooting", "BGP Fundamentals and Implementation", "Route Redistribution", "Policy-Based Routing"] },
        { id: 3, title: "Module 3: Switching Technologies", topics: ["VLANs and Trunking", "Spanning Tree Protocol (STP)", "EtherChannel Configuration", "Layer 2 Security Features", "High Availability with HSRP/VRRP"] },
        { id: 4, title: "Module 4: Network Automation", topics: ["Introduction to Network Automation", "Python for Network Engineers", "Cisco DNA Center Overview", "REST APIs and NETCONF", "Ansible for Network Automation"] },
        { id: 5, title: "Module 5: Network Security", topics: ["Access Control Lists (ACLs)", "Port Security and DHCP Snooping", "IPsec VPN Configuration", "Cisco Firepower Overview", "AAA with RADIUS/TACACS+"] },
        { id: 6, title: "Module 6: SD-WAN and Enterprise Networks", topics: ["Cisco SD-WAN Architecture", "vManage and vSmart Configuration", "Overlay and Underlay Networks", "QoS in Enterprise Networks", "SD-WAN Security"] },
        { id: 7, title: "Module 7: Wireless Networking", topics: ["Cisco Wireless LAN Controller (WLC)", "Access Point Deployment", "WLAN Security (WPA2/WPA3)", "Guest Wi-Fi Configuration", "Wireless Troubleshooting"] },
        { id: 8, title: "Module 8: Network Troubleshooting", topics: ["Troubleshooting Methodologies", "Using Debug and Logging", "Packet Capture with Wireshark", "Troubleshooting Routing and Switching Issues", "End-to-End Connectivity Issues"] },
        { id: 9, title: "Module 9: Advanced Services", topics: ["Multicast Routing with PIM", "Network Address Translation (NAT)", "MPLS Fundamentals", "DMVPN Configuration", "IPv6 Implementation"] },
        { id: 10, title: "Module 10: CCNP Project and Exam Prep", topics: ["End-to-End Network Design Project", "Real-World Case Study", "CCNP Core and Concentration Exam Strategies", "Mock Exams and Practice Labs", "Project Review and Certification Guidance"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                CCNP Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate CCNP training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored environment for upskilling teams in CCNP network configuration." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite CCNP training center", title: "Offsite Training:", description: "Held at professional training centers, ideal for focused CCNP learning without workplace distractions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led CCNP training", title: "Virtual Instructor-Led Training (VILT):", description: "Live CCNP training via Zoom or Teams, perfect for remote teams with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for CCNP in Chennai</h2>
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
        { id: 1, name: "Karthik R.", designation: "Network Engineer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s CCNP course was exceptional. The hands-on Cisco lab sessions and real-world scenarios greatly enhanced my networking skills." },
        { id: 2, name: "Ananya S.", designation: "Network Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers explained routing protocols and automation clearly. The practical labs prepared me for real network challenges. Highly recommended!" },
        { id: 3, name: "Vignesh M.", designation: "Senior Network Engineer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible batch schedule and in-depth CCNP content were perfect for my work life. The exam prep was spot-on." },
        { id: 4, name: "Pooja K.", designation: "CCNP Trainee", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the CCNP course very beginner-friendly. The trainers provided excellent support, making complex Cisco concepts easy." },
        { id: 5, name: "Ravi T.", designation: "Network Architect", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s depth on SD-WAN and security added immense value to my CCNP expertise. Great learning experience!" }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer CCNP" />
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
        { id: 1, title: "What is CCNP certification used for?", description: "CCNP certification validates advanced skills in designing, implementing, and troubleshooting enterprise Cisco networks, enhancing career prospects in networking." },
        { id: 2, title: "Who should take this CCNP training?", description: "Network engineers, system administrators, IT professionals, and anyone aiming for CCNP Enterprise certification." },
        { id: 3, title: "Do I need prior Cisco knowledge to learn CCNP?", description: "CCNA-level knowledge or equivalent networking experience is recommended, but our course covers foundational concepts." },
        { id: 4, title: "Is CCNP in demand in 2025?", description: "Yes, CCNP remains highly valued for professionals managing enterprise networks, especially with Cisco’s market dominance." },
        { id: 5, title: "How does CCNP differ from CCNA?", description: "CCNP is an advanced certification focusing on enterprise networks, while CCNA covers foundational networking concepts." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline CCNP training with live instructor-led sessions and hands-on Cisco labs." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get live access to Cisco labs for configuring routers, switches, and troubleshooting network issues." },
        { id: 8, title: "Do you provide CCNP exam preparation?", description: "Yes, we include mock exams, practice labs, and exam strategies to prepare you for CCNP certification." },
        { id: 9, title: "Can I switch to CCNP from another IT field?", description: "Yes, with basic networking knowledge, CCNP is a great step into advanced Cisco networking roles." },
        { id: 10, title: "Is CCNP useful for freshers?", description: "Yes, CCNP is valuable for freshers with CCNA knowledge aiming for advanced networking roles." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">CCNP Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our CCNP course in Chennai.
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

const Ccnpmain = () => {
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
                <title>CCNP Training in Chennai | CCNP Course in Chennai</title>
                <meta name="description" content="Master advanced Cisco networking with our CCNP Training in Chennai. Learn to design and manage enterprise networks through our expert-led CCNP course." />
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

export default Ccnpmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
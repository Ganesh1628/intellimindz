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
import openstackhomeintro1 from '../../assests/images/saphomeintro1.png';
import homeintro from '../../assests/images/saphomeintro1.png';
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutopenstackImg from '../../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../../assests/images/Classroom_training.jpeg';
import handsonopenstackImg from '../../assests/images/handsonsap.jpeg';
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
                    Learn from the Best: OpenStack Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our OpenStack trainers are seasoned professionals with extensive experience in deploying and managing cloud infrastructures using OpenStack. With hands-on expertise in real-world cloud projects, our trainers provide practical insights to guide your OpenStack learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in OpenStack and advance to expert-level cloud management skills.</li>
                        <li><span className="icon">✓</span> Learn from working cloud architects with real-time OpenStack project experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz's proven expertise in OpenStack training and student success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time cloud scenarios and practical assignments to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={openstackhomeintro1} alt="OpenStack Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by OpenStack experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an OpenStack training center that emphasizes hands-on cloud deployment skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world OpenStack cloud management tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key OpenStack concepts and course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your OpenStack knowledge." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led OpenStack sessions from anywhere. Our online training includes hands-on cloud deployment, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded OpenStack video sessions. Get lifetime access to course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person OpenStack sessions for an immersive learning experience. Ideal for collaborative learning with direct trainer and peer interaction.", isPopular: false },
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
            <h1>Become a Skilled OpenStack Administrator with IntelliMindz</h1>
            <p>Industry-relevant OpenStack training to build expertise in designing and managing cloud infrastructures.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your OpenStack Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our OpenStack Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz’s OpenStack Training in Chennai is designed to provide hands-on expertise in OpenStack, enabling learners to deploy and manage scalable cloud infrastructures. Our curriculum covers core OpenStack concepts like compute (Nova), networking (Neutron), storage (Cinder, Swift), and orchestration, ensuring comprehensive skill development.</p>
                    <p>The course includes interactive classes, live cloud deployment sessions, practical exercises, and real-world cloud projects. By working on industry-relevant scenarios, learners gain the confidence to handle OpenStack tasks in enterprise environments.</p>
                    <p>Whether you’re a beginner entering the cloud computing field or a professional aiming to enhance your OpenStack skills, our training equips you with practical mastery to excel in the competitive cloud job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutopenstackImg} alt="OpenStack Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for working professionals, students, and job seekers." },
        { id: 2, image: handsonopenstackImg, title: "Hands-on Practical Sessions with OpenStack Access", description: "Gain practical experience with dedicated OpenStack access, allowing you to deploy, test, and manage cloud infrastructures in a real environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work on case studies modeled after real cloud projects to enhance problem-solving skills and prepare for OpenStack interview questions." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth OpenStack Experience", description: "Learn from industry professionals with extensive experience in OpenStack and cloud project implementations across various domains." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Limited batch sizes ensure personalized mentoring, prompt doubt resolution, and focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Engage in interactive discussions and assessments aligned with industry requirements to reinforce learning and prepare for interviews." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>OpenStack Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to OpenStack", topics: ["Overview of Cloud Computing", "Introduction to OpenStack", "OpenStack Architecture and Components", "Installation and Setup", "OpenStack Dashboard (Horizon)"] },
        { id: 2, title: "Module 2: Compute Service (Nova)", topics: ["Nova Architecture and Concepts", "Managing Instances", "Flavors and Images", "Key Pairs and Security Groups", "Compute Node Configuration"] },
        { id: 3, title: "Module 3: Networking (Neutron)", topics: ["Neutron Architecture", "Creating and Managing Networks", "Subnets and Routers", "Floating IPs and Load Balancers", "Network Troubleshooting"] },
        { id: 4, title: "Module 4: Storage Services", topics: ["Block Storage (Cinder)", "Object Storage (Swift)", "Volume Management", "Backup and Snapshots", "Storage Integration"] },
        { id: 5, title: "Module 5: Identity Service (Keystone)", topics: ["Keystone Architecture", "User and Role Management", "Authentication and Authorization", "Tokens and Policies", "Federated Identity"] },
        { id: 6, title: "Module 6: Orchestration (Heat)", topics: ["Introduction to Heat", "Creating and Managing Stacks", "Heat Templates (HOT)", "Auto-Scaling with Heat", "Orchestration Use Cases"] },
        { id: 7, title: "Module 7: OpenStack Administration", topics: ["Deploying OpenStack Environments", "Managing Services and Nodes", "High Availability Setup", "Monitoring and Logging", "Backup and Recovery"] },
        { id: 8, title: "Module 8: Security in OpenStack", topics: ["Security Best Practices", "Securing OpenStack Services", "Role-Based Access Control (RBAC)", "Network Security with Neutron", "Auditing and Compliance"] },
        { id: 9, title: "Module 9: Integration and Automation", topics: ["OpenStack APIs", "Automating Tasks with CLI and APIs", "Integration with DevOps Tools", "Container Integration (Magnum)", "CI/CD with OpenStack"] },
        { id: 10, title: "Module 10: Real-Time OpenStack Project", topics: ["End-to-End Cloud Deployment", "Building a Scalable Cloud Infrastructure", "Performance Optimization", "Real-World Case Study", "Project Deployment and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                OpenStack Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate OpenStack training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored environment for upskilling teams in OpenStack cloud deployment." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite OpenStack training center", title: "Offsite Training:", description: "Held at professional training centers, ideal for focused OpenStack learning without workplace distractions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led OpenStack training", title: "Virtual Instructor-Led Training (VILT):", description: "Live OpenStack training via Zoom or Teams, perfect for remote teams with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for OpenStack in Chennai</h2>
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
        { id: 1, name: "Vikram S.", designation: "Cloud Engineer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s OpenStack course was outstanding. The hands-on cloud deployment sessions and real-world scenarios greatly enhanced my skills." },
        { id: 2, name: "Priya N.", designation: "Cloud Administrator", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers explained OpenStack components like Nova and Neutron clearly. The practical projects prepared me for real cloud challenges." },
        { id: 3, name: "Arun K.", designation: "DevOps Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible batch schedule and in-depth OpenStack content were perfect for my work life. The interview prep was spot-on." },
        { id: 4, name: "Lakshmi R.", designation: "OpenStack Trainee", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the OpenStack course very beginner-friendly. The trainers provided excellent support, making complex cloud concepts easy." },
        { id: 5, name: "Suresh M.", designation: "Senior Cloud Architect", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s depth on orchestration and security added immense value to my OpenStack expertise. Great learning experience!" }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer OpenStack" />
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
        { id: 1, title: "What is OpenStack used for?", description: "OpenStack is an open-source platform for building and managing private and public cloud infrastructures, enabling scalable compute, storage, and networking services." },
        { id: 2, title: "Who should take this OpenStack training?", description: "System administrators, cloud engineers, DevOps professionals, and anyone interested in managing cloud infrastructures." },
        { id: 3, title: "Do I need prior cloud knowledge to learn OpenStack?", description: "Basic knowledge of Linux and networking is helpful, but our course starts from scratch for beginners." },
        { id: 4, title: "Is OpenStack in demand in 2025?", description: "Yes, OpenStack remains in demand for organizations building private clouds and hybrid cloud solutions." },
        { id: 5, title: "How does OpenStack differ from AWS?", description: "OpenStack is an open-source platform for on-premises cloud management, while AWS is a public cloud provider with managed services." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline OpenStack training with live instructor-led sessions and hands-on access." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get live access to OpenStack for deploying clouds, managing services, and working on real projects." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we include mock interviews, resume tips, and real-world cloud scenarios to prepare you for jobs." },
        { id: 9, title: "Can I switch to OpenStack from another IT field?", description: "Yes, with basic system administration skills, OpenStack is a great entry into cloud computing." },
        { id: 10, title: "Is OpenStack useful for freshers?", description: "Absolutely, OpenStack is a valuable skill for freshers aiming to start a career in cloud computing." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">OpenStack Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our OpenStack course in Chennai.
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

const Openstackmain = () => {
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
                <title>OpenStack Training in Chennai | OpenStack Course in Chennai</title>
                <meta name="description" content="Master cloud computing with our OpenStack Training in Chennai. Learn to deploy and manage cloud infrastructures through our expert-led OpenStack course." />
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

export default Openstackmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
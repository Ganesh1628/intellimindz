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
import ssashomeintro1 from '../../assests/images/saphomeintro1.png';
import homeintro from '../../assests/images/saphomeintro1.png';
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutssasImg from '../../assests/images/aboutsapfico.jpeg';
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
                    Learn from the Best: SSAS Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SSAS trainers are seasoned professionals with extensive experience in building business intelligence solutions using Microsoft SQL Server Analysis Services. With hands-on expertise in real-world BI projects, our trainers provide practical insights to guide your SSAS learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in SSAS and advance to expert-level BI concepts.</li>
                        <li><span className="icon">✓</span> Learn from working BI consultants with real-time project experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz's proven expertise in SSAS training and student success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time BI scenarios and practical assignments to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={ssashomeintro1} alt="SSAS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by SSAS experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an SSAS training center that emphasizes hands-on BI skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SSAS cube development tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key SSAS concepts and course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your SSAS knowledge." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led SSAS sessions from anywhere. Our online training includes hands-on cube development, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded SSAS video sessions. Get lifetime access to course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person SSAS sessions for an immersive learning experience. Ideal for collaborative learning with direct trainer and peer interaction.", isPopular: false },
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
            <h1>Become a Skilled SSAS Developer with IntelliMindz</h1>
            <p>Industry-relevant SSAS training to build expertise in designing and deploying business intelligence solutions.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SSAS Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SSAS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz’s SSAS Training in Chennai is designed to provide hands-on expertise in Microsoft SQL Server Analysis Services, enabling learners to create robust BI solutions. Our curriculum covers core SSAS concepts like multidimensional modeling, cube design, MDX queries, and data mining, ensuring comprehensive skill development.</p>
                    <p>The course includes interactive classes, live cube-building sessions, practical exercises, and real-world BI projects. By working on industry-relevant scenarios, learners gain the confidence to handle SSAS tasks in enterprise environments.</p>
                    <p>Whether you’re a beginner entering the BI field or a professional aiming to enhance your SSAS skills, our training equips you with practical mastery to excel in the competitive data analytics job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutssasImg} alt="SSAS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for working professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SSAS Access", description: "Gain practical experience with dedicated SSAS system access, allowing you to design, test, and deploy cubes in a real BI environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work on case studies modeled after real BI projects to enhance problem-solving skills and prepare for SSAS interview questions." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SSAS Experience", description: "Learn from industry professionals with extensive experience in SSAS and BI project implementations across various domains." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Limited batch sizes ensure personalized mentoring, prompt doubt resolution, and focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Engage in interactive discussions and assessments aligned with industry requirements to reinforce learning and prepare for interviews." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SSAS Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to SSAS", topics: ["Overview of Business Intelligence", "Introduction to SSAS and Its Role", "SQL Server Data Tools (SSDT)", "SSAS Architecture", "OLAP vs. OLTP Concepts", "Installation and Configuration"] },
        { id: 2, title: "Module 2: Data Sources and Data Source Views", topics: ["Creating Data Sources", "Data Source Views (DSV)", "Named Calculations and Queries", "Managing Relationships in DSV", "Data Source Security"] },
        { id: 3, title: "Module 3: Building Cubes", topics: ["Cube Wizard and Cube Structure", "Dimensions and Hierarchies", "Measures and Measure Groups", "Cube Storage Modes (MOLAP, ROLAP, HOLAP)", "Partitioning and Aggregations"] },
        { id: 4, title: "Module 4: MDX Fundamentals", topics: ["Introduction to MDX", "MDX Queries and Expressions", "Calculated Members", "Named Sets", "MDX Functions and Scripts"] },
        { id: 5, title: "Module 5: Dimension Design", topics: ["Dimension Types (Regular, Time, etc.)", "Attribute Relationships", "Hierarchies and Levels", "Slowly Changing Dimensions", "Dimension Usage in Cubes"] },
        { id: 6, title: "Module 6: Advanced Cube Features", topics: ["Key Performance Indicators (KPIs)", "Actions and Drillthrough", "Perspectives", "Translations", "Role-Based Security"] },
        { id: 7, title: "Module 7: Data Mining in SSAS", topics: ["Introduction to Data Mining", "Data Mining Algorithms", "Creating and Training Mining Models", "DMX Queries", "Integration with SSRS and Power BI"] },
        { id: 8, title: "Module 8: SSAS Administration", topics: ["Deploying SSAS Databases", "Processing Cubes and Dimensions", "Backup and Restore", "Performance Tuning", "Monitoring and Logging"] },
        { id: 9, title: "Module 9: Integration with Other Tools", topics: ["SSAS with SSRS (Reporting Services)", "SSAS with Power BI", "Excel Pivot Tables with SSAS", "Integration with SQL Server", "Automating SSAS Tasks"] },
        { id: 10, title: "Module 10: Real-Time SSAS Project", topics: ["End-to-End Cube Development", "Building a BI Solution", "Performance Optimization", "Real-World Case Study", "Project Deployment and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SSAS Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate SSAS training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored environment for upskilling teams in SSAS cube development." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite SSAS training center", title: "Offsite Training:", description: "Held at professional training centers, ideal for focused SSAS learning without workplace distractions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led SSAS training", title: "Virtual Instructor-Led Training (VILT):", description: "Live SSAS training via Zoom or Teams, perfect for remote teams with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SSAS in Chennai</h2>
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
        { id: 1, name: "Karthik V.", designation: "BI Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s SSAS course was well-structured. The hands-on cube-building sessions and real-world scenarios helped me master BI concepts effectively." },
        { id: 2, name: "Priya S.", designation: "Data Analyst", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers explained MDX and cube design clearly. The practical projects prepared me for real BI challenges. Highly recommend!" },
        { id: 3, name: "Suresh M.", designation: "BI Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible batch schedule and detailed SSAS content were perfect for my busy work life. The interview prep was spot-on." },
        { id: 4, name: "Anitha R.", designation: "SSAS Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the SSAS course beginner-friendly. The trainers provided excellent support, making complex BI concepts easy to understand." },
        { id: 5, name: "Vijay K.", designation: "Senior BI Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The depth of the SSAS course, especially on data mining and cube optimization, added immense value to my BI expertise." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer SSAS" />
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
        { id: 1, title: "What is SSAS used for?", description: "SSAS is used to create multidimensional data models and cubes for business intelligence, enabling fast analysis of large datasets." },
        { id: 2, title: "Who should take this SSAS training?", description: "Data analysts, BI developers, database professionals, and anyone interested in building BI solutions." },
        { id: 3, title: "Do I need prior BI knowledge to learn SSAS?", description: "Basic knowledge of SQL and databases is helpful, but our course starts from scratch for beginners." },
        { id: 4, title: "Is SSAS in demand in 2025?", description: "Yes, SSAS remains critical for organizations leveraging Microsoft BI solutions for data analytics." },
        { id: 5, title: "How does SSAS differ from SSRS?", description: "SSAS focuses on multidimensional data modeling, while SSRS is used for reporting and visualization." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline SSAS training with live instructor-led sessions and hands-on access." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll get live access to SSAS for building cubes, writing MDX queries, and working on real projects." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we include mock interviews, resume tips, and real-world BI scenarios to prepare you for jobs." },
        { id: 9, title: "Can I switch to SSAS from another IT field?", description: "Yes, with basic database knowledge, SSAS is a great entry into the BI domain." },
        { id: 10, title: "Is SSAS useful for freshers?", description: "Absolutely, SSAS is a valuable skill for freshers aiming to start a career in business intelligence." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SSAS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SSAS course in Chennai.
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

const Ssasmain = () => {
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
                <title>SSAS Training in Chennai | SSAS Course in Chennai</title>
                <meta name="description" content="Master business intelligence with our SSAS Training in Chennai. Learn to design and deploy cubes through our expert-led SSAS course in Chennai." />
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

export default Ssasmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
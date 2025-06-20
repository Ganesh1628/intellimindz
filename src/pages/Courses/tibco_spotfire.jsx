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
          <img src={homeintro} alt="Tibco SpotFire Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Tibco SpotFire Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Tibco SpotFire Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: TIBCO Spotfire Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our TIBCO Spotfire trainers are industry professionals with extensive experience in data analytics, visualization, and business intelligence. With hands-on expertise in real-world projects, they provide practical insights to guide your TIBCO Spotfire learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in TIBCO Spotfire for data visualization and analytics.</li>
                        <li><span className="icon">✓</span> Learn from practicing TIBCO Spotfire professionals with real-time project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven expertise in delivering successful TIBCO Spotfire training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world data analytics scenarios to gain job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="TIBCO Spotfire Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from TIBCO Spotfire experts at our premier training centre in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a TIBCO Spotfire training centre near you with a focus on practical analytics skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world TIBCO Spotfire visualization tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access TIBCO Spotfire course materials anytime for continuous learning." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your TIBCO Spotfire expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led TIBCO Spotfire sessions from anywhere with hands-on analytics exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn TIBCO Spotfire at your convenience with pre-recorded videos. Get lifetime access to course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in immersive in-person TIBCO Spotfire sessions for a focused learning experience. Ideal for collaborative learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Switch between formats based on your needs, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled TIBCO Spotfire Analyst with IntelliMindz</h1>
            <p>Master industry-relevant TIBCO Spotfire skills for efficient data analytics, visualization, and business intelligence solutions.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your TIBCO Spotfire Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our TIBCO Spotfire Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive TIBCO Spotfire training designed to provide both theoretical knowledge and hands-on expertise in data analytics and visualization. Our curriculum covers key Spotfire features such as data wrangling, interactive dashboards, predictive analytics, and integration with data sources like SQL, Excel, and cloud platforms.</p>
                    <p>The course includes interactive classes, live dashboard-building sessions, practical exercises, and real-world analytics projects. By working on industry-relevant scenarios, learners gain the skills and confidence to create impactful visualizations and drive business decisions.</p>
                    <p>Whether you're a beginner in data analytics or a professional aiming to enhance your TIBCO Spotfire skills, our training equips you with the expertise to excel in the competitive business intelligence job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="TIBCO Spotfire Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose from in-person classroom sessions or flexible online learning, making TIBCO Spotfire training accessible to working professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practice with TIBCO Spotfire", description: "Gain hands-on experience with Spotfire dashboard creation, data wrangling, and predictive analytics. Build job-ready skills through practical visualizations." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Time Analytics Case Studies", description: "Work on case studies modeled after real-world TIBCO Spotfire projects. These exercises enhance problem-solving and prepare you for analytics challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with Extensive Spotfire Experience", description: "Learn from industry experts with years of experience in TIBCO Spotfire projects. Our trainers provide practical insights, best practices, and mentorship." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Focused Learning", description: "Our limited batch sizes ensure personalized mentoring, allowing trainers to address queries and provide tailored support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and hands-on labs aligned with TIBCO Spotfire certification topics, helping you prepare for job interviews." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>TIBCO Spotfire Training in Chennai Key Features</h2>
            <div className="sap-fico-features-grid">
                {features.map((item) => (
                    <div key={item.id} className="feature-card">
                        <div className="feature-icon-placeholder">
                            {item.image ? (<img src={item.image} alt={item.title} />) : (item.iconPlaceholder)}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to TIBCO Spotfire", topics: ["Overview of TIBCO Spotfire", "Spotfire Architecture and Components", "Installation and Setup of Spotfire", "Navigating Spotfire Interface", "Understanding Data Visualization Concepts", "Key Spotfire Terminologies"] },
        { id: 2, title: "Module 2: Data Connections and Wrangling", topics: ["Connecting to Data Sources (SQL, Excel, Cloud)", "Importing and Managing Data", "Data Wrangling and Transformations", "Creating Calculated Columns", "Handling Missing Data", "Data Relationships and Joins"] },
        { id: 3, title: "Module 3: Creating Visualizations", topics: ["Building Basic Visualizations (Bar, Line, Pie)", "Customizing Charts and Graphs", "Using Filters and Hierarchies", "Creating Interactive Dashboards", "Working with Maps and Geospatial Data", "Best Practices for Visualization Design"] },
        { id: 4, title: "Module 4: Advanced Visualizations", topics: ["Creating Complex Visualizations", "Using Cross Tables and Heatmaps", "Implementing Dynamic Visuals with Properties", "Custom Expressions and Calculations", "Drill-Down and Details-on-Demand", "Visualization Optimization Techniques"] },
        { id: 5, title: "Module 5: Predictive Analytics in Spotfire", topics: ["Introduction to Predictive Analytics", "Using Spotfire’s Statistical Tools", "Building Regression Models", "Forecasting and Trend Analysis", "Integrating R and Python Scripts", "Interpreting Predictive Results"] },
        { id: 6, title: "Module 6: Spotfire Administration", topics: ["Managing Users and Permissions", "Configuring Spotfire Server", "Deploying Dashboards to Web Player", "Scheduling Data Refresh", "Monitoring Spotfire Performance", "Backup and Restore Strategies"] },
        { id: 7, title: "Module 7: Data Integration and Automation", topics: ["Integrating with ETL Tools", "Automating Data Loads with TIBCO Cloud", "Using Spotfire APIs for Automation", "Connecting to Big Data Platforms (Hadoop, Spark)", "Real-Time Data Streaming", "Error Handling in Data Pipelines"] },
        { id: 8, title: "Module 8: Spotfire in Cloud Environments", topics: ["Deploying Spotfire on AWS, Azure, and GCP", "Managing Spotfire in Cloud", "Configuring Scalability in Cloud", "Cloud-Based Collaboration Features", "Cost Optimization for Cloud Deployments", "Security in Cloud-Based Spotfire"] },
        { id: 9, title: "Module 9: TIBCO Spotfire Certification Preparation", topics: ["Overview of TIBCO Spotfire Certifications", "Preparing for Spotfire Analyst Certification", "Exam Strategies and Tips", "Practice Questions and Mock Exams", "Certification Path Guidance", "Hands-on Labs for Certification"] },
        { id: 10, title: "Module 10: Real-Time Spotfire Project", topics: ["End-to-End Analytics Project", "Building Interactive Dashboards", "Performing Predictive Analysis", "Integrating with External Data Sources", "Mock Interviews and Resume Building", "Project Review and Feedback"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                TIBCO Spotfire Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate TIBCO Spotfire training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored learning experience using your analytics environment for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite TIBCO Spotfire training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides focused learning without workplace distractions, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led TIBCO Spotfire training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via Zoom or Teams, VILT offers flexibility for remote teams with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for TIBCO Spotfire in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "Data Analyst", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s TIBCO Spotfire course was exceptional. The hands-on labs on dashboard creation and predictive analytics helped me master visualization skills. The trainers were highly supportive." },
        { id: 2, name: "Sneha R.", designation: "Business Intelligence Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course simplified complex Spotfire concepts. Practical projects and lab sessions helped me transition confidently into a BI role." },
        { id: 3, name: "Vignesh T.", designation: "Spotfire Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s practical content and flexible timings were perfect. The certification prep and real-world scenarios prepared me well for my Spotfire role." },
        { id: 4, name: "Ritika S.", designation: "Spotfire Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course approachable. The trainers explained Spotfire from scratch, and the hands-on labs gave me a strong start in my career." },
        { id: 5, name: "Ramesh A.", designation: "Senior BI Analyst", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s depth and practical approach made advanced Spotfire topics like predictive analytics and cloud integration easy to grasp. Highly recommend for professionals." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer TIBCO Spotfire" />
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
        { id: 1, title: "What is TIBCO Spotfire used for?", description: "TIBCO Spotfire is used for data analytics, creating interactive visualizations, and building dashboards to support business intelligence and decision-making." },
        { id: 2, title: "Who should take this TIBCO Spotfire training?", description: "Data analysts, business intelligence professionals, and freshers looking to specialize in data visualization and analytics." },
        { id: 3, title: "Do I need prior experience to learn TIBCO Spotfire?", description: "Basic knowledge of data analysis or Excel is helpful but not mandatory. Our course starts from the basics for beginners." },
        { id: 4, title: "Is TIBCO Spotfire in demand in 2025?", description: "Yes, with the growing need for data-driven decisions, TIBCO Spotfire skills are highly sought after in BI and analytics roles." },
        { id: 5, title: "What’s the difference between TIBCO Spotfire and Tableau?", description: "Spotfire excels in predictive analytics and advanced statistical modeling, while Tableau focuses on user-friendly visualizations and broad data connectivity." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline TIBCO Spotfire training with live instructor-led sessions and hands-on practice." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes live lab sessions with TIBCO Spotfire for dashboard creation, data wrangling, and predictive analytics." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and real-world Spotfire scenarios to prepare you for BI and analytics job roles." },
        { id: 9, title: "Can I switch to TIBCO Spotfire from another IT field?", description: "Yes, with basic data analysis or BI knowledge, TIBCO Spotfire is an excellent field to transition into for IT professionals." },
        { id: 10, title: "Is TIBCO Spotfire suitable for freshers?", description: "Definitely, TIBCO Spotfire is beginner-friendly and a great start for freshers entering the data analytics and BI field." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">TIBCO Spotfire Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your questions about our TIBCO Spotfire course in Chennai.
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

const Tibcospotfiremain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best TIBCO Spotfire Training in Chennai | Practical Oriented Spotfire Course";
    const pageDescription = "Join the top TIBCO Spotfire training in Chennai at IntelliMindz. Master data analytics, visualization, and business intelligence with hands-on projects and expert guidance.";
    const pageKeywords = "tibco spotfire training in chennai, spotfire course, data analytics training, business intelligence training, intellimindz";
    const ogUrl = "https://localhost:3000/tibco_spotfire_training_in_chennai";
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

export default Tibcospotfiremain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
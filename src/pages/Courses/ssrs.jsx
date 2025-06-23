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
import saphomeintro1 from '../../assests/images/ssrs_image1.jpg';
import homeintro from '../../assests/images/ssrs_image.jpg';
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
                    Learn from the Best: SSRS Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SSRS trainers are seasoned professionals with extensive experience in SQL Server Reporting Services and business intelligence. With hands-on expertise in real-world reporting projects, our trainers guide you to master SSRS report development and deployment.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in SSRS report design and data visualization.</li>
                        <li><span className="icon">✓</span> Learn from BI experts with real-world project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in SSRS training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time reporting projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SSRS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by SSRS experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an SSRS training center that delivers hands-on reporting skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SSRS report development." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit SSRS course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your SSRS skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led SSRS sessions from anywhere. Our online training includes hands-on report development, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded SSRS video sessions. Get lifetime access to course materials, downloadable resources, and updates to stay current with SSRS.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person SSRS sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom SSRS learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled SSRS Developer with IntelliMindz</h1>
            <p>Industry-relevant SSRS training to build your expertise in creating and managing business intelligence reports.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SSRS Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SSRS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SSRS training is designed to equip learners with both theoretical knowledge and practical skills in SQL Server Reporting Services. Our curriculum covers report creation, data visualization, parameterization, and deployment, ensuring comprehensive expertise in business intelligence reporting.</p>
                    <p>The course includes interactive classes, hands-on labs, and real-world reporting projects. By working on practical SSRS scenarios, learners gain the confidence to develop and manage reports in enterprise environments.</p>
                    <p>Whether you're a beginner in BI or an experienced professional looking to master SSRS, our training helps you gain practical skills and stay competitive in the data reporting job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SSRS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual SSRS training, ensuring accessibility for working professionals, students, and job seekers. Choose the format that suits your schedule and learning preferences." },
        { id: 2, image: handsonsapImg, title: "Hands-on Report Development", description: "Our training emphasizes practical experience with dedicated SSRS labs, allowing you to design, test, and deploy reports in a real-world environment to reinforce concepts." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Reporting Projects", description: "Work on case studies modeled after actual SSRS reporting projects to enhance your problem-solving skills and prepare for real-world BI challenges and interviews." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert SSRS Trainers", description: "Learn from BI professionals with extensive experience in SSRS and data reporting projects across industries, ensuring expert guidance and best practices." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Our limited batch sizes ensure personalized mentoring, addressing individual queries and providing focused support for effective SSRS learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions and assessments aligned with SSRS industry requirements, helping you retain knowledge and prepare for job roles." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SSRS Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to SSRS", topics: ["Overview of SQL Server Reporting Services", "Business Intelligence Concepts", "SSRS Architecture and Components", "SSRS Installation and Configuration", "Introduction to Report Builder and SSDT"] },
        { id: 2, title: "Module 2: Creating Basic Reports", topics: ["Creating Data Sources and Datasets", "Designing Simple Reports", "Working with Tables, Matrices, and Lists", "Formatting Reports", "Adding Headers, Footers, and Expressions"] },
        { id: 3, title: "Module 3: Advanced Report Design", topics: ["Parameterized Reports", "Drilldown and Drillthrough Reports", "Subreports and Linked Reports", "Interactive Sorting and Filtering", "Using Charts, Gauges, and Maps"] },
        { id: 4, title: "Module 4: Data Visualization Techniques", topics: ["Creating Visualizations with SSRS", "Customizing Chart Properties", "Working with Sparklines and Data Bars", "Implementing KPIs and Indicators", "Best Practices for Data Visualization"] },
        { id: 5, title: "Module 5: Managing and Deploying Reports", topics: ["Report Manager and SSRS Web Portal", "Deploying Reports to Report Server", "Managing Report Security", "Scheduling and Subscriptions", "Exporting Reports to Different Formats"] },
        { id: 6, title: "Module 6: SSRS Integration", topics: ["Integrating SSRS with SQL Server", "Using Stored Procedures in Reports", "Embedding SSRS Reports in Applications", "SSRS with SharePoint Integration", "Power BI and SSRS Comparison"] },
        { id: 7, title: "Module 7: Performance Optimization", topics: ["Optimizing Report Performance", "Caching and Snapshot Reports", "Query Optimization Techniques", "Managing Large Datasets", "Troubleshooting Performance Issues"] },
        { id: 8, title: "Module 8: Advanced SSRS Features", topics: ["Custom Code in SSRS Reports", "Using MDX Queries for SSAS", "Mobile Reports Overview", "Dynamic Report Generation", "Extending SSRS with Custom Assemblies"] },
        { id: 9, title: "Module 9: Real-World SSRS Projects", topics: ["Building End-to-End SSRS Reports", "Case Studies on Business Reporting", "Dashboard Creation for Enterprises", "Handling Complex Reporting Requirements", "Project Presentation and Review"] },
        { id: 10, title: "Module 10: Career Preparation", topics: ["SSRS Interview Questions and Answers", "Resume Building for BI Roles", "Mock Interviews for SSRS Developers", "Certification Guidance (Microsoft BI)", "Industry Trends in BI and Reporting"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SSRS Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate SSRS training", title: "Onsite Training:", description: "Conducted at your premises, this SSRS training offers a tailored experience using your data and tools, ideal for upskilling teams in business reporting." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite SSRS training center", title: "Offsite Training:", description: "Held at professional training venues, this SSRS training provides a focused environment for hands-on report development and certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led SSRS training", title: "Virtual Instructor-Led Training:", description: "Delivered live via online platforms, this SSRS training is perfect for remote teams, combining flexibility with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SSRS in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "SSRS Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "Intellimindz’s SSRS course was exceptional. The hands-on labs and real-world reporting projects helped me master report design. The trainer’s expertise was invaluable." },
        { id: 2, name: "Sneha R.", designation: "BI Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SSRS training was clear and practical. The trainer’s real-world examples helped me understand parameterization and deployment, transitioning me to a BI role." },
        { id: 3, name: "Vignesh T.", designation: "Data Reporting Specialist", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "Intellimindz’s SSRS training was spot-on. The interview prep and project work were key to landing my job. Flexible batches worked perfectly with my schedule." },
        { id: 4, name: "Ritika S.", designation: "SSRS Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the SSRS course was easy to follow. The trainers explained everything from scratch, helping me kickstart my career in business intelligence." },
        { id: 5, name: "Ramesh A.", designation: "Senior BI Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SSRS course covered advanced topics like custom code and performance tuning. The practical sessions and trainer’s insights added immense value." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer SSRS" />
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
        { id: 1, title: "What is SSRS used for?", description: "SSRS (SQL Server Reporting Services) is a Microsoft tool for creating, managing, and deploying business intelligence reports with data visualizations, used in enterprises for decision-making." },
        { id: 2, title: "Who should take SSRS training?", description: "Database professionals, BI analysts, developers, and anyone interested in building reporting solutions or pursuing a career in business intelligence." },
        { id: 3, title: "Do I need prior knowledge for SSRS training?", description: "Basic SQL knowledge is helpful, but our course covers SSRS from scratch, making it suitable for beginners with some database familiarity." },
        { id: 4, title: "Is SSRS in demand in 2025?", description: "Yes, SSRS remains widely used in enterprises for reporting, especially in Microsoft-centric environments, alongside tools like Power BI." },
        { id: 5, title: "What’s the difference between SSRS and Power BI?", description: "SSRS is a server-based reporting tool for structured reports, while Power BI is a cloud-based, interactive BI tool for dashboards and data exploration." },
        { id: 6, title: "Is SSRS training available online?", description: "Yes, we offer both online and offline SSRS training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, our training includes practical labs where you design, test, and deploy SSRS reports using real-world datasets." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, SSRS-specific questions, and resume guidance to prepare you for BI reporting roles." },
        { id: 9, title: "Can I switch to BI with SSRS training?", description: "Absolutely. SSRS is a great entry point for transitioning to business intelligence roles from database or IT fields." },
        { id: 10, title: "Is SSRS useful for freshers?", description: "Yes, SSRS is an excellent skill for freshers aiming to start a career in BI and data reporting." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SSRS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SSRS course in Chennai.
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

const Ssrsmain = () => {
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
                <title>SSRS Training in Chennai | SSRS Course in Chennai</title>
                <meta name="description" content="Master SQL Server Reporting Services with our SSRS Training in Chennai. Learn to create and manage BI reports through our expert-led SSRS course in Chennai." />
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

export default Ssrsmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
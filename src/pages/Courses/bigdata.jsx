import React, { useState } from 'react';
import Meta from '../../components/Meta';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (unchanged)
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
          <img src={homeintro} alt="Big Data Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Big Data Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Big Data Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from Experts: Big Data Training by <span>Industry Professionals</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Big Data trainers are experienced professionals with hands-on expertise in Hadoop, Spark, and data analytics. Their industry knowledge ensures a practical and impactful learning experience.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in Big Data from Hadoop to advanced analytics.</li>
                        <li><span className="icon">✓</span> Learn from Big Data professionals with real-world project experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz’s proven success in Big Data training and placements.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time Big Data projects to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a tailored learning experience aligned with your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Big Data Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Big Data experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Big Data training with real-world analytics skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world Big Data processing tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit Big Data course content anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to enhance your understanding." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Big Data sessions from anywhere. Includes hands-on Hadoop and Spark projects, real-time analytics, and interactive Q&A.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Big Data videos. Get lifetime access to course materials and updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person Big Data training in Chennai for collaborative learning with trainers and peers.", isPopular: false },
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
            <h1>Become a Skilled Big Data Professional with IntelliMindz</h1>
            <p>Industry-focused Big Data training to master Hadoop, Spark, and data analytics.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Big Data Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Big Data Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our Big Data training equips you with expertise in managing and analyzing large-scale data using tools like Hadoop, Spark, Hive, and Kafka. The curriculum covers data ingestion, processing, storage, and analytics.</p>
                    <p>Our course includes hands-on labs, real-time Big Data projects, and interactive sessions to ensure practical mastery. You’ll work on industry-relevant scenarios like real-time data processing and predictive analytics.</p>
                    <p>Whether you're a beginner or a professional aiming to specialize in Big Data, our training prepares you for the competitive data analytics job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Big Data Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person or online Big Data training, tailored for professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Big Data Tools", description: "Gain practical experience with Hadoop, Spark, Hive, and Kafka for data processing." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Big Data Projects", description: "Work on industry-modeled analytics scenarios to enhance problem-solving and interview readiness." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Big Data Trainers", description: "Learn from professionals with extensive experience in Big Data and analytics projects." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Assessments", description: "Engage in module-wise discussions and assessments aligned with Big Data interview topics." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Big Data Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Big Data", topics: ["Overview of Big Data and its Importance", "Characteristics of Big Data (5Vs)", "Big Data Ecosystem and Tools", "Applications of Big Data", "Big Data Challenges", "Career Opportunities in Big Data"] },
        { id: 2, title: "Module 2: Hadoop Fundamentals", topics: ["Introduction to Apache Hadoop", "Hadoop Architecture (HDFS, YARN)", "Hadoop Installation and Configuration", "HDFS Commands and Operations", "MapReduce Programming Model", "Running MapReduce Jobs"] },
        { id: 3, title: "Module 3: Hadoop Ecosystem Components", topics: ["Apache Hive: Data Warehousing", "Apache Pig: Data Flow", "HBase: NoSQL Database", "Sqoop: Data Ingestion", "Flume: Streaming Data", "Oozie: Workflow Scheduling"] },
        { id: 4, title: "Module 4: Apache Spark", topics: ["Introduction to Spark", "Spark Architecture and RDDs", "Spark SQL and DataFrames", "Spark Streaming", "MLlib for Machine Learning", "GraphX for Graph Processing"] },
        { id: 5, title: "Module 5: Real-Time Data Processing", topics: ["Apache Kafka: Messaging System", "Kafka Architecture and Setup", "Streaming with Spark and Kafka", "Storm and Flink Overview", "Real-Time Analytics Use Cases", "Data Pipeline Design"] },
        { id: 6, title: "Module 6: Data Storage and Management", topics: ["HDFS and Distributed File Systems", "NoSQL Databases (MongoDB, Cassandra)", "Data Lake vs. Data Warehouse", "Data Compression and Serialization", "Data Partitioning and Bucketing", "Metadata Management"] },
        { id: 7, title: "Module 7: Big Data Analytics", topics: ["Data Exploration and Visualization", "Advanced MapReduce Techniques", "Spark Data Analysis", "Predictive Analytics with MLlib", "Time-Series Analysis", "Visualization Tools (Tableau, Power BI)"] },
        { id: 8, title: "Module 8: Cloud-Based Big Data", topics: ["Big Data on AWS (EMR, S3)", "AWS Redshift and Athena", "Google BigQuery and Dataproc", "Azure Data Lake and HDInsight", "Cloud-Based Data Pipelines", "Cost Optimization in Cloud"] },
        { id: 9, title: "Module 9: Big Data Security and Governance", topics: ["Big Data Security Challenges", "Data Encryption and Access Control", "Hadoop Security Features (Kerberos)", "Data Privacy and Compliance (GDPR, CCPA)", "Data Governance Frameworks", "Auditing and Monitoring Tools"] },
        { id: 10, title: "Module 10: Big Data Projects and Deployment", topics: ["End-to-End Big Data Project", "Real-Time Analytics Dashboard", "Data Pipeline Deployment", "Testing and Optimization", "Case Studies in Big Data", "Project Review and Presentation"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Big Data Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite Big Data training", title: "Onsite Training", description: "Conducted at your premises, offering tailored Big Data training for team upskilling in analytics and Hadoop." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Big Data training center", title: "Offsite Training", description: "Held at professional training centers for focused Big Data training and certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual Big Data training", title: "Virtual Instructor-Led Training (VILT)", description: "Live Big Data training via platforms like Zoom, ideal for remote teams with hands-on analytics." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Big Data in Chennai</h2>
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
        { id: 1, name: "Suresh K.", designation: "Big Data Developer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Big Data course was exceptional. Hands-on projects with Hadoop and Spark were highly practical. The trainers were outstanding." },
        { id: 2, name: "Latha M.", designation: "Data Analyst", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered Big Data tools like Hive and Kafka thoroughly. Real-time projects helped me transition into an analytics role confidently." },
        { id: 3, name: "Kiran V.", designation: "Data Engineer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedules and industry-relevant projects were perfect. The interview prep sessions were spot-on." },
        { id: 4, name: "Anitha S.", designation: "Big Data Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers explained Hadoop concepts clearly, and the hands-on labs were invaluable." },
        { id: 5, name: "Ravi T.", designation: "Senior Data Scientist", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course simplified complex topics like real-time analytics. The practical projects and mentoring added immense value." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Big Data" />
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
        { id: 1, title: "What is Big Data used for?", description: "Big Data is used for analyzing large datasets to uncover insights, optimize business decisions, and enable predictive analytics in various industries." },
        { id: 2, title: "Who should take this Big Data training?", description: "Freshers, data analysts, and IT professionals looking to specialize in Big Data and analytics." },
        { id: 3, title: "Do I need prior experience to learn Big Data?", description: "Basic programming or SQL knowledge is helpful, but the course is beginner-friendly." },
        { id: 4, title: "Is Big Data in demand in 2025?", description: "Yes, Big Data skills are in high demand in industries like finance, healthcare, and eCommerce." },
        { id: 5, title: "What’s the difference between Hadoop and Spark?", description: "Hadoop is disk-based; Spark is in-memory, offering faster data processing for big data tasks." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Big Data training with live instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll work with Hadoop, Spark, and Kafka for real-world data projects." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and Big Data scenarios." },
        { id: 9, title: "Can I switch to Big Data from another IT field?", description: "Yes, with basic programming skills, you can transition to Big Data through our training." },
        { id: 10, title: "Is Big Data suitable for freshers?", description: "Absolutely, it’s a great entry point for freshers aiming for a career in data analytics." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Big Data Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Get answers to your questions about our Big Data course in Chennai.
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
            <p className="cta-banner-text">Launch your Big Data career with expert guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Bigdatamain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Big Data Training in Chennai | Practical Oriented Big Data Course";
const pageDescription = "Join IntelliMindz for industry-focused Big Data training in Chennai. Get hands-on with Hadoop, Spark, and more.";
const pageKeywords = "big data training in chennai, hadoop course, big data analytics, intellimindz big data";
const ogUrl = "https://localhost:3000/big_data_training_in_chennai";
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

export default Bigdatamain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
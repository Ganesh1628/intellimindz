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
import saphomeintro1 from '../../assests/images/etl_testing_image1.jpg';
import homeintro from '../../assests/images/etl_testing_image.jpg';
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
};;

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: ETL Testing Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our ETL Testing trainers are seasoned professionals with over 12 years of experience in data warehouse and business intelligence testing. With hands-on expertise in real-world ETL projects, our trainers guide you to master data validation, transformation, and loading processes.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in ETL testing scenarios and data validation.</li>
                        <li><span className="icon">✓</span> Learn from BI testing experts with real-world project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in ETL training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time ETL testing projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="ETL Testing Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by ETL testing experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking an ETL testing training center that delivers hands-on data validation skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world ETL testing scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit ETL testing course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your ETL testing skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led ETL testing sessions from anywhere. Our online training includes hands-on data validation, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded ETL testing video sessions. Get lifetime access to course materials, downloadable resources, and updates to stay current with ETL tools.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person ETL testing sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom ETL testing learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled ETL Tester with IntelliMindz</h1>
            <p>Industry-relevant ETL testing training to build your expertise in validating data integration and business intelligence processes.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your ETL Testing Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our ETL Testing Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our ETL Testing training is designed to provide learners with comprehensive knowledge and practical skills in Extract, Transform, Load (ETL) testing for data warehousing and business intelligence. Our curriculum covers data validation, constraint testing, SQL queries, and real-world ETL scenarios, ensuring expertise in data quality and integrity.</p>
                    <p>The course includes interactive classes, hands-on labs, and real-time ETL testing projects. By working on practical scenarios, learners gain the confidence to test data warehouse systems and ensure accurate data transformation and loading in enterprise environments.</p>
                    <p>Whether you're a beginner in BI testing or an experienced professional aiming to specialize in ETL, our training equips you with the skills to excel in the competitive data testing job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="ETL Testing Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual ETL testing training, ensuring accessibility for working professionals, students, and job seekers. Choose the format that suits your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-on ETL Testing Labs", description: "Our training emphasizes practical experience with dedicated ETL testing labs, allowing you to validate data, test transformations, and ensure data quality." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World ETL Testing Projects", description: "Work on case studies modeled after actual ETL testing projects to enhance your problem-solving skills and prepare for real-world BI challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert ETL Testing Trainers", description: "Learn from BI testing professionals with extensive experience in ETL and data warehouse projects across industries, ensuring expert guidance." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Our limited batch sizes ensure personalized mentoring, addressing individual queries and providing focused support for effective ETL learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions and assessments aligned with ETL industry requirements, helping you retain knowledge and prepare for job roles." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>ETL Testing Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to ETL Testing", topics: ["Overview of ETL Testing", "Data Warehousing Concepts", "ETL Process and Lifecycle", "Difference Between Database and Data Warehouse Testing", "Introduction to ETL Tools (Informatica, Talend)"] },
        { id: 2, title: "Module 2: Data Warehousing Fundamentals", topics: ["Data Warehouse Architecture", "OLTP vs. OLAP Systems", "Star and Snowflake Schema", "Fact and Dimension Tables", "Data Modeling Concepts"] },
        { id: 3, title: "Module 3: SQL for ETL Testing", topics: ["Writing SQL Queries for Data Validation", "Joins, Unions, and Subqueries", "Data Manipulation Language (DML) and Data Definition Language (DDL)", "Validating Data Completeness and Accuracy", "SQL Performance Optimization"] },
        { id: 4, title: "Module 4: ETL Testing Workflow", topics: ["Creating Test Plans and Test Cases", "Analyzing Business Requirements", "ETL Testing Scenarios (Constraint, Source-to-Target)", "Test Data Preparation", "Executing System and Integration Testing"] },
        { id: 5, title: "Module 5: Types of ETL Testing", topics: ["Constraint Testing (Primary Key, Foreign Key)", "Data Quality Testing", "Negative Testing Scenarios", "Business Rules Testing", "Dependency and Error Handling Testing"] },
        { id: 6, title: "Module 6: ETL Tools and Techniques", topics: ["Working with Informatica PowerCenter", "Introduction to Talend Open Studio", "Data Validation with QuerySurge", "Active and Passive Transformations", "Workflow Manager and Monitor"] },
        { id: 7, title: "Module 7: Performance and Scalability Testing", topics: ["Performance Tuning in ETL Processes", "Handling Large Datasets", "Testing Data Loading Timelines", "Scalability Testing for Data Warehouses", "Troubleshooting Performance Issues"] },
        { id: 8, title: "Module 8: Reports and Cube Testing", topics: ["Validating Dimensions and Measures", "Testing OLAP Cubes", "Report Validation Techniques", "Ensuring Data Accuracy in BI Reports", "Integration with BI Tools"] },
        { id: 9, title: "Module 9: Real-World ETL Testing Projects", topics: ["Building End-to-End ETL Test Cases", "Case Studies on Data Warehouse Testing", "Testing ETL Workflows for Enterprises", "Handling Complex Data Transformations", "Project Presentation and Review"] },
        { id: 10, title: "Module 10: Career Preparation", topics: ["ETL Testing Interview Questions and Answers", "Resume Building for BI Testing Roles", "Mock Interviews for ETL Testers", "Certification Guidance for ETL Testing", "Industry Trends in Data Testing"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                ETL Testing Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate ETL testing training", title: "Onsite Training:", description: "Conducted at your premises, this ETL testing training offers a tailored experience using your data and tools, ideal for upskilling teams in data validation." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite ETL testing training center", title: "Offsite Training:", description: "Held at professional training venues, this ETL testing training provides a focused environment for hands-on data warehouse testing and certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led ETL testing training", title: "Virtual Instructor-Led Training:", description: "Delivered live via online platforms, this ETL testing training is perfect for remote teams, combining flexibility with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for ETL Testing in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "ETL Tester", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "Intellimindz’s ETL testing course was outstanding. The hands-on labs and real-world projects helped me master data validation. The trainers’ expertise was top-notch." },
        { id: 2, name: "Priya V.", designation: "BI Test Analyst", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The ETL training was practical and engaging. The trainers’ real-world examples clarified complex concepts, helping me transition to a BI testing role." },
        { id: 3, name: "Suresh R.", designation: "Data Warehouse Tester", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Intellimindz’s ETL course was a game-changer. The interview prep and project work were crucial for landing my job. Flexible batches were a big plus." },
        { id: 4, name: "Anitha M.", designation: "ETL Testing Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the ETL course was easy to follow. The trainers explained concepts clearly, helping me start my career in data warehouse testing." },
        { id: 5, name: "Vikram N.", designation: "Senior ETL Tester", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The ETL course covered advanced topics like performance tuning and cube testing. The practical sessions and trainer insights were highly valuable." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer ETL Testing" />
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
        { id: 1, title: "What is ETL Testing?", description: "ETL Testing validates the Extract, Transform, Load process in data warehousing, ensuring data accuracy, completeness, and quality from source to target systems." },
        { id: 2, title: "Who should take ETL Testing training?", description: "Database professionals, QA testers, BI analysts, and anyone interested in data warehouse testing or transitioning to a BI testing career." },
        { id: 3, title: "Do I need prior knowledge for ETL Testing training?", description: "Basic SQL and database knowledge is helpful, but our course starts from scratch, making it suitable for beginners with some data familiarity." },
        { id: 4, title: "Is ETL Testing in demand in 2025?", description: "Yes, ETL testing is highly demanded in industries relying on data warehousing and BI, with roles in top MNCs offering competitive salaries." },
        { id: 5, title: "What tools are used in ETL Testing?", description: "Popular tools include Informatica PowerCenter, Talend Open Studio, QuerySurge, and SQL for data validation, covered in our training." },
        { id: 6, title: "Is ETL Testing training available online?", description: "Yes, we offer both online and offline ETL testing training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, our training includes practical labs where you validate data, test transformations, and work on real-world ETL scenarios." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, ETL-specific questions, and resume guidance to prepare you for BI testing roles." },
        { id: 9, title: "Can I switch to BI testing with ETL training?", description: "Absolutely. ETL testing is a key skill for transitioning to business intelligence and data warehouse testing roles." },
        { id: 10, title: "Is ETL Testing suitable for freshers?", description: "Yes, ETL testing is an excellent entry point for freshers aiming to start a career in BI and data testing." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">ETL Testing Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our ETL Testing course in Chennai.
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

const Etltestingmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best ETL Testing Training in Chennai | Practical Oriented ETL Testing Course";
const pageDescription = "Join IntelliMindz for ETL Testing training in Chennai. Learn data validation, SQL, and automation testing.";
const pageKeywords = "etl testing training in chennai, data warehouse testing, etl tools, intellimindz testing";
const ogUrl = "https://localhost:3000/etl_testing_training_in_chennai";
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

export default Etltestingmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
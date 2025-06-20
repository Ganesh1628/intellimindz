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
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Clinical SAS Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master clinical data analysis with our expert-led Clinical SAS Training – your pathway to a thriving career in clinical research and biostatistics.</h3>
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
                    Learn from the Best: Clinical SAS Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Clinical SAS trainers are industry professionals with extensive experience in clinical data analysis and biostatistics. With hands-on expertise in real-world clinical research projects, they provide practical insights to guide your Clinical SAS learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in Clinical SAS for data analysis and reporting in clinical trials.</li>
                        <li><span className="icon">✓</span> Learn from practicing Clinical SAS professionals with real-time project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven expertise in delivering successful Clinical SAS training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world clinical data scenarios to gain job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Clinical SAS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Clinical SAS experts at our premier training centre in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a Clinical SAS training centre near you with a focus on practical data analysis skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world Clinical SAS data analysis tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access Clinical SAS course materials anytime for continuous learning." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your Clinical SAS expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Clinical SAS sessions from anywhere with hands-on data analysis exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn Clinical SAS at your convenience with pre-recorded videos. Get lifetime access to course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in immersive in-person Clinical SAS sessions for a focused learning experience. Ideal for collaborative learning with direct trainer and peer interaction.", isPopular: false },
        { id: 'hybrid', iconType: ' ON', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Switch between formats based on your needs, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled Clinical SAS Professional with IntelliMindz</h1>
            <p>Master industry-relevant Clinical SAS skills for efficient clinical data analysis, statistical reporting, and regulatory compliance.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Clinical SAS Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Clinical SAS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive Clinical SAS training designed to provide both theoretical knowledge and hands-on expertise in clinical data analysis. Our curriculum covers key Clinical SAS topics such as data manipulation, statistical analysis, CDISC standards, and regulatory reporting for clinical trials.</p>
                    <p>The course includes interactive classes, live data analysis sessions, practical exercises, and real-world clinical research projects. By working on industry-relevant scenarios, learners gain the skills and confidence to handle clinical data effectively.</p>
                    <p>Whether you're a beginner in clinical research or a professional aiming to enhance your Clinical SAS skills, our training equips you with the expertise to excel in the competitive pharmaceutical and biostatistics job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Clinical SAS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose from in-person classroom sessions or flexible online learning, making Clinical SAS training accessible to working professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practice with Clinical SAS", description: "Gain hands-on experience with SAS programming, data manipulation, and statistical analysis. Build job-ready skills through practical clinical trial tasks." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Time Clinical Case Studies", description: "Work on case studies modeled after real-world Clinical SAS projects. These exercises enhance problem-solving and prepare you for clinical research challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with Extensive SAS Experience", description: "Learn from industry experts with years of experience in Clinical SAS projects. Our trainers provide practical insights, best practices, and mentorship." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Focused Learning", description: "Our limited batch sizes ensure personalized mentoring, allowing trainers to address queries and provide tailored support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and hands-on labs aligned with Clinical SAS certification topics, helping you prepare for job interviews." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Clinical SAS Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Clinical SAS", topics: ["Overview of SAS Software", "Role of SAS in Clinical Research", "SAS Architecture and Components", "Navigating SAS Environment", "Understanding Clinical Trial Data", "Key SAS Terminologies"] },
        { id: 2, title: "Module 2: SAS Programming Basics", topics: ["SAS Program Structure", "Data Step and PROC Step", "Importing and Exporting Data", "Creating and Managing SAS Datasets", "Working with SAS Libraries", "Basic Data Manipulation Techniques"] },
        { id: 3, title: "Module 3: Data Manipulation and Cleaning", topics: ["Data Cleaning and Validation", "Handling Missing Data", "Merging and Appending Datasets", "Creating Calculated Variables", "Using SAS Functions", "Data Sorting and Filtering"] },
        { id: 4, title: "Module 4: Statistical Analysis with SAS", topics: ["Introduction to PROC SQL", "Descriptive Statistics with PROC MEANS", "Frequency Analysis with PROC FREQ", "Correlation and Regression Analysis", "T-Tests and ANOVA", "Reporting Statistical Results"] },
        { id: 5, title: "Module 5: CDISC Standards", topics: ["Introduction to CDISC Standards", "SDTM (Study Data Tabulation Model)", "ADaM (Analysis Data Model)", "Creating CDISC-Compliant Datasets", "Validating CDISC Datasets", "Regulatory Submission Requirements"] },
        { id: 6, title: "Module 6: Clinical Trial Reporting", topics: ["Creating Clinical Trial Reports", "Generating Tables, Listings, and Figures (TLF)", "Using PROC REPORT and PROC TABULATE", "Customizing Report Outputs", "Automating Report Generation", "Ensuring Regulatory Compliance"] },
        { id: 7, title: "Module 7: Advanced SAS Programming", topics: ["Using SAS Macros", "Creating Reusable Code", "Advanced Data Manipulation Techniques", "Working with Large Datasets", "Optimizing SAS Code Performance", "Debugging SAS Programs"] },
        { id: 8, title: "Module 8: SAS in Clinical Research Applications", topics: ["Analyzing Clinical Trial Data", "Handling Adverse Event Data", "Creating Safety and Efficacy Reports", "Integrating SAS with Other Tools", "Real-Time Data Analysis", "Case Studies in Clinical Research"] },
        { id: 9, title: "Module 9: SAS Certification Preparation", topics: ["Overview of SAS Certifications", "Preparing for SAS Certified Clinical Trials Programmer", "Exam Strategies and Tips", "Practice Questions and Mock Exams", "Certification Path Guidance", "Hands-on Labs for Certification"] },
        { id: 10, title: "Module 10: Real-Time Clinical SAS Project", topics: ["End-to-End Clinical Data Analysis Project", "Creating CDISC-Compliant Datasets", "Generating TLF Reports", "Performing Statistical Analysis", "Mock Interviews and Resume Building", "Project Review and Feedback"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Clinical SAS Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Clinical SAS training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored learning experience using your clinical data environment for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Clinical SAS training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides focused learning without workplace distractions, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Clinical SAS training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via Zoom or Teams, VILT offers flexibility for remote teams with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Clinical SAS in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "Clinical Data Analyst", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Clinical SAS course was exceptional. The hands-on labs on data manipulation and CDISC standards helped me master clinical data skills. The trainers were highly supportive." },
        { id: 2, name: "Sneha R.", designation: "SAS Programmer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course simplified complex Clinical SAS concepts. Practical projects and lab sessions helped me transition confidently into a clinical research role." },
        { id: 3, name: "Vignesh T.", designation: "Clinical SAS Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s practical content and flexible timings were perfect. The certification prep and real-world scenarios prepared me well for my SAS role." },
        { id: 4, name: "Ritika S.", designation: "Clinical SAS Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course approachable. The trainers explained Clinical SAS from scratch, and the hands-on labs gave me a strong start in my career." },
        { id: 5, name: "Ramesh A.", designation: "Senior Clinical Data Analyst", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s depth and practical approach made advanced Clinical SAS topics like CDISC and regulatory reporting easy to grasp. Highly recommend for professionals." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Clinical SAS" />
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
        { id: 1, title: "What is Clinical SAS used for?", description: "Clinical SAS is used for data analysis, statistical reporting, and regulatory submissions in clinical trials, ensuring compliance with industry standards like CDISC." },
        { id: 2, title: "Who should take this Clinical SAS training?", description: "Clinical research professionals, data analysts, biostatisticians, and freshers looking to specialize in clinical data analysis and biostatistics." },
        { id: 3, title: "Do I need prior experience to learn Clinical SAS?", description: "Basic knowledge of statistics or data analysis is helpful but not mandatory. Our course starts from the basics for beginners." },
        { id: 4, title: "Is Clinical SAS in demand in 2025?", description: "Yes, with the growing pharmaceutical and clinical research industries, Clinical SAS skills are highly sought after in biostatistics and data analysis roles." },
        { id: 5, title: "What’s the difference between Clinical SAS and Base SAS?", description: "Clinical SAS focuses on clinical trial data analysis and regulatory reporting, while Base SAS covers general-purpose data manipulation and analytics." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Clinical SAS training with live instructor-led sessions and hands-on practice." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes live lab sessions with Clinical SAS for data manipulation, statistical analysis, and CDISC-compliant reporting." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and real-world Clinical SAS scenarios to prepare you for clinical research and biostatistics roles." },
        { id: 9, title: "Can I switch to Clinical SAS from another field?", description: "Yes, with basic data analysis or clinical research knowledge, Clinical SAS is an excellent field to transition into for professionals." },
        { id: 10, title: "Is Clinical SAS suitable for freshers?", description: "Definitely, Clinical SAS is beginner-friendly and a great start for freshers entering the clinical research and biostatistics field." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Clinical SAS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your questions about our Clinical SAS course in Chennai.
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

const ClinicalSASMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Clinical SAS Training in Chennai | Practical Oriented Clinical SAS Course";
    const pageDescription = "Join the top Clinical SAS training in Chennai at IntelliMindz. Master clinical data analysis, statistical reporting, and CDISC standards with hands-on projects and expert guidance.";
    const pageKeywords = "clinical sas training in chennai, clinical sas course, clinical data analysis training, intellimindz";
    const ogUrl = "https://localhost:3000/clinical_sas_training_in_chennai";
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

export default ClinicalSASMain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
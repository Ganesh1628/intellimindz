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
                <h1 className="intro-h1">Best Dot Net Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master .NET development with our expert-led training – build dynamic web, mobile, and desktop applications with hands-on projects.</h3>
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
                    Excel with Expert-Led <span>Dot Net Training</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            IntelliMindz’s Dot Net Training in Chennai is led by certified Microsoft professionals with over 10 years of industry experience. Our course offers hands-on training in .NET technologies, including C#, ASP.NET, and ADO.NET, preparing you for a successful career in software development.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in developing web, mobile, and desktop applications using .NET.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with real-time project experience.</li>
                        <li><span className="icon">✓</span> Work on live projects to build a strong portfolio.</li>
                        <li><span className="icon">✓</span> Receive 100% placement assistance with resume building and mock interviews.</li>
                        <li><span className="icon">✓</span> Master advanced concepts like MVC, Web APIs, and cloud integration.</li>
                        <li><span className="icon">✓</span> Flexible batch timings and affordable fees with installment options.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Dot Net Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Certified Trainers", paragraph: "Learn from Microsoft-certified experts with extensive industry experience." },
        { image: runningIcon, heading: "Hands-On Projects", paragraph: "Build real-world applications through live projects and case studies." },
        { image: staffIcon, heading: "Flexible Schedules", paragraph: "Choose weekday or weekend batches to suit your availability." },
        { image: liveclass, heading: "Interactive Learning", paragraph: "Engage in live coding sessions and practical labs." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access course materials and recorded sessions anytime." },
        { image: jobopening, heading: "Placement Support", paragraph: "Get 100% job assistance with interview preparation." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led .NET sessions from anywhere. Learn C#, ASP.NET, and MVC through interactive coding and real-time projects.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Study .NET at your own pace with recorded videos and materials on C#, ADO.NET, and Web APIs, with lifetime access.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person .NET training in Chennai for immersive learning with direct trainer interaction and hands-on labs.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom .NET learning for flexibility, mastering .NET technologies at your convenience.", isPopular: false }
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
            <h1>Become a Skilled .NET Developer with IntelliMindz</h1>
            <p>Master C#, ASP.NET, MVC, and more to build robust applications and advance your career.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your .NET Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Dot Net Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers top-tier Dot Net Training in Chennai, designed to equip you with skills to develop dynamic web, mobile, and desktop applications. Our course covers the .NET framework, including C#, ASP.NET, ADO.NET, MVC, and Web APIs, tailored to meet industry demands.</p>
                    <p>Through hands-on projects and real-time scenarios, our training ensures practical expertise in building scalable applications. Our curriculum is updated regularly to align with the latest .NET trends, supporting career growth for freshers and professionals alike.</p>
                    <p>With Microsoft-certified trainers and 100% placement assistance, IntelliMindz is your ideal partner for mastering .NET development in Chennai.</p>[](https://chennaitraining.in/dotnet-training-in-chennai/)
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Dot Net Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Options", description: "Choose between in-person or virtual .NET training, designed for freshers and professionals." },
        { id: 2, image: handsonsapImg, title: "Real-Time Projects", description: "Work on live projects to gain practical experience in C#, ASP.NET, and MVC." },
        { id: 3, image: casestudyrealtimeImg, title: "Industry-Relevant Curriculum", description: "Learn updated .NET concepts like Web APIs, cloud integration, and security." },
        { id: 4, image: ExperiencedtrainersImg, title: "Microsoft-Certified Trainers", description: "Learn from experts with over 10 years of .NET development experience." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Benefit from personalized attention and one-on-one mentoring." },
        { id: 6, image: interactiveImg, title: "Comprehensive Labs", description: "Practice with unlimited lab hours and real-world coding challenges." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Dot Net Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to .NET Framework", topics: ["Overview of .NET Framework", "Common Language Runtime (CLR)", "Framework Class Library (FCL)", "Common Type System (CTS)", "Installation and Setup"] },
        { id: 2, title: "Module 2: C# Programming Basics", topics: ["C# Syntax and Structure", "Variables and Data Types", "Control Structures", "Methods and Functions", "Exception Handling"] },
        { id: 3, title: "Module 3: Object-Oriented Programming", topics: ["Classes and Objects", "Inheritance and Polymorphism", "Encapsulation", "Interfaces and Abstract Classes", "Generics"] },
        { id: 4, title: "Module 4: ADO.NET", topics: ["Connected and Disconnected Architecture", "Data Readers and Data Adapters", "Datasets and Data Tables", "CRUD Operations", "Stored Procedures"] },
        { id: 5, title: "Module 5: ASP.NET Fundamentals", topics: ["ASP.NET Architecture", "Web Forms and Controls", "Page Life Cycle", "Validation Controls", "Master Pages and Themes"] },
        { id: 6, title: "Module 6: ASP.NET MVC", topics: ["MVC Architecture", "Controllers and Views", "Models and Data Binding", "Routing", "Razor Syntax"] },
        { id: 7, title: "Module 7: Web APIs", topics: ["Building RESTful APIs", "HTTP Methods and Status Codes", "Dependency Injection", "Authentication and Authorization", "Testing APIs"] },
        { id: 8, title: "Module 8: Assemblies and Multithreading", topics: ["Strong Names and GAC", "Single-File and Multi-File Assemblies", "Threading Namespaces", "Thread States and Members", "Parallel Programming"] },
        { id: 9, title: "Module 9: SQL Server Integration", topics: ["SQL Queries and Joins", "Database and Table Creation", "Keys and Indexes", "Stored Procedures and Functions", "Database Connectivity"] },
        { id: 10, title: "Module 10: Advanced .NET Concepts", topics: ["WCF and WPF Overview", "LINQ and Entity Framework", ".NET Core Basics", "Cloud Integration with Azure", "Deployment and Publishing"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Dot Net Course Modules
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Freshers", "Career Switchers"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Dot Net training", title: "Onsite Training:", description: "Customized .NET training at your premises, focusing on your team’s specific project needs." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Dot Net training center", title: "Offsite Training:", description: "Conducted at our training centers for focused .NET workshops and hands-on labs." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Dot Net training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online .NET sessions via Zoom, offering flexibility for remote teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Dot Net in Chennai</h2>
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
        { id: 1, name: "Karthik R.", designation: "Software Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The .NET training at IntelliMindz was exceptional. The hands-on projects and trainer support helped me land a developer role." },
        { id: 2, name: "Priya S.", designation: "Web Developer", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The ASP.NET and MVC modules were well-structured. I gained confidence in building web applications, thanks to the practical labs." },
        { id: 3, name: "Vignesh M.", designation: ".NET Programmer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on real-time projects and placement support was key to my job at a top MNC." },
        { id: 4, name: "Anitha K.", designation: "Fresher", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the C# and ADO.NET training gave me a strong foundation. The mock interviews were very helpful." },
        { id: 5, name: "Rahul T.", designation: "Junior Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers’ industry experience and the Web API module prepared me well for my current role." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Dot Net" />
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
        { id: 1, title: "What is .NET?", description: ".NET is a Microsoft framework for building cross-platform applications, including web, mobile, desktop, and IoT solutions." },
        { id: 2, title: "Who can join this Dot Net Training?", description: "Freshers, professionals, and anyone with basic programming knowledge can enroll." },
        { id: 3, title: "Do I need prior coding experience?", description: "Basic knowledge of programming (e.g., C, C++, or Java) is helpful but not mandatory." },
        { id: 4, title: "Is .NET in demand in 2025?", description: "Yes, .NET developers are highly sought after for web, mobile, and cloud applications." },
        { id: 5, title: "What skills will I learn?", description: "You’ll master C#, ASP.NET, MVC, ADO.NET, Web APIs, and SQL Server integration." },
        { id: 6, title: "Is online training available?", description: "Yes, we offer both online and offline training with live, interactive sessions." },
        { id: 7, title: "Will I get practical training?", description: "Yes, the course includes live projects and hands-on labs." },
        { id: 8, title: "Is placement support provided?", description: "Yes, we offer 100% placement assistance with resume building and mock interviews." },
        { id: 9, title: "Can .NET skills boost my career?", description: "Absolutely, .NET expertise opens doors to roles like web developer and software engineer." },
        { id: 10, title: "Is this course suitable for freshers?", description: "Yes, our training is designed to build skills from scratch for freshers." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Dot Net Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Dot Net course in Chennai.
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

const Dotnetmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Dotnet Training in Chennai | Practical Oriented Dotnet Course";
const pageDescription = "Join IntelliMindz for .NET training in Chennai. Learn C#, ASP.NET, and MVC from experts.";
const pageKeywords = "dotnet training in chennai, asp.net course, c# development, intellimindz dotnet";
const ogUrl = "https://localhost:3000/dotnet_training_in_chennai";
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

export default Dotnetmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
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
import saphomeintro1 from '../../assests/images/android_image1.jpg';
import homeintro from '../../assests/images/android_image.png';
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
                    Excel with Expert-Led <span>Android Training</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            IntelliMindz’s Android Training in Chennai is led by industry experts with over 10 years of experience in mobile app development. Our course offers hands-on training in Android technologies, including Java, Kotlin, and Android Studio, preparing you for a thriving career in app development.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in building Android apps using Java and Kotlin.</li>
                        <li><span className="icon">✓</span> Learn from certified trainers with real-time project experience.</li>
                        <li><span className="icon">✓</span> Work on live projects to build a strong portfolio.</li>
                        <li><span className="icon">✓</span> Receive 100% placement assistance with resume building and mock interviews.</li>
                        <li><span className="icon">✓</span> Master advanced concepts like UI/UX design, database integration, and app deployment.</li>
                        <li><span className="icon">✓</span> Flexible batch timings and affordable fees with installment options.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Android Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Certified Trainers", paragraph: "Learn from industry-certified experts with extensive Android development experience." },
        { image: runningIcon, heading: "Hands-On Projects", paragraph: "Build real-world Android apps through live projects and case studies." },
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Android sessions from anywhere. Learn Java, Kotlin, and Android Studio through interactive coding and real-time projects.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Study Android at your own pace with recorded videos and materials on Java, Kotlin, and UI/UX design, with lifetime access.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Android training in Chennai for immersive learning with direct trainer interaction and hands-on labs.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom Android learning for flexibility, mastering app development at your convenience.", isPopular: false }
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
            <h1>Become a Skilled Android Developer with IntelliMindz</h1>
            <p>Master Java, Kotlin, Android Studio, and more to build innovative mobile apps and advance your career.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Android Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Android Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers top-tier Android Training in Chennai, designed to equip you with skills to develop innovative mobile applications. Our course covers Android development using Java, Kotlin, Android Studio, and advanced concepts like UI/UX design and database integration.</p>
                    <p>Through hands-on projects and real-time scenarios, our training ensures practical expertise in building Android apps. Our curriculum is updated regularly to align with the latest Android trends, supporting career growth for freshers and professionals alike.</p>
                    <p>With certified trainers and 100% placement assistance, IntelliMindz is your ideal partner for mastering Android development in Chennai.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Android Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Options", description: "Choose between in-person or virtual Android training, designed for freshers and professionals." },
        { id: 2, image: handsonsapImg, title: "Real-Time Projects", description: "Work on live Android projects to gain practical experience in Java and Kotlin." },
        { id: 3, image: casestudyrealtimeImg, title: "Industry-Relevant Curriculum", description: "Learn updated Android concepts like UI/UX, database integration, and app deployment." },
        { id: 4, image: ExperiencedtrainersImg, title: "Certified Trainers", description: "Learn from experts with over 10 years of Android development experience." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Benefit from personalized attention and one-on-one mentoring." },
        { id: 6, image: interactiveImg, title: "Comprehensive Labs", description: "Practice with unlimited lab hours and real-world coding challenges." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Android Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Android", topics: ["Overview of Android OS", "Android Architecture", "Setting Up Android Studio", "Creating First Android App", "Android Project Structure"] },
        { id: 2, title: "Module 2: Java Fundamentals for Android", topics: ["Java Syntax and Data Types", "Object-Oriented Programming", "Control Structures", "Collections and Generics", "Exception Handling"] },
        { id: 3, title: "Module 3: Android Application Components", topics: ["Activities and Intents", "Fragments", "Services", "Broadcast Receivers", "Content Providers"] },
        { id: 4, title: "Module 4: User Interface Design", topics: ["Layouts (Linear, Relative, Constraint)", "Views and Widgets", "Menus (Option, Context, Popup)", "Adapters", "Material Design Principles"] },
        { id: 5, title: "Module 5: Data Storage", topics: ["Shared Preferences", "Internal and External Storage", "SQLite Database", "Room Database", "File Handling"] },
        { id: 6, title: "Module 6: Networking and Web Services", topics: ["HTTP Requests (GET, POST)", "JSON Parsing", "RESTful APIs", "Volley and Retrofit Libraries", "WebView Integration"] },
        { id: 7, title: "Module 7: Advanced UI Components", topics: ["RecyclerView and CardView", "Custom Views", "Animations", "Transitions", "Touch and Gesture Handling"] },
        { id: 8, title: "Module 8: Device Connectivity", topics: ["Bluetooth Connectivity", "Wi-Fi and NFC", "Location Services", "Google Maps Integration", "Sensors"] },
        { id: 9, title: "Module 9: Kotlin for Android", topics: ["Kotlin Basics", "Coroutines", "Null Safety", "Kotlin Extensions", "Migrating Java to Kotlin"] },
        { id: 10, title: "Module 10: App Deployment and Testing", topics: ["Debugging Techniques", "Unit Testing with JUnit", "UI Testing with Espresso", "Publishing to Google Play Store", "App Signing and Optimization"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Android Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Android training", title: "Onsite Training", description: "Customized Android training at your premises, tailored to your team's specific project needs." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Android training center", title: "Offsite Training", description: "Conducted at our training centers for focused Android workshops and hands-on labs." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Android training", title: "Virtual Instructor-Led Training (VILT)", description: "Live online Android sessions via Zoom, offering flexibility for remote teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Android in Chennai</h2>
            <div className="modes-container-grid">
                {trainingModesData.map((mode) => (
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
        { id: 1, name: "Arjun K.", designation: "Android Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Android training at IntelliMindz was a game-changer. The hands-on projects and trainer guidance helped me secure a developer role." },
        { id: 2, name: "Sneha M.", designation: "Mobile App Developer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Java and Kotlin modules were well-structured. I gained confidence in building Android apps, thanks to the practical labs." },
        { id: 3, name: "Kiran V.", designation: "Junior Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The focus on real-time projects and placement support was key to my job at a leading IT firm." },
        { id: 4, name: "Priya R.", designation: "Fresher", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the Android training gave me a strong foundation in UI/UX design. The mock interviews were invaluable." },
        { id: 5, name: "Vikram S.", designation: "App Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers’ expertise in Android Studio and networking modules prepared me well for my current role." }
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
    const formatReviewText = (text) => <p>{text}</p>;

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer Android" />
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
        { id: 1, title: "What is Android?", description: "Android is an open-source mobile operating system developed by Google, based on the Linux kernel, for smartphones, tablets, and other devices." },
        { id: 2, title: "Who can join this Android Training?", description: "Freshers, IT professionals, and anyone with basic programming knowledge can enroll." },
        { id: 3, title: "Do I need prior coding experience?", description: "Basic knowledge of programming (e.g., Java or C++) is helpful but not mandatory." },
        { id: 4, title: "Is Android development in demand in 2025?", description: "Yes, Android developers are in high demand with Android’s 80% market share in mobile apps." },
        { id: 5, title: "What skills will I learn?", description: "You’ll master Java, Kotlin, Android Studio, UI/UX design, and app deployment skills." },
        { id: 6, title: "Is online training available?", description: "Yes, we offer both online and offline training with live, instructor-led sessions." },
        { id: 7, title: "Will I get hands-on training?", description: "Yes, hands-on training through live projects and real-time app development." },
        { id: 8, title: "Is placement support provided?", description: "Yes, we offer 100% placement assistance with resume building and mock interviews." },
        { id: 9, title: "Can Android skills boost my career?", description: "Absolutely, Android expertise opens doors to roles like mobile app developer." },
        { id: 10, title: "Is this course suitable for beginners?", description: "Yes, our course is designed for beginners to build advanced skills from scratch." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Android Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Android course in Chennai.
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

const Androidmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Android Training in Chennai | Practical Oriented Android Course";
const pageDescription = "Join IntelliMindz for top Android training in Chennai. Learn to build mobile apps with real-time projects and expert trainers.";
const pageKeywords = "android training in chennai, android app development, android studio course, intellimindz android";
const ogUrl = "https://localhost:3000/android_training_in_chennai";
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

export default Androidmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
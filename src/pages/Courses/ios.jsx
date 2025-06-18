import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all CSS files
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all image assets
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
                <h1 className="intro-h1">Best iOS Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master iOS app development with expert-led training in Swift and Xcode – your gateway to building cutting-edge mobile applications for Apple devices.</h3>
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
                    Learn from the Best: iOS Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our iOS trainers are seasoned developers with over 8 years of experience building apps for iPhone and iPad. With expertise in Swift, UIKit, and Xcode, our trainers guide you to create real-world iOS applications and prepare for a thriving career in mobile development.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in Swift programming and iOS app development.</li>
                        <li><span className="icon">✓</span> Learn from developers with real-world iOS project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in iOS training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time iOS app projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="iOS Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by iOS developers at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on skills in Swift and Xcode." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world iOS app development." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit iOS course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your iOS skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led iOS sessions from anywhere. Our online training includes hands-on coding in Xcode, real-time app projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded iOS video sessions. Get lifetime access to course materials, code samples, and updates to stay current with Swift and iOS SDK.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person iOS sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom iOS learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled iOS Developer with IntelliMindz</h1>
            <p>Industry-relevant iOS training to build your expertise in creating innovative apps for iPhone and iPad.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your iOS Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our iOS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our iOS Training is designed to provide learners with comprehensive skills in developing applications for Apple devices using Swift and Xcode. Our curriculum covers Swift programming, UIKit, SwiftUI, Core Data, and API integration, preparing you to build professional iOS apps.</p>
                    <p>The course includes interactive classes, hands-on coding labs, and real-time app development projects. By working on practical scenarios, learners gain the confidence to create apps from scratch and publish them on the App Store.</p>
                    <p>Whether you're a beginner in programming or an experienced developer aiming to specialize in iOS, our training equips you with the skills to excel in the competitive mobile app development market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="iOS Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual iOS training, ensuring accessibility for working professionals, students, and job seekers. Choose the format that suits your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-on Coding Labs", description: "Our training emphasizes practical experience with dedicated Xcode labs, allowing you to code, debug, and deploy iOS apps." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World App Projects", description: "Work on real-world iOS app projects to enhance your problem-solving skills and prepare for professional app development challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert iOS Trainers", description: "Learn from iOS developers with extensive experience in building apps for Apple devices across industries, ensuring expert guidance." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Our limited batch sizes ensure personalized mentoring, addressing individual queries and providing focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive coding sessions and assessments aligned with iOS industry requirements, helping you retain knowledge and prepare for job roles." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>iOS Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to iOS Development", topics: ["Overview of iOS Ecosystem", "Setting Up Xcode and Developer Account", "Introduction to Swift Programming", "Swift Playgrounds", "App Development Lifecycle"] },
        { id: 2, title: "Module 2: Swift Programming Basics", topics: ["Swift Syntax and Variables", "Control Flow and Loops", "Functions and Closures", "Optionals and Error Handling", "Collections (Arrays, Dictionaries, Sets)"] },
        { id: 3, title: "Module 3: Object-Oriented Programming in Swift", topics: ["Classes and Structures", "Inheritance and Polymorphism", "Protocols and Extensions", "Generics", "Memory Management (ARC)"] },
        { id: 4, title: "Module 4: UIKit Fundamentals", topics: ["Introduction to UIKit", "View Controllers and Navigation", "UI Components (Buttons, Labels, Text Fields)", "Auto Layout and Constraints", "Table Views and Collection Views"] },
        { id: 5, title: "Module 5: SwiftUI Introduction", topics: ["SwiftUI vs. UIKit", "Building UI with SwiftUI", "State Management in SwiftUI", "Navigation and Lists in SwiftUI", "Combining SwiftUI and UIKit"] },
        { id: 6, title: "Module 6: Data Persistence and Core Data", topics: ["User Defaults and File Storage", "Introduction to Core Data", "Core Data Stack and Managed Objects", "Fetching and Updating Data", "CloudKit Integration"] },
        { id: 7, title: "Module 7: Networking and APIs", topics: ["URLSession and HTTP Requests", "JSON Parsing with Codable", "REST API Integration", "Handling Asynchronous Tasks", "Third-Party Libraries (Alamofire)"] },
        { id: 8, title: "Module 8: Advanced iOS Features", topics: ["Push Notifications", "Location Services and Maps", "Camera and Photo Library Access", "App Extensions and Widgets", "App Store Submission Guidelines"] },
        { id: 9, title: "Module 9: Real-World iOS App Projects", topics: ["Building a To-Do List App", "Creating a Weather App with APIs", "Developing a Social Media App", "Testing and Debugging Apps", "Project Presentation and Review"] },
        { id: 10, title: "Module 10: Career Preparation", topics: ["iOS Developer Portfolio Building", "App Store Publishing Process", "Resume and Interview Preparation", "Mock Interviews for iOS Roles", "Industry Trends in Mobile Development"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                iOS Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate iOS training", title: "Onsite Training:", description: "Conducted at your premises, this iOS training offers a tailored experience using your development tools, ideal for upskilling teams in app development." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite iOS training center", title: "Offsite Training:", description: "Held at professional training venues, this iOS training provides a focused environment for hands-on Swift and Xcode coding." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led iOS training", title: "Virtual Instructor-Led Training:", description: "Delivered live via online platforms, this iOS training is perfect for remote teams, combining flexibility with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for iOS in Chennai</h2>
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
        { id: 1, name: "Suresh K.", designation: "iOS Developer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s iOS training was outstanding. The hands-on labs with Xcode and real-world app projects helped me build a strong portfolio and land my first iOS job." },
        { id: 2, name: "Anjali R.", designation: "Mobile App Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The iOS course was engaging and practical. The trainers’ expertise in Swift and UIKit made complex concepts easy, aiding my transition to mobile development." },
        { id: 3, name: "Karthik V.", designation: "Junior iOS Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s iOS training was a game-changer. The interview prep and project work were crucial for my job placement. Flexible batches were a big plus." },
        { id: 4, name: "Priya S.", designation: "iOS Trainee", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the iOS course was easy to follow. The trainers explained Swift concepts clearly, helping me start my career in app development." },
        { id: 5, name: "Vijay M.", designation: "Senior iOS Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The iOS course covered advanced topics like SwiftUI and API integration. The practical labs and trainer insights were highly valuable for my growth." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer iOS" />
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
        { id: 1, title: "What is iOS Training?", description: "iOS Training teaches you to develop applications for Apple devices like iPhone and iPad using Swift, Xcode, and iOS SDK, preparing you for a career in mobile app development." },
        { id: 2, title: "Who can take iOS training?", description: "Freshers, IT graduates, developers, and anyone interested in mobile app development or transitioning to an iOS career can join the training." },
        { id: 3, title: "Do I need prior coding experience for iOS training?", description: "Basic programming knowledge is helpful, but our course starts with Swift basics, making it suitable for beginners." },
        { id: 4, title: "Is iOS development in demand in 2025?", description: "Yes, iOS developers are highly demanded globally, with opportunities in startups and MNCs in Chennai, especially for Apple’s growing ecosystem." },
        { id: 5, title: "What tools are used in iOS training?", description: "We use Xcode as the primary IDE, along with Swift Playgrounds, Simulator, and third-party libraries like Alamofire for hands-on learning." },
        { id: 6, title: "Is iOS training available online?", description: "Yes, we offer both online and offline iOS training with live instructor-led sessions and hands-on coding labs." },
        { id: 7, title: "Will there be practical projects in iOS training?", description: "Yes, you’ll build real-world apps like to-do lists and weather apps, gaining practical experience in coding and debugging." },
        { id: 8, title: "Do you offer App Store publishing guidance?", description: "Yes, we guide you through the App Store submission process, including creating developer accounts and meeting Apple’s guidelines." },
        { id: 9, title: "Can I switch to iOS development with this training?", description: "Absolutely. Our iOS training is designed to help you transition to iOS development roles, even from other IT domains." },
        { id: 10, title: "How long does iOS training take?", description: "Our iOS course typically lasts 3 months, with flexible schedules for weekdays, weekends, and fast-track options." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">iOS Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get answers to your questions about our iOS training in Chennai.
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
            <p className="cta-banner-text">Navigate your career ambitions with our expert iOS guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Iosmain = () => {
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
                <title>iOS Training in Chennai | iOS Course in Chennai | Swift App Development</title>
                <meta name="description" content="Join iOS Training in Chennai at IntelliMindz to master Swift and Xcode for app development. Enroll in our iOS course to build apps for iPhone and iPad." />
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

export default Iosmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
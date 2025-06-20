import React, { useState } from 'react';
import Meta from '../../components/Meta';
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
                <h1 className="intro-h1">Best Selenium Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master automation testing with expert-led Selenium Training – your pathway to excelling in web application testing using Selenium WebDriver, Java, and Python.</h3>
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
                    Learn from the Best: Selenium Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Selenium trainers are experienced QA professionals with over 8 years in automation testing. With hands-on expertise in Selenium WebDriver, Java, and Python, our trainers guide you to master test automation and prepare for a successful career in software testing.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in Selenium WebDriver and test automation.</li>
                        <li><span className="icon">✓</span> Learn from QA experts with real-world testing experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven success in Selenium training.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time testing projects to build practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Selenium Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by QA experts at our Selenium training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on skills in Selenium automation." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world testing scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit Selenium course content and key concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your testing skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Selenium sessions from anywhere. Our online training includes hands-on labs with Selenium WebDriver, real-time test projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Selenium video sessions. Get lifetime access to course materials, test scripts, and updates to stay current with automation trends.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person Selenium sessions for an immersive learning experience. Classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom Selenium learning. Our hybrid model lets you switch formats based on your schedule, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled Automation Tester with IntelliMindz</h1>
            <p>Industry-relevant Selenium training to build your expertise in automating web application testing.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Selenium Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Selenium Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our Selenium Training is designed to equip learners with comprehensive skills in automation testing using Selenium WebDriver, Java, and Python. Our curriculum covers test automation frameworks, web element interactions, cross-browser testing, and integration with tools like TestNG and Jenkins.</p>
                    <p>The course includes interactive classes, hands-on labs with real-world web applications, and live testing projects. By working on practical scenarios, learners gain the confidence to automate complex test cases and enhance software quality.</p>
                    <p>Whether you're a beginner in testing or a manual tester aiming to transition to automation, our training provides the skills to excel in the competitive QA job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Selenium Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual Selenium training, ensuring accessibility for working professionals, students, and job seekers. Choose the format that suits your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-on Testing Labs", description: "Our training emphasizes practical experience with dedicated labs using Selenium WebDriver, allowing you to automate and debug test scripts." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Testing Projects", description: "Work on real-world testing projects to enhance your problem-solving skills and prepare for professional QA challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Selenium Trainers", description: "Learn from QA professionals with extensive experience in automation testing across industries, ensuring expert guidance." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Our limited batch sizes ensure personalized mentoring, addressing individual queries and providing focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive sessions and assessments aligned with Selenium industry requirements, helping you retain knowledge and prepare for job roles." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Selenium Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Selenium", topics: ["Overview of Automation Testing", "Introduction to Selenium Suite", "Selenium WebDriver Architecture", "Setting Up Selenium Environment", "Running First Test Case"] },
        { id: 2, title: "Module 2: Java/Python for Selenium", topics: ["Java/Python Basics for Testing", "Variables, Data Types, and Loops", "Functions and Exception Handling", "OOPs Concepts in Java/Python", "Working with Libraries"] },
        { id: 3, title: "Module 3: Selenium WebDriver Basics", topics: ["WebDriver Commands", "Locating Web Elements (ID, XPath, CSS)", "Handling Web Elements (Textbox, Buttons)", "Browser Navigation", "Managing Alerts and Pop-ups"] },
        { id: 4, title: "Module 4: Advanced WebDriver Techniques", topics: ["Handling Dynamic Web Elements", "Working with Frames and Windows", "Synchronizing Tests (Waits)", "Mouse and Keyboard Actions", "Taking Screenshots"] },
        { id: 5, title: "Module 5: TestNG Framework", topics: ["Introduction to TestNG", "TestNG Annotations", "Creating Test Suites", "Parallel Test Execution", "Generating Test Reports"] },
        { id: 6, title: "Module 6: Page Object Model (POM)", topics: ["Introduction to POM", "Designing POM Classes", "Implementing Page Factory", "Advantages of POM", "Maintaining Test Scripts"] },
        { id: 7, title: "Module 7: Data-Driven Testing", topics: ["Reading Data from Excel/CSV", "Apache POI for Excel Handling", "Data-Driven Framework Design", "Parameterization in TestNG", "Running Tests with Multiple Data Sets"] },
        { id: 8, title: "Module 8: Integration with Tools", topics: ["Selenium with Jenkins for CI/CD", "Maven for Project Management", "Git for Version Control", "Log4j for Logging", "Cross-Browser Testing with Grid"] },
        { id: 9, title: "Module 9: Real-World Testing Projects", topics: ["Automating E-commerce Website Testing", "Testing Login and Form Modules", "End-to-End Test Scenarios", "Debugging and Reporting Bugs", "Project Presentation and Review"] },
        { id: 10, title: "Module 10: Career Preparation", topics: ["Selenium Tester Resume Building", "Mock Interviews for QA Roles", "ISTQB Certification Guidance", "Interview Questions on Selenium", "Industry Trends in Automation Testing"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Selenium Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Selenium training", title: "Onsite Training:", description: "Conducted at your premises, this Selenium training offers a tailored experience using your testing tools, ideal for upskilling QA teams." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Selenium training center", title: "Offsite Training:", description: "Held at professional training venues, this Selenium training provides a focused environment for hands-on automation testing." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Selenium training", title: "Virtual Instructor-Led Training:", description: "Delivered live via online platforms, this Selenium training is perfect for remote teams, combining flexibility with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Selenium in Chennai</h2>
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
        { id: 1, name: "Ramesh T.", designation: "Automation Tester", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Selenium training was exceptional. The hands-on labs with WebDriver and real-world projects helped me secure a QA role with confidence." },
        { id: 2, name: "Divya S.", designation: "QA Engineer", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Selenium course was practical and well-structured. The trainers’ expertise in TestNG and POM made complex topics easy, aiding my career transition." },
        { id: 3, name: "Arjun K.", designation: "Test Automation Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Selenium training was a turning point. The mock interviews and project work were key to landing my job. Flexible batches were very convenient." },
        { id: 4, name: "Nisha P.", designation: "Selenium Trainee", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the Selenium course was easy to follow. The trainers explained automation concepts clearly, helping me kickstart my QA career." },
        { id: 5, name: "Vikram S.", designation: "Senior QA Engineer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Selenium course covered advanced topics like Jenkins and data-driven testing. The practical labs and trainer insights were invaluable for my growth." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Selenium" />
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
        { id: 1, title: "What is Selenium Training?", description: "Selenium Training teaches you to automate web application testing using Selenium WebDriver, Java, and Python, preparing you for a career in software quality assurance." },
        { id: 2, title: "Who can take Selenium training?", description: "Freshers, manual testers, developers, and anyone interested in automation testing or transitioning to a QA career can join the training." },
        { id: 3, title: "Do I need prior coding experience for Selenium?", description: "Basic programming knowledge (Java or Python) is helpful, but our course covers the basics, making it suitable for beginners." },
        { id: 4, title: "Is Selenium testing in demand in 2025?", description: "Yes, Selenium testers are highly demanded in IT for roles like automation tester, with opportunities in MNCs and startups in Chennai and globally." },
        { id: 5, title: "What tools are used in Selenium training?", description: "We use Selenium WebDriver, Eclipse/IntelliJ IDEA, TestNG, Maven, Jenkins, and Git for hands-on automation testing labs." },
        { id: 6, title: "Is Selenium training available online?", description: "Yes, we offer both online and offline Selenium training with live instructor-led sessions and hands-on labs." },
        { id: 7, title: "Will there be practical projects in Selenium training?", description: "Yes, you’ll work on real-world projects like automating e-commerce websites, gaining practical experience in test automation." },
        { id: 8, title: "Do you offer certification guidance for Selenium?", description: "Yes, we provide guidance for ISTQB certification and prepare you with mock interviews and Selenium-specific questions." },
        { id: 9, title: "Can I switch to automation testing with Selenium?", description: "Absolutely. Our Selenium training is ideal for manual testers transitioning to automation testing roles." },
        { id: 10, title: "How long does Selenium training take?", description: "Our Selenium course typically lasts 3 months, with flexible schedules for weekdays, weekends, and fast-track options." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Selenium Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get answers to your questions about our Selenium training in Chennai.
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
            <p className="cta-banner-text">Navigate your career ambitions with our expert Selenium guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Seleniummain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Selenium Training in Chennai | Practical Oriented Selenium Course";
const pageDescription = "Learn Selenium automation testing at IntelliMindz Chennai. Master WebDriver, TestNG, and frameworks.";
const pageKeywords = "selenium training in chennai, selenium webdriver course, automation testing, intellimindz selenium";
const ogUrl = "https://localhost:3000/selenium_training_in_chennai";
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

export default Seleniummain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files

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
                <h1 className="intro-h1">Best Java Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master Java programming with our expert-led training – your gateway to a successful career in software development.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
    );
};

const JavaTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: Java Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Java trainers are seasoned professionals with extensive experience in Java development. With real-world project exposure and deep industry knowledge, they guide you through a comprehensive Java learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in Java from basics to advanced concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing Java developers with real-world project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record in Java training success.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time Java projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Java Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by Java experts from our training centre in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Perfect for professionals seeking a Java training centre near you that delivers hands-on skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world Java programming tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key concepts and revise the Java course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your understanding." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Java sessions from anywhere. Our online training includes hands-on coding, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn Java at your own pace with pre-recorded videos. Get lifetime access to course materials, coding exercises, and regular updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Java sessions for an immersive experience. Interact directly with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom Java training. Switch formats based on your convenience while maintaining progress.", isPopular: false }
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

const JavaHeroSection = ({ openContactModal }) => {
    return (
        <div className="sap-fico-expert-section">
            <h1>Become a Skilled Java Developer with IntelliMindz</h1>
            <p>Industry-relevant Java training to build your programming expertise for real-world applications.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Java Journey Today!</button>
        </div>
    );
};

const JavaAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Java Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our Java training is designed to provide both theoretical knowledge and practical programming skills. Our curriculum covers core Java concepts like OOP, collections, multithreading, JDBC, and advanced topics like Spring, Hibernate, and microservices.</p>
                    <p>The course includes interactive coding sessions, hands-on exercises, and real-world projects. By working on practical applications, learners gain the confidence to build robust Java-based solutions for enterprise environments.</p>
                    <p>Whether you're a beginner or an experienced developer looking to enhance your Java skills, our training equips you to excel in the competitive software development industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Java Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual Java training, making it accessible for working professionals, students, and job seekers. Choose the format that suits your schedule and learning style." },
        { id: 2, image: handsonsapImg, title: "Hands-on Coding Sessions", description: "Our training emphasizes practical experience with extensive coding exercises. Gain access to development environments to write, test, and debug Java code, ensuring job-ready skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Project-Based Learning", description: "Work on projects modeled after real-world Java applications. These exercises enhance problem-solving skills and prepare you for technical interviews and industry challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Java Trainers", description: "Learn from industry professionals with years of experience in Java development across diverse domains. They provide practical insights and best practices for professional success." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Our small batch sizes ensure individual mentoring, allowing trainers to address your queries and provide tailored guidance for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and assessments aligned with industry requirements, preparing you for Java interviews and certifications." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Java Training in Chennai Key Features</h2>
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

const JavaCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to Java", topics: ["Overview of Java and its Applications", "Java Development Environment Setup", "Java Syntax and Structure", "Variables, Data Types, and Operators", "Control Flow Statements", "Introduction to Object-Oriented Programming", "Java Packages and Access Modifiers"] },
        { id: 2, title: "Module 2: Object-Oriented Programming in Java", topics: ["Classes and Objects", "Constructors and Methods", "Inheritance and Polymorphism", "Abstraction and Encapsulation", "Interfaces and Abstract Classes", "Method Overloading and Overriding", "Exception Handling Basics"] },
        { id: 3, title: "Module 3: Java Collections Framework", topics: ["Introduction to Collections", "List, Set, and Map Interfaces", "ArrayList, LinkedList, and HashSet", "HashMap and TreeMap", "Iterators and Comparators", "Generics in Java", "Collection Algorithms"] },
        { id: 4, title: "Module 4: Multithreading in Java", topics: ["Introduction to Threads", "Creating Threads using Thread Class and Runnable", "Thread Lifecycle and States", "Synchronization and Locks", "Inter-Thread Communication", "Executor Framework", "Concurrent Collections"] },
        { id: 5, title: "Module 5: Java I/O and File Handling", topics: ["File and Stream Concepts", "Byte and Character Streams", "FileReader and FileWriter", "Serialization and Deserialization", "NIO (New I/O) Package", "Working with Files and Directories", "Buffered I/O Operations"] },
        { id: 6, title: "Module 6: JDBC (Java Database Connectivity)", topics: ["Introduction to JDBC", "JDBC Architecture and Drivers", "Connecting to Databases", "Executing SQL Queries", "Prepared Statements and Callable Statements", "Transaction Management", "Handling ResultSets"] },
        { id: 7, title: "Module 7: Java GUI Programming", topics: ["Introduction to Swing and AWT", "Creating Windows and Frames", "Event Handling", "Layout Managers", "Components like Buttons, Labels, TextFields", "Building Interactive GUIs", "Event Listeners and Adapters"] },
        { id: 8, title: "Module 8: Introduction to Spring Framework", topics: ["Overview of Spring Framework", "Spring Core and IoC Container", "Dependency Injection", "Spring Bean Lifecycle", "Spring MVC Basics", "Configuring Spring Applications", "RESTful Web Services with Spring"] },
        { id: 9, title: "Module 9: Hibernate and JPA", topics: ["Introduction to ORM and Hibernate", "Hibernate Configuration", "Mapping Entities and Relationships", "HQL (Hibernate Query Language)", "Criteria API", "JPA Annotations", "Caching in Hibernate"] },
        { id: 10, title: "Module 10: Advanced Java and Real-Time Project", topics: ["Introduction to Microservices", "Java 8 Features (Lambda, Streams)", "REST API Development", "Unit Testing with JUnit", "Building a Real-Time Java Project", "Code Optimization and Best Practices", "Project Deployment"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Java Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Java training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored learning experience for your team, using your tools and workflows for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Java training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides focused learning away from workplace distractions, ideal for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Java training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via online platforms, VILT offers flexibility for remote teams with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Java in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "Java Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Java course was well-structured with real-world coding projects. The trainer was patient and helped me master Java concepts like collections and multithreading." },
        { id: 2, name: "Sneha R.", designation: "Software Engineer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The clear explanation of OOP and Spring framework, along with hands-on tasks, helped me transition to a Java role confidently. Highly recommend this course!" },
        { id: 3, name: "Vignesh T.", designation: "Java Freelancer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s practical approach and flexible schedule fit my freelance work perfectly. The mock interviews and real-world projects were invaluable for my career." },
        { id: 4, name: "Ritika S.", designation: "Java Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I learned Java from scratch with excellent support. The trainers made complex topics like JDBC and Hibernate easy to understand." },
        { id: 5, name: "Ramesh A.", designation: "Senior Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The depth of content on Spring, microservices, and Java 8 features was impressive. The hands-on sessions made advanced topics accessible and practical." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Java" />
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

const JavaFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is Java used for?", description: "Java is used for building web applications, mobile apps, desktop applications, enterprise software, and more, due to its platform independence and robustness." },
        { id: 2, title: "Who should take this Java training?", description: "Fresh graduates, software developers, and professionals looking to switch to Java or enhance their programming skills." },
        { id: 3, title: "Do I need prior coding experience to learn Java?", description: "Basic programming knowledge is helpful, but our course starts from scratch, making it suitable for beginners." },
        { id: 4, title: "Is Java still in demand in 2025?", description: "Yes, Java remains widely used in enterprise applications, Android development, and web services, ensuring strong demand." },
        { id: 5, title: "What’s the difference between Java and Python?", description: "Java is a statically typed, platform-independent language suited for enterprise apps, while Python is dynamically typed and often used for scripting and data analysis." },
        { id: 6, title: "Is the training available online?", description: "Yes, our Java training is offered in both online and offline modes with live instructor-led sessions and coding environments." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, we provide access to coding environments for hands-on exercises in OOP, JDBC, Spring, and more." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, each module includes mock interviews, resume tips, and real-world coding scenarios to prepare you for Java roles." },
        { id: 9, title: "Can I switch to Java from another IT field?", description: "Yes, with basic coding skills, Java is an excellent choice to enter or advance in software development." },
        { id: 10, title: "Is Java suitable for freshers?", description: "Absolutely, Java is a great starting point for freshers aiming for a career in software development." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Java Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Java course in Chennai.
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

const JavaMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    return (
        <HelmetProvider>
            <div>
                <JavaOnline openContactModal={openContactModal} />
                {ContactModal && <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />}
            </div>
        </HelmetProvider>
    );
};

const JavaOnline = ({ openContactModal }) => {
    return (
        <>
            <Helmet>
                <title>Java Training in Chennai | Java Course in Chennai</title>
                <meta name="description" content="Master Java programming with our expert-designed Java Training in Chennai. Learn to build robust applications through our comprehensive Java course." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <JavaTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <JavaHeroSection openContactModal={openContactModal} />
            <JavaAboutSection />
            <KeyFeaturesSection />
            <JavaCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <JavaFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default JavaMain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
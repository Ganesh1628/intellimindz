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
          <img src={homeintro} alt="Python Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Python Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Python Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Python Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At Chennai Trainings, our Python trainers are industry professionals with extensive experience in Python development across various domains. They bring real-world expertise to guide you through your Python learning journey, ensuring you gain practical skills for a successful career.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation in Python programming from basics to advanced concepts.</li>
                        <li><span className="icon">✓</span> Learn from expert Python developers with hands-on project experience.</li>
                        <li><span className="icon">✓</span> Benefit from Chennai Trainings’ proven track record in delivering top-quality Python training.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world Python projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Python Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Python experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a Python training center that emphasizes hands-on skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world Python programming tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access Python course materials and resources anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your Python skills." }
    ];
    return (
        <div className="corporate-section">
            <h2 className="corporate-title">Why Choose Chennai Trainings?</h2>
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Python sessions from anywhere. Our online training includes hands-on coding exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn Python at your own pace with pre-recorded video lectures. Get lifetime access to course materials, downloadable resources, and regular updates to stay current.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Python sessions for an immersive learning experience. Our classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Our hybrid model lets you switch between formats to suit your schedule and learning preferences.", isPopular: false }
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
            <h1>Become a Skilled Python Developer with Chennai Trainings</h1>
            <p>Master Python programming with industry-relevant training to excel in software development, data science, and automation.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Python Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Python Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At Chennai Trainings, our Python training is designed to provide hands-on experience and a deep understanding of Python programming. Our comprehensive curriculum covers Python fundamentals, data structures, web development, data analysis, and more, ensuring you gain practical skills for real-world applications.</p>
                    <p>The course includes live coding sessions, practical exercises, and project-based learning. By working on industry-relevant projects, learners develop the confidence to tackle real-world programming challenges in fields like web development, data science, and automation.</p>
                    <p>Whether you’re a beginner or an experienced professional looking to enhance your Python skills, our training equips you to succeed in the competitive tech industry with a strong foundation and practical expertise.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Python Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual Python training, making it accessible for working professionals, students, and job seekers. Choose the mode that fits your schedule for a seamless learning experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Coding Sessions", description: "Our training emphasizes practical learning with real-time coding exercises. Gain access to coding environments to practice Python programming and build confidence in applying concepts." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Project-Based Learning", description: "Work on projects modeled after real-world Python applications in web development, data analysis, and automation to enhance problem-solving skills and prepare for industry challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Python Trainers", description: "Learn from industry professionals with extensive experience in Python development across domains like web development, data science, and machine learning, ensuring high-quality mentorship." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "Our limited batch sizes ensure individual attention, allowing trainers to address queries and provide tailored guidance to help you master Python effectively." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and assessments aligned with industry requirements, helping you retain knowledge and prepare for Python-related job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Python Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Python", topics: ["Overview of Python and its Applications", "Python Installation and Setup", "Python Interpreter and IDEs", "Basic Syntax and Variables", "Input/Output Operations", "Python Comments and Documentation"] },
        { id: 2, title: "Module 2: Python Data Types and Operators", topics: ["Numeric, String, and Boolean Data Types", "Lists, Tuples, Sets, and Dictionaries", "Type Conversion", "Arithmetic, Logical, and Comparison Operators", "Conditional Statements (if, elif, else)", "Loops (for, while)", "List Comprehensions"] },
        { id: 3, title: "Module 3: Functions and Modules", topics: ["Defining and Calling Functions", "Function Arguments and Return Values", "Lambda Functions", "Modules and Packages", "Standard Library Overview", "Importing Modules", "Creating Custom Modules"] },
        { id: 4, title: "Module 4: Object-Oriented Programming in Python", topics: ["Classes and Objects", "Attributes and Methods", "Inheritance and Polymorphism", "Encapsulation and Abstraction", "Exception Handling", "Working with Constructors", "Method Overriding"] },
        { id: 5, title: "Module 5: File Handling and Data Structures", topics: ["Reading and Writing Files", "Working with CSV and JSON Files", "Stacks and Queues", "Linked Lists", "Trees and Graphs (Introduction)", "File I/O Error Handling", "Context Managers"] },
        { id: 6, title: "Module 6: Python Libraries for Data Analysis", topics: ["Introduction to NumPy", "Pandas for Data Manipulation", "Data Cleaning and Preprocessing", "Data Visualization with Matplotlib", "Seaborn for Advanced Visualization", "Working with DataFrames", "Exploratory Data Analysis"] },
        { id: 7, title: "Module 7: Web Development with Python", topics: ["Introduction to Flask and Django", "Building a Simple Web Application", "Handling HTTP Requests", "Templates and Static Files", "Database Integration with SQLite", "REST API Basics", "Deploying a Web App"] },
        { id: 8, title: "Module 8: Automation and Scripting", topics: ["Automating Tasks with Python", "Working with OS and Sys Modules", "File and Directory Management", "Web Scraping with BeautifulSoup", "Automating Browser Tasks with Selenium", "Scheduling Tasks", "Error Handling in Scripts"] },
        { id: 9, title: "Module 9: Introduction to Machine Learning", topics: ["Basics of Machine Learning", "Scikit-learn Library", "Supervised vs Unsupervised Learning", "Building a Simple ML Model", "Data Preprocessing for ML", "Model Evaluation Metrics", "Hands-on ML Project"] },
        { id: 10, title: "Module 10: Capstone Project and Advanced Topics", topics: ["Real-World Python Project Development", "Version Control with Git", "Unit Testing with PyTest", "Introduction to Cloud Deployment", "Best Practices in Python Coding", "Code Optimization Techniques", "Project Presentation and Review"] }
    ];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Python Course Modules
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
                        {allModulesData.find(module => module.id === activeModuleId).topics.map((item, index) => (<li key={index}>{item}</li>))}
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Freshers", "Non-IT to IT Transition"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.5 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Working Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Python training", title: "Onsite Training:", description: "Conducted at your company premises, this training offers a tailored learning experience using your tools and workflows, ideal for upskilling teams in Python programming." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Python training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides focused Python training without workplace distractions, perfect for certifications and workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Python training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via platforms like Zoom, VILT offers flexibility for remote teams with real-time instructor interaction and hands-on Python exercises." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Python in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "Python Developer", avatarInitial: "K", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The Python course at Chennai Trainings was exceptional. The hands-on projects helped me master real-world coding scenarios, and the trainers provided excellent guidance throughout." },
        { id: 2, name: "Priya N.", designation: "Data Analyst", avatarInitial: "P", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The course structure was clear, and the focus on data analysis with Pandas and NumPy was invaluable. The trainers’ real-world experience made complex topics easy to understand." },
        { id: 3, name: "Suresh V.", designation: "Software Engineer", avatarInitial: "S", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The flexible batch timings and practical approach to Python programming helped me balance work and learning. The interview preparation was a game-changer for my career." },
        { id: 4, name: "Anitha R.", designation: "Python Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "As a beginner, I found the course easy to follow. The trainers explained Python concepts from scratch, and the projects gave me the confidence to start my tech career." },
        { id: 5, name: "Vikram M.", designation: "Web Developer", avatarInitial: "V", rating: 5, companyLogoText: "Chennai Trainings", reviewText: "The web development module with Flask was fantastic. The practical sessions and real-world examples helped me build and deploy my first web application successfully." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Python" />
                    </div>
                </div>
                <div className="review-content-area">
                    <div className="review-card">
                        <div className="review-card-header">
                            <span className="review-company-logo-text">{currentReview.companyLogoText || "Chennai Trainings"}</span>
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
        { id: 1, title: "What is Python used for?", description: "Python is a versatile programming language used for web development, data analysis, machine learning, automation, and more." },
        { id: 2, title: "Who should take this Python training?", description: "Freshers, software developers, data analysts, and professionals looking to transition into tech roles like data science or web development." },
        { id: 3, title: "Do I need prior coding experience to learn Python?", description: "No prior coding experience is required. Our course starts from basics, making it suitable for beginners." },
        { id: 4, title: "Is Python in demand in 2025?", description: "Yes, Python is highly in demand for roles in data science, machine learning, web development, and automation due to its versatility." },
        { id: 5, title: "What’s the difference between Python and other programming languages?", description: "Python is known for its simplicity, readability, and wide applicability across domains like data science, AI, and web development." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Python training with live instructor-led sessions and hands-on practice." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, our training includes live coding sessions and projects to ensure practical experience in Python programming." },
        { id: 8, title: "Do you offer interview preparation?", description: "Yes, we provide mock interviews, resume guidance, and real-world project scenarios to prepare you for Python job roles." },
        { id: 9, title: "Can I switch to Python from another field?", description: "Absolutely. Python’s simplicity makes it an ideal choice for professionals transitioning from non-tech or other IT fields." },
        { id: 10, title: "Is Python suitable for freshers?", description: "Yes, Python is beginner-friendly and a great starting point for freshers aiming for careers in tech." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Python Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Python course in Chennai.
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
            <p className="cta-banner-text">Kickstart your tech career with our expert Python training.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Pythonmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Python Training in Chennai | Practical Oriented Python Course";
const pageDescription = "Join IntelliMindz for Python training in Chennai. Learn Python basics, OOP, and frameworks with real-time projects.";
const pageKeywords = "python training in chennai, python course, django flask, intellimindz python";
const ogUrl = "https://localhost:3000/python_training_in_chennai";
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

export default Pythonmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
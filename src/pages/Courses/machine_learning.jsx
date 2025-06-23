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
      {/* <div className="intro-container"> */}
      {/* <div className="training-image-container" >
          <img src={homeintro} alt="Machine Learning Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Machine Learning Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Machine Learning Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from the Best: Machine Learning Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Machine Learning trainers are seasoned data scientists and AI experts with extensive industry experience. Their hands-on expertise in real-world ML projects ensures a practical, job-oriented learning experience tailored to your career goals.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Master Machine Learning from fundamentals to advanced algorithms.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on ML project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven track record in ML training success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support with resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world ML projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy personalized learning tailored to your pace and aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Machine Learning Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from expert data scientists at our Machine Learning training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on ML training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule for seamless learning." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on ML algorithms and their applications." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access ML course materials anytime for revision and reinforcement." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your ML expertise." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Machine Learning sessions with hands-on projects, real-world datasets, and interactive Q&A from anywhere." },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded videos, lifetime access to course materials, and regular content updates." },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person ML training with direct trainer interaction and collaborative learning." },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support." }
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
            <h1>Become a Skilled Machine Learning Expert with IntelliMindz</h1>
            <p>Gain expertise in ML algorithms and applications with industry-focused training for AI and data science roles.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your ML Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Machine Learning Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive Machine Learning training to equip learners with skills in AI, data analysis, and predictive modeling. Our curriculum covers core ML concepts, including supervised and unsupervised learning, deep learning, and practical applications using Python and popular libraries.</p>
                    <p>The course includes hands-on projects, real-world datasets, and interactive sessions to build job-ready expertise. Learners work on industry-relevant applications, gaining confidence to tackle real-world ML challenges.</p>
                    <p>Whether you're a beginner or a professional looking to upskill, our ML training provides the knowledge and hands-on experience to excel in the fast-growing AI industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Machine Learning Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person and online ML training, tailored for students, professionals, and career switchers to suit their schedules." },
        { id: 2, image: handsonsapImg, title: "Hands-on ML Projects", description: "Gain practical experience with real-world datasets and projects using Python, TensorFlow, and scikit-learn." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World ML Applications", description: "Work on industry projects like predictive modeling and NLP to prepare for real-world ML challenges." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Data Scientists", description: "Learn from industry professionals with extensive experience in ML and AI across various domains." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Attention", description: "Benefit from small batches for one-on-one mentoring, ensuring personalized support and doubt resolution." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Engage in interactive discussions and module-wise assessments aligned with industry ML roles." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Machine Learning Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Machine Learning", topics: ["Overview of ML and AI", "Types of Machine Learning", "Python for ML", "Setting Up ML Environment", "Data Preprocessing Basics"] },
        { id: 2, title: "Module 2: Supervised Learning", topics: ["Linear and Logistic Regression", "Decision Trees and Random Forests", "Support Vector Machines", "K-Nearest Neighbors", "Model Evaluation Metrics"] },
        { id: 3, title: "Module 3: Unsupervised Learning", topics: ["K-Means Clustering", "Hierarchical Clustering", "Principal Component Analysis (PCA)", "Anomaly Detection", "Association Rules"] },
        { id: 4, title: "Module 4: Advanced ML Algorithms", topics: ["Gradient Boosting (XGBoost, LightGBM)", "Naive Bayes", "Ensemble Methods", "Hyperparameter Tuning", "Feature Engineering"] },
        { id: 5, title: "Module 5: Deep Learning Basics", topics: ["Introduction to Neural Networks", "TensorFlow and Keras", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Deep Learning Applications"] },
        { id: 6, title: "Module 6: Natural Language Processing (NLP)", topics: ["Text Preprocessing", "Bag of Words and TF-IDF", "Word Embeddings", "Sentiment Analysis", "Chatbot Development Basics"] },
        { id: 7, title: "Module 7: ML with Big Data", topics: ["Introduction to Apache Spark", "MLlib for Machine Learning", "Handling Large Datasets", "Distributed Computing Basics", "Real-Time Data Processing"] },
        { id: 8, title: "Module 8: Real-World ML Projects", topics: ["End-to-End ML Pipeline", "Predictive Modeling Project", "Image Classification Project", "NLP-Based Project", "Model Deployment and Monitoring"] },
        { id: 9, title: "Module 9: ML Tools and Frameworks", topics: ["Scikit-learn for ML", "Pandas and NumPy", "Matplotlib and Seaborn", "Cloud Platforms (AWS, GCP)", "Version Control with Git"] },
        { id: 10, title: "Module 10: ML Career and Industry Insights", topics: ["ML Interview Preparation", "Resume Building for ML Roles", "Real-World Case Studies", "Ethics in AI", "Project Capstone and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Machine Learning Course Modules
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
        { id: 1, monthYear: "June 2023", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Freshers", "Non IT to IT transition"] },
        { id: 2, monthYear: "June 2023", type: "Weekends", schedule: "Friday - Saturday", mode: "Online/Offline", duration: "1.5 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Machine Learning training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers tailored ML learning using your infrastructure for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Machine Learning training center", title: "Offsite Training:", description: "Held at professional training centers, this mode ensures focused learning for ML certifications and team upskilling." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Machine Learning training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online ML training via platforms like Zoom, ideal for remote teams with real-time interaction and hands-on projects." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Machine Learning in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "Data Scientist", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s ML training was exceptional. The hands-on projects with real-world datasets were invaluable, and the trainers provided deep insights into algorithms." },
        { id: 2, name: "Sneha R.", designation: "ML Engineer", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s practical approach to supervised and unsupervised learning was fantastic. It helped me transition into an ML role with confidence." },
        { id: 3, name: "Vignesh T.", designation: "AI Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedule and comprehensive curriculum were perfect. The trainers’ expertise in deep learning and NLP was a game-changer for my career." },
        { id: 4, name: "Ritika S.", designation: "ML Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers explained complex concepts clearly, and the projects gave me a strong start in ML." },
        { id: 5, name: "Ramesh A.", designation: "Senior Data Scientist", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on advanced ML techniques and real-world applications was outstanding. The trainers’ industry experience made learning highly practical." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Machine Learning" />
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
        { id: 1, title: "What is Machine Learning used for?", description: "Machine Learning is used for predictive analytics, AI applications, data analysis, NLP, image recognition, and automation." },
        { id: 2, title: "Who should take this Machine Learning training?", description: "Data scientists, developers, analysts, and anyone interested in AI and predictive modeling." },
        { id: 3, title: "Do I need prior experience for Machine Learning?", description: "Basic knowledge of Python and statistics is helpful, but our course starts with foundational concepts." },
        { id: 4, title: "Is Machine Learning in demand in 2023?", description: "Yes, ML is highly sought-after for roles in AI, data science, and automation across industries." },
        { id: 5, title: "What’s the difference between ML and Deep Learning?", description: "ML is a subset of AI focusing on algorithms, while Deep Learning uses neural networks for complex tasks like image and speech recognition." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline ML training with live instructor-led sessions and hands-on projects." },
        { id: 7, title: "Will there be hands-on practice?", description: "Absolutely, our training includes real-world datasets, projects, and coding exercises in Python." },
        { id: 8, title: "Do you offer job preparation support?", description: "Yes, we provide mock interviews, resume guidance, and project-based learning for ML roles." },
        { id: 9, title: "Can I switch to Machine Learning from another field?", description: "Yes, with basic programming and math skills, ML is an excellent field to transition into." },
        { id: 10, title: "Is Machine Learning suitable for freshers?", description: "Definitely, ML is beginner-friendly and a great starting point for a career in AI and data science." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Machine Learning Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Machine Learning course in Chennai.
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

const Machinelearningmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Machine Learning Training in Chennai | Practical Oriented ML Course";
    const pageDescription = "Join IntelliMindz for top Machine Learning training in Chennai. Master ML algorithms with hands-on projects, real-world datasets, and expert guidance.";
    const pageKeywords = "machine learning training in chennai, machine learning course, ai training, data science training, intellimindz";
    const ogUrl = "https://localhost:3000/machine_learning_training_in_chennai";
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

export default Machinelearningmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
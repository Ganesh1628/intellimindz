import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider

// Import ContactModal - CORRECTED PATH
import ContactModal from "../components/Hero-Section/ContactModal";

// Import all your CSS files
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/sapfico.css"; // This CSS file now contains styling for new sections
import "../components/saponlinecom/onlinecorporate.css";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css"; // Note: This CSS import name might still refer to 'IMsyllabus.css' but is used for general styling.
// import "../components/SAP/Askfordemo/askfordemo.css";


// Import all your image assets
import saphomeintro1 from '../assests/images/saphomeintro1.png';
import bestPriceIcon from '../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../assests/images/practicallearning.jpeg';
import staffIcon from '../assests/images/flexiblebatches.jpeg';
import jobopening from '../assests/images/support.jpeg';
import liveclass from '../assests/images/interactive_sessions.jpeg';
import onlinetest from '../assests/images/lifetimeaccess.jpeg';
import aboutsapficoImg from '../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../assests/images/Classroom_training.jpeg';
import handsonsapImg from '../assests/images/handsonsap.jpeg';
import casestudyrealtimeImg from '../assests/images/casestudyrealtime.jpeg';
import personalizedmentorImg from '../assests/images/personalizedmentor.jpeg';
import interactiveImg from '../assests/images/interactivesessions.jpeg';
import ExperiencedtrainersImg from '../assests/images/ExperiencedTrainers.jpeg';

// TODO: Add these image imports when you have the files
import corporateOnsiteImg from '../assests/images/onsite_training.jpeg';
import corporateOffsiteImg from '../assests/images/offsite_training.jpeg';
import corporateVirtualImg from '../assests/images/virtual.jpeg';
import alumniReviewImg from '../assests/images/review.png'; // Placeholder for the girl's image
// import yourCompanyLogo from '../assests/images/your_company_logo.png'; // Placeholder for review card logo

// ***** ADD THIS IMAGE IMPORT *****
import Batchdt from '../assests/images/bg.jpeg';


// Import other components
import AskForDemo from "../components/SAP/Askfordemo/askfordemo";


// Intro Component
const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP EP Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP EP Training – your gateway to global career opportunities in the SAP Enterprise Portal domain.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
    );
};

// SapTrainingProfile Component
const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: SAP EP Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP EP trainers are industry professionals with extensive hands-on experience in SAP Enterprise Portal. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP EP learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP EP concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP EP Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP EP training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP EP Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP EP experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP EP training institute near you that emphasizes hands-on knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP Enterprise Portal processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP EP concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your understanding." }
    ];
    return (
        <div className="corporate-section">
            <h2 className="corporate-title">Why Choose Intellimindz?</h2>
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
        {type === 'hybrid' && '🔄'} {/* Corrected the missing character here */}
    </div>
);

const TrainingModesSection = ({ openContactModal }) => {
    const trainingModes = [
        { id: 'online', iconType: 'online', title: "Online Training", description: "Experience live, instructor-led sessions from the comfort of your home. Our online training includes hands-on exercises, real-time projects, and interactive Q&A to ensure practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded video sessions. Get lifetime access to course materials, downloadable resources, and periodic updates to keep your skills up to date.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Join our in-person sessions for a focused and immersive learning experience. Our classroom training promotes direct interaction with trainers and peers, ideal for collaborative and structured learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Enjoy the flexibility of both online and classroom learning. Our hybrid model allows you to switch between formats based on your convenience, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled SAP EP Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP EP training that enhances your expertise in SAP Enterprise Portal solutions.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your EP Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP EP Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we deliver practical SAP EP training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential EP topics such as portal architecture, content management, role-based access, iViews development, and integration with SAP backend systems to ensure comprehensive technical competence.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and EP implementations, learners gain confidence and the ability to manage SAP Enterprise Portal functions effectively in enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your EP skills, our training prepares you for success in the competitive SAP job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP EP Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference, ensuring a smooth training experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP EP system access. You will practice portal configurations, role management, and iViews development directly within an SAP environment, reinforcing your theoretical understanding and boosting practical skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP EP projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP EP Experience", description: "Our trainers have extensive industry experience with SAP EP, having handled multiple implementation projects. Their insights and guidance ensure you learn best practices and relevant skills for the SAP Enterprise Portal domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, which helps students master SAP EP competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP EP interview requirements, helping reinforce knowledge and build confidence for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Key Features</h2>
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

const SapEpCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP EP", topics: ["Overview of SAP NetWeaver and Enterprise Portal", "SAP Portal Architecture Basics", "Portal Components and Framework", "SAP NetWeaver Navigation", "Introduction to SAP EP Module", "Portal Roles and User Management", "Portal Content Management Overview"] },
        { id: 2, title: "Module 2: Portal Content and Structure", topics: ["iViews – Types and Configuration", "Worksets and Pages Management", "Navigation Systems Setup", "Content Administration and Management", "Creating and Managing Roles", "Personalization and Customization", "Portal Themes and Branding"] },
        { id: 3, title: "Module 3: Development and Integration", topics: ["Building Custom iViews", "Integration with Backend SAP Systems", "Single Sign-On (SSO) Configuration", "Portal Services and Web Services", "Portal Framework Development", "Using SAP Java and ABAP for EP", "Web Dynpro Integration"] },
        { id: 4, title: "Module 4: User and Role Management", topics: ["User Administration and Authentication", "Role Design and Assignment", "Access Control and Authorization", "Identity Management Integration", "User Profile Configuration", "Delegation and Workflow Management", "Troubleshooting Access Issues"] },
        { id: 5, title: "Module 5: Portal Administration and Monitoring", topics: ["System Landscape and Deployment", "Portal Configuration and Maintenance", "Performance Monitoring", "Logs and Troubleshooting", "Backup and Recovery Procedures", "Patch and Upgrade Management", "Security Best Practices"] },
        { id: 6, title: "Module 6: Advanced Portal Features", topics: ["Enterprise Search Setup", "Collaboration Tools in Portal", "Portal Content Staging", "Mobile Portal Access", "Portal Metrics and Reporting", "Custom Portal Plugins", "Future Trends and SAP Fiori Integration"] },
        { id: 7, title: "Module 7: Real-Time Project Implementation", topics: ["End-to-End Portal Setup", "Content Creation and Role Configuration", "Integration with SAP Backend Systems", "Portal Testing and User Training", "Go-Live Preparation and Support", "Issue Resolution and Maintenance", "Project Documentation and Review"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP EP Training Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows for practical relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation and team synergy." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training:", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction and engagement tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP EP in Chennai</h2>
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
        { id: 1, name: "Arun M.", designation: "SAP EP Consultant", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP EP course at IntelliMindz was extremely comprehensive and well-structured. The practical sessions on portal configurations, user roles, and role management prepared me thoroughly for my job responsibilities. The trainer was very patient, knowledgeable, and always willing to clarify doubts." },
        { id: 2, name: "Sneha R.", designation: "Enterprise Portal Specialist", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered every aspect of SAP EP in great detail, from basic navigation to advanced portal functionalities. Real-time examples and case studies helped me understand complex topics like system integration and content management easily. The support team was responsive, friendly, and always helpful throughout the training." },
        { id: 3, name: "Vignesh T.", designation: "SAP EP Freelancer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s SAP EP training helped me gain hands-on experience by working on real-time projects. The flexibility in batch timings and the focused interview preparation sessions were perfect for managing my freelance schedule. Highly recommended for anyone looking to master SAP EP effectively." },
        { id: 4, name: "Ritika S.", designation: "SAP Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a newcomer to SAP, the course provided a structured and clear roadmap of the SAP EP module. The trainers explained everything in a step-by-step manner, from basic concepts to advanced topics. It was a great learning experience that gave me a strong foundation." },
        { id: 5, name: "Ramesh A.", designation: "Senior EP Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The detailed course content and real-world teaching approach at IntelliMindz made learning SAP EP straightforward and enjoyable. The practical sessions, live configurations, and project work gave me the confidence and skills to handle complex portal tasks in my current role." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push( <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span> ); } return stars; };
    const formatReviewText = (text) => { return text.split('(P)').map((paragraph, index) => ( paragraph.trim() && <p key={index}>{paragraph.trim()}</p> )); };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer" />
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

const SapEpFaqSection = () => { // Renamed from SapImSyllabus for clarity
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP EP used for?", description: "SAP Enterprise Portal (EP) provides a unified access point to SAP and non-SAP applications, enabling role-based content delivery and collaboration." },
        { id: 2, title: "Who should take this SAP EP training in Chennai?", description: "IT professionals, SAP consultants, portal administrators, and developers interested in SAP portal technologies." },
        { id: 3, title: "Do I need prior SAP experience before learning EP?", description: "Basic knowledge of SAP systems helps, but not mandatory. We cover fundamentals from scratch." },
        { id: 4, title: "Is SAP EP relevant for 2025 and beyond?", description: "Yes, SAP EP remains vital for enterprises requiring integrated portal solutions, alongside SAP Fiori and newer technologies." },
        { id: 5, title: "What training options are available in Chennai for SAP EP?", description: "IntelliMindz offers both classroom and live online SAP EP training with SAP system access for practical learning." },
        { id: 6, title: "Will I get hands-on experience during training?", description: "Absolutely. Our course includes SAP EP system access for real-time configuration and development tasks." },
        { id: 7, title: "Do you provide interview support?", description: "Yes. Each module includes interview question practice, resume guidance, and scenario-based discussions tailored to SAP EP roles." },
        { id: 8, title: "Can I switch to SAP EP from other SAP modules or IT fields?", description: "Yes, especially if you have a background in SAP or portal/web technologies. Our course eases your transition." },
        { id: 9, title: "Is SAP EP training suitable for freshers?", description: "Yes. SAP EP training in Chennai is ideal for freshers aiming to start a career in SAP portal administration and development." },
        { id: 10, title: "How does IntelliMindz support my SAP EP career after training?", description: "We offer placement assistance, continuous learning resources, and career counseling to help you advance in SAP EP roles." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name remains 'sapim-syllabus' for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP EP Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to frequently asked questions about our SAP EP training in Chennai:
                </p>
            </div>
            <div className="syllabus-grid">
                {modulesData.map((module) => (
                    <div
                        key={module.id}
                        className={`module-card ${activeModule === module.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveModule(module.id)}
                        onMouseLeave={() => setActiveModule(null)}
                    >
                        <div className="module-number">
                            {String(module.id).padStart(2, '0')}
                        </div>
                        <div className="module-content-syllabus">
                            <p className="module-title">{module.title}</p>
                            <div className="module-description">
                                <p>{module.description}</p>
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

const SAPmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    return (
        <HelmetProvider> {/* Wrap your application with HelmetProvider */}
            <div>
                <Saponline openContactModal={openContactModal} />
                <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
            </div>
        </HelmetProvider>
    );
};

const Saponline = ({ openContactModal }) => {
    return (
        <>
            <Helmet> {/* Add Helmet here */}
                <title>SAP EP Training in Chennai | SAP Enterprise Portal Course in Chennai</title>
                <meta name="description" content="Join the leading SAP EP Training in Chennai and gain expertise in Enterprise Portal configuration and integration. Advance your skills with our SAP EP course in Chennai." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapEpCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapEpFaqSection /> {/* Updated component name here */}
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
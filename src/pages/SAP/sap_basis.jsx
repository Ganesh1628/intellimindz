import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

// Intro Component
const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP BASIS Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP BASIS Training – your gateway to a successful global career in the SAP infrastructure and administration domain.</h3>
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
                    Learn from the Best: SAP BASIS Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP BASIS trainers are not just instructors – they are industry veterans with extensive hands-on experience in SAP BASIS administration and system management. With deep domain knowledge and real-world project exposure, our trainers provide practical insights to enhance your SAP BASIS learning path.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation and progress through advanced SAP BASIS concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP BASIS Consultants with real-time project experience.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record in SAP BASIS training and student success.</li>
                        <li><span className="icon">✓</span> Receive complete career assistance including resume building and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and hands-on assignments to gain operational readiness.</li>
                        <li><span className="icon">✓</span> Experience a customized learning approach aligned to your pace and career objectives.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP BASIS Training" /> {/* Alt text updated */}
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by SAP BASIS experts from our training centre in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking SAP BASIS training that delivers real-world skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that suit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions centered on practical SAP BASIS administration tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Review course material and refresh your SAP BASIS knowledge anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your understanding." }
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
    // Content for this section was not in the new provided text, so keeping original generic content.
    // This section is generic and can apply to BASIS training.
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

// This component was SAPHeroSection previously, now updated for BASIS
const SAPHeroSection = ({ openContactModal }) => {
    return (
        <div className="sap-fico-expert-section"> {/* CSS class name kept as per "don't change code" */}
            <h1>Become a Skilled SAP BASIS Administrator with IntelliMindz</h1>
            <p>Industry-focused SAP BASIS training that develops your expertise in SAP system installation, configuration, and support.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your BASIS Career Today!</button>
        </div>
    );
};

// This component was SAPAboutSection previously, now updated for BASIS
const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section"> {/* CSS class name kept */}
            <h2>About Our SAP BASIS Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we offer comprehensive and industry-focused SAP BASIS training designed to equip learners with both strong theoretical foundations and hands-on experience in SAP system management and administration. Our structured course covers all essential BASIS topics, including system architecture, client administration, transport management, user management, security protocols, database administration, and performance tuning—ensuring a well-rounded and in-depth technical skillset.</p>
                    <p>The training program features interactive sessions, live demonstrations, hands-on labs, and system-based mini-projects. By engaging with real-time business scenarios and executing core BASIS operations, learners develop the confidence and practical ability to handle SAP system landscapes and technical tasks in real enterprise environments effectively.</p>
                    <p>Whether you're a beginner aiming to enter the SAP domain or a working professional looking to upgrade your skills, our training helps you achieve practical mastery, enhance your career prospects, and stay highly competitive in today’s dynamic SAP infrastructure job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP BASIS Training in Chennai" /> {/* Alt text updated, image kept */}
                </div>
            </div>
        </div>
    );
};

// This component was KeyFeaturesSection previously, now updated for BASIS
const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person classroom sessions and flexible virtual training modes, making SAP BASIS learning accessible for working professionals, students, and job seekers alike. This dual-mode approach enables you to choose the format that best fits your schedule and learning style, ensuring an effective and convenient experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on practice, providing dedicated SAP BASIS system access for all learners. You will perform real-time system administration tasks, configurations, and troubleshooting exercises, reinforcing theoretical concepts with practical exposure to SAP environments." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work on case studies modeled after actual SAP BASIS projects encountered in corporate settings. These exercises help sharpen problem-solving skills and prepare you for technical challenges commonly faced in SAP BASIS roles, including interview scenarios." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with Extensive SAP BASIS Experience", description: "Our trainers are seasoned SAP BASIS professionals with years of experience managing SAP landscapes across diverse industries. They bring expert insights, best practices, and real-world knowledge to your learning journey, ensuring you get practical mentorship and guidance." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "We maintain small batch sizes to offer individual attention and one-on-one mentoring. This approach ensures your questions are answered promptly, doubts are clarified fully, and you receive the support needed to excel in SAP BASIS skills." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module concludes with interactive discussions, quizzes, and assessments aligned with current SAP BASIS job market requirements. This structured evaluation process reinforces learning and prepares you confidently for interviews and certification exams." },
    ];
    return (
        <div className="sap-fico-features-section"> {/* CSS class name kept */}
            <h2>SAP BASIS Training in Chennai Key Features</h2> {/* Heading updated */}
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

// This component was SapFicoCourseContentSection, now updated for BASIS content. Name and CSS classes kept.
const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP BASIS", topics: ["Introduction to ERP and SAP Landscape", "SAP System Architecture Overview", "Overview of SAP Modules and BASIS Role", "SAP Logon and System Navigation", "SAP Kernel and Work Process Basics", "SAP Instance and Client Concepts", "SAP System Components"] },
        { id: 2, title: "Module 2: SAP Installation and Configuration", topics: ["SAP NetWeaver Installation Overview", "SAP Database Setup and Configuration", "Operating System and SAP Kernel Installation", "SAP Profiles and Parameters", "SAP Instance Configuration", "Client Administration and Copy", "Basic Troubleshooting"] },
        { id: 3, title: "Module 3: User and Authorization Management", topics: ["SAP User Administration Concepts", "Roles and Profiles", "Authorization Objects and Checks", "Security Best Practices", "Password Policies and Locking Mechanisms", "User Groups and Mass Changes", "Auditing and Compliance"] },
        { id: 4, title: "Module 4: Transport Management System (TMS)", topics: ["Overview of SAP Transport System", "Transport Routes and Layers", "Creating and Importing Transport Requests", "Transport Logs and Troubleshooting", "Transport Configuration and Monitoring", "Handling Transport Failures", "Change and Release Management"] },
        { id: 5, title: "Module 5: SAP System Monitoring and Performance Tuning", topics: ["SAP System Logs and Traces", "Performance Analysis Tools", "Database Performance Monitoring", "Workload Balancing", "Memory and CPU Management", "System Alerts and Notifications", "Tuning Parameters and Optimization"] },
        { id: 6, title: "Module 6: Backup and Recovery Procedures", topics: ["SAP Backup Strategies", "Database Backup Techniques", "Recovery Options and Procedures", "Disaster Recovery Planning", "System Copy and Refresh", "Transport Backup and Restore", "Backup Monitoring and Verification"] },
        { id: 7, title: "Module 7: SAP Upgrades and Patch Management", topics: ["SAP Support Packages and Patches", "Upgrade Planning and Execution", "Downtime Minimization Techniques", "Rollback Procedures", "Testing After Upgrades", "Patch Application Best Practices", "Troubleshooting Upgrade Issues"] },
        { id: 8, title: "Module 8: SAP Solution Manager Basics", topics: ["Overview of SAP Solution Manager", "System Monitoring with Solution Manager", "Incident Management", "Change Request Management", "Landscape Management", "Integration with SAP BASIS Operations", "Hands-on with Solution Manager Tools"] },
        { id: 9, title: "Module 9: Database and OS Administration", topics: ["Database Concepts for SAP BASIS", "Database User Management", "Backup and Restore in DB Layer", "OS Level Commands for SAP BASIS", "OS and DB Interaction", "Patch Management in OS and DB", "Performance Tuning at DB and OS Level"] },
        { id: 10, title: "Module 10: Real-Time Project and Advanced Topics", topics: ["End-to-End SAP BASIS System Setup", "Transport and Client Strategy Implementation", "Performance Tuning Exercises", "Security Hardening Tasks", "Troubleshooting Real SAP Issues", "Project Documentation and Reporting", "Final Review and Deployment Best Practices"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section"> {/* CSS class name kept */}
            <h2 className="java-section-title">
                SAP BASIS Course Modules {/* Title updated */}
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

// BatchDetailsSection - Content not provided in new BASIS text, keeping original generic data.
const BatchDetailsSection = ({ openContactModal }) => {
    const batchInfo = [
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "IT Professionals seeking new skills"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for working IT Professionals"] }
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

// This component was CorporateTrainingModesSection, now updated for BASIS
const CorporateTrainingModesSection = () => {
    const trainingModesData = [
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate BASIS training", title: "Onsite Training:", description: "Delivered at your organization’s location, offering a collaborative and practical learning environment tailored to your company’s SAP infrastructure. Ideal for team skill enhancement using your live systems and workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite BASIS training center", title: "Offsite Training:", description: "Conducted at dedicated training centers or professional venues, suitable for focused learning free from workplace distractions. Perfect for certification preparation and hands-on workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led BASIS training", title: "Virtual Instructor-Led Training (VILT):", description: "Live interactive training via Zoom, Microsoft Teams, or similar platforms, offering remote learners flexible access with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP BASIS in Chennai</h2> {/* Title updated */}
            <div className="modes-container-grid">
                {trainingModesData.map(mode => (
                    <div key={mode.id} className="mode-card-item">
                        <img src={mode.imageSrc || '../assests/images/placeholder_image.png'} alt={mode.altText} className="mode-image" />
                        <h3 className="mode-title">{mode.title}</h3>
                        <p className="mode-description">{mode.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// This component was AlumniReviewsSection, now updated for BASIS
const AlumniReviewsSection = () => {
    const reviewsData = [
        { id: 1, name: "Arun M.", designation: "SAP BASIS Administrator", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The structure of IntelliMindz’s SAP BASIS course was excellent and well-organized. Working on real system administration scenarios significantly improved my hands-on practical skills. The trainer was very supportive, approachable, and explained complex BASIS functions clearly with relatable examples." },
        { id: 2, name: "Sneha R.", designation: "Technical Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course explained client administration, transport management, and security concepts in a detailed and easy-to-follow manner. Real-time project tasks helped me confidently transition into a BASIS role from a non-SAP background. Definitely worth enrolling for anyone making a career shift." },
        { id: 3, name: "Vignesh T.", designation: "BASIS Freelancer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "I chose IntelliMindz for their strong reputation and industry-relevant syllabus tailored to real-world needs. The interview preparation and in-depth case studies were spot-on. Batch timing flexibility and support were perfect for managing my freelance schedule effectively." },
        { id: 4, name: "Ritika S.", designation: "SAP Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I had no prior knowledge of SAP BASIS. This course covered every concept thoroughly, from the basics to advanced topics, with outstanding trainer support. The learning environment was engaging and structured. The best choice to start my SAP BASIS career." },
        { id: 5, name: "Ramesh A.", designation: "Senior Administrator", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The teaching methodology made difficult topics like the transport system, system monitoring, and performance tuning much easier to understand. Practical sessions, real-time examples, and hands-on labs greatly enhanced my overall learning and confidence." }
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
                        <img src={alumniReviewImg || '../assests/images/placeholder_avatar.png'} alt="Alumni Reviewer BASIS" /> {/* Alt text updated */}
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

// This component was SapImSyllabus (FAQ), now updated for BASIS FAQ. Name and CSS classes kept.
const SapBASISFaqSection = () => { // Renamed from SapImSyllabus to SapBASISFaqSection for clarity
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP BASIS used for?", description: "SAP BASIS refers to the technical administration and management of SAP systems, including installation, configuration, performance tuning, and user management." },
        { id: 2, title: "Who should enroll in SAP BASIS training?", description: "IT administrators, system engineers, fresh graduates with interest in SAP infrastructure, and SAP consultants seeking technical skill enhancement." },
        { id: 3, title: "Do I need prior coding knowledge for SAP BASIS?", description: "Basic technical understanding of operating systems and databases is helpful, but in-depth programming is not required." },
        { id: 4, title: "Is SAP BASIS still in demand in 2025?", description: "Yes, with ongoing SAP system implementations, upgrades, and cloud migrations, SAP BASIS skills remain highly sought after." },
        { id: 5, title: "What is the difference between SAP BASIS and SAP ABAP?", description: "SAP BASIS focuses on system administration and infrastructure, whereas ABAP involves SAP programming and development." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline training options with live instructor-led sessions and full SAP system access." },
        { id: 7, title: "Will I get hands-on practice?", description: "Absolutely. You will have access to SAP BASIS systems for practical exercises in administration, monitoring, and troubleshooting." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, our course includes mock interviews, resume support, and real-time scenario-based questions for SAP BASIS roles." },
        { id: 9, title: "Can I switch to SAP BASIS from another IT field?", description: "Yes. With your technical background, SAP BASIS is a promising career path within the SAP ecosystem." },
        { id: 10, title: "Is SAP BASIS training suitable for freshers?", description: "Definitely. SAP BASIS is an excellent technical entry point for beginners looking to specialize in SAP system management." }
    ];
    return (
        <div className="sapim-syllabus"> {/* CSS class name kept */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP BASIS Course?</span> {/* Title updated */}
                </h1>
                <p className="syllabus-header-subtitle">
                    You can find answers to your queries about our SAP BASIS course in Chennai here. {/* Subtitle updated */}
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

// CallToActionBanner - Content not provided in new BASIS text, keeping original generic content.
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
                {ContactModal && <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />}
            </div>
        </HelmetProvider>
    );
};

const Saponline = ({ openContactModal }) => {
    return (
        <>
            <Helmet> {/* Add Helmet here */}
                <title>SAP Basis Training in Chennai | SAP Basis Course in Chennai</title>
                <meta name="description" content="Gain admin and system configuration skills with our SAP Basis Training in Chennai. Learn system architecture, user management, and more in our SAP Basis course in Chennai." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapFicoCourseContentSection openContactModal={openContactModal} /> {/* Name kept, content is BASIS */}
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            {AskForDemo && <AskForDemo />}
            <Onlineheader />
            <SapBASISFaqSection /> {/* Updated component name */}
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

// Onlineheader component kept as is (empty container).
const Onlineheader = () => {
    return <div className="online_container"></div>;
};
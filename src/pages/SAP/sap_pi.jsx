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


// Intro Component
const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP PI Training Institute in Chennai.</h1>
                <h3 className="intro-h3">Enhance your integration capabilities with expert-led SAP PI Training – your gateway to mastering enterprise application integration.</h3>
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
                    Learn from the Best: SAP PI Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP PI trainers are more than instructors – they are seasoned integration professionals with hands-on expertise in SAP Process Integration implementations. They bring real-time use cases, technical insights, and integration best practices to your SAP PI training journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a comprehensive foundation and transition into advanced SAP PI configurations.</li>
                        <li><span className="icon">✓</span> Learn directly from certified SAP PI experts with live project backgrounds.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz’s proven training success and placement assistance in Chennai.</li>
                        <li><span className="icon">✓</span> Get full career support, including technical interviews and resume development.</li>
                        <li><span className="icon">✓</span> Practice with real-time integration scenarios and cross-system configurations.</li>
                        <li><span className="icon">✓</span> Experience fully customizable learning paths that suit your schedule and goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from certified SAP PI consultants with rich experience in integration projects." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Get trained at one of the top SAP PI training institutes in Chennai, focused on practical skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose from regular weekday, weekend, and fast-track SAP PI batches." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Participate in live integration walkthroughs and real-time case studies." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access SAP PI video lessons and materials even after your training ends." },
        { image: jobopening, heading: "Continued Support", paragraph: "We offer post-training Q&A and career mentoring for SAP PI learners." }
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
        {type === 'hybrid' && '🔄'}
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
            <h1>Become a Skilled SAP PI Consultant with IntelliMindz</h1>
            <p>Develop your skills in message mapping, adapters, IDoc, proxies, and service integration. Learn SAP PI through practical examples and secure your integration career.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP PI Career with Confidence!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP PI Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz, our SAP PI course in Chennai is tailored to deliver hands-on experience in SAP Process Integration. The curriculum is structured around the technical framework required to build, monitor, and manage SAP PI interfaces across systems.</p>
                    <p>The SAP PI training in Chennai includes topics like SLD configuration, ESR design, runtime workbench, adapters, and business system integration. With real-time SAP system access and practical sessions, this course equips learners to take on real-world enterprise integration tasks and roles.</p>
                    <p>SAP PI Training in Chennai</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP PI Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both classroom training in Chennai and flexible online instructor-led learning. This dual mode ensures working professionals and students can access SAP PI training from anywhere." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP PI Tools", description: "Get access to SAP PI development environments for real-time practice. You’ll design interfaces, configure scenarios, and test message flows using SAP tools." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Understand how real business systems connect through SAP PI using practical case studies. These examples enhance your confidence in resolving integration issues." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP PI Experience", description: "Learn from trainers who have executed global SAP PI rollouts. Their insights and field stories add depth to every integration topic covered." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Each batch is limited to a small group to promote focused discussions and individual attention during training." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "End each module with interactive assessments to evaluate your progress and strengthen your technical knowledge." },
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

const SapFicoCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: SAP PI Overview", topics: ["Introduction to SAP PI and Architecture", "Integration Scenarios and Use Cases", "PI 7.5 vs Previous Versions", "SLD and Technical Landscape", "Enterprise Service Repository Overview", "SAP NetWeaver Stack", "Process Integration Capabilities"] },
        { id: 2, title: "Module 2: System Landscape Directory (SLD)", topics: ["Role of SLD in Integration", "Technical System & Business System Creation", "Product and Software Component Definition", "Integration with ESR", "Transport Management in SLD", "Real-time Setup Scenarios", "SLD Maintenance"] },
        { id: 3, title: "Module 3: Enterprise Services Repository (ESR)", topics: ["Design Objects in ESR", "Data Types, Message Types, and Service Interfaces", "Mapping Programs (Graphical, XSLT, Java)", "Defining and Using Message Mappings", "Operation Mapping", "Version Management in ESR", "Repository Objects Deployment"] },
        { id: 4, title: "Module 4: Integration Builder - Configuration", topics: ["Integration Directory Overview", "Communication Channel Configuration", "Receiver and Sender Agreements", "Message Routing and Conditions", "Integration Process Configuration", "End-to-End Scenario Configuration", "Component-Based Integration"] },
        { id: 5, title: "Module 5: Adapters in SAP PI", topics: ["File Adapter", "IDoc and Proxy Adapter", "HTTP and SOAP Adapter", "JDBC and RFC Adapter", "Adapter Configuration", "Adapter Module Processing", "Adapter Engine Monitoring"] },
        { id: 6, title: "Module 6: Monitoring and Error Handling", topics: ["Runtime Workbench", "Message Monitoring Techniques", "Component Monitoring", "Adapter Monitoring", "Alert Configuration and Notifications", "System Logs and Trace", "Troubleshooting Techniques"] },
        { id: 7, title: "Module 7: Business System Integration", topics: ["SAP and Non-SAP System Communication", "Setting Up Logical Systems", "IDoc and RFC Integration Scenarios", "Partner Profile Setup", "Mapping Business Scenarios", "Testing and Validation", "Security Considerations"] },
        { id: 8, title: "Module 8: BPM and Integration Processes", topics: ["Introduction to BPM in PI", "Creating BPM Scenarios", "Control Step, Receive Step, Send Step", "Exception Handling in BPM", "BPM Monitoring", "Synchronous/Asynchronous Messaging", "Real-time BPM Design"] },
        { id: 9, title: "Module 9: PI to PO Migration", topics: ["Introduction to SAP PO", "Comparing PI and PO", "Migration Strategy and Tools", "Steps to Convert PI to PO", "Deployment and Testing", "Performance Optimization", "Reusability and Best Practices"] },
        { id: 10, title: "Module 10: Real-Time Project and Assessment", topics: ["Hands-on End-to-End Project", "Client Requirements and Scoping", "ESR and ID Configuration", "Scenario Deployment", "Testing and Debugging", "Resume Building and Job Support", "Interview Preparation"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Course Modules
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
                            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                        </svg>
                        Download Curriculum
                    </button>
                </div>
            </div>
        </div>
    );
};

// ***** MODIFIED BatchDetailsSection *****
const BatchDetailsSection = ({ openContactModal }) => {
    const batchInfo = [
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Non IT to IT transition"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
    ];
    return (
        // Apply inline style to set CSS Custom Property for the background image
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Get SAP PI sessions conducted at your company’s premises for a customized enterprise integration learning experience aligned with your corporate IT landscape." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Participate in instructor-led SAP PI workshops at our fully equipped training center in Chennai for dedicated learning." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Attend SAP PI training sessions online via Zoom or Microsoft Teams with real-time trainer interaction and screen sharing." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP PI in Chennai</h2>
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
        { id: 1, name: "Ravi T.", designation: "SAP PI Integration Consultant", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The hands-on practice with ESR and Integration Directory helped me gain a clear understanding of SAP PI concepts. The trainer supported me even after the sessions were completed, which was very helpful." },
        { id: 2, name: "Swetha N.", designation: "SAP Technical Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "I recently completed SAP PI training in Chennai with IntelliMindz. The course was well-structured, and the real-time case studies provided during the training were very relevant. The mock interviews and practice questions helped me a lot in my preparation." },
        { id: 3, name: "Rakesh M.", designation: "Middleware Support Engineer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "This SAP PI training in Chennai was highly practical. I appreciated the live system access which enabled me to create, test, and debug complete end-to-end interfaces. It built my confidence to handle real-time projects." },
        { id: 4, name: "Deepika V.", designation: "SAP NetWeaver Developer", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers here are highly knowledgeable and always willing to help. Through their real-world examples and clear explanations, SAP PI concepts were made much easier to grasp. I highly recommend IntelliMindz." },
        { id: 5, name: "Suraj D.", designation: "System Integration Specialist", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "What I really liked about this SAP PI course was the way it was organized. Every module came with clear learning objectives, practical tasks, and assessments that made it easy to measure progress. It was a very effective learning experience." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); } return stars; };
    const formatReviewText = (text) => { return text.split('(P)').map((paragraph, index) => (paragraph.trim() && <p key={index}>{paragraph.trim()}</p>)); };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer" />
                    </div>
                    {/* <div className="floating-star-rating-bubble">
                     {renderStars(5)}
                   </div> */}
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
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SapFicoFaqSection = () => { // Renamed from SapImSyllabus for clarity
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP PI used for?", description: "SAP PI (Process Integration) is a middleware tool that facilitates seamless data exchange between SAP and non-SAP applications across various platforms. It uses adapters, mappings, and message routing to ensure effective communication in enterprise systems." },
        { id: 2, title: "Who can attend the SAP PI training in Chennai?", description: "Our SAP PI training in Chennai is ideal for IT professionals, SAP consultants, middleware developers, system analysts, integration specialists, and even recent graduates in computer science or related fields who want to pursue a career in SAP integration technologies." },
        { id: 3, title: "What’s the difference between SAP PI and SAP PO?", description: "SAP PI primarily handles integration tasks, whereas SAP PO (Process Orchestration) is a more advanced suite that combines PI with BPM (Business Process Management) and BRM (Business Rules Management). In our SAP PI training in Chennai, you’ll get insights into both tools to expand your capabilities." },
        { id: 4, title: "Can I learn SAP PI without prior SAP experience?", description: "Absolutely. Our SAP PI training in Chennai is structured to start from the fundamentals, so you don’t need prior SAP knowledge. Whether you're a fresher or a working professional from another domain, you can follow along and succeed." },
        { id: 5, title: "Is this SAP PI training available online as well?", description: "Yes. We offer both online and classroom-based SAP PI training options in Chennai. You can choose based on your convenience, schedule, and preferred learning mode. All online sessions are interactive and include screen sharing and Q&A." },
        { id: 6, title: "Will I get hands-on experience with real SAP PI scenarios?", description: "Definitely. Our SAP PI training in Chennai emphasizes hands-on learning with access to live systems. You'll work on real-time integration scenarios, configuration in ESR/ID, and end-to-end interface development tasks to simulate workplace challenges." },
        { id: 7, title: "Is this training aligned with SAP certification?", description: "Yes. The curriculum for our SAP PI course is designed to match the official SAP syllabus and certification guidelines. It prepares you thoroughly to appear for SAP certification exams with confidence." },
        { id: 8, title: "What job roles can I apply for after SAP PI training in Chennai?", description: "After completing the SAP PI training in Chennai, you can apply for roles such as SAP PI Consultant, Integration Developer, Middleware Analyst, SAP NetWeaver Developer, or SAP Technical Consultant in both domestic and international markets." },
        { id: 9, title: "What kind of post-training support do you offer?", description: "We offer continued access to course materials, recorded sessions, and personalized doubt-clearing sessions. We also assist you with resume building, interview preparation, and career guidance even after the course is completed." },
        { id: 10, title: "Do you offer a fast-track SAP PI training option in Chennai?", description: "Yes, we understand that some learners have time constraints. That’s why we offer flexible options such as fast-track weekday batches and weekend-only training sessions to meet your specific schedule and pace of learning." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP PI Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to commonly asked questions about our SAP PI training in Chennai:
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
const pageTitle = "Best SAP PI Training in Chennai | Expert-Led SAP PI Course";
const pageDescription = "Enroll in top-rated SAP PI training in Chennai at Intellimindz. Master SAP PI concepts with real-time projects and expert guidance.";
const pageKeywords = "sap pi training in chennai, sap pi course, sap pi certification, intellimindz";
const ogUrl = "https://localhost:3000/sap_pi_training_in_chennai";
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
            <BatchDetailsSection openContactModal={openContactModal} /> {/* Passed prop */}
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapFicoFaqSection /> {/* Updated component name */}
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
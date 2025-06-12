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

const Intro = ({ openContactModal }) => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best SAP Webdynpro Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP Webdynpro Training – your gateway to global career opportunities in user interface development for enterprise applications.</h3>
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
                    Learn from the Best: SAP Webdynpro Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP Webdynpro trainers are seasoned professionals with deep expertise in enterprise UI development. With hands-on project knowledge and a strong grasp of MVC architecture, our trainers deliver in-depth insights to elevate your SAP Webdynpro learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation and master advanced Webdynpro ABAP techniques.</li>
                        <li><span className="icon">✓</span> Learn directly from SAP UI Developers working on real-time enterprise projects.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz's success in training and placement for SAP Webdynpro professionals.</li>
                        <li><span className="icon">✓</span> Avail complete career support including interview preparation and resume building.</li>
                        <li><span className="icon">✓</span> Practice with real-time development tasks and project simulations.</li>
                        <li><span className="icon">✓</span> Experience customized learning aligned with your professional goals and pace.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP Webdynpro Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP Webdynpro experts at our training center in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for developers and professionals seeking a SAP Webdynpro training institute near you that emphasizes coding and UI techniques." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose session timings that suit your work or academic schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Live, engaging classes focused on hands-on SAP Webdynpro development." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access training content anytime to refresh or revise concepts." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-training support with regular Q&A and development troubleshooting sessions." }
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
            <h1>Become a Skilled SAP Webdynpro Developer with IntelliMindz</h1>
            <p>Job-oriented SAP Webdynpro training that enhances your skills in user interface creation and backend integration.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your UI Development Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP Webdynpro Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we offer industry-focused SAP Webdynpro training designed to build strong skills in enterprise UI application development. Our curriculum spans essential Webdynpro ABAP concepts, MVC structure, UI elements, and back-end integrations to help you gain technical confidence.</p>
                    <p>The course includes live instructor-led sessions, demos, hands-on assignments, and practical workshops. Real-time project cases and interface development exercises provide learners with the capability to design, develop, and deploy robust SAP UI applications.</p>
                    <p>Whether you are a beginner or an experienced ABAP developer looking to specialize, this SAP Webdynpro training in Chennai gives you the competitive edge in enterprise development roles.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP Webdynpro Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Our training program includes both offline and online formats, tailored for working professionals, students, and aspiring UI developers. Choose your preferred mode for a seamless learning experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with System Access", description: "Get dedicated SAP Webdynpro system access to build interfaces, manage components, and test applications. Work directly in SAP environments to develop skills through actual development scenarios." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Explore use cases and examples based on real client projects and enterprise applications. Gain critical thinking skills for interviews and practical UI development tasks." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP Webdynpro Experience", description: "Our trainers have worked on multiple SAP UI development projects. Their insights provide you with coding best practices and deep architectural understanding." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We ensure quality learning by limiting batch sizes. This encourages active participation and personalized mentor feedback for each student." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Engage in quizzes, Q&A, and coding evaluations for each module. These assessments mirror real SAP Webdynpro job roles and interview expectations." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP Webdynpro Training in Chennai Key Features</h2>
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

const SapWebdynproCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP Webdynpro", topics: ["Overview of Webdynpro Architecture", "MVC Design Pattern in Webdynpro", "Types of Webdynpro (ABAP/Java)", "Development Tools and Navigation", "Webdynpro Component Architecture", "Project Structure and Packages"] },
        { id: 2, title: "Module 2: Context and Data Binding", topics: ["Understanding Context Nodes and Attributes", "Data Binding with UI Elements", "Context Mapping and Controller Context", "Using Supply Functions and Node Relations", "Context Synchronization"] },
        { id: 3, title: "Module 3: UI Element Design and Layouts", topics: ["Overview of UI Elements", "Layout Types and Containers", "Event Handlers and Actions", "UI Design Best Practices", "Managing Views and Navigation"] },
        { id: 4, title: "Module 4: Component Usage and Interface", topics: ["Component Reuse in Webdynpro", "Interface Controllers", "Component Interface Views", "Embedding and Interface Navigation", "Component Plug Connections"] },
        { id: 5, title: "Module 5: Controllers in Webdynpro", topics: ["View Controller and Window Controller", "Custom Controller Usage", "Component and Interface Controllers", "Navigation Handling Techniques", "Data Flow Between Controllers"] },
        { id: 6, title: "Module 6: Integrating Backend Services", topics: ["RFCs and BAPIs Integration", "Using Webdynpro with ABAP Function Modules", "Service Call Implementation", "Data Retrieval from Backend Systems", "Error Handling and Debugging"] },
        { id: 7, title: "Module 7: Advanced Webdynpro Concepts", topics: ["Dynamic UI Configuration", "Assistance Classes and Methods", "ALV Integration in Webdynpro", "Internationalization and Personalization", "Webdynpro Enhancements and Exits"] },
        { id: 8, title: "Module 8: Webdynpro Tools and Utilities", topics: ["Message Management", "Value Help and Input Help", "Context Menu and Dialog Boxes", "Hook Methods and Lifecycle Management", "Testing and Troubleshooting Tools"] },
        { id: 9, title: "Module 9: Webdynpro Security and Authorization", topics: ["User Role and Authorization Concept", "Integrating Webdynpro with SAP Portal", "Securing Webdynpro Applications", "Authentication and SSO", "SAP NetWeaver Role Assignments"] },
        { id: 10, title: "Module 10: End-to-End Webdynpro Project", topics: ["Project Requirements Gathering", "Component and View Design", "Backend Service Integration", "Testing and Validation", "Transport Management", "Go-Live and Post-Deployment Support"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP Webdynpro Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Webdynpro training", title: "Onsite Training:", description: "Train your internal teams at your office premises with customized Webdynpro training that matches your organizational development workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Webdynpro training center", title: "Offsite Training:", description: "Conducted at our training centers or client-preferred locations, this mode supports focused learning away from regular office distractions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Webdynpro training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom or Teams, ideal for remote teams or individuals looking for flexible yet structured training with interactive learning." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP Webdynpro in Chennai</h2>
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
        { id: 1, name: "Deepika R.", designation: "SAP Webdynpro Developer", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The training gave me real hands-on experience in UI development with Webdynpro. The sessions were practical, and I could directly apply what I learned in my current role." },
        { id: 2, name: "Praveen K.", designation: "UI Consultant", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz explained Webdynpro architecture clearly. The real-time tasks and component-based exercises helped me become confident in SAP UI application building." },
        { id: 3, name: "Ramya N.", designation: "ABAP and Webdynpro Analyst", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The practical exposure through SAP system access, paired with great faculty support, made this one of the best SAP Webdynpro training programs in Chennai." },
        { id: 4, name: "Vikram S.", designation: "SAP Technical Consultant", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The step-by-step walkthrough of Webdynpro projects and concepts was fantastic. I got job-ready quickly and could contribute effectively in my ERP team." },
        { id: 5, name: "Nithya T.", designation: "SAP UI Specialist", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz has proven to be a reliable training institute for SAP Webdynpro. The trainers were very helpful and made complex concepts very approachable." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Webdynpro" />
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

const SapWebdynproFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP WebDynpro used for?", description: "SAP WebDynpro is a UI development environment used to create web-based applications within the SAP ecosystem, especially on NetWeaver." },
        { id: 2, title: "Who should attend this SAP WebDynpro training in Chennai?", description: "ABAP developers, SAP technical consultants, and software engineers aiming to build web applications using SAP technologies should consider this course." },
        { id: 3, title: "Do I need ABAP knowledge for this WebDynpro training in Chennai?", description: "Yes, basic knowledge of SAP ABAP is essential as WebDynpro development is based on ABAP for creating UI-driven business apps." },
        { id: 4, title: "Why is SAP WebDynpro training in Chennai important today?", description: "Chennai’s SAP ecosystem is rapidly growing, and skilled WebDynpro developers are in demand for SAP UI projects and enterprise app development." },
        { id: 5, title: "Is SAP WebDynpro different from SAP Fiori or UI5?", description: "Yes. WebDynpro uses ABAP for server-side rendering while Fiori/UI5 uses JavaScript-based technologies for responsive, client-side applications." },
        { id: 6, title: "Do you offer SAP WebDynpro training in Chennai online?", description: "Yes. We offer both online and classroom SAP WebDynpro training in Chennai to accommodate different learner needs." },
        { id: 7, title: "Will I get hands-on access during this SAP WebDynpro course in Chennai?", description: "Absolutely. You will receive dedicated SAP system access for practicing WebDynpro development, debugging, and deployment." },
        { id: 8, title: "Is job support available after the SAP WebDynpro training in Chennai?", description: "Yes. We provide career services including resume building, mock interviews, and guidance on real-time job roles." },
        { id: 9, title: "Can I attend this WebDynpro training in Chennai while working full-time?", description: "Yes. Flexible batch options including evening and weekend sessions are designed for working professionals." },
        { id: 10, title: "Is this WebDynpro course in Chennai suitable for freshers?", description: "Yes, especially for those with ABAP knowledge. Our step-by-step guidance helps freshers build expertise in WebDynpro development." },
        { id: 11, title: "Does this training cover both WebDynpro ABAP and Java?", description: "Our focus is on SAP WebDynpro for ABAP, which is widely used in enterprise systems. Java-based WebDynpro can be optionally discussed." },
        { id: 12, title: "Are real-time projects included in this WebDynpro course in Chennai?", description: "Yes. Real-world business scenarios are incorporated for practical experience in application design and deployment." },
        { id: 13, title: "What tools are used during the WebDynpro training in Chennai?", description: "We use SAP NetWeaver Developer Studio, ABAP Workbench, and backend systems to simulate real-time WebDynpro environments." },
        { id: 14, title: "How do you assess learner progress in this WebDynpro course in Chennai?", description: "Assessments include module-wise quizzes, coding assignments, and a final capstone project to ensure mastery." },
        { id: 15, title: "Will I receive course materials and post-training support?", description: "Yes. You’ll get lifetime access to course materials and continued support through doubt-clearing sessions and discussion forums." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP WebDynpro Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP WebDynpro course in Chennai.
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

const SAPmain = () => {
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
                <title>SAP Webdynpro Training in Chennai | SAP Webdynpro Course in Chennai</title>
                <meta name="description" content="Enroll in our SAP Webdynpro Training in Chennai to become an expert in enterprise UI development. Get hands-on experience with our real-time SAP Webdynpro course in Chennai led by industry experts." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapWebdynproCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapWebdynproFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
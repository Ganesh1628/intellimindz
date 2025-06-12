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
                <h1 className="intro-h1">Best SAP WF Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP WF Training – your gateway to global career opportunities in the enterprise resource planning landscape.</h3>
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
                    Learn from the Best: SAP WF Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP Workflow trainers are industry professionals with extensive hands-on experience in enterprise resource planning systems. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP Workflow learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP Workflow concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP Workflow Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP Workflow training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP WF Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP Workflow experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP Workflow training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP Workflow processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP Workflow concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to solidify your understanding." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led sessions from anywhere. Our online SAP WF training includes hands-on exercises, real-time projects, and interactive Q&A to ensure practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded video sessions. Get lifetime access to SAP WF course materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Participate in in-person sessions for an immersive SAP WF learning experience. Ideal for collaborative and structured learning with direct trainer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine the flexibility of online and classroom learning. Our hybrid SAP WF model lets you switch formats based on your convenience.", isPopular: false }
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
            <h1>Become a Skilled SAP Workflow Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP Workflow training that enhances your expertise in enterprise resource planning modules.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your WF Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP WF Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we deliver practical SAP Workflow training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential workflow topics such as event triggers, task development, and approval processes to ensure comprehensive technical competence.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and workflow implementations, learners gain confidence and the ability to manage SAP Workflow functions effectively in enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your workflow skills, our training prepares you for success in the competitive SAP job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP WF Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP system access for workflow development. You will practice creating and managing workflows directly within an SAP environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP Workflow projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP WF Experience", description: "Our trainers have extensive industry experience with SAP Workflow, having handled multiple implementation projects. Their insights ensure you learn best practices and relevant skills for the enterprise resource planning domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, helping students master SAP Workflow competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP Workflow interview requirements, helping reinforce knowledge and build confidence for job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP WF Training in Chennai Key Features</h2>
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

const SapWfCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP Workflow", topics: ["Overview of Workflow Concepts and Benefits", "SAP Workflow Architecture", "Workflow Builder and Components", "Workflow Terminology", "Integration with SAP Modules", "Business Process Automation", "Introduction to Event Management"] },
        { id: 2, title: "Module 2: Basic Workflow Development", topics: ["Creating Simple Workflows", "Defining Tasks and Methods", "Container Concepts", "Binding Editor Usage", "Workflow Testing and Debugging", "Agent Determination", "Error Handling in Workflows"] },
        { id: 3, title: "Module 3: Advanced Workflow Techniques", topics: ["Dynamic Parallel Processing", "Loops and Conditions in Workflow", "Deadline Monitoring", "Exception Handling", "Sub-workflows and Ad-hoc Workflows", "Using Expressions in Workflow", "Document Linking to Workflows"] },
        { id: 4, title: "Module 4: Workflow Integration with SAP Modules", topics: ["Workflow for Purchase Order Approval (MM)", "Workflow for Invoice Verification (FI)", "Workflow for Absence Management (HCM)", "Workflow for Sales Order Processing (SD)", "Integration with Project Systems (PS)", "Workflow in Plant Maintenance (PM)", "Cross-Application Workflows"] },
        { id: 5, title: "Module 5: Business Objects and Events", topics: ["Understanding Business Object Repository (BOR)", "Creating Custom Business Objects", "Defining Events and Attributes", "Event Linkage and Event Triggers", "Event Trace and Event Monitoring", "Using Change Documents for Events", "Delegation of Business Objects"] },
        { id: 6, title: "Module 6: Agent Determination Strategies", topics: ["Rule-Based Agent Determination", "Organizational Management Integration", "Expression Editor for Agents", "Dynamic Agent Assignment", "Substitution Rules", "Workflow Inbox Configuration", "Custom Agent Determination"] },
        { id: 7, title: "Module 7: Workflow Reporting and Monitoring", topics: ["Workflow Log Analysis", "Workflow Statistics and Performance", "Workflow Administration Tools", "Troubleshooting Workflow Errors", "Workflow Archiving", "Monitoring Business Events", "Alerts and Notifications"] },
        { id: 8, title: "Module 8: Workflow Enhancements and Customization", topics: ["User Exits and BAdIs in Workflow", "Customizing Workflow Tasks", "Enhancing Standard Workflows", "Workflow Exits", "Programmatic Workflow Control", "Workflow for Custom Applications", "Adapting Workflows to Business Needs"] },
        { id: 9, title: "Module 9: SAP Fiori and Workflow", topics: ["Introduction to Fiori for Workflow", "My Inbox Configuration", "Approve Leave Requests in Fiori", "Approve Purchase Orders in Fiori", "Extending Fiori Workflow Apps", "Fiori Launchpad Integration", "Workflow Tasks in Fiori"] },
        { id: 10, title: "Module 10: End-to-End Workflow Project", topics: ["Project Blueprinting for Workflow", "Implementation Phases and Testing", "Workflow Solution Design", "Real-Time Business Case Execution", "End-User Training and Documentation", "Go-Live Strategy for Workflow", "Post Go-Live Support and Optimization"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP WF Course Modules
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
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Business Analysts"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate WF training", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite WF training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led WF training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP WF in Chennai</h2>
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
        { id: 1, name: "Priya S.", designation: "SAP WF Consultant", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP Workflow course at IntelliMindz provided me with an in-depth and comprehensive understanding of how enterprise systems function across various business processes. The hands-on sessions and real-world examples were very practical, insightful, and directly applicable to my daily work." },
        { id: 2, name: "Arjun M.", designation: "Functional Analyst", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "I appreciated how each workflow module was broken down clearly and methodically. The trainers were very patient, knowledgeable, and supportive. Their strong domain expertise made it easy for me to grasp even the most complex processes with confidence." },
        { id: 3, name: "Sneha K.", designation: "WF Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The training included real-time workflow case studies, interactive discussions, and practical exercises, which truly helped me prepare effectively for job interviews. I highly recommend this course for SAP Workflow learners seeking quality training in Chennai." },
        { id: 4, name: "Vikram P.", designation: "SAP Project Lead", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The comprehensive curriculum and excellent faculty made a significant difference in my learning experience. I was able to apply the knowledge and skills I gained immediately in my role managing complex SAP Workflow projects efficiently." },
        { id: 5, name: "Deepak R.", designation: "Technical WF Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The access to SAP systems and hands-on assignments provided me with valuable real-world exposure. IntelliMindz is truly one of the best SAP Workflow training institutes in Chennai, delivering quality education and practical experience." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer WF" />
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

const SapWFFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP WF used for in businesses?", description: "SAP Workflow is used to automate and streamline business processes by routing tasks, approvals, and notifications among users within SAP systems, significantly improving efficiency and compliance." },
        { id: 2, title: "Who should attend this SAP WF training in Chennai?", description: "This training is ideal for IT professionals, business analysts, developers, and consultants seeking to master workflow automation within SAP environments." },
        { id: 3, title: "Do I need prior SAP experience for this training in Chennai?", description: "No prior SAP experience is strictly required, although a basic understanding of SAP modules can be beneficial. The course covers foundational concepts." },
        { id: 4, title: "Why is SAP WF training in Chennai important for career growth?", description: "As businesses increasingly automate processes, skilled SAP Workflow professionals are in high demand, making this training crucial for advancing your career in Chennai's tech landscape." },
        { id: 5, title: "Is there a difference between SAP WF and general process automation?", description: "Yes, SAP WF is specifically designed for process automation within the SAP ecosystem, leveraging its integrated capabilities, unlike general automation tools." },
        { id: 6, title: "Do you offer SAP WF training in Chennai online?", description: "Yes, we offer both classroom and online training options for our SAP Workflow course in Chennai to accommodate various learning preferences and schedules." },
        { id: 7, title: "Will this SAP WF course in Chennai provide system access?", description: "Absolutely. You will receive dedicated SAP system access for hands-on practice throughout your SAP Workflow training in Chennai." },
        { id: 8, title: "Is job placement support available for this WF course in Chennai?", description: "Yes, we provide comprehensive job placement assistance, including resume preparation, mock interviews, and job alerts to support your career path after completing the training in Chennai." },
        { id: 9, title: "Can I take this SAP WF training in Chennai while working full-time?", description: "Yes, we offer flexible batch timings, including weekend and evening sessions, making our SAP Workflow training in Chennai suitable for working professionals." },
        { id: 10, title: "Is this SAP WF course suitable for freshers in Chennai?", description: "Definitely. Our structured approach and hands-on methodology make this SAP Workflow training in Chennai perfect for fresh graduates starting their SAP journey." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP WF Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP WF course in Chennai.
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
                <title>SAP WF Training in Chennai | SAP Workflow Course in Chennai</title>
                <meta name="description" content="Enroll in our SAP WF Training in Chennai to master enterprise workflow skills. Get certified with our hands-on SAP Workflow course in Chennai, led by industry experts." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapWfCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapWFFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
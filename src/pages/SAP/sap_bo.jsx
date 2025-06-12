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
                <h1 className="intro-h1">Best SAP BO Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP BO Training – your gateway to global career opportunities in the business intelligence landscape.</h3>
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
                    Learn from the Best: SAP BO Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP BO trainers are industry professionals with extensive hands-on experience in business intelligence and reporting systems. With strong domain expertise and real-world project knowledge, our trainers deliver comprehensive insights to support your SAP BO learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a solid foundation and progress through advanced SAP BO concepts.</li>
                        <li><span className="icon">✓</span> Learn from practicing SAP BO Consultants with real-time project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven track record and successful student placements in SAP BO training.</li>
                        <li><span className="icon">✓</span> Receive full career support including resume assistance and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop industry-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a personalized learning process tailored to your pace and career aspirations.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP BO Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from SAP BO experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking a SAP BO training institute near you that emphasizes practical knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Select batch timings that fit your busy schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world SAP BO processes and tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit course materials and revise SAP BO concepts anytime." },
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
            <h1>Become a Skilled SAP BO Consultant with IntelliMindz</h1>
            <p>Industry-aligned SAP BO training that enhances your expertise in business intelligence modules.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your BI Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP BO Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we deliver practical SAP BO training designed to equip learners with both conceptual knowledge and hands-on project experience. Our curriculum covers essential business intelligence topics such as report development, dashboard creation, data modeling, and analytics to ensure comprehensive technical competence.</p>
                    <p>The course includes interactive lessons, live demonstrations, practical exercises, and project-based assignments. By applying real-time business cases and SAP BO implementations, learners gain confidence and the ability to manage SAP BO functions effectively in enterprise environments.</p>
                    <p>Whether you are new to SAP or an experienced professional aiming to enhance your BO skills, our training prepares you for success in the competitive SAP job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP BO Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer flexible learning modes including classroom sessions and online live training, catering to working professionals, students, and job seekers alike. This blended approach lets you choose the format that best fits your availability and learning preference, ensuring a smooth training experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our program emphasizes hands-on learning by providing dedicated SAP BO system access. You will practice configurations in modules such as Report Development, Dashboard Creation, and Data Modeling directly within an SAP environment, reinforcing your theoretical understanding and boosting practical skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain exposure through case studies modeled after real SAP BO projects, enhancing your problem-solving abilities and preparing you for interview scenarios focusing on practical applications." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP BO Experience", description: "Our trainers have extensive industry experience with SAP BO, having handled multiple implementation projects. Their insights and guidance ensure you learn best practices and relevant skills for the business intelligence domain." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain small batches to provide personalized attention, enabling trainers to address individual questions and offer targeted mentoring, which helps students master SAP BO competently." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each module ends with interactive discussions, quizzes, and assessments aligned with current SAP BO interview requirements, helping reinforce knowledge and build confidence for job interviews." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP BO Training in Chennai Key Features</h2>
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

const SapBOCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to SAP BO", topics: ["Overview of Business Intelligence and SAP BO Architecture", "SAP BO Platform Components", "Navigation and User Interface", "Introduction to Key BO Tools (Web Intelligence, Crystal Reports)", "Business Process Integration in SAP BO", "Overview of Data Sources"] },
        { id: 2, title: "Module 2: Web Intelligence", topics: ["Creating and Managing Web Intelligence Documents", "Query Building and Filtering", "Report Formatting and Layout", "Calculations and Variables", "Drill-Down and Hierarchies", "Sharing and Scheduling Reports", "Integration with Universes"] },
        { id: 3, title: "Module 3: Crystal Reports", topics: ["Designing Crystal Reports", "Data Connections and Queries", "Formatting and Grouping", "Subreports and Cross-Tabs", "Parameters and Prompts", "Report Distribution", "Integration with SAP Systems"] },
        { id: 4, title: "Module 4: Universe Design", topics: ["Universe Creation and Management", "Defining Objects and Classes", "Joins and Relationships", "Resolving Loops and Traps", "Security and Access Control", "Testing and Deploying Universes", "Integration with Web Intelligence"] },
        { id: 5, title: "Module 5: Dashboard Design", topics: ["Building Interactive Dashboards", "Data Visualization Techniques", "Components and Selectors", "Dynamic Visibility", "Dashboard Publishing", "Integration with SAP BO Platform", "Performance Optimization"] },
        { id: 6, title: "Module 6: Information Design Tool (IDT)", topics: ["Creating Data Foundations", "Building Business Layers", "Multi-Source Universes", "Managing Connections", "Security Profiles", "Publishing Universes", "Best Practices for IDT"] },
        { id: 7, title: "Module 7: SAP BO Administration", topics: ["Central Management Console (CMC)", "User and Group Management", "Content Management", "Server Configuration and Monitoring", "Backup and Recovery", "Performance Tuning", "Security Implementation"] },
        { id: 8, title: "Module 8: Reporting and Analytics", topics: ["Standard Reports in SAP BO", "Custom Report Development", "Use of SAP Analytics Cloud with BO", "Real-Time Analytics and Dashboards", "Exporting Data for Business Use", "Ad Hoc Reporting", "Integration with SAP BI"] },
        { id: 9, title: "Module 9: Advanced BO Topics", topics: ["SAP BO 4.x Enhancements", "Integration with SAP HANA", "Mobile BI Applications", "SAP Lumira Integration", "Data Quality and Cleansing", "Advanced Query Techniques", "Custom Functions"] },
        { id: 10, title: "Module 10: End-to-End BO Project Implementation", topics: ["Project Planning and Scoping", "Data Source Integration", "Report and Dashboard Development", "Testing and Validation", "User Training and Documentation", "Go-Live Preparation", "Post-Implementation Support"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP BO Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate BO training", title: "Onsite Training:", description: "Delivered at your organization’s premises, this method provides customized, collaborative learning. Perfect for upskilling your team in a familiar environment using your systems and workflows for practical relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite BO training center", title: "Offsite Training:", description: "Held at professional training centers or conference venues, ideal for focused group learning and workshops free from workplace distractions, facilitating certification preparation and team synergy." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led BO training", title: "Virtual Instructor-Led Training (VILT):", description: "Live sessions via Zoom, Microsoft Teams, or similar platforms, suited for remote learners or distributed teams. Combines flexibility of online learning with real-time interaction and engagement tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP BO in Chennai</h2>
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
        { id: 1, name: "Meera S.", designation: "SAP BO Consultant", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "The SAP BO course at IntelliMindz provided me with a an in-depth and comprehensive understanding of how business intelligence systems function across various business processes. The hands-on sessions and real-world examples were very practical, insightful, and directly applicable to my daily work." },
        { id: 2, name: "Prakash S.", designation: "BI Analyst", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "I appreciated how each BO module was broken down clearly and methodically. The trainers were very patient, knowledgeable, and supportive. Their strong domain expertise made it easy for me to grasp for and apply even the most complex processes concepts with confidence." },
        { id: 3, name: "Divya S.", designation: "HXM Specialist", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The training included real-time BO scenarios, case studies, and practical exercises, which truly helped me prepare effectively for job interviews. I highly recommend this course for SAP BO learners seeking quality training in Chennai." },
        { id: 4, name: "Suresh M.", designation: "SAP BO Project Lead", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The comprehensive curriculum and excellent faculty made a significant difference in my learning experience. I was able to apply the knowledge and skills I gained immediately in my role managing complex ₩ SAP BO projects efficiently." },
        { id: 5, name: "Kavitha S.", designation: "BI Developer", avatarInitial : "I", rating: 5, companyLogoText: "Intellimindz", reviewText: "The access to SAP BO systems and hands-on assignments provided me with valuable real-world exposure. IntelliMindz is truly one of the best SAP BO training institutes in Chennai, delivering quality education and practical experience." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer BO" />
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

const SapBOFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is SAP BO used for?", description: "SAP BO (Business Objects) is a business intelligence platform used for reporting, data visualization, and analytics, enabling organizations to make data-driven decisions. Our training in Chennai covers these functions." },
        { id: 2, title: "Who should attend this SAP BO training in Chennai?", description: "Business analysts, data professionals, IT professionals, and freshers aiming for a career in business intelligence and SAP BO roles should consider this training in Chennai." },
        { id: 3, title: "Do I need experience before taking this BO training in Chennai?", description: "No prior SAP or BI experience is required for this training in Chennai. The course is designed for beginners and professionals alike, with foundational to advanced concepts." },
        { id: 4, title: "Why is SAP BO training in Chennai important now?", description: "With the increasing need for data-driven insights, skilled SAP BO professionals are in high demand. Chennai is a significant hub for these career opportunities." },
        { id: 5, title: "Is there a difference between SAP BO and SAP BW?", description: "Yes. SAP BO focuses on reporting and analytics, while SAP BW is a data warehousing solution. Our training in Chennai focuses on SAP BO’s BI capabilities." },
        { id: 6, title: "Do you offer SAP BO training in Chennai online?", description: "Yes. Both classroom and online options are available for learners in Chennai who prefer flexible learning for their SAP BO training." },
        { id: 7, title: "Will this SAP BO course in Chennai provide system access?", description: "Yes. You will get full SAP BO system access for hands-on practice throughout the training in Chennai, allowing you to gain practical reporting and analytics skills." },
        { id: 8, title: "Is job placement support available for this BO course in Chennai?", description: "Absolutely. We provide resume building, mock interviews, and job alerts to support your SAP BO career path in Chennai." },
        { id: 9, title: "Can I take this SAP BO training in Chennai while working full-time?", description: "Yes. Flexible batches including weekend and evening sessions are available for working professionals in Chennai who want to pursue SAP BO training." },
        { id: 10, title: "Is this SAP BO course suitable for freshers in Chennai?", description: "Definitely. Our structured approach and hands-on methodology make this SAP BO training in Chennai perfect for fresh graduates starting their BI journey." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP BO Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP BO course in Chennai.
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

const SAPMain = () => {
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
                <title>SAP BO Training in Chennai | SAP BO Course in Chennai</title>
                <meta name="description" content="Enroll in our SAP BO Training in Chennai to master business intelligence skills. Get certified with our hands-on SAP BO course in Chennai, led by industry experts." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <SAPHeroSection openContactModal={openContactModal} />
            <SAPAboutSection />
            <KeyFeaturesSection />
            <SapBOCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <SapBOFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPMain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
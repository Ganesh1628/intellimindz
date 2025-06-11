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
                <h1 className="intro-h1">Best SAP ABAP Training Institute in Chennai</h1>
                <h3 className="intro-h3">Unlock your technical potential with expert-led SAP ABAP Training – your pathway to global career success in the SAP ecosystem.</h3>
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
                    Learn from the Best: SAP ABAP Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP ABAP trainers are more than just instructors – they are seasoned professionals with extensive hands-on experience in SAP ABAP development. With rich industry backgrounds and real-world project exposure, our trainers bring in-depth technical insights to guide your SAP ABAP learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain a strong foundation and advance through expert-level SAP ABAP concepts.</li>
                        <li><span className="icon">✓</span> Learn from working SAP ABAP Consultants who bring real-time project experience.</li>
                        <li><span className="icon">✓</span> Take advantage of IntelliMindz's proven expertise and student success in SAP ABAP training.</li>
                        <li><span className="icon">✓</span> Get full career support including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time scenarios and practical assignments to develop project-ready skills.</li>
                        <li><span className="icon">✓</span> Experience a learning process customized to your pace and career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="SAP ABAP Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by SAP ABAP experts from our training centre in Chennai" },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Perfect for professionals looking for a SAP ABAP training centre near you that delivers practical skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-world ABAP development tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key concepts and revise the SAP ABAP course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your understanding." } // Text updated
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
            <h1>Become a Skilled SAP ABAP Developer with IntelliMindz</h1>
            <p>Industry-relevant SAP ABAP training that builds your coding and development expertise in SAP systems.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your ABAP Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP ABAP Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, we offer hands-on SAP ABAP training designed to equip learners with both theoretical understanding and real-time development experience. Our curriculum covers core ABAP concepts such as reports, module pools, data dictionary, enhancements, BAPIs, BDCs, SmartForms, and more, ensuring well-rounded technical competence.</p>
                    <p>The course structure includes interactive classes, live coding sessions, practical exercises, and development-based mini-projects. By working on real-time business cases and ABAP implementations, learners gain the confidence and ability to perform actual SAP technical tasks in enterprise environments.</p>
                    <p>Whether you're a beginner entering the SAP technical space or an experienced professional looking to upgrade your ABAP skills, our training helps you gain practical mastery and stay ahead in the competitive SAP job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP ABAP Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We provide both in-person classroom sessions and flexible virtual learning modes, making SAP ABAP training highly accessible to a wide range of learners, including working professionals, students, and job seekers. This dual-mode approach allows you to select the format that best suits your schedule, learning preferences, and comfort level, ensuring an effective and convenient training experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Our training places a strong emphasis on hands-on practical experience, offering dedicated SAP ABAP system access for every learner. This allows you to write, test, and debug code directly within a real SAP environment, helping you reinforce theoretical concepts, build confidence in development tasks, and gain valuable exposure to industry-standard tools and workflows." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Gain comprehensive experience by working on case studies carefully modeled after real SAP ABAP development projects encountered in professional settings. These practical exercises are designed to improve your problem-solving skills, familiarize you with common technical challenges, and prepare you thoroughly for SAP ABAP interview questions that focus on practical application." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP ABAP Experience", description: "Our trainers are seasoned industry professionals with extensive hands-on experience in SAP ABAP development, having worked on multiple large-scale projects across various domains. They bring deep technical insights, coding best practices, and real-world knowledge to the classroom, ensuring you receive expert mentorship and guidance throughout your learning journey." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We limit our training batch sizes intentionally to provide personalized attention and one-on-one mentoring for every student. This approach ensures that individual queries are addressed promptly, doubts are clarified thoroughly, and learners receive focused support, helping each participant progress effectively and master the SAP ABAP skills needed for professional success." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each training module concludes with highly interactive discussions, quizzes, and assessments aligned with the latest SAP ABAP interview topics and industry requirements. This structured evaluation process helps reinforce learning, enhances knowledge retention, and equips you to confidently face technical evaluations during job interviews and placement drives." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>SAP ABAP Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to SAP ABAP", topics: ["Introduction to ERP and SAP", "Basics of SAP NetWeaver Architecture", "Overview of SAP Modules and ABAP’s Role", "SAP Logon and Navigation", "ABAP Workbench Introduction", "Structure of an ABAP Program", "Data Dictionary Basics"] },
        { id: 2, title: "Module 2: ABAP Data Types and Operators", topics: ["Elementary and User-defined Data Types", "Constants, Variables, and Parameters", "Operators in ABAP", "Control Statements – IF, CASE, LOOP, etc.", "Modularization Techniques – Include, Subroutines, Function Modules", "Debugging and Runtime Analysis", "Field Symbols and Data References"] },
        { id: 3, title: "Module 3: ABAP Data Dictionary (DDIC)", topics: ["Tables, Views, Structures, and Data Elements", "Domains and Search Helps", "Lock Objects and Table Maintenance Generator", "Transparent vs Clustered and Pooled Tables", "Foreign Keys and Check Tables", "Views (Database, Projection, Maintenance)", "Table Control and Tabstrip Controls"] },
        { id: 4, title: "Module 4: Reports in ABAP", topics: ["Classical Reports – Events and Layout", "Interactive Reports – At Line Selection", "ALV (ABAP List Viewer) Reports", "Customizing Output Layouts", "Use of Field Catalog and Layout", "Performance Optimization in Reports", "Real-Time Report Building"] },
        { id: 5, title: "Module 5: Module Pool Programming", topics: ["Introduction to Screen Programming", "Screen Flow Logic (PBO/PAI)", "GUI Status and Title Bar", "Table Controls in Module Pool", "Subscreens and Tabstrip Controls", "Message Classes and Validation", "Custom Dialog Programming"] },
        { id: 6, title: "Module 6: SAP Scripts and SmartForms", topics: ["Basics of SAP Script", "Layout Sets, Windows, and Page Formats", "SmartForms – Designing and Printing", "Form Interface and SmartStyles", "Driver Program for SmartForms", "Adobe Forms Overview", "Output Types and Assignments"] },
        { id: 7, title: "Module 7: ABAP Enhancements and Modifications", topics: ["Customer Exits and User Exits", "BADIs (Business Add-Ins)", "Enhancement Framework (Explicit/Implicit)", "Modification Techniques", "Business Transaction Events (BTEs)", "Debugging Enhancements", "Real-Time Enhancement Scenarios"] },
        { id: 8, title: "Module 8: BDC and LSMW", topics: ["Batch Data Communication (BDC) Overview", "Call Transaction and Session Methods", "Recording and BDC Programming", "Legacy System Migration Workbench (LSMW)", "Steps in LSMW Process", "Data Mapping and Conversion Rules", "Error Handling and Troubleshooting"] },
        { id: 9, title: "Module 9: Object-Oriented ABAP (OOABAP)", topics: ["Introduction to OOABAP Concepts", "Class, Objects, Methods, and Inheritance", "Interfaces and Polymorphism", "Events and Exception Handling", "Local and Global Classes", "Factory Methods and Constructors", "Practical Scenarios in OOABAP"] },
        { id: 10, title: "Module 10: Advanced Topics and Real-Time Project", topics: ["RFCs, BAPIs, and ALE/IDocs", "Integration with SAP FICO/MM/SD", "Web Dynpro for ABAP – Basics", "Introduction to CDS Views and AMDP", "ABAP in S/4HANA – Key Differences", "Real-Time Project: End-to-End Development", "Code Review, Deployment & Performance Tuning"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                SAP ABAP Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate ABAP training", title: "Onsite Training:", description: "Held at your company’s premises, this training method offers a personalized, collaborative learning environment. It's ideal for upskilling teams in real-time, using your actual work environment, tools, and workflows for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite ABAP training center", title: "Offsite Training:", description: "Conducted at professional training centers or dedicated conference venues, this option is ideal for focused learning without workplace distractions. Great for certifications, hands-on workshops, and building team synergy in a neutral setting." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led ABAP training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via Zoom, Microsoft Teams, or similar platforms, VILT is perfect for remote learners or geographically distributed teams. It combines the flexibility of online access with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP ABAP in Chennai</h2> {/* Title updated */}
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
        { id: 1, name: "Arun M.", designation: "SAP ABAP Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The structure of Intellimindz’s SAP ABAP course was excellent. I got to work on real-world coding scenarios, which enhanced my practical skills. The trainer was patient and helped me debug and understand every ABAP function in depth." },
        { id: 2, name: "Sneha R.", designation: "Technical Consultant", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Clear explanation of reports, forms, and modularization techniques. The instructor used real-time projects and hands-on tasks that helped me confidently transition to ABAP from a non-SAP background. It was worth every penny and more!" },
        { id: 3, name: "Vignesh T.", designation: "ABAP Freelancer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "I chose Intellimindz because of their strong reputation and industry-relevant content. The ABAP interview preparation, mock questions, and real-world case studies were spot-on. The batch schedule was very flexible and easily fit into my freelance work hours." },
        { id: 4, name: "Ritika S.", designation: "SAP Trainee", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I had no prior knowledge of ERP or ABAP. This course covered every concept from scratch, with excellent trainer support and guidance. It’s the best decision I made to kick-start my SAP career on the right path." },
        { id: 5, name: "Ramesh A.", designation: "Senior Developer", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The content depth and teaching methodology at Intellimindz made complex topics like SmartForms, BADI, and Enhancements easy to master. The practical sessions and real-time examples added immense value to my learning experience." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer ABAP" /> {/* Alt text updated */}
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
        { id: 1, title: "What is SAP ABAP used for?", description: "SAP ABAP is a programming language used to develop applications and customizations on the SAP platform, including reports, interfaces, enhancements, and forms." },
        { id: 2, title: "Who should take this SAP ABAP training?", description: "Fresh graduates with programming knowledge, software developers, and SAP functional consultants wanting to learn technical aspects of SAP." },
        { id: 3, title: "Do I need to know coding before learning ABAP?", description: "Basic programming knowledge (C, Java, or Python) is helpful, but beginners can also learn ABAP with structured training." },
        { id: 4, title: "Is ABAP still in demand in 2025?", description: "Yes. With S/4HANA migration projects and ongoing custom development, ABAP remains crucial in the SAP ecosystem." },
        { id: 5, title: "What’s the difference between ABAP and SAP FICO?", description: "SAP ABAP is technical (coding), while SAP FICO is functional (finance processes). ABAP developers customize and extend SAP functionalities." },
        { id: 6, title: "Is the training available online?", description: "Yes, our SAP ABAP training is available in both online and offline modes, with live instructor-led sessions and full server access." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, we offer live access to SAP development systems for exercises in data dictionary, reports, forms, and enhancements." },
        { id: 8, title: "Do you offer interview preparation?", description: "Absolutely. Each module includes mock interview questions, resume tips, and real-world scenarios relevant to job roles." },
        { id: 9, title: "Can I switch to SAP ABAP from another IT field?", description: "Yes. If you have basic coding skills and are looking to enter the SAP domain, ABAP is the best technical entry point." },
        { id: 10, title: "Is ABAP useful for freshers?", description: "Definitely. SAP ABAP is a great start for those wanting to build a strong technical career within the SAP ecosystem." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">SAP ABAP Course?</span> {/* Title updated */}
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our SAP ABAP course in Chennai. {/* Subtitle updated */}
                </p>
            </div>
            <div className="syllabus-grid"> {/* This class was used for card layout, suitable for FAQ too */}
                {modulesData.map((faqItem) => ( // Renamed module to faqItem for clarity
                    <div
                        key={faqItem.id}
                        className={`module-card ${activeModule === faqItem.id ? 'active' : ''}`} // module-card class kept for styling
                        onMouseEnter={() => setActiveModule(faqItem.id)}
                        onMouseLeave={() => setActiveModule(null)}
                    >
                        <div className="module-number"> {/* Kept for styling if needed */}
                            {String(faqItem.id).padStart(2, '0')}
                        </div>
                        <div className="module-content-syllabus"> {/* Kept for styling */}
                            <p className="module-title">{faqItem.title}</p> {/* Question */}
                            <div className="module-description"> {/* Answer container */}
                                <p>{faqItem.description}</p> {/* Answer */}
                            </div>
                        </div>
                        <div className="module-decoration"></div> {/* Kept for styling */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// CallToActionBanner - Content not provided in new text, keeping original generic content.
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
                <title>SAP ABAP Training in Chennai | SAP ABAP Course in Chennai</title>
                <meta name="description" content="Master technical development with our SAP ABAP Training in Chennai. Learn programming for SAP applications through our expert-designed SAP ABAP course in Chennai." />
            </Helmet>
            <Intro openContactModal={openContactModal} />
            <SapTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            {/* SAPHeroSection now contains ABAP content */}
            <SAPHeroSection openContactModal={openContactModal} />
            {/* SAPAboutSection now contains ABAP content */}
            <SAPAboutSection />
            {/* KeyFeaturesSection now contains ABAP content */}
            <KeyFeaturesSection />
            {/* SapFicoCourseContentSection (name kept) now contains ABAP content */}
            <SapFicoCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            {/* CorporateTrainingModesSection now contains ABAP content */}
            <CorporateTrainingModesSection />
            {/* AlumniReviewsSection now contains ABAP content */}
            <AlumniReviewsSection />
            <AskForDemo /> {/* Kept as a generic component */}
            <Onlineheader /> {/* Kept as is */}
            {/* SapImSyllabus (name kept) now contains ABAP FAQ content */}
            <SapABAPFaqSection /> {/* Renamed this component for clarity */}
            <CallToActionBanner openContactModal={openContactModal} />
        </>
    );
};

export default SAPmain;

// Onlineheader component kept as is (empty container).
const Onlineheader = () => {
    return <div className="online_container"></div>;
};
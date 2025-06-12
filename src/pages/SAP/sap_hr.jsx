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
                <h2 className="intro-h2">Best SAP HR Training Institute in Chennai</h2>
                <h1 className="intro-h1">Build a successful career in Human Resource Management with hands-on SAP HR Training – master HR operations and automation in the digital era.</h1>
                <h3 className="intro-h3"></h3>
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
                    Learn from the Best: SAP HR Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP HR trainers are not just instructors – they are SAP Human Resource Management professionals with real-time experience in global SAP HR implementations. Our trainers provide practical learning with a strong foundation in SAP HR modules, backed by business scenarios and live use cases.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain a complete understanding of SAP HR processes and modules</li>
                        <li><span className="icon">✓</span> Learn from certified SAP HR consultants with deep implementation expertise</li>
                        <li><span className="icon">✓</span> Join IntelliMindz, the trusted name for SAP HR training in Chennai</li>
                        <li><span className="icon">✓</span> Personalized career guidance including resume, interview support, and mentorship</li>
                        <li><span className="icon">✓</span> Work on real-time use cases for HR administration, payroll, and time management</li>
                        <li><span className="icon">✓</span> Experience learning customized to your pace, profile, and career goals</li>
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
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Be guided by SAP HR experts with strong domain knowledge and real-world SAP experience." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Best for those seeking a SAP HR training centre in Chennai focused on practical HR configurations." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose from weekday, weekend, or fast-track options based on your availability." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Participate in discussions and HR-centric workshops to enhance your learning." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "SAP HR course materials and recorded sessions are available for future reference." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-course assistance, doubt-clearing, and access to expert mentoring." }
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
            <h1>Become a Skilled SAP HR Consultant with IntelliMindz</h1>
            <p>SAP HR training that empowers you with the skills required to manage human resources, payroll, and employee data efficiently. Get ready for a rewarding SAP HR career with IntelliMindz!</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP HR Career with Confidence!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP HR Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SAP HR training program is designed to equip participants with end-to-end knowledge in Human Capital Management using SAP. The course includes deep dives into organizational management, recruitment, time management, payroll processing, and reporting. Our training blends theory with system practice, using real-life HR challenges as examples.</p>
                    <p>This SAP HR training in Chennai offers both instructor-led classroom and online sessions, hands-on SAP system access, and interactive assignments. Whether you’re an HR professional or fresher aiming for a career in SAP HR, this training will help you become project-ready.</p>
                    <p>SAP HR Training in Chennai</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP HR Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Attend instructor-led classroom training in Chennai or opt for online sessions. Both options are structured to meet the needs of working professionals and job seekers pursuing SAP HR training in Chennai." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "You’ll gain experience configuring and using SAP HR modules directly in the system. Activities include hiring employees, assigning roles, managing payroll, and generating HR reports." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Practice with scenarios based on real HR challenges such as leave management, wage calculation, and time tracking, to simulate live SAP HR environments." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP HR Experience", description: "All trainers are working SAP HR consultants with experience in domestic and international SAP HR projects. They bring real insights to the training room." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We maintain limited seats per batch to ensure that every learner receives focused mentoring, guidance, and support." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "After each SAP HR module, you’ll complete quizzes, assignments, and practical assessments designed to reinforce your knowledge and application skills." },
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
        { id: 1, title: "Module 1: Introduction to SAP HR", topics: ["Overview of SAP HR and its Submodules", "HR Structures and Integration with SAP FI", "Personnel Administration Concepts", "SAP HR Architecture", "Master Data in SAP HR", "Navigating SAP HR Screens", "Data Consistency and Control"] },
        { id: 2, title: "Module 2: Organizational Management", topics: ["Object Types and Infotypes", "Creating Organizational Units", "Jobs and Positions Configuration", "Reporting Relationships", "Evaluation Paths and Structure Maintenance", "OM Integration with PA", "Use of Simple Maintenance vs Expert Mode"] },
        { id: 3, title: "Module 3: Personnel Administration", topics: ["Employee Master Data Creation", "Hiring, Promotion, and Separation Actions", "Data Maintenance and Infotype Management", "Payroll Status and Control Records", "Employee Transfer Scenarios", "PA Integration with Other Modules", "Time Constraints in PA"] },
        { id: 4, title: "Module 4: Time Management", topics: ["Work Schedules and Absences", "Attendance Types and Leave Management", "Holiday Calendar Configuration", "Time Evaluation Process", "Quota Generation", "Integration with Payroll", "Time Reporting"] },
        { id: 5, title: "Module 5: Payroll Management", topics: ["Payroll Areas and Control Records", "Wage Types and Payroll Schemas", "Payroll Results and Simulation", "Retroactive Accounting", "Posting to FI", "Statutory Reporting", "Payroll Cluster"] },
        { id: 6, title: "Module 6: Recruitment", topics: ["Creating Applicant Data", "Applicant Actions and Status", "Vacancy and Advertisement Management", "Applicant Selection", "Integration with OM and PA", "Recruitment Reporting", "Resume Handling"] },
        { id: 7, title: "Module 7: Training and Event Management", topics: ["Business Events and Resources", "Planning Training Events", "Participant Administration", "Billing and Costing", "Attendance/Absence Integration", "Follow-Up Processes", "Evaluation of Training"] },
        { id: 8, title: "Module 8: Personnel Development", topics: ["Qualifications Catalog", "Profile Match-Up", "Career Planning", "Appraisal Systems", "Development Plans", "Training Needs Analysis", "Integration with OM"] },
        { id: 9, title: "Module 9: Reporting in SAP HR", topics: ["SAP Standard Reports", "Ad Hoc Query Tool", "InfoSet Query", "Custom Report Creation", "Integration with BI", "Report Authorization", "Reporting by Infotype"] },
        { id: 10, title: "Module 10: Real-Time Project and Interview Readiness", topics: ["Full-Cycle SAP HR Implementation", "Requirement Gathering and Mapping", "Configuration and Testing", "Go-Live and Support", "Final Assessment", "Resume Preparation", "Mock Interviews and Career Counseling"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Ideal for corporate HR teams who need SAP HR training delivered at their office in Chennai. Customizable to suit industry-specific requirements." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Delivered in professional training venues with hands-on labs, group activities, and practical SAP HR configurations." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual Instructor-Led Training (VILT):", description: "Live online training with certified SAP HR consultants via Zoom or Teams, suitable for remote learners across Chennai and beyond." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP HR in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "SAP HR Consultant", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "This SAP HR training in Chennai covered everything I needed—from understanding the HR module basics to advanced topics like payroll, organizational management, and the appraisal system. The sessions were well-structured with great focus on practical implementation. I gained valuable real-time experience that I could immediately apply at work." },
        { id: 2, name: "Renu D.", designation: "HR Systems Executive", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "I loved how real-time scenarios were integrated into each training session. The trainers were very approachable and ensured every student understood payroll configurations thoroughly. This SAP HR training in Chennai helped me build confidence and made my transition into HR systems management smoother." },
        { id: 3, name: "Abhishek T.", designation: "ERP Specialist", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "Enrolling in the SAP HR course at IntelliMindz was one of the best career moves I’ve made. The hands-on labs, real-time server access, and one-on-one trainer interactions created an engaging learning environment. I recommend this SAP HR training in Chennai to anyone looking to gain in-depth functional expertise." },
        { id: 4, name: "Sruthi M.", designation: "HR Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "As someone who shifted from core HR operations to SAP consulting, this course provided a smooth transition. The trainers explained each topic—like employee master data and time evaluation—with clarity. The right balance of theoretical concepts and hands-on practice made this SAP HR training in Chennai very effective for me." },
        { id: 5, name: "Deepak R.", designation: "Functional Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers at IntelliMindz clearly knew the ins and outs of SAP HR. They shared useful implementation project insights and real-world tips that aren’t found in standard training materials. From organizational management to personnel administration, everything was covered thoroughly. Definitely the best SAP HR training in Chennai." }
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
        { id: 1, title: "What is SAP HR used for in modern business environments?", description: "SAP HR (Human Resource Management) is a core ERP module used to manage a company’s human capital efficiently. It handles functions like employee information management, payroll processing, recruitment, attendance tracking, benefits administration, training, appraisals, and more. Our SAP HR training in Chennai covers all these areas, with practical examples to show how organizations use these features to automate and optimize HR tasks." },
        { id: 2, title: "Who should attend this SAP HR training in Chennai?", description: "This SAP HR course in Chennai is ideal for a wide range of learners, including HR professionals aiming to move into SAP consulting, MBA HR graduates seeking to enhance their profile, payroll administrators wanting to automate their processes, and ERP consultants looking to upskill. Even professionals with limited technical knowledge will benefit, as the training starts from scratch and builds toward advanced concepts." },
        { id: 3, title: "Do I need a technical background to take this SAP HR training in Chennai?", description: "No technical background is required to join our SAP HR training in Chennai. While familiarity with HR concepts and terminologies is helpful, the course is designed for both technical and non-technical individuals. Our trainers explain SAP navigation, configuration, and data management step-by-step, ensuring that learners from all backgrounds can follow along and build expertise." },
        { id: 4, title: "What are the career opportunities after completing SAP HR training in Chennai?", description: "There is a high demand for SAP HR professionals in organizations globally. After completing this SAP HR training in Chennai, you can pursue roles such as SAP HCM Consultant, HR Functional Consultant, Payroll Configuration Analyst, HRIS Analyst, or join SAP implementation and support teams. The training equips you with the technical and functional knowledge needed to thrive in a competitive job market." },
        { id: 5, title: "Is SAP HR still relevant in the era of S/4HANA and cloud-based systems?", description: "Yes, SAP HR (also referred to as SAP HCM) continues to be highly relevant. While SAP is shifting toward SuccessFactors for cloud HR, the core SAP HR modules are still actively used in many organizations running on-premise SAP or S/4HANA systems. Our SAP HR training in Chennai includes updated content compatible with S/4HANA, including best practices for migration and integration with cloud platforms." },
        { id: 6, title: "What is the mode of delivery for SAP HR training in Chennai?", description: "We offer both classroom training at our Chennai center and online instructor-led sessions for students who prefer to learn remotely. The online mode includes live sessions, access to recorded classes, digital learning materials, and real-time interaction with trainers. You can choose the format that best suits your schedule and learning style." },
        { id: 7, title: "Will I get to practice on SAP HR systems during training in Chennai?", description: "Yes. Our SAP HR training in Chennai provides every learner with hands-on access to a live SAP environment, where you can perform real-time tasks such as creating employee master data, setting up organizational units, configuring time management, and processing payroll runs. Practical exposure is a major focus of this training program to ensure job readiness." },
        { id: 8, title: "Do you cover interview questions and job preparation in this SAP HR training in Chennai?", description: "Absolutely. We include extensive interview preparation as part of the SAP HR course. You’ll receive commonly asked interview questions, guidance on answering scenario-based questions, mock interview sessions, and resume-building tips tailored for SAP HR roles. This gives you a competitive edge in job interviews." },
        { id: 9, title: "Can I switch my career to SAP HR with this training in Chennai?", description: "Yes, you definitely can. Whether you are from a general HR background or a completely different domain, this SAP HR training in Chennai is structured to help you switch careers into SAP HR. Many of our past learners have successfully transitioned into functional roles in SAP after completing this course and receiving hands-on project exposure." },
        { id: 10, title: "Is SAP HR training in Chennai available for corporate teams and companies?", description: "Yes. We offer customized SAP HR corporate training in Chennai tailored to organizational needs. Whether your team prefers in-person sessions, remote learning, or blended formats, we can design a training schedule that aligns with your business goals. We’ve delivered corporate programs to various clients across manufacturing, IT, retail, and service sectors." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP HR Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are detailed answers to frequently asked questions about our SAP HR training in Chennai:
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
                <title>SAP HR Training in Chennai | SAP Human Resource Course in Chennai</title>
                <meta name="description" content="Enhance your HR career with our SAP HR Training in Chennai. Learn payroll, time management, and personnel administration in our SAP Human Resource course in Chennai." />
            </Helmet>
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
        </>
    );
};

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet and HelmetProvider

// Import ContactModal - CORRECTED PATH
import ContactModal from "../components/Hero-Section/ContactModal";

// Import all your CSS files
import "../components/saponlinecom/onlineaboutus.css";
import "../components/saponlinecom/sapfico.css"; // This CSS file now contains styling for new sections
import "../components/saponlinecom/onlinecorporate.css";
import "../components/SAP/Header/Introsap.css";
import "../components/SapIM/IMsyllabus.css"; // This CSS is likely for general syllabus/FAQ styling
// import "../components/SAP/Askfordemo/askfordemo.css";


// Import all your image assets
import saphomeintro1 from '../assests/images/saphomeintro1.png';
import bestPriceIcon from '../assests/images/ExperiencedTrainers.jpeg'; // Used for Experienced Trainers
import runningIcon from '../assests/images/practicallearning.jpeg'; // Used for Practical Learning
import staffIcon from '../assests/images/flexiblebatches.jpeg'; // Used for Flexible Batches
import jobopening from '../assests/images/support.jpeg'; // Used for Continued Support
import liveclass from '../assests/images/interactive_sessions.jpeg'; // Used for Interactive Sessions
import onlinetest from '../assests/images/lifetimeaccess.jpeg'; // Used for Lifetime Access
import aboutsapficoImg from '../assests/images/aboutsapfico.jpeg'; // Kept for About Section
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
                <h2 className="intro-h2">Best SAP EC Training Institute in Chennai</h2>
                <h1 className="intro-h1">Unlock your financial and controlling expertise with expert-led SAP EC Training – your stepping stone to success in SAP's financial ecosystem.</h1>
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
                    Learn from the Best: SAP EC Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our SAP EC trainers are not just educators – they are finance and controlling professionals with deep experience in implementing and customizing SAP Enterprise Controlling solutions. Our trainers bring real-time scenarios, advanced configurations, and practical know-how to guide your SAP EC training journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation and move towards advanced-level SAP EC concepts.</li>
                        <li><span className="icon">✓</span> Learn from certified SAP EC consultants with extensive hands-on project exposure.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's legacy of excellence and student success in SAP EC training.</li>
                        <li><span className="icon">✓</span> Full career guidance, including resume development and interview coaching.</li>
                        <li><span className="icon">✓</span> Work on hands-on financial scenarios and case studies that mirror real business cases.</li>
                        <li><span className="icon">✓</span> Experience learning customized to your speed, background, and career track.</li>
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
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by industry-experienced SAP EC consultants from our training centre in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals looking for a SAP EC training centre near you that delivers hands-on business process knowledge." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Flexible training schedules with weekend, weekday, and fast-track options." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging financial discussions focused on real-world SAP EC implementations." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access SAP EC learning materials and videos even after course completion." },
        { image: jobopening, heading: "Continued Support", paragraph: "Post-training doubt resolution and continued technical mentorship." }
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
            <h1>Become a Skilled SAP EC Consultant with IntelliMindz</h1>
            <p>Industry-relevant SAP EC training that enhances your expertise in enterprise controlling, cost elements, profit centers, and internal orders. Start Your SAP EC Career with Confidence!</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your SAP EC Career with Confidence!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our SAP EC Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our SAP EC training is structured to help learners master both core concepts and advanced applications in Enterprise Controlling. The curriculum covers components like cost center accounting, profit center accounting, internal orders, and EC-PCA integration. We provide hands-on experience through real SAP system access and simulations of financial transactions and controlling flows.</p>
                    <p>This SAP EC training in Chennai offers instructor-led sessions, live configuration demos, interactive practice exercises, and end-to-end projects. Whether you're a finance graduate looking to enter SAP or an experienced consultant upgrading to SAP EC, our course equips you with practical implementation skills and project-readiness.</p>
                    <p>SAP EC Training in Chennai</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="SAP FICO Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose from instructor-led classroom training in Chennai or flexible online learning options. Our training model is designed for working professionals, job seekers, and students alike, allowing them to select the format that best aligns with their goals and location." },
        { id: 2, image: handsonsapImg, title: "Hands-on Practical Sessions with SAP System Access", description: "Gain real-world experience with dedicated SAP system access throughout your training. You'll work directly in SAP EC modules to configure cost elements, manage internal orders, and run reports, bridging the gap between theory and practice." },
        { id: 3, image: casestudyrealtimeImg, title: "Case Studies Based on Real-Time Scenarios", description: "Work through realistic SAP EC case studies drawn from real business environments. These scenarios help sharpen your ability to troubleshoot issues and understand the impact of SAP EC configurations on financial outcomes." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with In-Depth SAP EC Experience", description: "Our trainers are senior SAP EC professionals who’ve worked on multiple global implementations. They bring strong business acumen and system expertise, helping you gain practical insights into enterprise controlling." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "We keep our batch sizes small to ensure every participant gets individual support. Our trainers take time to address your questions and mentor you closely as you move through each SAP EC topic." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Module-Wise Assessments", description: "Each SAP EC training module ends with a knowledge check through discussions, quizzes, and assessments. These evaluations help reinforce your understanding and prepare you for SAP EC interviews and project scenarios." },
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
        { id: 1, title: "Module 1: Overview of SAP EC", topics: ["Introduction to SAP EC and its Components", "Relationship between SAP FI and EC", "EC Architecture and Integration with Other Modules", "SAP EC in S/4HANA", "Navigation and SAP Logon", "Controlling Area Setup", "Understanding Organizational Elements"] },
        { id: 2, title: "Module 2: Cost Center Accounting", topics: ["Cost Center Hierarchies", "Master Data Management", "Planning and Budgeting", "Actual Postings and Allocations", "Period-End Closing", "Reporting in Cost Centers", "Real-time Cost Center Exercises"] },
        { id: 3, title: "Module 3: Profit Center Accounting", topics: ["Configuration of Profit Centers", "Assignment to Organizational Units", "Transactions and Postings", "Transfer Pricing", "Integration with Financial Accounting", "Profitability Analysis Basics", "Reporting for Profit Centers"] },
        { id: 4, title: "Module 4: Internal Orders", topics: ["Internal Order Types", "Master Data Maintenance", "Planning and Budgeting", "Actual Postings", "Settlements and Allocations", "Monitoring Order Status", "Order Reporting and Analysis"] },
        { id: 5, title: "Module 5: Cost Element Accounting", topics: ["Primary and Secondary Cost Elements", "Cost Element Category Setup", "Integration with General Ledger", "Posting Logic", "Cost Allocation Techniques", "Internal Activity Allocation", "Reporting with Cost Elements"] },
        { id: 6, title: "Module 6: Activity-Based Costing (ABC)", topics: ["ABC Structure and Process Flow", "Resource and Activity Types", "Allocation and Rate Calculation", "Integration with Other Cost Objects", "Real-time Scenarios", "Master Data for ABC", "ABC Reporting Tools"] },
        { id: 7, title: "Module 7: Overhead Cost Controlling", topics: ["Overview of Overhead Costs", "Planning and Allocation Methods", "Statistical Key Figures", "Period-End Closing for Overheads", "Integration with CO-OM", "Variance Analysis", "Reports and KPIs"] },
        { id: 8, title: "Module 8: Reporting and Analysis Tools", topics: ["SAP Standard Reports", "Drilldown and Line Item Reports", "Report Painter and Report Writer", "Cost Center and Profit Center Reporting", "Custom Report Creation", "Dashboard Basics", "Using Fiori and SAP Analytics Cloud"] },
        { id: 9, title: "Module 9: Real-Time Integration Scenarios", topics: ["SAP FI and CO Integration", "Logistics Integration (MM/SD)", "Real-time Configuration Walkthroughs", "Document Flow Understanding", "Period-End Activities in Real Systems", "Cross-module Impact", "Practical Exercises"] },
        { id: 10, title: "Module 10: Real-Time Project and Assessment", topics: ["Full SAP EC Project Cycle", "Requirement Gathering and Blueprints", "Configuration and Unit Testing", "User Training and Support", "Final Assessment", "Resume and Interview Preparation", "Career Guidance Session"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate training session", title: "Onsite Training:", description: "Delivered at your office premises, this format allows for a tailored and collaborative learning experience, ensuring the training is specific to your company’s SAP EC environment and financial processes." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite training center", title: "Offsite Training:", description: "Conducted in professional training venues, this approach provides a focused setting ideal for corporate teams, workshops, and certification-oriented learning sessions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led training", title: "Virtual Instructor-Led Training (VILT):", description: "Attend SAP EC sessions live via online platforms like Zoom or Microsoft Teams. Perfect for professionals who want quality training in Chennai from remote locations." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for SAP EC in Chennai</h2>
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
        { id: 1, name: "Arvind K.", designation: "SAP EC Analyst", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "I gained hands-on experience configuring SAP EC components and understanding their business impact. The training delivery and practical sessions were on point." },
        { id: 2, name: "Priya D.", designation: "Finance Systems Consultant", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered real-world scenarios that made concepts like profit centers and cost allocations very relatable. The trainer’s expertise was evident in every session." },
        { id: 3, name: "Manish R.", designation: "SAP Finance Lead", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "I took the SAP EC training in Chennai at IntelliMindz and was impressed with the personalized attention. The trainers were helpful even after course completion." },
        { id: 4, name: "Nisha M.", designation: "Assistant Controller", avatarInitial: "N", rating: 5, companyLogoText: "Intellimindz", reviewText: "As someone coming from an accounting background, this course helped me transition into SAP EC comfortably. The interview prep and mock sessions were excellent." },
        { id: 5, name: "Dinesh A.", designation: "SAP CO Consultant", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "I highly recommend this SAP EC training in Chennai. It’s practical, well-organized, and backed by expert trainers who truly care about your progress." }
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
        { id: 1, title: "What is SAP EC used for?", description: "SAP EC (Enterprise Controlling) is used to monitor and manage costs and profitability within organizations through components like profit center accounting, cost center accounting, and internal orders." },
        { id: 2, title: "Who should take this SAP EC training in Chennai?", description: "Finance professionals, chartered accountants, SAP FICO consultants, and graduates interested in SAP finance and controlling should take this training in Chennai." },
        { id: 3, title: "Is prior SAP experience required to join this SAP EC training in Chennai?", description: "Not necessarily. While basic knowledge in SAP FI/CO helps, our SAP EC training in Chennai starts with core concepts, making it suitable for freshers too." },
        { id: 4, title: "Is SAP EC still in demand in 2025 and beyond?", description: "Yes. With increasing SAP S/4HANA implementations, SAP EC continues to be vital for cost management and financial reporting, making our training in Chennai highly relevant." },
        { id: 5, title: "What’s the difference between SAP EC and SAP FICO?", description: "SAP FICO is broader, covering financial accounting and controlling. SAP EC is a subcomponent of CO, focused specifically on enterprise-level controlling like profit centers and cost centers." },
        { id: 6, title: "Is this SAP EC training available online and offline in Chennai?", description: "Yes. We offer SAP EC training both in classroom mode at our Chennai center and online via instructor-led sessions." },
        { id: 7, title: "Will I get practical hands-on experience in this SAP EC training in Chennai?", description: "Absolutely. Our training in Chennai includes live system access for all topics, including configuration and reporting tasks." },
        { id: 8, title: "Do you provide SAP EC interview preparation during training in Chennai?", description: "Yes. We include mock interviews, resume guidance, and topic-wise technical questions in every batch of SAP EC training in Chennai." },
        { id: 9, title: "Can professionals from accounting or ERP backgrounds switch to SAP EC with this training in Chennai?", description: "Yes. Our SAP EC training in Chennai is tailored to help individuals from related domains upskill and transition into SAP roles." },
        { id: 10, title: "Is SAP EC training in Chennai suitable for beginners or fresh graduates?", description: "Yes. Beginners with an interest in finance and controlling can build a strong SAP career foundation through this SAP EC training in Chennai." }
    ];
    return (
        <div className="sapim-syllabus"> {/* Class name kept for styling consistency */}
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question about Our <span className="highlighted-course-title">SAP EC Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here are answers to commonly asked questions about our SAP EC training in Chennai:
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
                <title>SAP EC Training in Chennai | SAP Enterprise Controlling Course in Chennai</title>
                <meta name="description" content="Build your expertise in enterprise-level financial planning with SAP EC Training in Chennai. Learn profit center and business area accounting with our SAP EC course in Chennai." />
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
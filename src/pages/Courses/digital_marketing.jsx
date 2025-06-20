import React, { useState } from 'react';
import Meta from '../../components/Meta';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (unchanged)
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets (unchanged)
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
          <img src={homeintro} alt="Digital Marketing Training" />
      </div> */}
      <div className="overlay"></div>
      <div className="intro-content">
          <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
          <h1 className="intro-h1">Best Digital Marketing Training Institute in Chennai</h1>
          <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Digital Marketing Training – your gateway to a thriving career in data management.</h3>
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
                    Learn from Experts: Digital Marketing Training by <span>Industry Professionals</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Digital Marketing trainers are experienced professionals with hands-on expertise in SEO, SEM, and social media strategies. Their industry knowledge ensures a practical and impactful learning experience.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Gain expertise in Digital Marketing from SEO to analytics.</li>
                        <li><span className="icon">✓</span> Learn from marketing professionals with real-world campaign experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz’s proven success in Digital Marketing training and placements.</li>
                        <li><span className="icon">✓</span> Receive career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time marketing campaigns to build job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a tailored learning experience aligned with your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Digital Marketing Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Digital Marketing experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on training with real-world marketing campaigns." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that align with your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world digital marketing strategies." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit Digital Marketing course content anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to enhance your understanding." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Digital Marketing sessions from anywhere. Includes hands-on SEO, SEM, and social media projects with interactive Q&A.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Digital Marketing videos. Get lifetime access to course materials and updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person Digital Marketing training in Chennai for collaborative learning with trainers and peers.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility, ensuring consistent progress and support.", isPopular: false }
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
            <h1>Become a Skilled Digital Marketing Professional with IntelliMindz</h1>
            <p>Industry-focused Digital Marketing training to master SEO, SEM, and social media strategies.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Digital Marketing Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Digital Marketing Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our Digital Marketing training equips you with expertise in creating and managing online marketing campaigns using tools like Google Ads, SEO, and social media platforms. The curriculum covers SEO, SEM, content marketing, and analytics.</p>
                    <p>Our course includes hands-on projects, real-time campaign simulations, and interactive sessions to ensure practical mastery. You’ll work on industry-relevant scenarios like optimizing websites for search engines and running targeted ad campaigns.</p>
                    <p>Whether you're a beginner or a professional aiming to specialize in digital marketing, our training prepares you for the dynamic online marketing job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Digital Marketing Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person or online Digital Marketing training, tailored for professionals, students, and job seekers." },
        { id: 2, image: handsonsapImg, title: "Hands-on Marketing Tools", description: "Gain practical experience with Google Ads, SEO tools, and social media platforms." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Marketing Projects", description: "Work on live campaigns to enhance problem-solving and interview readiness." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Marketing Trainers", description: "Learn from professionals with extensive experience in digital marketing campaigns." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Limited batch sizes ensure personalized mentoring for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Assessments", description: "Engage in module-wise discussions and assessments aligned with digital marketing interview topics." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Digital Marketing Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Digital Marketing", topics: ["Overview of Digital Marketing", "Importance of Online Presence", "Key Digital Marketing Channels", "Digital Marketing vs. Traditional Marketing", "Career Opportunities in Digital Marketing", "Setting Marketing Goals"] },
        { id: 2, title: "Module 2: Search Engine Optimization (SEO)", topics: ["Introduction to SEO", "On-Page and Off-Page SEO", "Keyword Research and Analysis", "Technical SEO and Site Audits", "Link Building Strategies", "SEO Tools (Ahrefs, SEMrush)"] },
        { id: 3, title: "Module 3: Search Engine Marketing (SEM)", topics: ["Introduction to Google Ads", "Campaign Setup and Optimization", "Keyword Bidding Strategies", "Ad Copywriting and Extensions", "Conversion Tracking", "Google Ads Analytics"] },
        { id: 4, title: "Module 4: Social Media Marketing", topics: ["Social Media Platforms Overview", "Creating Social Media Campaigns", "Content Creation for Social Media", "Paid Social Media Advertising", "Social Media Analytics", "Influencer Marketing"] },
        { id: 5, title: "Module 5: Content Marketing", topics: ["Content Marketing Fundamentals", "Content Strategy Development", "Blog Writing and Optimization", "Video and Visual Content Creation", "Content Distribution Channels", "Measuring Content Performance"] },
        { id: 6, title: "Module 6: Email Marketing", topics: ["Email Marketing Basics", "Building Email Lists", "Crafting Effective Email Campaigns", "Email Automation Tools (Mailchimp)", "A/B Testing in Emails", "Email Analytics and Reporting"] },
        { id: 7, title: "Module 7: Web Analytics", topics: ["Introduction to Google Analytics", "Setting Up Analytics Accounts", "Tracking Website Performance", "User Behavior Analysis", "Conversion Rate Optimization", "Reporting and Dashboards"] },
        { id: 8, title: "Module 8: Affiliate and Influencer Marketing", topics: ["Affiliate Marketing Basics", "Setting Up Affiliate Programs", "Influencer Marketing Strategies", "Tracking Affiliate Performance", "Partnering with Influencers", "ROI Measurement"] },
        { id: 9, title: "Module 9: Digital Marketing Projects", topics: ["End-to-End Campaign Planning", "SEO Audit and Optimization", "Running a Google Ads Campaign", "Social Media Campaign Execution", "Email Marketing Campaign", "Project Reporting and Analysis"] },
        { id: 10, title: "Module 10: Digital Marketing Strategy and Trends", topics: ["Building a Digital Marketing Strategy", "Emerging Trends (AI, Voice Search)", "Budgeting and ROI Analysis", "Case Studies in Digital Marketing", "Certification Preparation", "Career Planning in Digital Marketing"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Digital Marketing Course Modules
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
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat-Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Marketing Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite Digital Marketing training", title: "Onsite Training", description: "Conducted at your premises, offering tailored Digital Marketing training for team upskilling in SEO and social media." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Digital Marketing training center", title: "Offsite Training", description: "Held at professional training centers for focused Digital Marketing training and certifications." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual Digital Marketing training", title: "Virtual Instructor-Led Training (VILT)", description: "Live Digital Marketing training via platforms like Zoom, ideal for remote teams with hands-on campaign projects." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Digital Marketing in Chennai</h2>
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
        { id: 1, name: "Priya S.", designation: "Digital Marketing Specialist", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Digital Marketing course was exceptional. Hands-on projects with SEO and Google Ads were highly practical. The trainers were outstanding." },
        { id: 2, name: "Arun V.", designation: "Social Media Manager", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered social media and analytics thoroughly. Real-time campaign projects helped me secure a marketing role." },
        { id: 3, name: "Sneha R.", designation: "SEO Analyst", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible schedules and live projects were perfect. The interview prep for digital marketing roles was spot-on." },
        { id: 4, name: "Karthik M.", designation: "Digital Marketing Trainee", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course beginner-friendly. The trainers explained SEO concepts clearly, and the labs were invaluable." },
        { id: 5, name: "Divya N.", designation: "Content Marketing Specialist", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course simplified complex topics like content strategy. The practical projects and mentoring added immense value." }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { 
        let stars = []; 
        for (let i = 0; i < 5; i++) { 
            stars.push(<span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>); 
        } 
        return stars; 
    };
    const formatReviewText = (text) => { return <p>{text}</p>; };

    return (
        <div className="alumni-reviews-section">
            <h2 className="alumni-reviews-title">Reviews from Our Alumni</h2>
            <div className="review-slider-layout-container">
                <div className="reviewer-image-area">
                    <div className="reviewer-main-image-placeholder">
                        <img src={alumniReviewImg} alt="Alumni Reviewer Digital Marketing" />
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
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5371 18.4142L2.12285 10L10.5371 1.58579" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <span className="slide-counter">{String(currentSlide + 1).padStart(2, '0')}/{String(reviewsData.length).padStart(2, '0')}</span>
                            <button onClick={nextSlide} className="nav-arrow next-arrow" aria-label="Next review">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.46289 1.58582L9.87711 10L1.46289 18.4142" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
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
        { id: 1, title: "What is Digital Marketing used for?", description: "Digital Marketing promotes brands, products, or services online using channels like SEO, SEM, social media, and email to reach target audiences." },
        { id: 2, title: "Who should take this Digital Marketing training?", description: "Freshers, marketing professionals, and entrepreneurs looking to specialize in online marketing strategies." },
        { id: 3, title: "Do I need prior experience to learn Digital Marketing?", description: "No prior experience is required; the course is designed for beginners and professionals alike." },
        { id: 4, title: "Is Digital Marketing in demand in 2025?", description: "Yes, Digital Marketing skills are in high demand across industries like eCommerce, IT, and retail." },
        { id: 5, title: "What’s the difference between SEO and SEM?", description: "SEO focuses on organic search rankings; SEM involves paid ads to drive traffic via platforms like Google Ads." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Digital Marketing training with live instructor-led sessions." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll work on live campaigns using SEO tools, Google Ads, and social media platforms." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and Digital Marketing-specific scenarios." },
        { id: 9, title: "Can I switch to Digital Marketing from another field?", description: "Yes, with our training, anyone can transition to Digital Marketing with basic computer skills." },
        { id: 10, title: "Is Digital Marketing suitable for freshers?", description: "Absolutely, it’s an excellent entry point for freshers aiming for a career in online marketing." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Digital Marketing Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Get answers to your questions about our Digital Marketing course in Chennai.
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
            <p className="cta-banner-text">Launch your Digital Marketing career with expert guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Digitalmarketmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best Digital Marketing Training in Chennai | Practical Oriented Marketing Course";
const pageDescription = "Join IntelliMindz for top digital marketing training in Chennai. Learn SEO, SEM, Social Media, and Analytics.";
const pageKeywords = "digital marketing training in chennai, seo course, social media marketing, intellimindz digital marketing";
const ogUrl = "https://localhost:3000/digital_marketing_training_in_chennai";
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

export default Digitalmarketmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
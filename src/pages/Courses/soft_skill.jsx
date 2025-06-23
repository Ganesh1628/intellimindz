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
import saphomeintro1 from '../../assests/images/soft_skill_image1.png';
import homeintro from '../../assests/images/soft_skill_image.jpg';
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
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={homeintro}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

        {/* <div className="intro-container"> */}
            {/* <div className="training-image-container" >
                <img src={homeintro} alt="Ab Initio Training" />
            </div> */}
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">Best Ab Initio Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master data integration and ETL processes with our expert-led Ab Initio Training – your gateway to a thriving career in data management.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
        // </div>
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Excel with Expert-Led <span>Soft Skill Training</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            IntelliMindz’s Soft Skill Training in Chennai is led by certified professionals with extensive corporate experience. Our trainers deliver practical, interactive sessions to enhance your interpersonal, communication, and leadership skills, preparing you for career advancement.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Develop essential soft skills like communication, teamwork, and problem-solving.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with real-world corporate training experience.</li>
                        <li><span className="icon">✓</span> Benefit from hands-on activities, role-playing, and group discussions.</li>
                        <li><span className="icon">✓</span> Receive 100% placement assistance with resume building and mock interviews.</li>
                        <li><span className="icon">✓</span> Gain skills to improve productivity, creativity, and workplace relationships.</li>
                        <li><span className="icon">✓</span> Enjoy personalized mentoring in small batch sizes for focused learning.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Soft Skill Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from certified soft skill experts with corporate experience." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Engage in role-playing and group activities for real-world application." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose timings that fit your schedule – weekdays or weekends." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Participate in dynamic discussions to enhance interpersonal skills." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access course materials and revisit concepts anytime." },
        { image: jobopening, heading: "Placement Support", paragraph: "Get 100% assistance with job placements and interview preparation." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Soft Skill sessions from anywhere. Engage in interactive role-playing and discussions to build communication and leadership skills.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded videos on soft skills. Access materials on time management, teamwork, and more, with lifetime access.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person sessions in Chennai for immersive soft skill development. Benefit from direct interaction with trainers and peers.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Switch modes to suit your schedule while mastering soft skills.", isPopular: false }
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
            <h1>Become a Confident Professional with IntelliMindz</h1>
            <p>Master essential soft skills to excel in communication, leadership, and teamwork in any workplace.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Soft Skill Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Soft Skill Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz offers premier Soft Skill Training in Chennai, designed to enhance your interpersonal and professional capabilities. Our course covers critical skills such as communication, time management, leadership, problem-solving, and emotional intelligence, tailored to meet industry demands.</p>
                    <p>Through interactive workshops, role-playing, and group discussions, our training ensures practical application of skills in real-world scenarios. Our curriculum is crafted to support career advancement for professionals and job seekers alike, with a focus on building confidence and workplace efficiency.</p>
                    <p>With expert trainers and a commitment to 100% placement assistance, IntelliMindz is your ideal partner for soft skill development in Chennai.</p>[](https://chennaitraining.in/soft-skill-training-in-chennai/)
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Soft Skill Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person or virtual soft skill training, designed for students, professionals, and job seekers to fit your schedule." },
        { id: 2, image: handsonsapImg, title: "Hands-On Interactive Sessions", description: "Engage in role-playing, group discussions, and workshops to practice communication, teamwork, and leadership skills." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Scenarios", description: "Work on practical exercises based on corporate challenges to enhance problem-solving and decision-making abilities." },
        { id: 4, image: ExperiencedtrainersImg, title: "Certified Expert Trainers", description: "Learn from professionals with over a decade of experience in soft skill development and corporate training." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Benefit from personalized attention and one-on-one mentoring in small groups for effective learning." },
        { id: 6, image: interactiveImg, title: "Comprehensive Assessments", description: "Participate in quizzes and mock interviews to reinforce skills and prepare for corporate job roles." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Soft Skill Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Problem Solving & Decision Making", topics: ["Understanding Problem Solving", "Decision-Making Techniques", "Analytical Thinking", "Solving People Problems", "Case Studies on Problem Solving"] },
        { id: 2, title: "Module 2: Practical Delegation & Conflict Management", topics: ["Purpose of Management", "Effective Delegation Strategies", "Conflict Resolution Techniques", "Managing Workplace Disputes", "Practical Delegation Exercises"] },
        { id: 3, title: "Module 3: Customer Service Excellence", topics: ["What is Customer Service?", "Improving Customer Interactions", "Handling Difficult Customers", "Building Customer Loyalty", "Customer Service Role-Playing"] },
        { id: 4, title: "Module 4: Train the Trainer", topics: ["Role of a Trainer", "Planning Training Sessions", "Engaging Participants", "Delivering Effective Presentations", "Feedback and Evaluation"] },
        { id: 5, title: "Module 5: Practical Motivational Skills", topics: ["Closing the Commitment Gap", "Five Steps to Success", "Motivating Teams", "Inspirational Leadership", "Motivation Workshops"] },
        { id: 6, title: "Module 6: Selling Techniques", topics: ["Accepting Personal Responsibility", "Motivation & Goal Setting", "Effective Sales Strategies", "Building Client Relationships", "Sales Role-Playing"] },
        { id: 7, title: "Module 7: Effective Business Writing", topics: ["Tips for Better Spelling", "Punctuation Pointers", "Planning Business Documents", "Writing Clear Emails", "Business Writing Exercises"] },
        { id: 8, title: "Module 8: Time Management", topics: ["Time as a Resource", "Measuring Time Usage", "Overcoming Procrastination", "Prioritization Techniques", "Time Management Tools"] },
        { id: 9, title: "Module 9: Leadership & Team Building", topics: ["Role of a Chairperson", "Effective vs. Poor Meetings", "Team Building Activities", "Leadership Styles", "Fostering Collaboration"] },
        { id: 10, title: "Module 10: Tele Sales & Telemarketing", topics: ["Customer Service in Tele Sales", "Accepting Responsibility", "Effective Telemarketing Strategies", "Handling Objections", "Tele Sales Simulations"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Soft Skill Course Modules
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
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Soft Skill training", title: "Onsite Training:", description: "Tailored soft skill training at your premises, focusing on your team’s specific needs to enhance workplace communication and leadership." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Soft Skill training center", title: "Offsite Training:", description: "Conducted at our professional training centers for focused soft skill workshops and team-building activities." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Soft Skill training", title: "Virtual Instructor-Led Training (VILT):", description: "Live online sessions via Zoom, offering flexibility and interactive soft skill training for remote teams." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Soft Skills in Chennai</h2>
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
        { id: 1, name: "Ravi K.", designation: "HR Executive", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The Soft Skill Training at IntelliMindz transformed my communication skills. The role-playing sessions and mock interviews helped me secure an HR role." },
        { id: 2, name: "Sneha M.", designation: "Team Lead", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "The leadership and team-building modules were fantastic. I now manage my team more effectively, thanks to the practical training." },
        { id: 3, name: "Arjun S.", designation: "Sales Manager", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "The selling techniques and customer service modules boosted my confidence in client interactions. Highly recommend this course!" },
        { id: 4, name: "Divya P.", designation: "Fresher", avatarInitial: "D", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, the course helped me develop professional skills. The placement support was excellent, and I landed a job quickly." },
        { id: 5, name: "Vikram T.", designation: "Customer Service Executive", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The customer service and time management training was practical and engaging. It prepared me well for my role." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Soft Skills" />
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
        { id: 1, title: "What are soft skills?", description: "Soft skills are interpersonal attributes like communication, teamwork, and problem-solving that enhance workplace interactions and productivity." },
        { id: 2, title: "Who can join this Soft Skill Training?", description: "Freshers, professionals, job seekers, and anyone looking to improve communication and leadership skills can enroll." },
        { id: 3, title: "Do I need prior experience?", description: "No prior experience is required. Our course starts with basics and progresses to advanced soft skill techniques." },
        { id: 4, title: "Are soft skills in demand in 2025?", description: "Yes, employers across industries value soft skills for teamwork, leadership, and client interactions." },
        { id: 5, title: "What skills will I learn?", description: "You’ll learn communication, time management, leadership, problem-solving, customer service, and more." },
        { id: 6, title: "Is online training available?", description: "Yes, we offer both online and offline training with live, interactive sessions." },
        { id: 7, title: "Will I get practical training?", description: "Yes, the course includes role-playing, group discussions, and real-world scenarios." },
        { id: 8, title: "Is placement support provided?", description: "Yes, we offer 100% placement assistance with resume building and mock interviews." },
        { id: 9, title: "Can soft skills help career growth?", description: "Absolutely, soft skills enhance employability, leadership, and workplace efficiency." },
        { id: 10, title: "Is this course suitable for freshers?", description: "Yes, our training is designed to help freshers build professional skills and confidence." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Soft Skill Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Soft Skill course in Chennai.
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

const Softskillmain = () => {
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
                <title>Soft Skill Training in Chennai | Soft Skill Course in Chennai</title>
                <meta name="description" content="Join IntelliMindz for the best Soft Skill Training in Chennai. Master communication, leadership, and teamwork with our expert-led course and 100% placement support." />
            </Helmet>
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
        </>
    );
};

export default Softskillmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
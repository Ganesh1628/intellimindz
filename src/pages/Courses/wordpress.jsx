import React, { useState } from 'react';
import Meta from '../../components/Meta';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (same as original)
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets (placeholders for WordPress, same names for consistency)
import wordpresshomeintro1 from '../../assests/images/saphomeintro1.png'; // Placeholder
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutwordpressImg from '../../assests/images/aboutsapfico.jpeg'; // Placeholder
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
                <h1 className="intro-h1">Best WordPress Training Institute in Chennai</h1>
                <h3 className="intro-h3">Master website development with our expert-led WordPress Training – your gateway to building dynamic, professional websites.</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>Enroll Now</button>
            </div>
        </div>
    );
};

const WordPressTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: WordPress Training by <span>Real-Time Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our WordPress trainers are industry professionals with extensive experience in website development and customization. With hands-on expertise in creating professional WordPress websites, our trainers guide you through a comprehensive learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in WordPress development from scratch.</li>
                        <li><span className="icon">✓</span> Learn from expert developers with real-world project experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz’s proven track record in WordPress training success.</li>
                        <li><span className="icon">✓</span> Receive full career support, including resume guidance and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-time projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a personalized learning experience tailored to your goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={wordpresshomeintro1} alt="WordPress Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from WordPress experts at our training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on WordPress skills at a nearby training center." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world WordPress development tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access WordPress course materials anytime for revision." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to reinforce your learning." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led WordPress sessions from anywhere. Includes hands-on exercises, real-time projects, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your convenience with pre-recorded WordPress video sessions. Get lifetime access to materials, downloadable resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Experience immersive in-person WordPress training in Chennai for focused learning and direct interaction with trainers and peers.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Switch between formats to ensure consistent progress and support.", isPopular: false }
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

const WordPressHeroSection = ({ openContactModal }) => {
    return (
        <div className="sap-fico-expert-section">
            <h1>Become a Skilled WordPress Developer with IntelliMindz</h1>
            <p>Master website creation and customization with industry-relevant WordPress training.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your WordPress Journey Today!</button>
        </div>
    );
};

const WordPressAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our WordPress Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>At IntelliMindz Chennai, our WordPress training equips you with the skills to build dynamic, professional websites. Our curriculum covers core WordPress concepts, including theme development, plugin customization, WooCommerce integration, and SEO optimization, ensuring you gain practical expertise.</p>
                    <p>The course includes hands-on projects, live website-building sessions, and real-world case studies. You’ll learn to create responsive websites, manage content, and customize WordPress to meet client needs, preparing you for freelance or full-time roles in web development.</p>
                    <p>Whether you’re a beginner or an experienced developer looking to specialize in WordPress, our training provides the tools and knowledge to excel in the competitive web development industry.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutwordpressImg} alt="WordPress Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online WordPress training, designed for working professionals, students, and job seekers to suit their schedules and preferences." },
        { id: 2, image: handsonsapImg, title: "Hands-on Website Development", description: "Gain practical experience by building real WordPress websites with guided projects, covering themes, plugins, and e-commerce solutions in a live environment." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Work on projects modeled after real client requirements, enhancing your ability to solve practical challenges and prepare for WordPress-related job interviews." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert WordPress Trainers", description: "Learn from industry professionals with extensive experience in WordPress development, offering insights into best practices and real-world applications." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes", description: "Benefit from small batches for personalized attention, ensuring your doubts are addressed and you receive tailored guidance throughout the course." },
        { id: 6, image: interactiveImg, title: "Interactive Learning", description: "Participate in interactive sessions and assessments to reinforce WordPress concepts, preparing you for industry demands and technical interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>WordPress Training in Chennai Key Features</h2>
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

const WordPressCourseContentSection = ({ openContactModal }) => {
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: "Module 1: Introduction to WordPress", topics: ["Overview of CMS and WordPress", "WordPress Installation and Setup", "Understanding the WordPress Dashboard", "Posts vs Pages", "Themes and Plugins Overview", "Basic Website Configuration"] },
        { id: 2, title: "Module 2: WordPress Themes", topics: ["Exploring Free and Premium Themes", "Installing and Customizing Themes", "Child Themes and Their Importance", "Custom CSS for Theme Styling", "Theme Frameworks", "Responsive Design Basics"] },
        { id: 3, title: "Module 3: WordPress Plugins", topics: ["Introduction to Plugins", "Installing and Managing Plugins", "Popular Plugins (Yoast SEO, WooCommerce, etc.)", "Plugin Customization", "Creating Simple Custom Plugins", "Troubleshooting Plugin Conflicts"] },
        { id: 4, title: "Module 4: Content Management", topics: ["Creating and Managing Posts", "Working with Pages and Menus", "Media Library Management", "Categories and Tags", "Widgets and Sidebars", "Custom Post Types"] },
        { id: 5, title: "Module 5: WooCommerce Integration", topics: ["Introduction to WooCommerce", "Setting Up an Online Store", "Product Management", "Payment Gateway Integration", "Shipping and Tax Configuration", "Customizing WooCommerce Templates"] },
        { id: 6, title: "Module 6: SEO and Performance", topics: ["SEO Basics for WordPress", "Using Yoast SEO Plugin", "Optimizing Website Speed", "Image Optimization", "Caching and CDN Integration", "Google Analytics Setup"] },
        { id: 7, title: "Module 7: Advanced WordPress Development", topics: ["Custom Theme Development", "Working with Template Files", "Hooks, Actions, and Filters", "Building Custom Widgets", "Shortcodes and Their Usage", "Introduction to REST API"] },
        { id: 8, title: "Module 8: WordPress Security", topics: ["Securing WordPress Websites", "Using Security Plugins", "Backup and Restore Strategies", "User Role Management", "SSL and HTTPS Setup", "Preventing Common Attacks"] },
        { id: 9, title: "Module 9: Real-Time Project", topics: ["Building a Complete WordPress Website", "Custom Theme and Plugin Integration", "E-commerce Store Setup", "SEO and Performance Optimization", "Project Deployment", "Client Handover Process"] },
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                WordPress Course Modules
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Freshers", "Non-IT to Web Development"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.5 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Working Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate WordPress training", title: "Onsite Training:", description: "Conducted at your premises, this training offers a collaborative environment for teams to learn WordPress development using your tools and workflows." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite WordPress training center", title: "Offsite Training:", description: "Held at our training centers, this mode provides focused learning for certifications and hands-on WordPress workshops in a distraction-free setting." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led WordPress training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via Zoom or similar platforms, VILT offers flexibility for remote teams with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for WordPress in Chennai</h2>
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
        { id: 1, name: "Karthik S.", designation: "WordPress Developer", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The WordPress course at IntelliMindz was fantastic. The hands-on projects helped me build real websites, and the trainers provided excellent guidance on themes and plugins." },
        { id: 2, name: "Priya V.", designation: "Freelance Web Developer", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered everything from basics to advanced WordPress development. The real-time projects and SEO training were particularly helpful for my freelance career." },
        { id: 3, name: "Anand R.", designation: "Web Developer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s WordPress training was perfect for me as a beginner. The flexible batch timings and practical sessions made learning easy and effective." },
        { id: 4, name: "Shalini M.", designation: "WordPress Trainee", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "Starting with no coding experience, I learned to build professional websites. The trainers were patient, and the course structure was beginner-friendly." },
        { id: 5, name: "Vikram K.", designation: "Senior Web Developer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The advanced WordPress development module was outstanding. I mastered custom themes and plugins, which significantly boosted my career." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer WordPress" />
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

const WordPressFaqSection = () => {
    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: "What is WordPress used for?", description: "WordPress is a versatile CMS used to build websites, blogs, e-commerce stores, and portfolios with customizable themes and plugins." },
        { id: 2, title: "Who should take this WordPress training?", description: "Beginners, freelancers, web developers, and business owners looking to create or manage professional websites." },
        { id: 3, title: "Do I need coding knowledge for WordPress?", description: "No coding is required for basics, but knowledge of HTML/CSS helps for advanced customization. Our course covers both." },
        { id: 4, title: "Is WordPress still relevant in 2025?", description: "Yes, WordPress powers over 40% of websites globally, with high demand for developers in e-commerce and content management." },
        { id: 5, title: "What’s the difference between WordPress and other CMS?", description: "WordPress is user-friendly, highly customizable, and supports a vast ecosystem of themes and plugins compared to other CMS platforms." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline WordPress training with live instructor-led sessions and hands-on projects." },
        { id: 7, title: "Will there be hands-on practice?", description: "Yes, you’ll build real websites with guided projects, covering themes, plugins, and e-commerce setups." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and real-world project scenarios tailored for WordPress job roles." },
        { id: 9, title: "Can I switch to WordPress from another field?", description: "Absolutely. WordPress is beginner-friendly and a great entry point for non-IT professionals into web development." },
        { id: 10, title: "Is WordPress good for freshers?", description: "Yes, WordPress skills are in demand, offering freshers opportunities in freelancing, startups, and corporate roles." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">WordPress Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get answers to your questions about our WordPress course in Chennai.
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
            <p className="cta-banner-text">Launch your web development career with our expert WordPress training.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
    );
};

const Wordpressmain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openContactModal = () => setIsModalOpen(true);
    const closeContactModal = () => setIsModalOpen(false);
    const pageTitle = "Best WordPress Training in Chennai | Practical Oriented WordPress Course";
const pageDescription = "Join IntelliMindz for WordPress training in Chennai. Build websites and blogs with real-time projects.";
const pageKeywords = "wordpress training in chennai, website development, blogging course, intellimindz wordpress";
const ogUrl = "https://localhost:3000/wordpress_training_in_chennai";
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
            <WordPressTrainingProfile openContactModal={openContactModal} />
            <Corporate />
            <TrainingModesSection openContactModal={openContactModal} />
            <WordPressHeroSection openContactModal={openContactModal} />
            <WordPressAboutSection />
            <KeyFeaturesSection />
            <WordPressCourseContentSection openContactModal={openContactModal} />
            <BatchDetailsSection openContactModal={openContactModal} />
            <CorporateTrainingModesSection />
            <AlumniReviewsSection />
            <AskForDemo />
            <Onlineheader />
            <WordPressFaqSection />
            <CallToActionBanner openContactModal={openContactModal} />
            <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
        </>
    );
};

export default Wordpressmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
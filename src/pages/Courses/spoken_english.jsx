import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactModal from "../../components/Hero-Section/ContactModal";

// Import all your CSS files (unchanged)
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";

// Import all your image assets
import spokenenglishhomeintro1 from '../../assests/images/saphomeintro1.png';
import homeintro from '../../assests/images/saphomeintro1.png';
import bestPriceIcon from '../../assests/images/ExperiencedTrainers.jpeg';
import runningIcon from '../../assests/images/practicallearning.jpeg';
import staffIcon from '../../assests/images/flexiblebatches.jpeg';
import jobopening from '../../assests/images/support.jpeg';
import liveclass from '../../assests/images/interactive_sessions.jpeg';
import onlinetest from '../../assests/images/lifetimeaccess.jpeg';
import aboutspokenenglishImg from '../../assests/images/aboutsapfico.jpeg';
import classroomTrainingImg from '../../assests/images/Classroom_training.jpeg';
import handsonspokenenglishImg from '../../assests/images/handsonsap.jpeg';
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
    );
};

const SapTrainingProfile = ({ openContactModal }) => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    Learn from the Best: Spoken English Training by <span>Expert Trainers</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Spoken English trainers are experienced language professionals with expertise in teaching effective communication skills. With practical experience in real-world scenarios, our trainers provide personalized guidance to enhance your English fluency.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in spoken English and advance to fluent communication.</li>
                        <li><span className="icon">✓</span> Learn from expert language trainers with real-world teaching experience.</li>
                        <li><span className="icon">✓</span> Leverage IntelliMindz's proven expertise in Spoken English training and student success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive support, including personalized feedback and confidence-building exercises.</li>
                        <li><span className="icon">✓</span> Engage in real-time conversation practice and role-plays to develop practical skills.</li>
                        <li><span className="icon">✓</span> Enjoy a customized learning experience tailored to your pace and communication goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={spokenenglishhomeintro1} alt="Spoken English Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Get trained by language experts at our Spoken English training center in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for individuals seeking a training center that emphasizes real-world conversation skills." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engaging discussions focused on real-life English communication scenarios." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Revisit key Spoken English concepts and course content anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing feedback sessions to reinforce your English communication skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Spoken English sessions from anywhere. Our online training includes interactive conversations, role-plays, and personalized feedback for fluency.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Spoken English video sessions. Get lifetime access to course materials, audio resources, and periodic updates.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Spoken English sessions for an immersive learning experience. Ideal for group discussions and direct trainer interaction.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning for flexibility. Switch between formats based on your convenience, ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Confident English Speaker with IntelliMindz</h1>
            <p>Practical Spoken English training to build fluency and confidence in real-world communication.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Spoken English Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Spoken English Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz’s Spoken English Training in Chennai is designed to enhance your English communication skills, enabling learners to speak fluently and confidently in personal and professional settings. Our curriculum covers essential aspects like grammar, vocabulary, pronunciation, and conversational skills, ensuring comprehensive language development.</p>
                    <p>The course includes interactive classes, live conversation practice, role-plays, and group discussions. By engaging in real-life scenarios, learners gain the confidence to communicate effectively in English.</p>
                    <p>Whether you’re a beginner seeking to improve your spoken English or a professional aiming to enhance your communication skills, our training equips you with practical mastery to excel in interviews, presentations, and everyday interactions.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutspokenenglishImg} alt="Spoken English Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "Choose between in-person classroom sessions or flexible online learning, tailored for students, professionals, and job seekers." },
        { id: 2, image: handsonspokenenglishImg, title: "Hands-on Conversation Practice", description: "Gain practical experience through live role-plays, group discussions, and interactive speaking exercises to build fluency." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-Life Communication Scenarios", description: "Engage in scenarios like interviews, presentations, and casual conversations to enhance practical speaking skills." },
        { id: 4, image: ExperiencedtrainersImg, title: "Trainers with Language Expertise", description: "Learn from professionals with extensive experience in teaching English communication across various levels." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Individual Attention", description: "Limited batch sizes ensure personalized feedback, pronunciation correction, and focused support for effective learning." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Participate in interactive discussions and regular assessments to track progress and boost confidence in speaking." }
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Spoken English Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Spoken English", topics: ["Importance of Spoken English", "Basic Grammar for Communication", "Common Phrases and Greetings", "Building Confidence in Speaking", "Introduction to Pronunciation"] },
        { id: 2, title: "Module 2: Vocabulary Building", topics: ["Everyday Vocabulary", "Synonyms and Antonyms", "Idioms and Phrasal Verbs", "Contextual Word Usage", "Vocabulary Games and Exercises"] },
        { id: 3, title: "Module 3: Pronunciation and Accent", topics: ["English Sounds and Phonetics", "Stress and Intonation", "Reducing Regional Accent", "Clear Articulation Techniques", "Listening and Imitation Exercises"] },
        { id: 4, title: "Module 4: Basic Conversation Skills", topics: ["Starting and Ending Conversations", "Polite Expressions", "Asking Questions and Responding", "Small Talk Techniques", "Role-Play Scenarios"] },
        { id: 5, title: "Module 5: Grammar for Speaking", topics: ["Tenses in Conversation", "Sentence Structure", "Prepositions and Conjunctions", "Common Grammar Mistakes", "Practical Grammar Exercises"] },
        { id: 6, title: "Module 6: Advanced Conversation Skills", topics: ["Expressing Opinions and Ideas", "Agreeing and Disagreeing", "Debate and Discussion Skills", "Storytelling Techniques", "Group Discussions"] },
        { id: 7, title: "Module 7: Professional Communication", topics: ["Business English Basics", "Email and Telephonic Etiquette", "Presentation Skills", "Interview Preparation", "Workplace Communication Scenarios"] },
        { id: 8, title: "Module 8: Public Speaking", topics: ["Overcoming Stage Fear", "Structuring a Speech", "Body Language and Voice Modulation", "Engaging an Audience", "Practice Speeches"] },
        { id: 9, title: "Module 9: Fluency Development", topics: ["Speaking Without Hesitation", "Extempore Speaking", "Paraphrasing Techniques", "Building Speed and Clarity", "Fluency Drills"] },
        { id: 10, title: "Module 10: Real-World Communication Project", topics: ["Mock Interviews and Presentations", "Real-Life Role-Plays", "Group Discussion Practice", "Personalized Feedback Session", "Final Assessment and Certification"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Spoken English Course Modules
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
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Interactive Training", feeTag: "Course Fee", suitability: ["Suitable for Students", "Job Seekers"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Interactive Training", feeTag: "Course Fee", suitability: ["Suitable for Professionals"] }
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Spoken English training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored environment for upskilling teams in English communication." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Spoken English training center", title: "Offsite Training:", description: "Held at professional training centers, ideal for focused Spoken English learning without workplace distractions." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Spoken English training", title: "Virtual Instructor-Led Training (VILT):", description: "Live Spoken English training via Zoom or Teams, perfect for remote teams with real-time instructor interaction." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Spoken English in Chennai</h2>
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
        { id: 1, name: "Sanjay P.", designation: "Student", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Spoken English course was fantastic. The interactive sessions and role-plays greatly improved my confidence in speaking." },
        { id: 2, name: "Meera K.", designation: "Marketing Executive", avatarInitial: "M", rating: 5, companyLogoText: "Intellimindz", reviewText: "The trainers made grammar and pronunciation easy to understand. The practical conversations prepared me for client meetings." },
        { id: 3, name: "Vikram R.", designation: "Software Engineer", avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: "The flexible batch schedule and engaging content were perfect for my busy life. The interview prep was a game-changer." },
        { id: 4, name: "Aarthi S.", designation: "Spoken English Trainee", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a beginner, I found the course very approachable. The trainers provided excellent support, making speaking English fun." },
        { id: 5, name: "Rohit N.", designation: "Team Lead", avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course’s focus on professional communication and public speaking added immense value to my leadership skills." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Spoken English" />
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
        { id: 1, title: "What is the purpose of Spoken English training?", description: "Spoken English training improves fluency and confidence in English communication for personal, academic, and professional purposes." },
        { id: 2, title: "Who should take this Spoken English course?", description: "Students, job seekers, professionals, and anyone looking to enhance their English speaking skills." },
        { id: 3, title: "Do I need prior English knowledge to join?", description: "No prior knowledge is required; our course caters to beginners and intermediate learners." },
        { id: 4, title: "Is Spoken English in demand in 2025?", description: "Yes, fluent English communication is highly valued in global workplaces, education, and social interactions." },
        { id: 5, title: "How does this course differ from traditional English classes?", description: "Our course focuses on practical speaking skills, conversation practice, and real-life scenarios rather than just grammar." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Spoken English training with live instructor-led sessions and interactive practice." },
        { id: 7, title: "Will there be speaking practice?", description: "Yes, you’ll engage in live conversations, role-plays, and group discussions to build fluency." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we include mock interviews, presentation skills, and professional communication training." },
        { id: 9, title: "Can I improve my accent through this course?", description: "Yes, we focus on pronunciation, intonation, and accent reduction to help you speak clearly." },
        { id: 10, title: "Is Spoken English useful for freshers?", description: "Absolutely, it enhances communication skills, boosting confidence for interviews and career growth." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Spoken English Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Spoken English course in Chennai.
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
                <title>Spoken English Training in Chennai | Spoken English Course in Chennai</title>
                <meta name="description" content="Master fluent English communication with our Spoken English Training in Chennai. Build confidence through expert-led conversation practice and real-life scenarios." />
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

export default SAPmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
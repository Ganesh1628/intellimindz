import React, { useState } from 'react';
import Meta from '../../components/Meta';
import ContactModal from "../../components/Hero-Section/ContactModal";
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

// Import all CSS files
import "../../components/saponlinecom/onlineaboutus.css";
import "../../components/saponlinecom/sapfico.css";
import "../../components/saponlinecom/onlinecorporate.css";
import "../../components/SAP/Header/Introsap.css";
import "../../components/SapIM/IMsyllabus.css";
import AskForDemo from "../../components/SAP/Askfordemo/askfordemo";

const Sapdynamicconst = ({ openContactModal, title1, title2, title3, title4, title5, title6, title7,
    title8, title9, title10, title11, title12, title13, title14, title15, title16, title17, title18, title19,
    title20, title21, title22, title23, title24, title25, title26, title27, title28, title29, title30, title31,
    title32, title33, title34, title35, title36, title37, title38,
    button1, button2, button3, button4,
    paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, paragraph7,
    paragraph8, paragraph9, paragraph10, paragraph11, paragraph12,
    list1, list2, list3, list4, list5, list6,
    image1, image2, image3, image4, image5, image6, image7,
    header1, header2, header3, header4, header5, header6,
    description1, description2, description3, description4, description5, description6, description7, 
    description8, description9, description10, description11, description12, description13, description14,
    description15, description16, description17, description18, description19, description20, description21,
    description22, description23,
    topic1, topic2, topic3, topic4 ,topic5 ,topic6 ,topic7 ,topic8, topic9, topic10,
    altext1, altext2, altext3,
    name1, name2, name3, name4, name5,
    designation1, designation2, designation3, designation4, designation5,
    review1, review2, review3, review4, review5,
    pagedescription, pagekeywords, pageogurl, pagetitle
    }) => {
    const blocksData = [
        { image: image2, heading: header1, paragraph: paragraph2 },
        { image: image3, heading: header2, paragraph: paragraph3 },
        { image: image4, heading: header3, paragraph: paragraph4 },
        { image: image5, heading: header4, paragraph: paragraph5 },
        { image: image6, heading: header5, paragraph: paragraph6 },
        { image: image7, heading: header6, paragraph: paragraph7 }
    ];
    const PlaceholderTrainingIcon = ({ type }) => (
    <div style={{ fontSize: '40px', marginBottom: '15px', color: '#d9534f' }}>
        {type === 'online' && '🎓'}
        {type === 'self-paced' && '💻'}
        {type === 'classroom' && '👥'}
        {type === 'hybrid' && '🔄'}
    </div>
    );
    const trainingModes = [
        { id: 'online', iconType: 'online', title: "Online Training", description: description1, isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: description2, isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: description3, isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: description4, isPopular: false }
    ];
    const features = [
        { id: 1, image: classroomTrainingImg, title: title9, description: description5 },
        { id: 2, image: handsonsapImg, title: title10, description: description6 },
        { id: 3, image: casestudyrealtimeImg, title: title11, description: description7 },
        { id: 4, image: ExperiencedtrainersImg, title: title12, description: description8 },
        { id: 5, image: personalizedmentorImg, title: title13, description: description9 },
        { id: 6, image: interactiveImg, title: title14, description: description10 },
    ];
    const [activeModuleId, setActiveModuleId] = useState(1);
    const allModulesData = [
        { id: 1, title: title16, topics: topic1 },
        { id: 2, title: title17, topics: topic2 },
        { id: 3, title: title18, topics: topic3 },
        { id: 4, title: title19, topics: topic4 },
        { id: 5, title: title20, topics: topic5 },
        { id: 6, title: title21, topics: topic6 },
        { id: 7, title: title22, topics: topic7 },
        { id: 8, title: title23, topics: topic8 },
        { id: 9, title: title24, topics: topic9 },
        { id: 10, title: title25, topics: topic10 }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    const batchInfo = [
        { id: 1, monthYear: "June 2025", type: "Weekdays", schedule: "Mon-Fri", mode: "Online/Offline", duration: "1 hour", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for Fresh Jobseekers", "Non IT to IT transition"] },
        { id: 2, monthYear: "June 2025", type: "Weekends", schedule: "Sat - Sun", mode: "Online/Offline", duration: "1.30 - 2 hours", trainingMethod: "Hands-on Training", feeTag: "Course Fee", suitability: ["Suitable for IT Professionals"] }
    ];
    const trainingModesData = [
        { id: 1, imageSrc: corporateOnsiteImg, altText: altext1, title: "Onsite Training:", description: description11 },
        { id: 2, imageSrc: corporateOffsiteImg, altText: altext2, title: "Offsite Training:", description: description12 },
        { id: 3, imageSrc: corporateVirtualImg, altText: altext3, title: "Virtual Instructor-Led Training (VILT):", description: description13 }
    ];
        const reviewsData = [
        { id: 1, name: name1, designation: designation1, avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: review1 },
        { id: 2, name: name2, designation: designation2, avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: review2 },
        { id: 3, name: name3, designation: designation3, avatarInitial: "V", rating: 5, companyLogoText: "Intellimindz", reviewText: review3 },
        { id: 4, name: name4, designation: designation4, avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: review4 },
        { id: 5, name: name5, designation: designation5, avatarInitial: "R", rating: 5, companyLogoText: "Intellimindz", reviewText: review5 }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => { setCurrentSlide((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1)); };
    const currentReview = reviewsData[currentSlide];
    const renderStars = (rating) => { let stars = []; for (let i = 0; i < 5; i++) { stars.push( <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span> ); } return stars; };
    const formatReviewText = (text) => { return <p>{text}</p>; };

    const [activeModule, setActiveModule] = useState(null);
    const modulesData = [
        { id: 1, title: title28, description: description14 },
        { id: 2, title: title29, description: description15 },
        { id: 3, title: title30, description: description16 },
        { id: 4, title: title31, description: description17 },
        { id: 5, title: title32, description: description18 },
        { id: 6, title: title33, description: description19 },
        { id: 7, title: title34, description: description20 },
        { id: 8, title: title35, description: description21 },
        { id: 9, title: title36, description: description22 },
        { id: 10, title: title37, description: description23 }
    ];

    const pageTitle = pagetitle;
    const pageDescription = pagedescription;
    const pageKeywords = pagekeywords;
    const ogUrl = pageogurl;

    return (
    <>
        <div className="intro-container">
            <div className="overlay"></div>
            <div className="intro-content">
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1 className="intro-h1">{title1}</h1>
                <h3 className="intro-h3">{title2}</h3>
                <button className="intro-enroll-button" onClick={openContactModal}>{button1}</button>
            </div>
        </div>
        <div className="sap-training-container">
                    <div className="sap-training-header animate__animated animate__flipInX">
                        <h1>{title3}<span>{title4}</span>
                        </h1>
                        <div className="header-divider"></div>
                    </div>
                    <div className="sap-training-content">
                        <div className="training-details">
                            <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                                <p className="intro-text">{paragraph1}</p>
                            </div>
                            <ul className="benefits-list">
                                <li><span className="icon">✓</span>{list1}</li>
                                <li><span className="icon">✓</span>{list2}</li>
                                <li><span className="icon">✓</span>{list3}</li>
                                <li><span className="icon">✓</span>{list4}</li>
                                <li><span className="icon">✓</span>{list5}</li>
                                <li><span className="icon">✓</span>{list6}</li>
                            </ul>
                            <button className="enquiry-button" onClick={openContactModal}>{button2}</button>
                        </div>
                        <div className="training-image">
                            <img src={image1} alt="SAP ABAP Training" />
                        </div>
                    </div>
        </div>  
        <div className="corporate-section">
            <h2 className="corporate-title">{title5}</h2>
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
        <div className="training-modes-section">
            <h2 className="training-modes-title">{title6}</h2>
            <div className="training-modes-grid">
                {trainingModes.map(mode => (
                    <div key={mode.id} className="training-mode-card">
                        <PlaceholderTrainingIcon type={mode.iconType} />
                        <h3 className="training-mode-card-title">{mode.title}</h3>
                        <p className="training-mode-card-description">{mode.description}</p>
                        <button className="training-mode-enroll-button" onClick={openContactModal}>{button3}</button>
                    </div>
                ))}
            </div>
        </div>
        <div className="sap-fico-expert-section">
            <h1>{title7}</h1>
            <p>{paragraph8}</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>{button4}</button>
        </div>
        <div className="sap-fico-about-section">
                    <h2>{title8}</h2>
                    <div className="sap-fico-about-content">
                        <div className="sap-fico-about-text">
                            <p>{paragraph9}</p>
                            <p>{paragraph10}</p>
                            <p>{paragraph11}</p>
                        </div>
                        <div className="sap-fico-about-image-container">
                            <img src={aboutsapficoImg} alt="SAP ABAP Training in Chennai" />
                        </div>
                    </div>
        </div>
        <div className="sap-fico-features-section">
            <h2>{title15}</h2>
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
        <div className="java-course-content-section">
            <h2 className="java-section-title">{title26}<span className="java-title-underline"></span>
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
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">{title27}</h2> {/* Title updated */}
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
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">{title38}</span> {/* Title updated */}
                </h1>
                <p className="syllabus-header-subtitle">{paragraph12}</p>
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
        <div className="cta-banner-section">
            <p className="cta-banner-text">Navigate your career ambitions with our expert guidance.</p>
            <button className="cta-banner-button" onClick={openContactModal}>Contact Us</button>
        </div>
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                ogTitle={pageTitle}
                ogDescription={pageDescription}
                ogUrl={ogUrl}
            />
    </>
    );
};


export default Sapdynamicconst;

const Ajaxmain = ({ openContactModal }) => {
    return (
        <>
            <Sapdynamicconst openContactModal={openContactModal} />
            <AskForDemo />
            {/* <Onlineheader /> */}
        </>
    );
};

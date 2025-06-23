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
import saphomeintro1 from '../../assests/images/Data Science_image1.webp';
import homeintro from '../../assests/images/Data Science_image.webp';
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
                    Learn from the Best: Data Science Training by <span>Industry Experts</span>
                </h1>
                <div className="header-divider"></div>
            </div>
            <div className="sap-training-content">
                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInLeft">
                        <p className="intro-text">
                            At IntelliMindz, our Data Science trainers are seasoned professionals with extensive experience in data analytics, machine learning, and AI. With real-world project exposure across industries, our trainers deliver practical insights to guide your Data Science learning journey.
                        </p>
                    </div>
                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Build a strong foundation in Data Science with advanced machine learning techniques.</li>
                        <li><span className="icon">✓</span> Learn from industry experts with hands-on experience in real-world data projects.</li>
                        <li><span className="icon">✓</span> Benefit from IntelliMindz's proven expertise in Data Science training and student success.</li>
                        <li><span className="icon">✓</span> Receive comprehensive career support, including resume building and interview preparation.</li>
                        <li><span className="icon">✓</span> Work on real-world datasets and projects to develop job-ready skills.</li>
                        <li><span className="icon">✓</span> Enjoy a personalized learning experience tailored to your career goals.</li>
                    </ul>
                    <button className="enquiry-button" onClick={openContactModal}>Enquire Now</button>
                </div>
                <div className="training-image">
                    <img src={saphomeintro1} alt="Data Science Training" />
                </div>
            </div>
        </div>
    );
};

const Corporate = () => {
    const blocksData = [
        { image: bestPriceIcon, heading: "Experienced Trainers", paragraph: "Learn from Data Science experts at our training centre in Chennai." },
        { image: runningIcon, heading: "Practical Learning", paragraph: "Ideal for professionals seeking hands-on Data Science training with real-world applications." },
        { image: staffIcon, heading: "Flexible Batches", paragraph: "Choose batch timings that suit your schedule." },
        { image: liveclass, heading: "Interactive Sessions", paragraph: "Engage in discussions focused on real-world data analysis and machine learning tasks." },
        { image: onlinetest, heading: "Lifetime Access", paragraph: "Access course materials and revisit Data Science concepts anytime." },
        { image: jobopening, heading: "Continued Support", paragraph: "Ongoing doubt-clearing sessions to strengthen your Data Science skills." }
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
        { id: 'online', iconType: 'online', title: "Online Training", description: "Join live, instructor-led Data Science sessions from anywhere. Our online training includes hands-on projects, real-time datasets, and interactive Q&A for practical learning.", isPopular: true },
        { id: 'self-paced', iconType: 'self-paced', title: "Self-Paced Training", description: "Learn at your own pace with pre-recorded Data Science video sessions. Get lifetime access to course materials, datasets, and periodic updates to stay current.", isPopular: false },
        { id: 'classroom', iconType: 'classroom', title: "Classroom Training", description: "Attend in-person Data Science sessions for an immersive experience. Our classroom training fosters direct interaction with trainers and peers for collaborative learning.", isPopular: false },
        { id: 'hybrid', iconType: 'hybrid', title: "Hybrid Training", description: "Combine online and classroom learning with our flexible hybrid model. Switch between formats to suit your schedule while ensuring consistent progress.", isPopular: false }
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
            <h1>Become a Skilled Data Scientist with IntelliMindz</h1>
            <p>Industry-relevant Data Science training to master data analytics, machine learning, and AI technologies.</p>
            <button className="sap-fico-expert-button" onClick={openContactModal}>Start Your Data Science Journey Today!</button>
        </div>
    );
};

const SAPAboutSection = () => {
    return (
        <div className="sap-fico-about-section">
            <h2>About Our Data Science Training in Chennai</h2>
            <div className="sap-fico-about-content">
                <div className="sap-fico-about-text">
                    <p>IntelliMindz Chennai offers comprehensive Data Science training designed to equip learners with both theoretical knowledge and practical expertise. Our curriculum covers Python programming, data analysis, machine learning algorithms, deep learning, and data visualization tools like Tableau and Power BI.</p>
                    <p>The course includes hands-on projects with real-world datasets, interactive sessions, and case studies to ensure you can apply your skills in practical scenarios. From data preprocessing to building predictive models, our training prepares you for industry demands.</p>
                    <p>Whether you're a beginner or a professional looking to upskill, our Data Science course in Chennai helps you gain mastery and excel in the competitive data science job market.</p>
                </div>
                <div className="sap-fico-about-image-container">
                    <img src={aboutsapficoImg} alt="Data Science Training in Chennai" />
                </div>
            </div>
        </div>
    );
};

const KeyFeaturesSection = () => {
    const features = [
        { id: 1, image: classroomTrainingImg, title: "Classroom & Online Training Options", description: "We offer both in-person and virtual Data Science training, making it accessible to students, working professionals, and job seekers. Choose the mode that fits your schedule and learning preferences for a seamless experience." },
        { id: 2, image: handsonsapImg, title: "Hands-on Projects with Real Datasets", description: "Our training emphasizes practical learning with access to real-world datasets. Work on projects to master data analysis, machine learning, and visualization, gaining confidence in industry-standard tools." },
        { id: 3, image: casestudyrealtimeImg, title: "Real-World Case Studies", description: "Engage with case studies based on actual industry scenarios to enhance your problem-solving skills. These exercises prepare you for Data Science challenges and interview questions." },
        { id: 4, image: ExperiencedtrainersImg, title: "Expert Trainers with Industry Experience", description: "Learn from trainers with extensive experience in Data Science and machine learning projects across various domains. They provide practical insights and mentorship to guide your learning journey." },
        { id: 5, image: personalizedmentorImg, title: "Small Batch Sizes for Personalized Learning", description: "Our limited batch sizes ensure individual attention and one-on-one mentoring, allowing trainers to address your queries and support your progress effectively." },
        { id: 6, image: interactiveImg, title: "Interactive Sessions and Assessments", description: "Each module includes interactive discussions, quizzes, and assessments aligned with industry trends, helping you retain knowledge and prepare for Data Science job interviews." },
    ];
    return (
        <div className="sap-fico-features-section">
            <h2>Data Science Training in Chennai Key Features</h2>
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
        { id: 1, title: "Module 1: Introduction to Data Science", topics: ["What is Data Science?", "Applications of Data Science", "Data Science Lifecycle", "Overview of Data Science Tools", "Setting Up Python Environment", "Introduction to Jupyter Notebook", "Basics of Statistics for Data Science"] },
        { id: 2, title: "Module 2: Python for Data Science", topics: ["Python Basics: Variables, Data Types, Loops", "Functions and Modules in Python", "Working with NumPy for Numerical Data", "Pandas for Data Manipulation", "Data Cleaning and Preprocessing", "Handling Missing Data", "Data Structures in Python"] },
        { id: 3, title: "Module 3: Data Visualization", topics: ["Introduction to Data Visualization", "Matplotlib for Plotting", "Seaborn for Advanced Visualizations", "Plotly for Interactive Plots", "Tableau Basics", "Power BI Integration", "Creating Dashboards"] },
        { id: 4, title: "Module 4: Statistics and Probability", topics: ["Descriptive Statistics", "Inferential Statistics", "Probability Distributions", "Hypothesis Testing", "Correlation and Regression", "ANOVA and Chi-Square Tests", "Real-World Statistical Applications"] },
        { id: 5, title: "Module 5: Machine Learning Foundations", topics: ["Introduction to Machine Learning", "Supervised vs Unsupervised Learning", "Linear Regression", "Logistic Regression", "Decision Trees and Random Forests", "Model Evaluation Metrics", "Overfitting and Regularization"] },
        { id: 6, title: "Module 6: Advanced Machine Learning", topics: ["K-Nearest Neighbors (KNN)", "Support Vector Machines (SVM)", "Naive Bayes", "Clustering: K-Means and Hierarchical", "Dimensionality Reduction: PCA", "Hyperparameter Tuning", "Ensemble Methods: Bagging and Boosting"] },
        { id: 7, title: "Module 7: Deep Learning Basics", topics: ["Introduction to Neural Networks", "Activation Functions", "Building Neural Networks with TensorFlow", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Introduction to Keras", "Deep Learning Applications"] },
        { id: 8, title: "Module 8: Natural Language Processing (NLP)", topics: ["Introduction to NLP", "Text Preprocessing", "Bag of Words and TF-IDF", "Word Embeddings: Word2Vec", "Sentiment Analysis", "Chatbot Development Basics", "NLP Libraries: NLTK, SpaCy"] },
        { id: 9, title: "Module 9: Big Data and Cloud Integration", topics: ["Introduction to Big Data", "Hadoop and Spark Overview", "PySpark for Data Processing", "Cloud Platforms: AWS, Azure, GCP", "Data Pipelines with Apache Airflow", "Scalable Machine Learning", "Real-Time Data Processing"] },
        { id: 10, title: "Module 10: Capstone Project and Deployment", topics: ["End-to-End Data Science Project", "Problem Formulation and Data Collection", "Model Building and Evaluation", "Deploying Models with Flask/Django", "Model Monitoring and Maintenance", "Project Presentation", "Portfolio Building"] }
    ];
    const activeModuleDetails = allModulesData.find(module => module.id === activeModuleId) || allModulesData[0];
    return (
        <div className="java-course-content-section">
            <h2 className="java-section-title">
                Data Science Course Modules
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
        { id: 1, imageSrc: corporateOnsiteImg, altText: "Onsite corporate Data Science training", title: "Onsite Training:", description: "Conducted at your company’s premises, this training offers a tailored learning experience for your team, using your data and tools for maximum relevance." },
        { id: 2, imageSrc: corporateOffsiteImg, altText: "Offsite Data Science training center", title: "Offsite Training:", description: "Held at professional training centers, this mode provides a focused environment for certifications and hands-on Data Science workshops." },
        { id: 3, imageSrc: corporateVirtualImg, altText: "Virtual instructor-led Data Science training", title: "Virtual Instructor-Led Training (VILT):", description: "Delivered live via Zoom or similar platforms, VILT offers flexibility for remote teams with real-time instructor interaction and collaborative tools." }
    ];
    return (
        <div className="corporate-training-modes-section">
            <h2 className="corporate-training-modes-title">Corporate Training Modes for Data Science in Chennai</h2>
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
        { id: 1, name: "Priya S.", designation: "Data Scientist", avatarInitial: "P", rating: 5, companyLogoText: "Intellimindz", reviewText: "IntelliMindz’s Data Science course was exceptional. The hands-on projects with real datasets helped me master Python and machine learning. The trainer’s guidance was invaluable." },
        { id: 2, name: "Karthik V.", designation: "Data Analyst", avatarInitial: "K", rating: 5, companyLogoText: "Intellimindz", reviewText: "The course covered everything from Python to deep learning. The real-world case studies and mock interviews prepared me for my job role. Highly recommended!" },
        { id: 3, name: "Anita R.", designation: "ML Engineer", avatarInitial: "A", rating: 5, companyLogoText: "Intellimindz", reviewText: "Flexible batch timings and expert trainers made learning Data Science enjoyable. The capstone project helped me build a strong portfolio for job applications." },
        { id: 4, name: "Suresh M.", designation: "Data Science Trainee", avatarInitial: "S", rating: 5, companyLogoText: "Intellimindz", reviewText: "As a fresher, I found the course easy to follow. The trainers explained complex concepts clearly, and the hands-on sessions boosted my confidence." },
        { id: 5, name: "Lavanya K.", designation: "AI Developer", avatarInitial: "L", rating: 5, companyLogoText: "Intellimindz", reviewText: "The deep learning and NLP modules were outstanding. The practical approach and industry-relevant projects helped me land a job in AI development." }
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
                        <img src={alumniReviewImg} alt="Alumni Reviewer Data Science" />
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
        { id: 1, title: "What is Data Science used for?", description: "Data Science is used to extract insights from data using techniques like machine learning, statistics, and visualization, applied in industries like finance, healthcare, and marketing." },
        { id: 2, title: "Who can enroll in this Data Science training?", description: "Fresh graduates, IT professionals, analysts, and anyone with basic math or programming knowledge interested in a Data Science career." },
        { id: 3, title: "Do I need coding experience to learn Data Science?", description: "Basic knowledge of Python or R is helpful but not mandatory. Our course starts with Python basics for beginners." },
        { id: 4, title: "Is Data Science in demand in 2025?", description: "Yes, with increasing data-driven decision-making, Data Scientists are highly sought after across industries globally." },
        { id: 5, title: "What tools are covered in the training?", description: "The course covers Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Tableau, Power BI, and cloud platforms like AWS." },
        { id: 6, title: "Is the training available online?", description: "Yes, we offer both online and offline Data Science training with live instructor-led sessions and hands-on projects." },
        { id: 7, title: "Will there be practical projects?", description: "Yes, you’ll work on real-world datasets for projects like predictive modeling, sentiment analysis, and data visualization." },
        { id: 8, title: "Do you provide interview preparation?", description: "Yes, we offer mock interviews, resume guidance, and practice with Data Science-specific questions and case studies." },
        { id: 9, title: "Can I switch to Data Science from another field?", description: "Absolutely, with basic analytical skills and our structured training, you can transition to a Data Science career." },
        { id: 10, title: "Is Data Science suitable for freshers?", description: "Yes, our course is designed to help freshers build a strong foundation and launch a career in Data Science." }
    ];
    return (
        <div className="sapim-syllabus">
            <div className="sap-home-syllabus-header">
                <h1>
                    Have a Question with Our <span className="highlighted-course-title">Data Science Course?</span>
                </h1>
                <p className="syllabus-header-subtitle">
                    Here, you can get the answer to your question about our Data Science course in Chennai.
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

const Dsmain = () => {
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
                <title>Data Science Training in Chennai | Data Science Course in Chennai</title>
                <meta name="description" content="Master Data Science with our comprehensive training in Chennai. Learn Python, machine learning, and data visualization through our expert-led Data Science course." />
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

export default Dsmain;

const Onlineheader = () => {
    return <div className="online_container"></div>;
};
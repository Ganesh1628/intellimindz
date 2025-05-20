import HeaderSAP from "../components/SAP/Header/header";
import FactsAndFigures from "../components/SAP/FactsAndFigures/FactsAndFigures";
import FeesStructure from "../components/SAP/Fees/Fees";
import Info from "../components/SAP/Info/Info";
import SAPOverview from "../components/SAP/Overview/Sap_overview";
import Sapgeneral from "../components/SAP/SapGeneral/Sapgeneral";
import SapQuestions from "../components/SAP/Questions/Sapquestions";
import Reason from "../components/SAP/Reason/Reason";
import TeachingMethod from "../components/SAP/TeachingMethod/Teachingmethod";
import Testimonial from "../components/SAP/Saptestimonials/Saptestimonial";
import Footer from "../components/Footer/Footer";
// import SearchBar from "./sapim/SearchBar";
import "../components/SapIM/IMprofiletraining.css";
import "../components/SapIM/IMwhyus.css";
import "../components/saponlinecom/onlinepayment.css";
import "../components/SAP/Header/Introsap.css";
import "../components/saponlinecom/onlinecoursegrid.css";
import sapTrainingImage from '../assests/images/saptraining.png'; // Adjust path as needed
import sapintelliaboutus from "../assests/images/sapintelliaboutus.png";
import apache_logo from "../assests/images/apache_logo.png";
// import euSensorLogo from './eu-sensor-logo.png';
// import saphomeintro from "../assests/images/Saphomeintro.png";
import React, { } from 'react'; // Add this import at the top
import "animate.css";
import { FaStar } from 'react-icons/fa'; // Make sure this import is correct

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="overlay"></div>
            {/* <button className="cta-button">Get Started</button> */}
        </div>
    );
};

const SapTrainingProfile = () => {
    return (
        <div className="sap-training-container">
            <div className="sap-training-header animate__animated animate__flipInX">
                <h1>
                    SAP IM Training in Chennai <span>Trainer Profile</span>
                </h1>
                <div className="header-divider"></div>
            </div>

            <div className="sap-training-content">
                <div className="training-image">
                    <img src={sapTrainingImage} alt="SAP Training" />
                </div>

                <div className="training-details">
                    <div className="sap-training-header animate__animated animate__lightSpeedInRight">

                        <p className="intro-text">
                            All mentors at IntelliMindz have years of important industry experience, and they have been effectively functioning as advisors in a similar space, which has made them topic specialists.
                        </p>
                    </div>

                    <ul className="benefits-list">
                        <li><span className="icon">✓</span> Training from basics to advanced SAP IM concepts</li>
                        <li><span className="icon">✓</span> Real-time experienced professionals (8+ years)</li>
                        <li><span className="icon">✓</span> 500+ students successfully trained and placed</li>
                        <li><span className="icon">✓</span> Resume preparation and project guidance</li>
                        <li><span className="icon">✓</span> Project overview and real-time scenario sessions</li>
                        <li><span className="icon">✓</span> Individual attention with customized sessions</li>
                        <li><span className="icon">✓</span> Mock interviews and technology FAQs</li>
                    </ul>

                    <button className="enquiry-button">Enquire Now</button>
                </div>
            </div>
        </div>
    );
};





const AboutUsHeader = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-text">
                <h1>Why Choosе IntеlliMindz<span> for SAP QM Online Training ?</span></h1>
                <div className="header-divider"></div>
                <p>
                    IntelliMindz offers the best SAP FICO Training in Chennai, providing in-depth knowledge of Financial Accounting (FI) and Controlling (CO) to help professionals and students build a successful career in SAP. Our SAP FICO Course in Chennai is designed by industry experts and includes real-time projects, hands-on exercises, and case studies to ensure practical learning. We also offer SAP FICO Online Training, allowing learners to access high-quality training from anywhere at their convenience. With expert guidance, placement assistance, and a job-oriented curriculum, IntelliMindz ensures that you gain the essential skills required to excel in SAP FICO and secure top positions in leading MNCs.
                </p>
            </div>
            <div className="about-us-image">
                <img src={sapintelliaboutus} alt="About Us" />
            </div>
        </div>

    );
};


// const CoursesSection = () => {
//     const courses = [
//       {
//         provider: "SAP ABCP",
//         logo: apache_logo,
//         title: "Advanced Business Application Programming",
//         rating: 5,
//         reviews: 8956,
//         enrolled: 12854
//       },
//       {
//         provider: "SAP SCM",
//         logo: apache_logo,
//         title: "Supply Chain Management",
//         rating: 5,
//         reviews: 4562,
//         enrolled: 4856
//       },
//       {
//         provider: "SAP HANA",
//         logo: apache_logo,
//         title: "High-Performance Analytic Appliance",
//         rating: 5,
//         reviews: 5156,
//         enrolled: 6258
//       },
//       {
//         provider: "SAP Successfactors",
//         logo: apache_logo,
//         title: "Human Capital Management Solution",
//         rating: 5,
//         reviews: 4985,
//         enrolled: 6258
//       },
//       {
//         provider: "SAP ECM",
//         logo: apache_logo,
//         title: "Enterprise Content Management",
//         rating: 5,
//         reviews: 6985,
//         enrolled: 15896
//       },
//       {
//         provider: "SAP EHS",
//         logo: apache_logo,
//         title: "Environment, Health, and Safety",
//         rating: 5,
//         reviews: 4854,
//         enrolled: 5268
//       }
//     ];
  
//     return (
//       <div className="courses-section">
//         <h2 className="section-title">Related Courses</h2>
//         <div className="courses-grid">
//           {courses.map((course, index) => (
//             <div key={index} className="course-card">
//               <div className="course-header">
//                 <div className="provider-container">
//                   <img src={course.logo} alt={course.provider} className="provider-logo" />
//                   <span className="course-provider">{course.provider}</span>
//                 </div>
//               </div>
//               <h3 className="course-name">{course.title}</h3>
//               <div className="reviews-section">
//                 <div className="reviews-label">Reviews</div>
//                 <div className="rating-container">
//                   <FaStar className="star-icon" />
//                   <span className="course-rating">{course.rating} ({course.reviews.toLocaleString()})</span>
//                 </div>
//               </div>
//               <div className="enrolled-section">
//                 <div className="enrolled-label">Enrolled Learners</div>
//                 <div className="enrolled-count">{course.enrolled.toLocaleString()}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };




//   const CourseSchedule = () => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [timeoutId, setTimeoutId] = useState(null);

//     const classDates = [
//       { 
//         day: '26', 
//         weekday: 'Wednesday', 
//         month: 'March, 2023',
//         time: '08:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '27', 
//         weekday: 'Thursday', 
//         month: 'March, 2023',
//         time: '09:30 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '28', 
//         weekday: 'Friday', 
//         month: 'March, 2023',
//         time: '10:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '29', 
//         weekday: 'Saturday', 
//         month: 'March, 2023',
//         time: '11:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '31', 
//         weekday: 'Sunday', 
//         month: 'March, 2023',
//         time: '08:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '1', 
//         weekday: 'Sunday', 
//         month: 'March, 2023',
//         time: '08:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//       { 
//         day: '2', 
//         weekday: 'Sunday', 
//         month: 'March, 2023',
//         time: '08:00 AM (IST)',
//         duration: '(Class 1hr – 1:30Hrs) / Per Session'
//       },
//     ];

//     const handleDateClick = (date) => {
//       // Clear any existing timeout
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }

//       setSelectedDate(date.day);

//       // Set a new timeout to close the details after 4 seconds
//       const id = setTimeout(() => {
//         setSelectedDate(null);
//       }, 4000);

//       setTimeoutId(id);
//     };

//     const handleContainerLeave = () => {
//       // Clear timeout when mouse leaves the container
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       setSelectedDate(null);
//     };

//     // Clean up timeout when component unmounts
//     useEffect(() => {
//       return () => {
//         if (timeoutId) {
//           clearTimeout(timeoutId);
//         }
//       };
//     }, [timeoutId]);

//     return (
//       <div className="schedule-wrapper" onMouseLeave={handleContainerLeave}>
//         <h1 className="course-title">Upcoming Batch for SAP FICO Training in Chennai on Intellimindz</h1>

//         <div className={`calendar-section ${selectedDate ? 'expanded' : ''}`}>
//           {classDates.map((date) => (
//             <div 
//               key={date.day}
//               className={`date-item ${selectedDate === date.day ? 'selected' : ''}`}
//               onClick={() => handleDateClick(date)}
//             >
//               <div className="date-main">
//                 <div className="date-day">{date.day}</div>
//                 <div className="date-info">
//                   <div className="date-weekday">{date.weekday}</div>
//                   <div className="date-month">{date.month}</div>
//                 </div>
//               </div>

//               {selectedDate === date.day && (
//                 <div className="session-details">
//                   <p className="time">{date.time}</p>
//                   <p className="duration">{date.duration}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="action-buttons">
//           <button className="enroll-button">ENROLL NOW PAY LATER</button>
//           <button className="view-more-button">VIEW MORE</button>
//         </div>
//       </div>
//     );
//   };




const Saphome = () => {
    return (<>
        <Intro />
        <SapTrainingProfile />
        {/* <HeaderSAP /> */}
        <SAPOverview />
        <AboutUsHeader />
        <FeesStructure />
        {/* <CoursesSection /> */}
        {/* <CourseSchedule /> */}
        <Sapgeneral />
        <TeachingMethod />
        <Reason />
        <FactsAndFigures />
        <Info />
        <SapQuestions />
        <Testimonial />
        {/* <Footer /> */}
        {/* <SearchBar /> */}
    </>
    );
}
export default Saphome;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};

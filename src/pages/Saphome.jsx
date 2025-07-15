import FactsAndFigures from "../components/SAP/FactsAndFigures/FactsAndFigures";
import FeesStructure from "../components/SAP/Fees/Fees";
import Info from "../components/SAP/Info/Info";
// import SAPOverview from "../components/SAP/Overview/Sap_overview";
import Sapgeneral from "../components/SAP/SapGeneral/Sapgeneral";
import SapQuestions from "../components/SAP/Questions/Sapquestions";
import Reason from "../components/SAP/Reason/Reason";
import TeachingMethod from "../components/SAP/TeachingMethod/Teachingmethod";
import Testimonial from "../components/SAP/Saptestimonials/Saptestimonial";
import "../components/SapIM/IMprofiletraining.css";
import "../components/SapIM/IMwhyus.css";
import "../components/SAP/Header/Introsap.css";
import "../components/saponlinecom/onlinecoursegrid.css";
import sapTrainingImage from '../assests/images/saptraining.png'; // Adjust path as needed
import sapintelliaboutus from "../assests/images/sapintelliaboutus.png";
import "animate.css";

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

const Saphome = () => {
    return (<>
        <Intro />
        <SapTrainingProfile />
        {/* <HeaderSAP /> */}
        {/* <SAPOverview /> */}
        {/* <AboutUsHeader /> */}
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

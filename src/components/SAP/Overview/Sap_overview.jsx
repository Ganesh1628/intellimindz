// import React from "react";
// import "./Sap_overview.css";

// const SAPOverview = () => {
//   return (
//     <div className="sap-overview">
//       <div className="overview-container">
//         <h1 className="overview-title">SAP Training Overview</h1>
        
//         <p className="overview-description">
//         SAP is a global leader in enterprise software development, specializing in business process management solutions that streamline data processing and enhance information flow within organizations. It provides a robust suite of cutting-edge, cloud-based ERP solutions designed to address diverse business needs. Our SAP training programs are carefully structured to equip individuals with the expertise to safeguard data, strengthen cybersecurity, and minimize business risks. These courses empower organizations by automating repetitive tasks, optimizing resource utilization, and boosting overall efficiency and productivity.
//         </p>
        
//         <div className="enquire-section">
//           <h2 className="enquire-title">→ Enquire for More Info</h2>
//         </div>
        
//         <div className="stats-section">
//           <h2 className="stats-title">Statutory Accounting Challenges</h2>
          
//           <div className="stats-container">
//             <div className="stat-item">
//               <div className="stat-percentage">35%</div>
//               <div className="stat-text">SAP Training Helps in 35% Hike in Salary</div>
//             </div>
            
//             <div className="stat-item">
//               <div className="stat-percentage">26%</div>
//               <div className="stat-text">SAP Training Helps Professionals To Improve The Likelihood Of Job Promotions By 26%</div>
//             </div>
            
//             <div className="stat-item">
//               <div className="stat-percentage">77%</div>
//               <div className="stat-text">77% Of the World's Transaction Revenue Comes Into Contact With a SAP System</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SAPOverview;








import React from "react";
import "./Sap_overview.css";

const SAPOverview = () => {
  return (
    <section className="sap-overview">
      {/* Left Section - SAP Training Overview */}
      <div className="training-overview">
        <h1><strong>SAP Training Overview</strong></h1>
        <p>
        IntelliMindz offers the best SAP FICO Training in Chennai, providing in-depth knowledge of Financial Accounting (FI) and Controlling (CO) to help professionals and students build a successful career in SAP. Our SAP FICO Course in Chennai is designed by industry experts and includes real-time projects, hands-on exercises, and case studies to ensure practical learning. We also offer SAP FICO Online Training, allowing learners to access high-quality training from anywhere at their convenience. With expert guidance, placement assistance, and a job-oriented curriculum, IntelliMindz ensures that you gain the essential skills required to excel in SAP FICO and secure top positions in leading MNCs.
        </p>
        {/* <p>
          Our SAP training courses are specially tailored to provide individuals with 
          the ability to use SAP to secure the data, protect their business from hackers, 
          and reduce threats. These training courses increase efficiency and productivity 
          by automating repetitive tasks and maximizing time, money, and resources.
        </p> */}
        <button className="enquiry-btn">💬 Enquire for More Info</button>
      </div>

      {/* Right Section - Statutory Accounting Challenges */}
      <div className="accounting-challenges">
        <h3>Statutory Accounting Challenges</h3>
        <div className="challenge">
          <div className="circle-chart">
            <span>35%</span>
          </div>
          <p>SAP Training Helps in 35% Hike in Salary</p>
        </div>
        <div className="challenge">
          <div className="circle-chart yellow">
            <span>26%</span>
          </div>
          <p>SAP Training Helps in 35% Hike in Salary</p>
        </div>
        <div className="challenge">
          <div className="circle-chart blue">
            <span>77%</span>
          </div>
          <p>SAP Training Helps in 35% Hike in Salary</p>
        </div>
      </div>
    </section>
  );
};

export default SAPOverview;

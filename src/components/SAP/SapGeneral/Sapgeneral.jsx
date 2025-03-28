import React from "react";
import "./Sapgeneral.css"; // Import the CSS file
import software_testing from "../../../assests/images/Financial_image.png";

const Sapgeneral = () => {
  return (
    <section className="sap-section">
      <div className="sap-container">
        {/* Left Side: Description */}
        <div className="sap-description">
          <h2 className="sap-title">
            What is SAP and What does it do?
          </h2>
          <p className="sap-text">
          SAP FICO (Financial Accounting & Controlling) is a core module in SAP ERP that helps businesses manage their financial transactions, accounting, and reporting effectively. It integrates two essential components: Financial Accounting (FI), which handles company-wide financial statements, balance sheets, accounts payable, and receivables, and Controlling (CO), which focuses on cost management, budgeting, and internal financial control. SAP FICO plays a crucial role in streamlining financial processes, ensuring compliance, and improving decision-making through real-time data analysis. Organizations across industries rely on SAP FICO to maintain accurate financial records, manage profitability, and comply with legal regulations.
          </p>
          <p className="sap-text">
            SAP is a software company that creates software for small businesses, midsize businesses, and large
            corporations. SAP enables customers to link operational data on business processes with emotional data such
            as purchase experience and customer feedback in a seamless manner that assists companies to better
            understand and respond to their customers.
          </p>

          {/* Button */}
          <button className="question-btn">
            <span className="icon-question">❓</span> Have a Question?
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="sap-image-container">
          <img src={software_testing} alt="Software Testing" className="sap-image" />
        </div>
      </div>
    </section>
  );
};

export default Sapgeneral;

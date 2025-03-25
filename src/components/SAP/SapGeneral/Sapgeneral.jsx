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
            SAP software provides multiple business functions with a single view of the truth by centralizing data
            management. This enables companies to better manage complex business processes by providing real-time
            insights across the enterprise to employees from various departments. As a result, businesses can speed up
            workflows, increase operational efficiency, boost productivity, improve customer experiences, and boost
            profits.
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

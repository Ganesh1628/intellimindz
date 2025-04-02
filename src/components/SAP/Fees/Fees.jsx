import "./Fees.css";
import React from "react";

const batchSchedule = [
  { date: "March 30, 2025", days: "wednesday, Friday", type: "Online" },
  { date: "April 20, 2025", days: "Saturday, wednesday", type: "Offline" },
  { date: "May 10, 2025", days: "wednesday, tuesday", type: "Offline" },
  { date: "June 25, 2025", days: "Saturday, wednesday", type: "Offline" },
  { date: "August 15, 2025", days: "wednesday, Sunday", type: "Offline" },
];

const FeesStructure = () => {
  return (
    <div className="fees-wrapper">
      {/* Outer Box for Header and Batch Details */}
      <div className="fees-box">
        
        {/* Header Section */}
        <div className="fees-header">
          <h2 className="fees-title">Upcoming Batch Schedule for SAP Training in Chennai</h2>
        </div>

        {/* Training Mode Selection */}
        {/* <div className="training-mode">
          <h3 className="suitable-batches">Suitable Batches for You</h3>
          <div className="training-buttons">
            <button className="active">Online Classroom</button>
            <button>Corporate Training</button>
          </div>
        </div> */}

        {/* Batch Schedule List */}
        <div className="batch-list">
          {batchSchedule.map((batch, index) => (
            <div key={index} className="batch-card">
              <div className="sap-batch-date">{batch.date}</div>
              <div className="batch-info">
                <p>{batch.days}</p>
                <p className="batch-type">{batch.type}</p>
              </div>
              <div className="batch-time">
                <p className="time">08:00 AM (IST)</p>
                <p className="duration">(Class 1hr – 1:30Hrs) / Per Session</p>
              </div>
              <button className="fees-button">GET FEES</button>
            </div>
          ))}
        </div>

        {/* Request Batch Section */}
        <div className="sap_request_batch">
          <p>Can't find a batch you were looking for? ⬇  </p>
          <button className="request-button">REQUEST A BATCH</button>
        </div>

      </div>
    </div>
  );
};

export default FeesStructure;

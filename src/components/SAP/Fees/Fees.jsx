import "./Fees.css";
import React from "react";

const batchSchedule = [
  { date: "March 30, 2025", days: "Mon, Wed, Fri", type: "Online" },
  { date: "April 5, 2025", days: "Sat, Sun", type: "Offline" },
  { date: "April 5, 2025", days: "Sat, Sun", type: "Offline" },
  { date: "April 5, 2025", days: "Sat, Sun", type: "Offline" },
  { date: "April 5, 2025", days: "Sat, Sun", type: "Offline" },
];

const FeesStructure = () => {
  return (
    <div className="fees-wrapper">
      <div className="fees-container">
        <h2 className="fees-title">Upcoming Batch Schedule for Java Training in Chennai</h2>

        {batchSchedule.map((batch, index) => (
          <div key={index} className="batch-card">
            <div className="batch-date">{batch.date}</div>
            <div className="batch-info">
              <p>{batch.days}</p>
              <p className="batch-type">{batch.type}</p>
            </div>
            <div className="batch-time" style={{marginBottom:"40px"}}>
              <p className="time">08:00 AM (IST)</p>
              <p className="duration" style={{marginBottom:"40px"}}>(Class 1hr – 1:30Hrs) / Per Session</p>
            </div>
            <button className="fees-button">GET FEES</button>
          </div>
        ))}

        {/* Request Batch Section */}
        <div className="request-batch">
          <p>Can’t find a batch you were looking for?</p>
          <button className="request-button">REQUEST A BATCH</button>
        </div>
      </div>
    </div>
  );
};

export default FeesStructure;

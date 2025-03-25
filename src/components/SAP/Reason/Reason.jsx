import React from "react";
import "./Reason.css";
import ReasonImage from "../../../assests/images/Reason_group.png";

const Reason = () => {
  return (
    <div className="slide-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="Reason_header">Why to Opt for Onsite Training Delivery?</h1>
          <p>
          Onsite training is delivered to an organisation's employees at their workplace or other convenient location that suits the requirements of the employees. The Onsite training mode aims to provide organisations with satisfying and cost-effective training solutions to enhance their workforce's skills. Onsite training offers professionals the opportunity to upgrade their abilities by allowing them to learn new skills. It increases their innovative and creative power and helps them fulfil and obtain their desired career goals. Onsite training provides businesses with the perfect balance and flexibility for training employees without interrupting their daily workflow. This delivery mode is easily attainable by the employees in their working premises, leading to more productivity and expertise in their work activities/projects.
          </p>
          <button className="expert-help">Ask for Expert Help</button>
        </div>
        <div className="image-section">
          <img src={ReasonImage} alt="Reason Group" />
        </div>
      </div>
    </div>
  );
};

export default Reason;

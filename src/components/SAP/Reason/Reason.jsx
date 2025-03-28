import React from "react";
import "./Reason.css";
import ReasonImage from "../../../assests/images/Reason_group.png";

const Reason = () => {
  return (
    <div className="slide-container">
      <div className="content-wrapper">
        <div className="text-section">
          <h1 className="Reason_header">Why Intellimindz is Your Best Choice for SAP</h1>
          <p>
          Opting for SAP FICO Online Training offers numerous advantages, making it a preferred choice for professionals and students looking to upskill without disrupting their daily routines. Online training provides flexibility, allowing learners to access high-quality content, attend live instructor-led sessions, and study at their own pace from anywhere. This mode of learning eliminates the need for commuting, saving both time and costs while ensuring uninterrupted learning. With SAP FICO Course delivered online, students gain access to recorded sessions, e-learning materials, and interactive Q&A sessions, enhancing their understanding of complex concepts. Online training also offers personalized mentorship, doubt-clearing sessions, and hands-on practical exercises, ensuring a comprehensive learning experience. Additionally, it allows professionals to balance their work commitments while upgrading their SAP FICO skills, making career advancement easier. With the growing demand for SAP-certified professionals, opting for SAP FICO Online Training ensures that learners receive industry-relevant knowledge, real-time project experience, and placement support—all from the comfort of their homes.
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

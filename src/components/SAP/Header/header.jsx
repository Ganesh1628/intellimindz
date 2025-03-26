import React from "react";
import "./header.css";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FactsAndFigures from "../FactsAndFigures/FactsAndFigures";

const HeaderSAP = () => {
  return (
    <><div>
      {/* SAP FICO Training Course Section */}
      <section className="sap-fico-section">
        <div className="course-info">
          <h2 className="sap_intelli" style={{ fontSize: "60px" }}>
            Intelli<span style={{ color: "orange" }}>Mindz</span>
          </h2>
          <ul>
            <li>✔️ 44 Hours of Live Instructor-led Certified SAP FICO Training</li>
            <li>✔️ SAP Exam Assistance & 200+ MCQs & 18+ Course-End Quizzes</li>
            <li>✔️ 10+ Industry Related Projects & 30+ Assignments</li>
          </ul>
          <p className="ratings">
            <strong>4.7 / 5</strong> ⭐⭐⭐⭐⭐<br />
          </p>
        </div>

        {/* Brochure Download Form */}
        <div className="brochure-form">
          <h3>Enquiry Now</h3>
          <div className="input-group">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="phone-input">
            <select>
              <option>India (+91)</option>
              <option>USA (+1)</option>
              <option>UK (+44)</option>
            </select>
            <input type="text" placeholder="Enter phone here" />
          </div>
          <div className="input-group">
            <select defaultValue="">
              <option value="" disabled>Select Branch *</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Tirupur">Tirupur</option>
            </select>
            <div className="radio-group">
  <div id="trainingmode">Training Mode:</div>
  <label className="label">
    <input type="radio" name="preference" value="online" />
    Online
  </label>
  <label className="label">
    <input type="radio" name="preference" value="offline" />
    Offline
  </label>
</div>

          </div>
          <button className="btn-download">Submit</button>
        </div>
      </section>
    </div></>

  );
};

export default HeaderSAP;

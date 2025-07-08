import React, { useEffect, useState } from "react";
import "./Teachingmethod.css";
import { FaChalkboardTeacher, FaLaptop, FaBookOpen} from "react-icons/fa";

const TeachingMethod = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <section className="delivery-methods">
      {/* Header Section */}
{/* Header Section */}
<div className="sub-header">
  <h2>Our Available Delivery Methods</h2>
  <div className="sub-header-content">
    <p>
      The Knowledge Academy is the World’s Leading Organisation for training professionals. 
      The Knowledge Academy provides training in 490+ locations in around 221+ countries, 
      covering 3000 subjects with the following delivery methods.
    </p>
    <button className="info-btn">💡 Need More Info?</button>
  </div>
</div>


      {/* Delivery Methods Section */}
      <div className="methods-container">
        {/* Classroom Training */}
        <div className={`method-card ${animate ? "fade-in" : ""}`} style={{ transitionDelay: "0.2s" }}>
          <div className="icon"><FaChalkboardTeacher /></div>
          <h3>Classroom Training</h3>
          <p>Get trained in a quiet, safe, and clean environment, which is</p>
          {/* <a href="#">Enquire Now →</a> */}
          <span className="number">01</span>
        </div>

        {/* Online Instructor-Led Training (Highlighted) */}
        <div className={`method-card ${animate ? "fade-in" : ""}`} style={{ transitionDelay: "0.6s" }}>
        <div className="icon"><FaLaptop /></div>
          <div className="overlay"></div>
          <div className="content">
            <h3>Online Instructor</h3>
            <p>
            Attend our award-winning training from your home without going anywhere.
            </p>
            {/* <a href="#">Enquire Now →</a> */}
          </div>
          <span className="number">02</span>
        </div>

        {/* Online Self-Paced Training */}
        <div className={`method-card ${animate ? "fade-in" : ""}`} style={{ transitionDelay: "0.6s" }}>
          <div className="icon"><FaBookOpen /></div>
          <h3>Online Self-Paced Training</h3>
          <p>Get immediate 90 days access to the e-learning portal, which is</p>
          {/* <a href="#">Enquire Now →</a> */}
          <span className="number">03</span>
        </div>

        {/* Onsite Training */}
        {/* <div className={`method-card ${animate ? "fade-in" : ""}`} style={{ transitionDelay: "0.8s" }}>
          <div className="icon"><FaMapMarkerAlt /></div>
          <h3>Onsite Training</h3>
          <p>Train multiple employees at your choice’s place, time, and</p>
          <span className="number">04</span>
        </div> */}
      </div>
    </section>
  );
};

export default TeachingMethod;

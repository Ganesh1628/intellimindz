import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const images = [
  require("../../../assests/images/saptraining.png"),
  require("../../../assests/images/saptraining1.png"),
  require("../../../assests/images/saptraining2.png"),
  require("../../../assests/images/saptraining3.png"),
];

const HeaderSAP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* SAP FICO Training Course Section */}
      <section className="sap-fico-section">
        <div className="course-info">
          <h2 className="sap_intelli" style={{ fontSize: "60px" }}>
            Intelli<span style={{ color: "orange" }}>Mindz</span>
          </h2>

          <h2>Benefits of SAP Training</h2>
          <p className="sap-benefits-text">
            SAP training provides professionals with the skills needed to excel in enterprise resource planning (ERP).  
            By obtaining SAP certification, individuals can enhance their career prospects and gain a competitive edge in the job market.  
            SAP professionals are in high demand across industries, offering lucrative salary packages and job stability.  
            The training includes hands-on experience with real-world projects, ensuring that learners develop practical expertise.  
            Staying updated with the latest SAP tools and trends allows professionals to drive business efficiency and innovation.
          </p>

          <h3>Course Highlights</h3>
          <ul>
            <li>✔️ 44 Hours of Live Instructor-led Certified SAP FICO Training</li>
            <li>✔️ SAP Exam Assistance & 200+ MCQs & 18+ Course-End Quizzes</li>
            <li>✔️ 10+ Industry Related Projects & 30+ Assignments</li>
          </ul>
          <p className="ratings">
            <strong>4.7 / 5</strong> ⭐⭐⭐⭐⭐<br />
          </p>
        </div>

        {/* Image Animation */}
        <div className="sap-fico-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="SAP FICO Training"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ position: "absolute" }}
            />
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default HeaderSAP;

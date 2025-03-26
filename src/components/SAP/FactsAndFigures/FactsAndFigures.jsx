import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./FactsAndFigures.css";
import "./Syllabus.css"; // Importing syllabus styles
import financialIcon from "../../../assests/images/course.png";
import locationIcon from "../../../assests/images/location.png";
import graduationIcon from "../../../assests/images/graduation.png";

const FactsAndFigures = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animateSyllabus, setAnimateSyllabus] = useState(false);
  const syllabusRef = useRef(null); // Reference for syllabus section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSyllabus(true);
        }
      },
      { threshold: 0.3 } // Animation triggers when 30% of the section is visible
    );

    if (syllabusRef.current) {
      observer.observe(syllabusRef.current);
    }

    return () => {
      if (syllabusRef.current) {
        observer.unobserve(syllabusRef.current);
      }
    };
  }, []);

  const facts = [
    { id: 1, number: "50+", text: "Courses Running Daily", image: financialIcon },
    { id: 2, number: "40+", text: "Locations Worldwide", image: locationIcon },
    { id: 3, number: "10000+", text: "Professionals Trained", image: graduationIcon },
  ];

  const modules = [
    { id: 1, title: "SAP Quality Management Introduction", details: "Overview of SAP QM, its components, and integration with other SAP modules." },
    { id: 2, title: "Planning and Execution of SAP QM", details: "Inspection planning, quality notifications, and execution strategies." },
    { id: 3, title: "SAP QM in Logistics", details: "Integration with procurement and material management." },
    { id: 4, title: "SAP QM in Production", details: "Quality checks, in-process inspections, and final inspections in production." },
    { id: 5, title: "SAP QM Inventory Posting", details: "Managing quality stock, blocked stock, and posting changes." },
    { id: 6, title: "Quality Management in Procurement", details: "Vendor evaluation, incoming inspection, and supplier quality monitoring." },
    { id: 7, title: "Master Data", details: "Maintaining inspection characteristics, catalog codes, and quality information records." },
    { id: 8, title: "Master Data", details: "Maintaining inspection characteristics, catalog codes, and quality information records." },
    { id: 9, title: "Master Data", details: "Maintaining inspection characteristics, catalog codes, and quality information records." },
    { id: 10, title: "Source Inspection", details: "How inspections are planned and executed before goods are received." },
  ];

  const toggleModule = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Facts and Figures Section */}
      <section className="facts-section">
        <h2 className="facts-title" >Our Amazing Facts and Figures</h2>
        <p className="facts-description" style={{ fontFamily: "DM Sans, sans-serif" }}>
          We are the largest global training provider with a brilliant track record for providing skill development courses. Our extraordinary statistics are something to make us very proud of our work.
        </p>

        <div className="facts-container">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              className="fact-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="fact-icon">
                <img src={fact.image} alt="Fact Icon" />
              </div>
              <h3>{fact.number}</h3>
              <p>{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Syllabus Section with Animation Triggered on Scroll */}
      <section className="syllabus-section" ref={syllabusRef}>
        <h2 className="syllabus-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
          Syllabus of SAP QM Training in Chennai
        </h2>
        <div className="syllabus-container">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              className="syllabus-item"
              onClick={() => toggleModule(index)}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={animateSyllabus ? { opacity: 1, x: 0 } : {}} // Animate only when in viewport
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="syllabus-header">
                <span className="syllabus-icon">{activeIndex === index ? "−" : "+"}</span>
                <span className="syllabus-text">Module {module.id}: {module.title}</span>
              </div>
              <div className={`syllabus-content ${activeIndex === index ? "active" : ""}`}>
              <p style={{ fontFamily: "DM Sans, sans-serif" }}>{module.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FactsAndFigures;

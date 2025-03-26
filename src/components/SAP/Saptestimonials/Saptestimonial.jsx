import React from "react";
import "./Saptestimonial.css";
import MenFace from "../../../assests/images/men_face.png";

const testimonials = [
  {
    quote: "I have done my Sap training here at Intellimindz.SAP Online Training was fully hands-on and was helpful.",
    name: "Danny Dario",
    date: "29 August 2021",
    image: MenFace,
  },
  {
    quote: "I completed my SAP training at IntelliMindz. The hands-on online training was practical and highly beneficial.",
    name: "Albert Cyrill",
    date: "29 August 2021",
    image: MenFace,
  },
  {
    quote: "The SAP training at IntelliMindz was engaging and practical. The hands-on approach was really beneficial.",
    name: "Madona Cadee",
    date: "29 August 2021",
    image: MenFace,
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-left" style={{ fontFamily: "DM Sans, sans-serif" }}>
        <h2>Testimonial Section</h2>
        <ul>
          <li>✅ Outstanding service, truly impressed!</li>
          <li>✅ Reliable, professional, and efficient!</li>
          <li>✅ Great experience, highly recommended!</li>
        </ul>
        {/* <div className="icons">
          <img src="figma_icon.png" alt="Figma" />
          <img src="invision_icon.png" alt="InVision" />
          <img src="xd_icon.png" alt="Adobe XD" />
        </div> */}
      </div>
      <div className="testimonial-right">
        <h2 className="testimonial-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
          Customer are loving it
        </h2>
        <p className="testimonial-subtitle" style={{ fontFamily: "DM Sans, sans-serif" }}>
        What Our Clients Say About Us
        </p>
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote" style={{ fontFamily: "DM Sans, sans-serif" }}>
                “{item.quote}”
              </p>
              <div className="stars">★★★★</div>
              <div className="user-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4 style={{ fontFamily: "DM Sans, sans-serif" }}>{item.name}</h4>
                  <p style={{ fontFamily: "DM Sans, sans-serif" }}>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

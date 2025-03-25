import React from "react";
import "./Saptestimonial.css";

const testimonials = [
  {
    quote: "I'm Danny and I have attended Devops Online Certification Training from Intellimindz.Devops Training was scheduled.",
    name: "Danny Dario",
    date: "29 August 2021",
    image: "../assests/images/men_face.png",
  },
  {
    quote: "Making my own card and choosing my own number is a whole new experience for me. Nice work for this super feature.",
    name: "Albert Cyrill",
    date: "29 August 2021",
    image: "../assests/images/men_face.png",
  },
  {
    quote: "I don’t expect it will be this easy to do transaction even on between different platform. Thanks Payment!",
    name: "Madona Cadee",
    date: "29 August 2021",
    image: "../assests/images/men_face.png",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-left">
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
        <h2 className="testimonial-title">Customer are loving it</h2>
        <p className="testimonial-subtitle">
          Our customer explain why they choose Payment for their payment business and how this works out in practice.
        </p>
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote">“{item.quote}”</p>
              <div className="stars">★★★★★</div>
              <div className="user-info">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.date}</p>
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

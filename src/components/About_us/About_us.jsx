import { BsAwardFill } from "react-icons/bs";
import "./About_us.css";
import abttImage from "../../assests/images/abtt.png";
import aboutGroupImg from "../../assests/images/about_group_dis.png";
import whatWeImg from "../../assests/images/whatwe.png";
import Footer from "../Footer/Footer"; // Importing the Footer component
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="About_body">
      <div className="Abt" style={{ backgroundImage: `url(${abttImage})` }}>
        <div className="abtdiv">About Us</div>
      </div>

      <div id="myDiv"></div>

      <section className="about-section">
        <div className="about_container">
          <div className="about_row">
            <div className="col image-container">
              <img src={whatWeImg} alt="About Us" className="img-fluid" />
            </div>
            <div className="col text-container">
              <h2 className="title">What We're All About</h2>
              <p className="lead">
              IntelliMindz is recognized as the top training institute in India, dedicated to providing industry-leading IT and cloud training programs. With a strong commitment to excellence, we offer a diverse range of courses designed to equip learners with the most relevant and up-to-date technical skills.
              </p>
              <p className="lead">
              As a premier software training institute, our primary focus is to empower aspiring professionals by enhancing their expertise in various software technologies. Our comprehensive training programs are tailored to meet industry demands, ensuring that students gain the necessary knowledge and hands-on experience to secure rewarding career opportunities in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      <motion.div
  id="Myid2"
  initial={{ x: "100vw", opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  viewport={{ once: true, amount: 1 }} // Runs only once when 50% of it is visible
>
  Why We Are Best?
</motion.div>

      <div className="AS_container">
        <div className="AS_text-section">
          <h2>Our Commitment to Excellence</h2>
          <div id="linediv"></div>
          <p>
          As a trusted name in software training, we are dedicated to preparing students for successful IT careers.
          Our expert-led training programs provide both technical and soft skill development, ensuring that students gain a strong foundation in industry requirements. We focus on real-world learning, offering hands-on experience, career mentorship, and placement assistance in leading companies. Our additional offerings include internships, online courses, corporate training, one-on-one coaching, and a 100% job placement commitment.
          </p>
        </div>

        <div className="AS_image-section">
          <img src={aboutGroupImg} alt="Why We Are Best?" />
        </div>
      </div>

      <div className="feature_body">
        <section className="feature-section">
          <div className="feature-container">
            <div className="feature-column">
              <div className="feature-card">
                <div className="feature-content_1">
                  <h5 style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px", color: "gold" }}>
                      <BsAwardFill />
                    </div>
                    Expert Trainers
                  </h5>
                  <p>
                  Learn from top industry pioneers and skilled mentors who provide valuable insights into real-world challenges and solutions. Our comprehensive training programs combine theoretical expertise with hands-on practical sessions, ensuring you acquire the necessary skills to thrive in today’s competitive job market. 
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-content">
                  <h5 style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px", color: "gold" }}>
                      <BsAwardFill />
                    </div>
                    Flexible & Affordable
                  </h5>
                  <p>
                    This is the chance to get started on increasing skills by
                    joining the IntelliMindz - Best Software Training Institute.
                    IntelliMindz offers students the choice of online, offline & 
                    classroom sessions. You can pick the most appropriate
                    session to learn everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="feature-column">
              <div className="feature-card">
                <div className="feature-content_3">
                  <h5 style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px", color: "gold" }}>
                      <BsAwardFill />
                    </div>
                    100% Job Placements
                  </h5>
                  <p>
                  IntelliMindz empowers students with a 100% job placement guarantee and unwavering career support.
                  With our structured mock tests, tailored resume-building guidance,study materials, we prepare you to excel in job interviews and secure top opportunities.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-content_4">
                  <h5 style={{ display: "flex" }}>
                    <div style={{ paddingRight: "10px", color: "gold" }}>
                      <BsAwardFill />
                    </div>
                    Certification
                  </h5>
                  <p>
                  Your career advancement begins with IntelliMindz's prestigious course completion certificate, a symbol of your hard-earned skills and technical knowledge.
                  This industry-recognized certification not only boosts your credibility but also enhances your resume, making you a strong candidate in the job market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;

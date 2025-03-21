// import "../components/Java.css";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import "./java_course.css"; // Corrected Path
import Javabanner from "../../assests/images/Javabanner5.png";
import whyjavalogo from "../../assests/images/whyjava.png";
import whyjavautuubelogo from "../../assests/images/javayoutube.png";
import Footer from "../Footer/Footer";
import "../Footer/footer.css"; // Ensure the correct path
import { motion } from "framer-motion";
import whatsappIcon from "../../assests/images/whatsapp.png"; // Import the WhatsApp icon


const Java = () => {
    const batchSchedule = [
        { date: "08th MARCH 2025", days: "Sat (Sat-Sun)", type: "WEEKEND BATCH" },
        { date: "16th MARCH 2025", days: "Sat (Sat-Sun)", type: "WEEKEND BATCH" },
        { date: "17th MARCH 2025", days: "Mon (Mon-Fri)", type: "WEEKDAYS BATCH" },
        { date: "22th MARCH 2025", days: "Sat (Sat-Sun)", type: "WEEKEND BATCH" },
        { date: "24th MARCH 2025", days: "Mon (Mon-Fri)", type: "WEEKEND BATCH" },
        { date: "29th MARCH 2025", days: "Sat (Sat-Sun)", type: "WEEKEND BATCH" },
    ];

    return (
        <div className="Java_container">
            <div className="Java_heading_section">
                <div className="Java_header1">
                    <h1>
                        <span style={{ color: "orange" }}>Java</span> <br /> Training in Chennai
                    </h1>
                </div>
                <div className="Java_header2">
                    <p id="java_p1">
                        <span style={{ paddingRight: "10px" }}>17K+ Satisfied learners</span>
                        <br />
                        <AiFillStar className="Java_star" />
                        <AiFillStar className="Java_star" />
                        <AiFillStar className="Java_star" />
                        <AiFillStar className="Java_star" />
                        <span id="star5">
                            <AiFillStar />
                        </span>
                    </p>
                    <button className="Java_Btn1">Read Reviews</button>
                </div>
            </div>

            <div className="java_list_container1">
                <div className="enroll_section">
                    <div className="form-box">
                        <h2 id="enroll_h2">Enroll Now</h2>
                        <p id="enroll_p">and We will get back to you soon!</p>
                        <form>
                            <div className="input-container">
                                <div className="column">
                                    <div className="input-box">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div className="input-box">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div className="input-box">
                                        <input type="email" placeholder="E-Mail" />
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="input-box">
                                        <input type="text" placeholder="Course" />
                                    </div>

                                    <div className="input_select">
                                        <select defaultValue="">
                                            <option value="" disabled>Select Branch *</option>
                                            <option value="Chennai">Chennai</option>
                                            <option value="Bangalore">Bangalore</option>
                                            <option value="Coimbatore">Coimbatore</option>
                                            <option value="Tirupur">Tirupur</option>
                                        </select>
                                    </div>

                                    <div className="input_select">
                                        <select defaultValue="">
                                            <option value="" disabled>Select Batch *</option>
                                            <option value="Immediately">Immediately</option>
                                            <option value="In 2 Weeks">In 2 Weeks</option>
                                            <option value="In a Month">In a Month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="radio-group">
                                <div id="trainingmode">Training Mode</div>
                                <label className="label">
                                    <input type="radio" name="preference" value="online" />
                                    Online
                                </label>
                                <label className="label">
                                    <input type="radio" name="preference" value="offline" />
                                    Offline
                                </label>
                            </div>
                            <button type="submit" className="register-btn">
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>

                <div className="java_list_section">
                    <div className="java_list_sectionbox">
                        {[
                            "Transform your career with IntelliMindz's premier Java training program.",
                            "Master the essentials and advanced techniques of Java programming.",
                            "Build real-world, scalable applications through hands-on projects.",
                            "Learn from seasoned industry professionals with extensive Java expertise.",
                            "Strengthen your foundation in object-oriented programming and data structures.",
                            "Engage in interactive, immersive sessions to fast-track your Java skills.",
                            "Open doors to lucrative software development roles with our expert-led Java training.",
                        ].map((text, index) => (
                            <p key={index}>
                                <AiOutlineCheckCircle /> {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="java_list_container2">
                <div className="heading_2">
                    <h1>Why Choose IntelliMindz for Java Training?</h1>
                </div>
                <div className="heading_2_box">
                    <div className="heading_2_list">
                        <p>IntelliMindz offers the best Java Training in Chennai, a program meticulously crafted to provide a transformative learning experience for aspiring and experienced Java developers alike. Under the guidance of our expert instructors, you will delve into the core and advanced concepts of Java programming, gaining hands-on experience through practical exercises and real-world projects. Our training is designed to accommodate your schedule, offering flexible learning options that allow you to balance your professional and personal commitments. By joining IntelliMindz, you become part of a dynamic community where you can collaborate on projects, share knowledge, and build lasting professional connections. We equip you with cutting-edge Java development tools, personalized mentorship, and continuous learning opportunities to ensure you remain competitive in the ever-evolving tech landscape. Take the leap and enroll in our Java Training program to unlock your full potential and achieve your career goals.</p>
                    </div>
                    <div className="heading_2_img">
                        <img src={whyjavalogo} alt="Why Java" />
                    </div>
                </div>

                <div className="batch_container">
                    <h2 className="batch_title">Upcoming Batch Schedule for Java Training in Chennai</h2>

                    {batchSchedule.map((batch, index) => (
                        <div key={index} className="batch-row">
                            <div className="batch-date">{batch.date}</div>
                            <div className="batch-details">
                                <p>{batch.days}</p>
                                <p className="batch-type">{batch.type}</p>
                            </div>
                            <div className="batch-time">
                                <p className="time">08:00 AM (IST)</p>
                                <p className="duration">(Class 1hr – 1:30Hrs) / Per Session</p>
                            </div>
                            <button className="fees-button">GET FEES</button>
                        </div>
                    ))}
                    <div className="request-batch">
                        <p>Can’t find a batch you were looking for?</p>
                        <button className="request-button">REQUEST A BATCH</button>
                    </div>
                </div>

                <div className="vdo_container">
                    <div className="vdo_img">
                        <img src={whyjavautuubelogo} alt="Java Video" />
                    </div>
                    <div id="vdo_box">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/0vGzxvfCSHY?si=dgz4RR_5yCubIyCK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="iframe"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="faq-section">
            <h2>Advanced Java Course FAQ</h2>
            <div className="faq-content">
                <div className="faq-item">
                    <p className="faq-question">What is Advanced Java?</p>
                    <p className="faq-answer">
                        Advanced Java is a part of Java programming that covers topics like web development, frameworks (Spring, Hibernate), multithreading, database connectivity, and enterprise-level applications, enhancing skills for complex, scalable software solutions.
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-question">Is Advanced Java easy or hard?</p>
                    <p className="faq-answer">
                        The difficulty of Advanced Java depends on your prior programming experience. With proper guidance and practice, it can be mastered effectively.
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-question">What is Advanced Java used for?</p>
                    <p className="faq-answer">
                        Advanced Java is used for developing web applications, enterprise applications, and large-scale systems. It is essential for backend development and server-side programming.
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-question">Is Advanced Java enough to get a job?</p>
                    <p className="faq-answer">
                        While Advanced Java is a critical skill, employers often look for a combination of skills including problem-solving, understanding of frameworks, and experience with real-world projects.
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-question">What are the Advanced Java Course Fees in Chennai?</p>
                    <p className="faq-answer">
                        The fees for Advanced Java courses in Chennai can vary depending on the institute and the depth of the course. It's best to contact the institute directly for accurate pricing.
                    </p>
                </div>
            </div>
        </div>

            {/* New Personalized Course Section */}
            <div className="course-box">
                <div className="course-content">
                    <p className="course-text">Want to learn with a personalized course curriculum?</p>
                    <div className="course-contact">
                        📞 +91 96558 77677
                    </div>
                </div>
                <div className="personalized_course_image">
                    <img src={whatsappIcon} alt="Student Holding Books" />
                </div>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Java;
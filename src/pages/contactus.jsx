import React, { useState, useEffect } from 'react';
import 'animate.css';
import "../components/Contactus/Intro.css";
import Footer from '../components/Footer/Footer';

const Intro = () => {
    const [runAnimation, setRunAnimation] = useState(false);

    useEffect(() => {
        // Trigger animation when component mounts (i.e., user visits the page)
        setRunAnimation(true);
    }, []);

    return (
        <div className="contact-wrapper">
            <div className="contact-hero">
                <div className="overlay"></div>
                <h2 className="intro-h2">Welcome to Intelli<span style={{ color: "orange" }}>mindz</span></h2>
                <h1>Contact Us</h1>
            </div>

            <div className="location-intro">
                <div className="location-text">
                    <h2>Your IT Career Journey Starts Here</h2>
                    <p>
                        The demand for skilled IT professionals continues to grow as businesses seek innovative, high-quality digital solutions. Begin your journey with IntelliMindz, a leading IT training institute in Chennai, known for delivering industry-focused courses designed to equip you with real-world skills. Learn at your own pace, guided by expert instructors, and earn a Professional Certificate that helps you stand out in today’s competitive tech landscape.
                    </p>
                </div>

                <div className="location-card-grid">
                    <div className={`contact-location-card ${runAnimation ? 'animate__animated animate__backInLeft' : ''}`}>
                        <div className="location-icon">📍</div>
                        <div>
                            <h3>Bangalore</h3>
                            <p>Stage 12, Outer Ring Rd, Old Madiwala, Jay Bheema Nagar, BTM 1st Stage, Bengaluru, Karnataka 560068</p>
                        </div>
                    </div>

                    <div className={`contact-location-card ${runAnimation ? 'animate__animated animate__backInRight' : ''}`}>
                        <div className="location-icon">📍</div>
                        <div>
                            <h3>Chennai</h3>
                            <p>No. 7/15 Second Floor, United Colony, Velachery Rd, Medavakkam, Chennai – 600100, Tamil Nadu</p>
                        </div>
                    </div>

                    <div className={`contact-location-card ${runAnimation ? 'animate__animated animate__backInLeft' : ''}`}>
                        <div className="location-icon">📍</div>
                        <div>
                            <h3>Coimbatore</h3>
                            <p>54,G.K.S Nagar, Saravanampatti, Coimbatore, Tamil Nadu 641035</p>
                        </div>
                    </div>

                    <div className={`contact-location-card ${runAnimation ? 'animate__animated animate__backInRight' : ''}`}>
                        <div className="location-icon">📍</div>
                        <div>
                            <h3>Tirupur</h3>
                            <p>356,kongu main road, Opp Chinnaswamy ammal school, Near 1st railway gate, Tirupur</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-main">
                <div className="contact-left">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions about our courses, <strong>IntelliMindz — Chennai’s leading IT training institute</strong> — is here to help you 24/7. Feel free to reach out to us using the contact details provided below.</p>
                    {/* <p>
                        If you have any enquiry or any doubts related to the courses, please feel free to contact us.
                        <strong> Aimore Technologies</strong>, <span className="highlight">the best software training institute in Chennai</span>,
                        loves to assist you anytime 24*7. Contact us at the address, and number mentioned below,
                    </p> */}

                    <p>📞 <a href="tel:+919655877677">+91 9655 87 76 77</a></p>
                    <p>📞 <a href="tel:+919655877577">+91 9655 87 75 77</a></p>
                    <p>📩 <a href="mailto:info@intellimindz.com">info@intellimindz.com</a></p>
                </div>


                <div className="contact-right">
                    <h2>Quick Enquiry</h2>
                    <form>
                        <input type="text" placeholder="Enter Name *" required />
                        <input type="email" placeholder="Enter Email Address *" required />
                        <input type="coursereq" placeholder="Enter your course *" required />
                        <input type="city" placeholder="Enter your city name *" required />
                        <div className="mobile-group">
                            <select>
                                <option value="+91">+91</option>
                            </select>
                            <input type="tel" placeholder="Enter Mobile Number *" required />
                        </div>
                        <textarea placeholder="Enter your message" rows="4"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};




const Contactus = () => {
    return (
        <>
            <Onlineheader />
            <Intro />
            <Footer />
        </>
    )
};
export default Contactus;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
// Adjust the path if HeroSection.jsx is in a different location
// relative to your 'assests' folder.
// If 'assests' is a typo and it should be 'assets', please correct it here.
import homePageIntro from "../../assests/images/homepagebanner.png";
import "./hero-section.css"; // Your existing CSS for this section
import ContactModal from "./ContactModal"; // Import the modal component
// ^ Ensure this path is correct. If ContactModal.jsx is in 'src/components'
// and HeroSection.jsx is in 'src/components/HeroSection/',
// the path might be '../ContactModal.jsx'

const HeroSection = () => {
    const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Intersection logic here if needed
                }
            },
            { threshold: 0.3 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <> {/* Use Fragment to wrap section and modal */}
            <section className="hero-section" ref={sectionRef}>
                <Container>
                    {/* Main Content Section */}
                    <Row className="content-section">
                        <Col lg="6" md="12">
                            <div
                                className="header_content"
                                style={{
                                    fontFamily: "DM Sans, sans-serif",
                                    width: "100%",
                                    maxWidth: "620px",
                                }}
                            >
                                <h1>
                                    Top Training Institute in Chennai: Elevate Your Skills with{" "}
                                    <span style={{ color: "orange", fontFamily: "DM Sans, sans-serif" }}>
                                        Intellimindz
                                    </span>
                                </h1>
                            </div>
                            <div className="hero__content" style={{ marginTop: "20px", textAlign: "left" }}>
                                <p
                                    className="mb-10"
                                    style={{
                                        width: "100%",
                                        maxWidth: "620px",
                                        textAlign: "left",
                                        fontFamily: "DM Sans, sans-serif",
                                    }}
                                >
                                    Welcome to Intellimindz Training Institute, Chennai's premier destination for comprehensive IT and non-IT training programs. We are committed to empowering individuals with the cutting-edge skills and industry-relevant knowledge needed to thrive in today's competitive landscape. Whether you're looking to build a career in the dynamic IT sector or enhance your expertise in crucial non-IT domains, our expert instructors and practical learning methodologies will guide you towards achieving your professional aspirations in Chennai and beyond.
                                </p>
                                <div className="start-course-container">
                                    {/* Updated Button to open modal */}
                                    <button className="start-course-btn" onClick={openModal}>
                                        START LEARNING
                                    </button>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" md="12">
                            <div className="form-box-enroll">
                                <img
                                    src={homePageIntro}
                                    alt="Enrollment Preview"
                                    style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fallback = e.target.nextSibling;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                 <div style={{display: 'none', textAlign: 'center', width: '100%', minHeight: '200px', border:'1px dashed #ccc', padding: '20px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                   <p className="text-gray-500 text-sm">Hero image not found.</p>
                                   <p className="text-gray-400 text-xs mt-1">Please check path: {homePageIntro.toString()}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Stats Section */}
                    <Row className="stats-section">
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3 className="stat-number">150+</h3>
                            <p className="stat-title">Tailor-Made Courses</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3 className="stat-number">75+</h3>
                            <p className="stat-title">Expert Tutors</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3 className="stat-number">100+</h3>
                            <p className="stat-title">Hands-On Sessions</p>
                        </Col>
                        <Col lg="3" md="6" sm="6" className="mb-4">
                            <div className="stat-icon">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <h3 className="stat-number">15,500+</h3>
                            <p className="stat-title">Successful Careers</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Render the Modal */}
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default HeroSection;
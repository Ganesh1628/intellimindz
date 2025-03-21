// components/FAQ.js
import React from 'react';
import './questions.css'; // Create a separate CSS file for FAQ styles
import talkingimage from "../../assests/images/talkingimage.png"; // Import the WhatsApp icon

const FAQ = () => {
    const faqItems = [
        {
            question: "Is GST included in the Fees?",
            answer: "No, Fee is excluding 18% GST"
        },
        {
            question: "In how many Instalments, the FEES could pay completely?",
            answer: "3 Instalments in total, 1st Instalment: 50% (while joining), 2nd Instalment: 25% (2nd month – 1st week), 3rd Instalment: 25% (3rd month – 1st week)"
        },
        {
            question: "Is there any Admission fees?",
            answer: "Yes, can be considered as a reservation fees where you could confirm your place in the batch by registering with Rs.5000. That’s not an extra charge, amount is part of total fee and Non-Refundable."
        },
        {
            question: "Is Advanced Java enough to get a job?",
            answer: "While Advanced Java is a critical skill, employers often look for a combination of skills including problem-solving, understanding of frameworks, and experience with real-world projects."
        },
        {
            question: "What is the Course duration?",
            answer: "4 Months of Classroom training (Mandatory)8 Months of On-Job training (Multiple Entries & Multiple Exit points)"
        },
        {
            question: "Course structure (6 Months + 6 Months)?",
            answer: "6 Months (Course Training), Fundamentals to Core VLSI training, Intensive training on Real time Projects"
        },
        {
            question: "What is the syllabus for Admission test?",
            answer: "Aptitude, Digital Electronics, Electronic Devices and Circuits, Network Theory Fundamentals."
        },
        {
            question: "What is the cut-off for Screening test?",
            answer: "Minimum of 60% in objective exam and follows up with a Personal Interview."
        },
        {
            question: "What is On-Job Training?",
            answer: "Basically, you get to work under a project in a Product based company. Every individual will have their part of work and role in a Live project. And a certified experience will be provided under the same."
        }
    ];

    return (
        <div className="faq-section">
            <h2>Find Your Answers Here</h2>
            {/* <div className="faq-content"> */}
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item">
                        <p className="faq-question">{item.question}</p>
                        <p className="faq-answer">{item.answer}</p>
                    </div>
                ))}
            {/* </div> */}
                        {/* New Personalized Course Section */}
                        <div className="course-box">
                <div className="course-content">
                    <p className="course-text">Want to learn with a personalized course curriculum?</p>
                    <div className="course-contact">
                        📞 +91 96558 77677
                    </div>
                </div>
                <div className="personalized_course_image">
                    <img src={talkingimage} alt="Student Holding Books" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
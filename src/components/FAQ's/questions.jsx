import React from 'react';
import './questions.css'; // Create a separate CSS file for FAQ styles
import talkingimage from "../../assests/images/talkingimage.png"; // Import the WhatsApp icon

const FAQ = () => {
    const faqItems = [
        {
            question: "What courses does Intellimindz offer?",
            answer: "Intellimindz offers comprehensive training programs in cloud computing, data science, software development, automation, cybersecurity, and more, designed to meet industry demands from beginner to advanced levels."
        },
        {
            question: "Are the trainers experienced?",
            answer: "Yes, Intellimindz trainers are highly skilled industry professionals with over 10 years of experience and hands-on knowledge, ensuring practical, in-depth learning for all students."
        },
        {
            question: "Do you offer flexible class timings?",
            answer: "Yes, Intellimindz offers flexible class schedules, including weekday, weekend, and online sessions, allowing students and professionals to balance learning with their daily commitments."
        },
        {
            question: "Do you offer live online training?",
            answer: "Yes, Intellimindz conducts interactive live online sessions that allow participants to learn, engage with trainers, and clarify doubts conveniently from any location worldwide."
        },
        {
            question: "Do you provide placement support?",
            answer: "Yes, Intellimindz offers placement assistance, including resume preparation, mock interviews, and connections with hiring companies, helping students secure jobs in top organizations."
        },
        {
            question: "What is the duration of the courses?",
            answer: "Course duration varies, typically ranging from 4 to 12 weeks, depending on the course complexity and curriculum, ensuring comprehensive coverage of topics."
        },
        {
            question: "Do you offer free demo sessions?",
            answer: "Yes, Intellimindz provides free demo sessions to help potential students understand the course structure, trainer expertise, and overall quality before enrolling."
        },
        {
            question: "Do you provide corporate training?",
            answer: "Yes, Intellimindz delivers customized corporate training programs tailored to meet organizational objectives, ensuring skill enhancement and productivity improvement for employees."
        },
        {
            question: "Do you provide a course completion certificate after training?",
            answer: "Yes, Intellimindz provides a course completion certificate after successfully completing the training, which is industry-recognized and adds credibility to your professional skill set."
        }
    ];

    return (
        <div className="faq-section" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <h1 className="title" style={{ fontFamily: "DM Sans, sans-serif" }}>Frequently Asked Questions</h1>
            {faqItems.map((item, index) => (
                <div key={index} className="faq-item" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <p className="faq-question" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.question}</p>
                    <p className="faq-answer" style={{ fontFamily: "DM Sans, sans-serif" }}>{item.answer}</p>
                </div>
            ))}

            {/* Personalized Course Section */}
            <div className="FAQ-course-box" style={{ fontFamily: "DM Sans, sans-serif" }}>
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

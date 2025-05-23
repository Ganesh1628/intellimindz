import React from 'react';
import './questions.css';
import talkingimage from "../../assests/images/talkingimage.png"; // Make sure this path is correct

const FAQ = () => {
    const faqItems = [
        {
            question: "What types of training courses do you offer?",
            answer: "We offer various IT courses including development, testing, data science, and more."
        },
        {
            question: "What are the course fees and are there any payment options available?",
            answer: "Fees vary per course; we offer EMI and installment payment options."
        },
        {
            question: "What is the duration of your courses?",
            answer: "Course durations vary, typically ranging from a few weeks to months."
        },
        {
            question: "Who are the instructors, and what are their qualifications and experience?",
            answer: "Our instructors are experienced industry professionals with strong subject matter expertise."
        },
        {
            question: "Do you provide placement assistance or job support after course completion?",
            answer: "Yes, we offer placement assistance and job support to our students."
        },
        {
            question: "What is the class schedule like? Are there weekday or weekend batches?",
            answer: "We have both weekday and weekend batches available to suit different schedules."
        },
        {
            question: "What is your teaching methodology? Is it more theoretical or practical?",
            answer: "Our methodology is a blend of theoretical concepts with strong practical hands-on training."
        },
        {
            question: "Do you offer online training courses?",
            answer: "Yes, many of our courses are available online for flexible learning."
        },
        {
            question: "What are the prerequisites for enrolling in your courses?",
            answer: "Prerequisites vary depending on the specific course; basic IT knowledge is often helpful."
        }
    ];

    return (
        <div className="faq-wrapper">

            {/* Image Section (On the Left) */}
            <div className="faq-image-container">
                <img src={talkingimage} alt="FAQ Illustration" className="faq-image" />
            </div>

            {/* FAQ Section (On the Right) */}
            <div className="faq-section-home">
                <h1 className="home-title">Frequently Asked Questions</h1>
                {faqItems.map((item, index) => (
                    <div key={index} className="faq-item-home">
                        <p className="faq-question-home">{item.question}</p>
                        <p className="faq-answer-home">{item.answer}</p>
                    </div>
                ))}
            </div>

            {/* The custom-course-section has been removed from here */}

        </div>
    );
};

export default FAQ;
import React, { useState } from 'react';
import './Sapquestions.css';

const SapQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    { 
      id: 1, 
      question: "What is SAP?", 
      answer: "SAP (Systems, Applications, and Products) is a leading enterprise resource planning (ERP) software that helps organizations manage business operations and customer relations." 
    },
    { 
      id: 2, 
      question: "What are the benefits of SAP Business ByDesign?", 
      answer: "SAP Business ByDesign provides cloud-based ERP solutions with benefits including real-time analytics, streamlined processes, scalability, and reduced IT infrastructure costs." 
    },
    { 
      id: 3, 
      question: "What are the features of SAP Event Ticketing?", 
      answer: "SAP Event Ticketing offers features like event registration, ticket sales, attendee management, seating arrangements, and integration with payment gateways." 
    },
    { 
      id: 4, 
      question: "What is SAP Financial Accounting?", 
      answer: "SAP Financial Accounting (FI) module handles all financial transactions including accounts receivable, accounts payable, asset accounting, and financial reporting." 
    },
    { 
      id: 5, 
      question: "Can you customise training and course material according to our company requirements?", 
      answer: "Yes, we offer customized training programs tailored to your specific business processes, industry requirements, and skill levels of your employees." 
    },
    { 
      id: 6, 
      question: "Can The Knowledge Academy deliver corporate/in-house training?", 
      answer: "Absolutely. We provide on-site corporate training at your location, with content customized to your organization's specific needs and business objectives." 
    },
    { 
      id: 7, 
      question: "What are the key features of SAP Business ByDesign?", 
      answer: "Key features include financial management, customer relationship management, project management, supply chain management, and human resources management - all in one integrated cloud solution." 
    },
    { 
      id: 8, 
      question: "I am unable to find the course that I am looking for.", 
      answer: "Please contact our support team with your specific requirements. We can either help you locate the right course or develop custom training to meet your needs." 
    },
    { 
      id: 9, 
      question: "Which delivery methods I can choose for the SAP Training?", 
      answer: "We offer classroom training, online instructor-led training, on-site training, and self-paced e-learning options to suit your preferences and schedule." 
    },
    { 
      id: 10, 
      question: "Can The Knowledge Academy deliver the training to more than 1000 delegates of my company?", 
      answer: "Yes, we have experience delivering large-scale training programs. We can arrange multiple batches, train-the-trainer programs, or blended learning solutions to accommodate your entire team." 
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={item.id} className="faq-item">
              <div className="faq-question-container" onClick={() => toggleAnswer(index)}>
                <div className="faq-question">{item.question}</div>
                <div className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                  {activeIndex === index ? '−' : '+'}
                </div>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SapQuestions;
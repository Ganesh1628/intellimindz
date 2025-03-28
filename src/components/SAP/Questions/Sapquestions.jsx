import React, { useState } from 'react';
import './Sapquestions.css';

const SapQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "What is SAP?",
      answer: "SAP FICO (Financial Accounting and Controlling) is a core module in SAP ERP that helps organizations manage their financial transactions, accounting, reporting, and controlling processes. It consists of two main components: FI (Financial Accounting) for external reporting and CO (Controlling) for internal cost management."
    },
    {
      id: 2,
      question: "What are the benefits of SAP Business ByDesign?",
      answer: "The SAP FI module includes key components such as General Ledger (G/L), Accounts Payable (A/P), Accounts Receivable (A/R), Asset Accounting (AA), Bank Accounting, and Financial Statement Preparation. These components help businesses maintain financial records and comply with accounting standards."
    },
    {
      id: 3,
      question: "What are the features of SAP Event Ticketing?",
      answer: "The SAP CO module includes Cost Element Accounting, Cost Center Accounting, Internal Orders, Profit Center Accounting, and Product Costing. These components help businesses track costs and analyze financial performance at different levels."
    },
    {
      id: 4,
      question: "What is SAP Financial Accounting?",
      answer: "SAP FICO integrates with various SAP modules such as SAP MM (Materials Management) for inventory valuation, SAP SD (Sales and Distribution) for revenue recognition, SAP PP (Production Planning) for cost analysis, and SAP HR (Human Resources) for payroll accounting. This integration ensures seamless data flow across departments."
    },
    {
      id: 5,
      question: "Can you customise training and course material according to our company requirements?",
      answer: "The General Ledger (G/L) is the central repository for all financial transactions in SAP FI. It records all business transactions in real-time, ensuring accurate financial reporting and compliance with legal requirements. The G/L is structured with multiple accounts based on a company’s Chart of Accounts."
    },
    {
      id: 6,
      question: "Can The Knowledge Academy deliver corporate/in-house training?",
      answer: "A Cost Center in SAP CO represents a unit within an organization where costs are incurred, such as departments or production units. It is used for cost tracking and internal reporting. A Profit Center, on the other hand, is a unit responsible for revenue generation and profitability analysis, helping businesses evaluate performance at different operational levels."
    },
    {
      id: 7,
      question: "What are the key features of SAP Business ByDesign?",
      answer: "The Chart of Accounts (CoA) is a structured list of all General Ledger accounts used by a company. It defines the account structure for financial reporting and ensures consistency in accounting processes. A company can have multiple CoAs, including Operating, Group, and Country-Specific Charts of Accounts."
    },
    {
      id: 8,
      question: "I am unable to find the course that I am looking for.",
      answer: "SAP FICO helps generate key financial statements such as the Balance Sheet, Profit and Loss Statement, Cash Flow Statement, and Trial Balance. These reports provide insights into a company's financial health and support decision-making."
    },
    {
      id: 9,
      question: "Which delivery methods I can choose for the SAP Training?",
      answer: "Document Splitting allows organizations to split financial transactions based on different dimensions, such as business areas or segments. It ensures accurate financial reporting at granular levels and enhances compliance with legal and regulatory requirements."
    },
    {
      id: 10,
      question: "Can The Knowledge Academy deliver the training to more than 1000 delegates of my company?",
      answer: "SAP FICO offers various career opportunities, including roles like SAP FICO Consultant, Financial Analyst, SAP FICO End User, and SAP Finance Manager. Professionals with expertise in SAP FICO can work in industries such as manufacturing, banking, healthcare, and retail, helping organizations streamline financial processes."
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="faq-title" style={{ fontFamily: "DM Sans, sans-serif" }}>
          Frequently Asked Questions
        </h1>


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
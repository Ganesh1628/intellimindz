import Header from "../components/Header/Header";
import React, {useState} from 'react';
import "../components/SapIM/IMwhyus.css";
import "../components/SapIM/IMsyllabus.css";
import "../components/SapIM/IMtestimonial.css";
import "../components/SapIM/IMcertification.css";
import "../components/SapIM/IMtestimonial.css";
import sapTrainingImage from '../assests/images/saptraining.png';
import { FiChevronDown, FiChevronUp, FiMessageSquare } from 'react-icons/fi';


const WhySapTraining = () => {
    return (
      <div className="why-sap-container">
        <div className="why-sap-header">
          <h1>Why SAP IM Training?</h1>
          <div className="header-decoration"></div>
        </div>
        
        <div className="why-sap-content">
          <div className="why-sap-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Industry Leader</h3>
              <p>SAP IM is the market leader in financial marketing services and most Fortune 300 companies use SAP IM for financial services.</p>
            </div>
          </div>
  
          <div className="why-sap-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Trusted by Top Companies</h3>
              <p>Capgemini, IBM, TCS, CTS, Zoho and many other leading companies use SAP IM as a preferred financial tool.</p>
            </div>
          </div>
  
          <div className="why-sap-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <div className="card-content">
              <h3>Lucrative Salaries</h3>
              <div className="salary-sources">
                <div className="salary-item">
                  <span className="salary-source">payscale.com</span>
                  <span className="salary-amount">₹5,18,000</span>
                </div>
                <div className="salary-item">
                  <span className="salary-source">glassdoor.co.in</span>
                  <span className="salary-amount">₹3,32,070</span>
                </div>
                <div className="salary-item">
                  <span className="salary-source">indeed.com</span>
                  <span className="salary-amount">$25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



  const SapImSyllabus = () => {
    const [activeModule, setActiveModule] = useState(null);
    
    const modules = [
      { 
        id: 1, 
        title: "Management Transactions",
        description: "Learn how to manage inventory transactions including goods receipt, goods issue, and stock transfers."
      },
      { 
        id: 2, 
        title: "Goods Movement of SAP IM",
        description: "Understand the complete process of goods movement within the inventory management system."
      },
      { 
        id: 3, 
        title: "Goods Receipt of SAP IM",
        description: "Master the procedures for receiving goods into inventory from vendors and production."
      },
      { 
        id: 4, 
        title: "Batch Management of SAP IM",
        description: "Learn to track and manage batches of materials with specific characteristics."
      },
      { 
        id: 5, 
        title: "Goods Issues of SAP IM",
        description: "Understand how to process goods issues for production, sales, and other requirements."
      },
      { 
        id: 6, 
        title: "Managing Special Stocks of SAP IM",
        description: "Learn to handle special stock types like consignment, subcontracting, and pipeline materials."
      },
      { 
        id: 7, 
        title: "Stock Determination",
        description: "Master techniques for determining stock levels and automatic stock placement strategies."
      },
      { 
        id: 8, 
        title: "Reservations",
        description: "Understand how to create and manage material reservations for future requirements."
      }
    ];
  
    return (
      <div className="sapim-syllabus">
        <div className="syllabus-header">
          <h1>Syllabus of SAP IM Training in Chennai</h1>
          <div className="header-accent"></div>
          <p className="header-subtext">Hover over each module to see details</p>
        </div>
        
        <div className="sap-syllabus-container">
          <div className="syllabus-grid">
            {modules.map((module) => (
              <div 
                key={module.id} 
                className={`module-card ${activeModule === module.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveModule(module.id)}
                onMouseLeave={() => setActiveModule(null)}
              >
                <div className="module-number">0{module.id}</div>
                <div className="module-content">
                  <h3>Module {module.id}:</h3>
                  <p className="module-title">{module.title}</p>
                  <div className="module-description">
                    <p>{module.description}</p>
                  </div>
                </div>
                <div className="module-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  


  // const SapTrainingProfile = () => {
  //   return (
  //     <div className="sap-training-container">
  //       <div className="sap-training-header">
  //         <h1>SAP IM Training in Chennai <span>Trainer Profile</span></h1>
  //         <div className="header-divider"></div>
  //       </div>
        
  //       <div className="sap-training-content">
  //         <div className="training-image">
  //           <img src={sapTrainingImage} alt="SAP Training" />
  //         </div>
          
  //         <div className="training-details">
  //           <p className="intro-text">
  //             All mentors at IntelliMindz have years of important industry experience, and they have been effectively functioning as advisors in a similar space, which has made them topic specialists.
  //           </p>
            
  //           <ul className="benefits-list">
  //             <li><span className="icon">✓</span> Training from basics to advanced SAP IM concepts</li>
  //             <li><span className="icon">✓</span> Real-time experienced professionals (8+ years)</li>
  //             <li><span className="icon">✓</span> 500+ students successfully trained and placed</li>
  //             <li><span className="icon">✓</span> Resume preparation and project guidance</li>
  //             <li><span className="icon">✓</span> Project overview and real-time scenario sessions</li>
  //             <li><span className="icon">✓</span> Individual attention with customized sessions</li>
  //             <li><span className="icon">✓</span> Mock interviews and technology FAQs</li>
  //           </ul>
            
  //           <button className="enquiry-button">Enquire Now</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };



  const SapImTraining = () => {
    const [hoveredFeature, setHoveredFeature] = useState(null);

    const features = [
        {
            title: 'Working on LIVE Project',
            description: 'You will get an opportunity to work on real-time projects.',
        },
        {
            title: 'Flexible Timing',
            description: 'At IntellMindz you will get Ultimate Flexibility. You can pick the schedule whatever suits you the best.',
        },
        {
            title: 'Affordable Fees',
            description: 'In our training center fees are not only affordable, but you can pay the fees in installment.',
        },
        {
            title: 'Job Opportunities after completing this course',
            description: 'IT Sectors in India have now witnessed a steady adoption of financial which has automatically raised the demand for skilled and certified SAP IM professionals. So after completing our course you will be having a number of career opportunities.',
        },
    ];

    return (
        <div className="sap-certi-training-container">
            <div className="training-overlay">
                <div className="training-content">
                    <h1 className="training-title">SAP IM Certification Training in Chennai</h1>

                    <p className="training-description">
                        SAP IM Course Certification is one of the professional credentials which will demonstrate that the candidate has gained in-depth knowledge in SAP IM by using all its applications and platforms. With the real-time experience in projects provided by IntellMindz SAP IM Course, Our certification states that the student has acquired all the necessary skills to work as an SAP IM. Having our SAP IM Course certificate along with your resume will help you in prioritizing your resume at the of the interview, and also it will open the door to a wide range of opportunities.
                    </p>

                    <p className="training-highlight">
                        <strong>SAP IM Training in Chennai</strong> at IntellMindz hones the necessary basics and skill sets that are required for an SAP IM professional under the support and guidance of our real-time experienced professionals. <strong>SAP IM Training in Chennai</strong> at IntellMindz is provided by experienced professionals who are having over 8+ years of experience in the SAP IM Platform. Our trainers will up-skill your knowledge with the relevant real-time projects in the industry.
                    </p>

                    <p className="training-description">
                        Apart from IntellMindz SAP IM Course Completion Certification, Our SAP IM trainers will guide and support you to learn further by enrolling in advanced courses in SAP IM to clear Global SAP IM Certification exams.
                    </p>

                    <div className="features-container">
                        {features.map((feature, index) => (
                            <div
                                className="feature-item"
                                key={index}
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <h3>{feature.title} <span className="arrow">→</span></h3>
                                {hoveredFeature === index && <p>{feature.description}</p>}
                            </div>
                        ))}
                    </div>

                    <button className="read-more-btn">READ MORE</button>
                </div>
            </div>
        </div>
    );
};




  // const FAQ = () => {
  //   return (
  //     <div className="faq-container">
  //       {/* Left Side - Image */}
  //       <div className="faq-image">
  //         <img src={sapTrainingImage} alt="FAQ Illustration" />
  //       </div>
  
  //       {/* Right Side - FAQ Content */}
  //       <div className="faq-content">
  //         <h2 className="faq-title">Frequently asked questions</h2>
  //         <p className="faq-description">
  //           Questions you might ask about our products and services.
  //         </p>
  
  //         <div className="faq-list">
  //           <div className="faq-item">
  //             <details>
  //               <summary>How long can I enjoy free trial service?</summary>
  //               <p>Lorem ipsum dolor sit amet consectetur. Pharetra purus et dictum ultricies aliquet leo in accumsan mauris. Fringilla enim aliquet ultrices qui amet nibh at. Non amet leo elementum id neque velit eleifend augue convallis.</p>
  //             </details>
  //           </div>
  
  //           <div className="faq-item">
  //             <details>
  //               <summary>Do I need to add any Credit Card to get free trial service?</summary>
  //               <p>
  //                 <strong>What is the package cancellation process?</strong>
  //                 <ul>
  //                   <li>Is there any hidden charge beside the main price?</li>
  //                   <li>Is there any extra fee to pay for outside US citizen?</li>
  //                 </ul>
  //               </p>
  //             </details>
  //           </div>
  //         </div>
  
  //         {/* Footer Message */}
  //         <div className="faq-footer">
  //           <h4>Still have questions?</h4>
  //           <p>Can't find the answer you're looking for? Please contact with our customer service.</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };


  const FAQ = () => {
    return (
      <div className="faq-container">
        {/* <div className="faq-content"> */}
          {/* Right Side - FAQ */}
          <div className="faq-text">
            <div className="faq-header">
              <h1>Frequently Asked Questions</h1>
              <p className="faq-subtitle">
                We're here to help with all your questions and answers in one place.
              </p>
            </div>
  
            <div className="faq-questions">
              <div className="question">
                <h3>Is there a free trial available?</h3>
                <p>
                  Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                </p>
              </div>
  
              <div className="question">
                <h3>Can I change my plan later?</h3>
                <p>Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
              </div>
            </div>
          </div>
          
          {/* Left Side - Image */}
          <div className="faq-image">
            <img src={sapTrainingImage} alt="Study Material" />
          </div>
        </div>
      // </div>
    );
  };


  // const SearchBar = () => {
  //   const [searchQuery, setSearchQuery] = useState('');
  
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     // Add your search logic here
  //     console.log('Searching for:', searchQuery);
  //   };
  
  //   return (
  //     <div className="search-container">
  //       <form onSubmit={handleSearch} className="search-form">
  //         <div className="search-input-wrapper">
  //           <input
  //             type="text"
  //             value={searchQuery}
  //             onChange={(e) => setSearchQuery(e.target.value)}
  //             placeholder="Enter keyword to search for courses, certifications or training paths"
  //             className="search-input"
  //           />
  //           <button type="submit" className="search-button">
  //             <svg className="search-icon" viewBox="0 0 24 24">
  //               <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  //             </svg>
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // };





const Sapim = () => {
    return(
        <>
        <Onlineheader/>
        <WhySapTraining/>
        <SapImSyllabus/>
        {/* <SearchBar/> */}
        {/* <SapTrainingProfile/> */}
        <FAQ/>
        <SapImTraining/>
        </>
    )
}

export default Sapim;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};

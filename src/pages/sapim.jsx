import Header from "../components/Header/Header";
import React, {useState} from 'react';
import "../components/SapIM/IMwhyus.css";
import "../components/SapIM/IMsyllabus.css";
import "../components/SapIM/IMsearch.css";
import "../components/SapIM/IMprofiletraining.css";
import "../components/SapIM/IMtestimonial.css";
import sapTrainingImage from '../assests/images/saptraining.png'; // Adjust path as needed
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
  


  const SapTrainingProfile = () => {
    return (
      <div className="sap-training-container">
        <div className="sap-training-header">
          <h1>SAP IM Training in Chennai <span>Trainer Profile</span></h1>
          <div className="header-divider"></div>
        </div>
        
        <div className="sap-training-content">
          <div className="training-image">
            <img src={sapTrainingImage} alt="SAP Training" />
          </div>
          
          <div className="training-details">
            <p className="intro-text">
              All mentors at IntelliMindz have years of important industry experience, and they have been effectively functioning as advisors in a similar space, which has made them topic specialists.
            </p>
            
            <ul className="benefits-list">
              <li><span className="icon">✓</span> Training from basics to advanced SAP IM concepts</li>
              <li><span className="icon">✓</span> Real-time experienced professionals (8+ years)</li>
              <li><span className="icon">✓</span> 500+ students successfully trained and placed</li>
              <li><span className="icon">✓</span> Resume preparation and project guidance</li>
              <li><span className="icon">✓</span> Project overview and real-time scenario sessions</li>
              <li><span className="icon">✓</span> Individual attention with customized sessions</li>
              <li><span className="icon">✓</span> Mock interviews and technology FAQs</li>
            </ul>
            
            <button className="enquiry-button">Enquire Now</button>
          </div>
        </div>
      </div>
    );
  };




  const Testimonials = () => {
    return (
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h1>What People Say</h1>
        </div>
        
        <div className="testimonial-card">
          <div className="profile-image-container">
            <img src={sapTrainingImage} alt="Molly Robinson" className="profile-image" />
          </div>
          
          <div className="testimonial-content">
            <p className="testimonial-intro">
              One of the major projects we worked on together was to develop a series of competitor comparison webpages.
            </p>
            <blockquote className="testimonial-text">
              Oleks was always ready with creative UI ideas and solutions, while implementing designs to perfection. The pages increased both paid and organic traffic and were optimized to convert visitors to leads. He keeps an open mind and responds well to feedback while sharing his own ideas.
            </blockquote>
            
            <div className="testimonial-author">
              <h3>Molly Robinson</h3>
              <p className="author-title">Director of Marketing & Communications</p>
            </div>
          </div>
        </div>
      </div>
    );
  };



  const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Add your search logic here
      console.log('Searching for:', searchQuery);
    };
  
    return (
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter keyword to search for courses, certifications or training paths"
              className="search-input"
            />
            <button type="submit" className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    );
  };





const Sapim = () => {
    return(
        <>
        <Onlineheader/>
        <WhySapTraining/>
        <SapImSyllabus/>
        <SearchBar/>
        <SapTrainingProfile/>
        <Testimonials/>
        </>
    )
}

export default Sapim;

// Header Section
const Onlineheader = () => {
    return <div className="online_container"></div>;
};

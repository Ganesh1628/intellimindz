import React from 'react';
import './Info.css';

const Info = () => {
  // Function to scroll to the top when a card is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sap-fico-container">
      <h1 className="main-heading">SAP FICO Training in Other Locations</h1>

      <div className="training-locations">
        <button className="location-card" onClick={scrollToTop}>
          <h2>SAP FICO Training in Bangalore</h2>
        </button>
        <button className="location-card" onClick={scrollToTop}>
          <h2>SAP FICO Training in Coimbatore</h2>
        </button>
        <button className="location-card" onClick={scrollToTop}>
          <h2>SAP FICO Training in Chennai</h2>
        </button>
        <button className="location-card" onClick={scrollToTop}>
          <h2>SAP FICO Online Training</h2>
        </button>
      </div>
    </div>
  );
};

export default Info;

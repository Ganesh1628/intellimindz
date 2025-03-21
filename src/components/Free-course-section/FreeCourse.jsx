import React from 'react';
import './FreeCourse.css';
import theoryIcon from './assests/images/theory.png';
import projectWorkIcon from './assests/images/projectwork.png';
import assignmentsIcon from './assests/images/assignments.png';
import certificationIcon from './assests/images/certifications.png';

function TrainingApproach() {
  return (
    <div className="training-approach">
      <h2>Our Training Approach</h2>
      <div className="approach-items">
        <div className="approach-item">
          <img src={theoryIcon} alt="Theory" className="icon" />
          <p>Theory</p>
        </div>
        <div className="approach-item">
          <img src={projectWorkIcon} alt="Project Work" className="icon" />
          <p>Project Work</p>
        </div>
        <div className="approach-item">
          <img src={assignmentsIcon} alt="Assignments" className="icon" />
          <p>Assignments</p>
        </div>
        <div className="approach-item">
          <img src={certificationIcon} alt="Certification" className="icon" />
          <p>Certification</p>
        </div>
      </div>
    </div>
  );
}

export default TrainingApproach;
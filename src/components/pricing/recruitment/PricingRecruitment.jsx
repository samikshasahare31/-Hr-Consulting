import React from 'react';
import './PricingRecruitment.css'; 
import { useNavigate } from 'react-router-dom';


const PricingRecruitment = () => {
  const navigate = useNavigate(); 
  
  const handleUploadCVClick = () => {
    navigate('/applyTalent'); 
  };

  
  return (
    <section>
      {/* Recruitment Services Pricing Section */}

      <div className="pricing-container">
        <div className="pricing-content">
          <h3 className="pricing">PRICING</h3>
          <h2 className="pricing-title">Transparent Recruitment Services Pricing</h2>
          <p className="pricing-description">Our pricing structure is designed to provide value, charging between 15-20% of the annual compensation, which includes bonuses and incentives (excluding ESOP). This ensures you only pay for the quality talent we deliver.</p>
          <div className='button'>
            <button className="get-started-button">Get Started</button>
            <button className="upload-cv-button" onClick={handleUploadCVClick}>Upload CV</button>
          </div>
        </div>
        <div className="pricing-details">
          <h3>Comprehensive Recruitment Services Included in Our Package:</h3>
          <ul>
            <li>Candidate Screening</li>
            <li>CV Refinement</li>
            <li>Background Verification</li>
            <li>Ongoing Recruiter Support</li>
          </ul>
          <p className="annual-compensation-note">1) The annual compensation package encompasses the 13-month THR (Religious Festive Allowance), ensuring a comprehensive financial benefit for employees.</p>
          <p className="annual-compensation-note">2) Our goal is to simplify your recruitment process, offering clarity and confidence in our pricing structure while delivering exceptional talent solutions tailored to your needs.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingRecruitment;
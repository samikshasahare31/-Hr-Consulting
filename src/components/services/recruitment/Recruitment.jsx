import React from 'react';
import './Recruitment.css'; 
import { useNavigate } from 'react-router-dom';

const Recruitment = () => {
  const navigate = useNavigate(); 

  // Button Click Handlers
  const handleApplyTalentClick = () => {
    navigate('/applyTalent'); 
  };

  const handleUploadCVClick = () => {
    navigate('/applyTalent'); 
  };
  
  return (
    <section>
      {/* Top Section - Hiring Top Talent */}
      <div className="recruitment-container">
        <div className="recruitment-content">
          <h3 className="recruitment-heading">Find Your Perfect Match</h3>
          <h1 className="recruitment-title">Hire India’s Best Talent</h1>
          <p className="recruitment-description">
          Take advantage of India’s diverse talent pool without the burden of setting up a local entity. 
          Our streamlined EOR services allow you to onboard top professionals in India quickly and efficiently, 
          ensuring compliance with all local laws while you focus on driving business growth.
          </p>
          <div className="recruitment-buttons">
            <button className="schedule-button">Schedule Now</button>
            <button className="apply-button" onClick={handleApplyTalentClick}>Apply As Talent</button>          
          </div>
        </div>
        <div className="recruitment-image">
          <img src="https://recruitindo.com/wp-content/uploads/2023/12/hiring.png" alt="Hiring top talent" />
        </div>
      </div>

      {/* Recruitment Procedure Section */}
      <div className="procedure-container">
        <h2 className="procedure-title">Recruitment Procedure</h2>
        <div className="procedure-steps">
          {/* Step 1 */}
          <div className="step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Tap into Our Extensive Network</h3>
              <p>We leverage our vast network of industry contacts and connections to identify exceptional candidates tailored to your needs.</p>
              </div>
          </div>

          {/* Step 2 */}
          <div className="step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Thorough Candidate Evaluation</h3>
              <p>Each candidate undergoes a comprehensive evaluation process to match their skills and experiences with your specific requirements.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Cultural Fit Assessment</h3>
              <p>We conduct in-depth interviews to assess candidates not only for their skills but also for their alignment with your company culture.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="step">
            <div className="step-icon">4</div>
            <div className="step-content">
              <h3>Client Collaboration</h3>
              <p>We present the top candidates to you, facilitating a collaborative interview process to ensure the best fit.</p>              </div>
          </div>

          {/* Step 5 */}
          <div className="step">
            <div className="step-icon">5</div>
            <div className="step-content">
              <h3>Offer Management</h3>
              <p>Once you've selected your preferred candidates, we assist in extending job offers and managing negotiations to secure top talent.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="step">
            <div className="step-icon">6</div>
            <div className="step-content">
              <h3>Streamlined Onboarding</h3>
              <p>Our dedicated team ensures that new hires have a seamless onboarding experience, helping them integrate quickly and effectively.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recruitment Services Pricing Section */}

      <div className="pricing-container">
        <div className="pricing-content">
          <h3 className="pricing">OUR SERVICES</h3>
          <h2 className="pricing-title">Exclusive Recruitment Plans</h2>
          <p className="pricing-description">We offer tailored recruitment solutions to match your company's specific needs. Our pricing ranges from 15-20% of annual compensation, covering bonuses but excluding equity packages.</p>
          <p className="pricing-description">By partnering with us, you ensure access to top-tier candidates, seamless hiring processes, and ongoing support from our expert recruiters.</p>
            <button className="get-started-button">Get Started</button>
            <button className="upload-cv-button" onClick={handleUploadCVClick}>Upload CV</button>
        </div>
        <div className="pricing-details">
          <h3>What’s Included in Our Packages:</h3>
          <ul>
            <li>Personalized Candidate Screening</li>
            <li>Comprehensive CV Review</li>
            <li>In-depth Background and Reference Checks</li>
            <li>Ongoing Recruiter Assistance</li>
            <li>Post-hire Support and Consultation</li>
          </ul>
          <p className="annual-compensation-note">1) Note: Annual compensation includes base salary, bonuses, and the 13-month THR (Religious Festive Allowance) as applicable.</p>
          <p className="annual-compensation-note">Additional benefits, such as healthcare, retirement contributions, and other allowances, are not included in the stated percentage but can be negotiated separately. This ensures flexibility to meet both employer and candidate expectations.</p>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PricingManagedServices() {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleMoreResourcesClick = () => {
    navigate("/resources"); // Navigate to the resources page
  };

  return (
    <div>
      <section className="quote-section">
        <div className="quote-content">
          <h3>Pricing</h3>
          <h2 className="quote-title">
            Reach out for a quote for Managed Services
          </h2>
          <button className="quote-btn">Schedule Now →</button>
        </div>
        <div>
          <p className="quote-description">
            We need to deeply understand what you are trying to accomplish
            before sharing pricing. Please reach out to us to schedule time to
            connect, so we can better understand your needs. Once we have been
            able to scope your project, we will issue pricing within 48 hours.
          </p>
        </div>
      </section>

      {/* Resources and Articles Section */}
      <div className="resources-articles-section">
        <h3 className="resources-heading">Resources</h3>
        <h2 className="resources-title">Explore Our Insights & Guides</h2>
        <div className="articles-container">
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/financial-benefits-1024x688.jpeg"
              alt="Talent Acquisition Guide"
              className="article-image"
            />
            <h3 className="article-title">
              Maximizing Talent Acquisition in Indonesia: A Comprehensive Guide
            </h3>
            <p className="article-description">
              Learn key strategies for acquiring top talent in Indonesia, from
              recruitment tips to navigating local hiring practices.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/Peo-tech-company-1024x683.jpeg"
              alt="HR Compliance"
              className="article-image"
            />
            <h3 className="article-title">
              Ensuring HR Compliance in Indonesia: What You Need to Know
            </h3>
            <p className="article-description">
              Discover the essential steps businesses must take to remain
              compliant with Indonesia's labor laws and regulations.
            </p>
          </div>
          <div className="article">
            <img
              src="https://recruitindo.com/wp-content/uploads/2024/01/peo-provider-1024x683.jpeg"
              alt="Hiring in Southeast Asia"
              className="article-image"
            />
            <h3 className="article-title">
              The Future of Hiring in Southeast Asia: Trends and Predictions
            </h3>
            <p className="article-description">
              Stay ahead of the curve with insights into the future trends
              shaping the hiring landscape across Southeast Asia.
            </p>
          </div>
        </div>

        <div className="more-resources-button-container">
          <button
            className="more-resources-button"
            onClick={handleMoreResourcesClick}
          >
            More Resources
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingManagedServices;
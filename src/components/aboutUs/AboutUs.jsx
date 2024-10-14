import React from 'react';
import './AboutUs.css'; // Add your styles here

const AboutUs = () => {
  return (
    <div>
      {/* First Section */}
      <section className="about-us-section">
        <div className="about-us-content">
          <h2>About Us</h2>
          <h1>Empowering Talent and Business to Unlock Indonesia's Economic Potential</h1>
          <p>
            Recruitindo offers hassle-free hiring, PEO, and HR services in Indonesia, helping you
            grow your business and connect with local talent easily. Trust us to navigate the
            complexities of Indonesian employment for you.
          </p>
          <button className="schedule-button">
            Schedule Now →
          </button>
        </div>
        <div className="about-us-graphics">
          <div className="map-container">
            {/* Placeholder for the map of Indonesia */}
            <img src="/path/to/map-image.png" alt="Indonesia map" className="map-image"/>
          </div>
          <div className="enrollment-badge">
            Enrollment ✔️
          </div>
          <div className="team-member-card">
            <img src="/path/to/product-manager-image.png" alt="Product Manager" className="team-member-image" />
            <div className="team-member-info">
              <p className="team-member-title">Product Manager</p>
              <p className="team-member-location">Semarang, ID</p>
              <button className="contact-button">Get in Touch</button>
            </div>
          </div>
          <div className="hire-team-member">
            <p>Hire Team Member</p>
            <ul>
              <li>Theresa Webb</li>
              <li>Eleanor Pena</li>
              <li>Kristin Watson</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Second Section with Background Color */}
      <section className="about-us-section bg-colored">
        <div className="about-us-content">
          <h2>Our Commitment</h2>
          <h1>Building a Bridge between Global Talent and Local Opportunities</h1>
          <p>
            We believe in connecting the right talent with the right business opportunities to drive growth in Indonesia.
            Our team is dedicated to supporting businesses and professionals alike.
          </p>
          <button className="schedule-button">
            Learn More →
          </button>
        </div>
        <div className="about-us-graphics">
          <div className="map-container">
            {/* Another image placeholder */}
            <img src="/path/to/another-map-image.png" alt="Map showing global connections" className="map-image"/>
          </div>
          <div className="team-member-card">
            <img src="/path/to/team-member-image2.png" alt="Team Member" className="team-member-image" />
            <div className="team-member-info">
              <p className="team-member-title">Regional Manager</p>
              <p className="team-member-location">Jakarta, ID</p>
              <button className="contact-button">Connect Now</button>
            </div>
          </div>
          <div className="hire-team-member">
            <p>Team Members</p>
            <ul>
              <li>John Doe</li>
              <li>Jane Smith</li>
              <li>Adam Brown</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

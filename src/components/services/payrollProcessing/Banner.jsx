import React, { useState } from "react";
import "./Banner.css";

export default function Banner() {
  // पॉपअप के लिए state बनाएं
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    company: "",
    message: "",
  });

  // जब बटन क्लिक हो, पॉपअप ओपन करें
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  // पॉपअप को बंद करने के लिए
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="payroll-landing">
      <div className="content-section">
        <h2 className="subtitle">PAYROLL SERVICES</h2>
        <h1 className="title">Payroll Services You Can Run in Your Sleep</h1>
        <p className="description">
          Run payroll in Indonesia with one platform to streamline international
          operations and eliminate the ongoing admin of local compliance, taxes,
          benefits, and more.
        </p>
        <button className="schedule-button" onClick={handlePopupOpen}>
          Schedule Now
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="image-section">
        <img
          src="https://recruitindo.com/wp-content/uploads/2023/12/payroll-process.png"
          alt="Payroll Process"
          className="main-image"
        />
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={handlePopupClose}>
              ×
            </button>
            <div className="form-container">
              <form onSubmit={handleSubmit} className="form-section">
                <div className="flex gap-4">
                  <div className="w-1/2 input-group">
                    <label htmlFor="firstName" className="required-field">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="w-1/2 input-group">
                    <label htmlFor="lastName" className="required-field">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="required-field">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/3 input-group">
                    <label htmlFor="countryCode" className="required-field">
                      Country Code
                    </label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                      className="country-code-select"
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+62">+62 (ID)</option>
                    </select>
                  </div>
                  <div className="w-2/3 input-group">
                    <label htmlFor="phone" className="required-field">
                      Personal Telephone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="personal-telephone-input"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="company" className="required-field">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/4 input-group">
                  <label htmlFor="servides" className="required-field">
                    Reason to inquiry{" "}
                  </label>
                  <select
                    id="servides"
                    name="servides"
                    value={formData.servides}
                    onChange={handleChange}
                    required
                    className="country-code-select"
                  >
                    <option>PEO & EOR</option>
                    <option>Recruitement</option>
                    <option>HR Consulting</option>
                    <option>Payroll Payment</option>
                    <option>Managed Services</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

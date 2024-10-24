import React, { useState } from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();

  const contactUsPage = () => {
    navigate("/contactUs");
  };

  return (
    <div className="payroll-landing">
      <div className="image-section">
        <img
          src="https://recruitindo.com/wp-content/uploads/2023/12/payroll-process.png"
          alt="Payroll Process"
          className="main-image"
        />
      </div>
      <div className="content-section">
        <h2>PAYROLL SERVICES</h2>
        <h1 className="title">Payroll Services You Can Run in Your Sleep</h1>
        <p className="description">
          Run payroll in Indonesia with one platform to streamline international
          operations and eliminate the ongoing admin of local compliance, taxes,
          benefits, and more.
        </p>
        <button className="schedule-button" onClick={contactUsPage}>
          Schedule Now
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

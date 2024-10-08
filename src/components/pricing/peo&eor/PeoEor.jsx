import React from "react";
import "./PeoEor.css";
import { peoPricing } from "../../../assets/data/peoPricing";

function PeoEor() {
  return (
    <div className="peo-container">
      {/* Main Section */}
      <div className="peo-pricing">
        <h2>PRICING</h2>
        <h1>PEO / EOR Price Sheet</h1>
        <div className="peo-pricing-cards">
          {peoPricing.map((data) => (
            <div key={data.id} className="peo-pricing-card">
              <h3>{data.name}</h3>
              <div className="peo-pricing-card-price">
                <h5>Starting from</h5>
                <h3>{data.price}</h3>
                <h5>per employee per month</h5>
              </div>
              <hr />
              <h4>Includes</h4>
              <ul>
                {data.include.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="peo-pricing-btn">Let’s Talk</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PeoEor;

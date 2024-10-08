import React from "react";
import "./PeoEor.css";
import { peoSolutions } from "../../../assets/data/peoSolution";
import { peoBenefits } from "../../../assets/data/peoBenefit";
import rightArrow from "../../../assets/images/right-arrow.svg";
import PricingPeoEor from "../../pricing/peo&eor/PeoEor";

function PeoEor() {
  return (
    <div className="peo-container">
      {/* Main Section */}
      <div className="peo-main">
        <div className="peo-main-image">
          <img
            src="https://recruitindo.com/wp-content/uploads/2023/12/hire-in-indonesia-without-setting-up-a-company.png"
            alt="Peo & Eor main image"
          />
        </div>
        <div className="peo-main-contant">
          <h2>PEO & EOR</h2>
          <h1>Engage Workforce in India Without Company Registration</h1>
          <p>
            Skip the complexities of launching your own business just to hire
            local talent. With our PEO solution, you can begin immediately!
          </p>
          <button className="peo-main-btn">Let’s Talk</button>
        </div>
      </div>

      {/* Solution Section */}
      <div className="peo-solution">
        <h2>PEO & EOR</h2>
        <h1>Advantages of Choosing Recruitindo's PEO/EOR Solutions</h1>
        <div className="peo-solution-cards">
          {peoSolutions.map((data) => (
            <div key={data.id} className="peo-solution-card">
              <img src={data.image} alt="" />
              <h2>{data.name}</h2>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="peo-benefit">
        <h2>PEO & EOR</h2>
        <h1>Benefits of Using Recruitindo's PEO / EOR Service</h1>
        <div className="peo-benefit-cards">
          {peoBenefits.map((data) => (
            <div key={data.id} className="peo-benefit-card">
              {data.id != peoBenefits.length ? (
                <>
                  <img src={data.image} alt="" />
                  <h2>{data.name}</h2>
                  <p>{data.desc}</p>
                </>
              ) : (
                <>
                  <div className="peo-benefit-unique">
                    <h2>{data.name}</h2>
                    <p>{data.desc}</p>
                    <img src={rightArrow} alt="Right Arrow image" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing PEO EOR */}
      <PricingPeoEor />
    </div>
  );
}

export default PeoEor;

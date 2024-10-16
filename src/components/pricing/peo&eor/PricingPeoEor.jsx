import React from "react";
import "./PeoEor.css";
import { peoPricing } from "../../../assets/data/peoPricing";
import { useTranslation } from "react-i18next";

function PricingPeoEor() {
  const { t } = useTranslation();
  const peoResources = [
    {
      id: 0,
      img: "https://recruitindo.com/wp-content/uploads/2023/12/Job-Vacancies-1024x576.jpg",
      article: "Articles",
      resources: " ",
      title:
        "Using PEO/EOR Services to Manage Remote Teams in India: Crucial Tools and Strategies",
      text: "Overview The capacity to efficiently lead distant teams in the era of globalization and digital transformation.",
    },
    {
      id: 1,
      img: "https://recruitindo.com/wp-content/uploads/2024/01/cytonn-photography-GJao3ZTX9gU-unsplash-1024x684.jpg",
      article: "Articles",
      resources: " ",
      title:
        "A Comprehensive Examination of Important Provisions: An In-Depth Look at Indian Labor Laws",
      text: "The difficulties of finding work in India, which is becoming a thriving economic hub in Southeast Asia.",
    },
    {
      id: 2,
      img: "https://recruitindo.com/wp-content/uploads/2024/01/impact-1024x683.jpeg",
      article: "Articles",
      resources: " ",
      title: "The Effect of Executive Placements on Indian Business Growth",
      text: "A thriving economy with enormous potential, India has emerged as a major location for corporate growth. As many.",
    },
  ];

  return (
    <div className="peo-container">
      {/* Main Section */}
      <div className="peo-pricing">
        <h2>{t("PRICING")}</h2>
        <h1>{t("PEO / EOR Price Sheet")}</h1>
        <div className="peo-pricing-cards">
          {peoPricing.map((data) => (
            <div key={data.id} className="peo-pricing-card">
              <h3>{t(data.name)}</h3>
              <div className="peo-pricing-card-price">
                <h5>{t("Starting from")}</h5>
                <h3>{data.price}</h3>
                <h5>{t("per employee per month")}</h5>
              </div>
              <hr />
              <h4>{t("Includes")}</h4>
              <ul>
                {data.include.map((item, index) => (
                  <li key={index}>{t(item)}</li>
                ))}
              </ul>
              <button className="peo-pricing-btn">{t("Let’s Talk")}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Articles Section */}
      <div className="peo-resources">
        <h2>{t("Resources")}</h2>
        <h1>{t("Resources and Articles")}</h1>
        <div className="peo-resource-cards">
          {peoResources.map((ele, index) => (
            <>
              <div key={index} className="peo-resource-card">
                <img src={ele.img} alt="" />
                <div className="peo-resource-card-btn">
                  <button className="peo-resource-article-btn">
                    {" "}
                    {t(ele.article)}{" "}
                  </button>
                  {ele.resources === " " ? (
                    " "
                  ) : (
                    <>
                      ,{" "}
                      <button className="peo-resources-btn">
                        {t(ele.resources)}
                      </button>
                    </>
                  )}
                </div>
                <div className="peo-resource-card-text">
                  <h4>{t(ele.title)} </h4>
                  <p> {t(ele.text)}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <button className="peoResource-btn">
          <a href="/resources">{t("Our Resources")}</a>
        </button>
      </div>
    </div>
  );
}

export default PricingPeoEor;

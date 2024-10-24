import React from "react";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { bodyList } from "../../../assets/data/bodyList";
import { ConsultingPrice } from "../../../assets/data/ConsultingPrice";
import "./HrConsulting.css";
import rightArrow from "../../../assets/images/right-arrow.svg";
import { useNavigate } from 'react-router-dom';


function HrConsulting() {
  const { t } = useTranslation(); // Define the t function for translation

  const navigate = useNavigate(); // Hook to access the navigate function

  const handleMoreResourcesClick = () => {
    navigate("/resources"); // Navigate to the resources page
  };

  return (
    <div className="Body">
      <div className="firstPart">
        <div className="left">
          <img
            src="https://recruitindo.com/wp-content/uploads/2023/12/hr-consulting-services-hero.png"
            alt=""
          />
        </div>

        <div className="right">
          <h3>{t("HR CONSULTING")}</h3>
          <h1>{t("HR Consulting for Statutory Compliance")}</h1>
          <p>
            {t(
              "Our HR consulting business is focused on ensuring statutory compliance for your operations in Indonesia. We ensure our clients are 100% compliant from an HR perspective."
            )}
          </p>

          <button>{t("Schedule Now")}</button>
        </div>
      </div>

      {/* // LIST OF SERVICES */}
      <div className="secondPart">
        <div className="threeLine">
          <h2>{t("HR CONSULTING")}</h2>
          <h1>{t("Our Offering")}</h1>
          <h3>{t("List of Services")}</h3>
        </div>

        <div className="card-container">
          {bodyList.map((data) => (
            <div key={data.id} className="card">
              {data.id !== bodyList.length ? (
                <>
                  <div className="logo-container">
                    <img src={data.image} alt="" />
                  </div>
                  <h1>{t(data.heading)}</h1>
                  <p>{t(data.content)}</p>
                </>
              ) : (
                <div className="uniqueCard">
                  <h1>{t(data.heading)}</h1>
                  <p>{t(data.content)}</p>
                  <img src={rightArrow} alt="Right Arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* HR SERVICES FOR BUSINESS */}
      <div className="one-stop">
        <div className="one-stop-text">
          <h2>{t("One-stop HR Service For Your Business")}</h2>
          <p className="one-stop-description">
            {t(
              "HR Consulting now assists you in providing HR Management services starting from PEO services. Our fees are competitively priced, saving you money compared to other service providers. We don’t just offer company incorporation HR services; we are your business partner."
            )}
          </p>

          <ul className="icon-text-list">
            <div className="icon-text-row">
              <div className="icon-text-column">
                <li className="icon-text-list-item">
                  {t("➜ Regulatory and Tax Compliance")}
                </li>
                <li className="icon-text-list-item">
                  {t("➜ Work Permits")}
                </li>
                <li className="icon-text-list-item">
                  {t("➜ Payroll Processing")}
                </li>
              </div>
              <div className="icon-text-column">
                <li className="icon-text-list-item">
                  {t("➜ Talent recruitment")}
                </li>
                <li className="icon-text-list-item">
                  {t("➜ Employee onboarding and off-boarding")}
                </li>
                <li className="icon-text-list-item">
                  {t("➜ HR Consulting Services / Ad-hoc HR Services")}
                </li>
              </div>
            </div>
          </ul>

          <button className="schedule-btn">{t("Schedule Now")} →</button>
        </div>

        <img
          src="/src/assets/images/one-stop-hr-services-for-your-business.jpeg"
          alt={t("HR Service")}
          className="one-stop-image"
        />
      </div>

      {/* HR Consulting Price Sheet */}
      <div className="fourthPart">
        <div className="upperText">
          <h3>{t("PRICING")}</h3>
          <h1>{t("HR Consulting Price Sheet")}</h1>
        </div>

        <div className="priceSheet">
          {ConsultingPrice.map((data, index) => (
            <div key={index} className="priceCard">
              <h1>{t(data.heading)}</h1>
              <div className="innerDiv">
                <h1>{data.Amount}</h1>
                <h3>{t(data.Count)}</h3>
              </div>
              <hr />
              <h2>{t(data.Subheading)}</h2>
              <ul>
                {Array.isArray(data.List) ? (
                  data.List.map((item, idx) => <li key={idx}>{t(item)}</li>)
                ) : (
                  <li>{t("No items available")}</li>
                )}
              </ul>

              <button>{t("Get Started")}</button>
            </div>
          ))}
        </div>
      </div>

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

export default HrConsulting;

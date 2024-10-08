import "./resources.css";
import { cardLists } from "./cardLists";

const Resources = () => {
  return (
    <>
      <section className="resource-header">
        <h1>Resources</h1>
        <p>
          Learn more about employment, best practices in HR, and <br /> relevant
          laws and regulations for HR in Indonesia
        </p>
      </section>

      <section className="resource-section">
        <div className="resource-card-section">
          {cardLists.map((ele, index) => (
            <>
              <div key={index} className="card">
                <img src={ele.img} alt="" />
                <div className="card-btn">
                  <button className="article-btn"> {ele.article} </button>
                  {ele.resources === " " ? (
                    " "
                  ) : (
                    <>
                      ,{" "}
                      <button className="resources-btn">{ele.resources}</button>
                    </>
                  )}
                </div>
                <div className="card-text">
                  <h4>{ele.title} </h4>
                  <p> {ele.text}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Resources;

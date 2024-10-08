import "./resources.css";
import { cardLists } from "../../assets/data/cardLists";
import { useState } from "react";

const Resources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // Number of cards per page

  // Calculate the range of cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardLists.slice(indexOfFirstCard, indexOfLastCard);

  // Function to change the page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(cardLists.length / cardsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          {currentCards.map((ele, index) => (
            <>
              <div key={index} className="card">
                <img src={ele.img} alt="" />
                <div className="card-btn">
                  <button className="article-btn"> {ele.article} </button>
                  {ele.resources === " " ? (
                    " "
                  ) : (
                    <>
                      ,
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
        <div className="pagination">
          {/* Render the Previous button if we're not on the first page */}
          {currentPage > 1 && <button onClick={handlePrevious}>Prev</button>}

          <button onClick={() => handlePageChange(1)}>1</button>
          <button onClick={() => handlePageChange(2)}>2</button>
          <button onClick={() => handlePageChange(3)}>3</button>

          {/* Render the Next button if there are more pages */}
          {currentPage < Math.ceil(cardLists.length / cardsPerPage) && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </section>
    </>
  );
};

export default Resources;

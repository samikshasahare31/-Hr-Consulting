// import React from 'react';
// import './Resources.css';

// interface ArticleProps {
//   image: string;
//   categories: string[];
//   title: string;
//   description: string;
// }

// const ArticleCard: React.FC<ArticleProps> = ({ image, categories, title, description }) => (
//   <div className="article-card">
//     <img src={image} alt={title} className="article-image" />
//     <div className="article-content">
//       <div className="article-categories">
//         {categories.map((category, index) => (
//           <span key={index} className="category-tag">{category}</span>
//         ))}
//       </div>
//       <h3 className="article-title">{title}</h3>
//       <p className="article-description">{description}</p>
//     </div>
//   </div>
// );

// export default function ResourcesAndArticles() {
//   const articles: ArticleProps[] = [
//     {
//       image: "https://recruitindo.com/wp-content/uploads/2023/12/eliminate.png",
//       categories: ["Articles", "Resources"],
//       title: "The Ultimate Guide to Executive Search in Indonesia: Analysing the Financial and Cultural Impact of Wrong Hires",
//       description: "Introduction In today's competitive business landscape, finding and retaining top executive talent is crucial for the"
//     },
//     {
//       image: "https://recruitindo.com/wp-content/uploads/2023/12/recruitindo-by-number-1024x682.jpeg",
//       categories: ["Articles", "Resources"],
//       title: "Managing Remote Teams in Indonesia: Essential Tools and Strategies via PEO/EOR Services",
//       description: "Introduction In the age of globalisation and digital transformation, the ability to manage remote teams effectively"
//     },
//     {
//       image: "https://recruitindo.com/wp-content/uploads/2024/01/search-solution-1024x768.jpeg",
//       categories: ["Articles"],
//       title: "Strategic Executive Search Solutions for Indonesia's Top Businesses",
//       description: "In today's fiercely competitive business landscape, finding the right talent to lead your organisation is more"
//     }
//   ];

//   return (
//     <div className="resources-and-articles">
//       <header>RESOURCES</header>
//       <h1>Resources and Articles</h1>
//       <div className="article-grid">
//         {articles.map((article, index) => (
//           <ArticleCard key={index} {...article} />
//         ))}
//       </div>
//       <button className="more-resources-button">
//         More Resources <span className="arrow">→</span>
//       </button>
//     </div>
//   );
// }

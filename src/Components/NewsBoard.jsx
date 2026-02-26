import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setArticles([]);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container mt-4">
      {/* Title */}
      <h2 className="text-center mb-4 fw-bold">📰 Latest News</h2>

      <div className="row">
        {articles && articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title}
              descripation={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center text-muted">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
import image from '../assets/image.jpg';
import './NewsItems.css'; 

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 mb-4 d-flex">
      <div className="card bg-dark text-light w-100 h-100 shadow">
        <img
          src={src || image}
          onError={(e) => (e.target.src = image)}
          className="card-img-top"
          alt="news"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {title ? title.slice(0, 50) : "No Title Available"}
          </h5>

          <p className="card-text flex-grow-1">
            {description
              ? description.slice(0, 90)
              : "Discover what’s happening around the globe — fast, accurate, and always up to date."}
          </p>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
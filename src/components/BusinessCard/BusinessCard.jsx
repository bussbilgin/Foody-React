import { Link } from "react-router-dom";
import "./BusinessCard.scss";

export default function BusinessCard({ business }) {
  return (
    <div>
      <div className="cardss">
        <Link to={`detail/${business.id}`} className="businesss">
          <figure className="businesss__image">
            <img
              src={
                business.image_url !== ""
                  ? business.image_url
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
              }
              alt="Business"
            />
          </figure>
          <div className="businesss__information">
            <p className="businesss__header">{business.name}</p>
            <div className="businesss__review">
              <p className="businesss__review-rating">{business.rating} Star</p>
              <p className="businesss__review-count">
                {business.review_count} Yorum
              </p>
            </div>
            <div className="businesss__address">
              <p>{business.location.display_address[0]}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

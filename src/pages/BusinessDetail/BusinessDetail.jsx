import "./BusinessDetail.scss";
import { useState, useEffect } from "react";

export default function BusinessDetail({ match }) {
  const [businessDetail, setBusinessDetail] = useState({});

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${match.params.id}?locale=tr_TR`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBusinessDetail(data);
      });
  }, []);
  console.log(businessDetail);

  return (
    <div>
      <section className="container detail">
        <div className="business">
          <figure className="business__image">
            <img src={businessDetail.image_url} alt="Business" />
          </figure>
          <div className="business__information">
            <p className="business__header">{businessDetail.name}</p>
            <div className="business__review">
              <p className="business__review-rating">
                {businessDetail.rating} Star
              </p>
              <p className="business__review-count">
                {businessDetail.review_count} Yorum
              </p>
            </div>
            <div className="business__address">
              <p>{businessDetail.location?.address1}</p>
              <p>{businessDetail.location?.address2}</p>
              <a href={businessDetail.display_phone}>
                {businessDetail.display_phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

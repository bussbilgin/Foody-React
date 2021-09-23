import BusinessCard from "../../components/BusinessCard/BusinessCard.jsx";
import { useState, useEffect } from "react";
import "./SearchResult.scss";

export default function SearchResult(props) {
  const [businessList, setBusinessList] = useState([]);
  const { term, searchLocation } = props.location.state;
  console.log(props);
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${searchLocation}&sort_by=best_match&locale=tr_TR`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setBusinessList(data.businesses);
      });
  });

  console.log(businessList);

  return (
    <>
      <div className="container business-cards-container">
        <h2>Search Results</h2>
        <div className="business-cards">
          <div className="ddd">
            {businessList.map((business) => {
              return <BusinessCard business={business} key={business.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

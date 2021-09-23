import "./SearchBar.scss";
import { Link } from "react-router-dom";

export default function SearchBar({
  term,
  termChange,
  location,
  locationChange,
}) {
  const handleTermChange = (event) => {
    termChange(event.target.value);
  };

  const handleLocationChange = (event) => {
    locationChange(event.target.value);
  };

  return (
    <div>
      <section className="container">
        <form className="search-box">
          <input
            type="text"
            placeholder="What do you want to eat?"
            value={term}
            onChange={handleTermChange}
          />

          <input
            type="text"
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
          <Link
            to={{
              pathname: "/search",
              state: { term, searchLocation: location },
            }}
          >
            <input type="button" value="Search" />
          </Link>
        </form>
      </section>
    </div>
  );
}

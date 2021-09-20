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
    console.log(term);
  };

  const handleLocationChange = (event) => {
    locationChange(event.target.value);
    console.log(location);
  };

  return (
    <div>
      <section class="container">
        <form class="search-box">
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
          <Link to="/search" term={term} location={location}>
            <input type="button" value="Search" />
          </Link>
        </form>
      </section>
    </div>
  );
}

import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Jumbotron from "../../components/Jumbotron/Jumbotron.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import BuyCards from "../../components/BuyCards/BuyCards.jsx";
import Partners from "../../components/Partners/Partners.jsx";

export default function Home({ term, termChange, location, locationChange }) {
  return (
    <div>
      <SearchBar
        term={term}
        termChange={termChange}
        location={location}
        locationChange={locationChange}
      />
      <Jumbotron />
      <Carousel />
      <BuyCards />
      <Partners />
    </div>
  );
}

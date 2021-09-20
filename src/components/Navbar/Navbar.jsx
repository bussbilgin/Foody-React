import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <header>
        <div class="container">
          <Link to="/">
            <h2>FOODY</h2>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <a href="">Foods</a>
            <a href="">Restaurants</a>
            <a href="">Offers</a>
            <a href="">Contact</a>
          </nav>
          <button class="hamburger">
            <div class="bar"></div>
          </button>
        </div>
      </header>

      <nav class="mobile-nav">
        <a href="#">Home</a>
        <a href="">Foods</a>
        <a href="">Restaurants</a>
        <a href="">Offers</a>
        <a href="">Contact</a>
      </nav>
    </>
  );
}

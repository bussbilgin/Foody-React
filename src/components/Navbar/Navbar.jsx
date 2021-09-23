import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <header>
        <div className="container">
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
          <button className="hamburger">
            <div className="bar"></div>
          </button>
        </div>
      </header>

      <nav className="mobile-nav">
        <a href="#">Home</a>
        <a href="">Foods</a>
        <a href="">Restaurants</a>
        <a href="">Offers</a>
        <a href="">Contact</a>
      </nav>
    </>
  );
}

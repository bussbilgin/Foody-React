import { Link } from "react-router-dom";
import "./Jumbotron.scss";

export default function Jumbotron() {
  return (
    <div>
      <div class="feature-card">
        <div class="container">
          <Link to="/search">
            <img
              class="feature__img"
              src="/img-sushi.jpeg"
              alt="Sushi Poster"
            />
            <div class="feature__detail">
              <h3>Sushi</h3>
              <p>Give them your love, not your ideas!</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

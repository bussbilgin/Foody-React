import { Link } from "react-router-dom";
import "./Jumbotron.scss";

export default function Jumbotron() {
  return (
    <div>
      <div className="feature-card">
        <div className="container">
          <Link to="/search">
            <img
              className="feature__img"
              src="/img-sushi.jpeg"
              alt="Sushi Poster"
            />
            <div className="feature__detail">
              <h3>Sushi</h3>
              <p>Give them your love, not your ideas!</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

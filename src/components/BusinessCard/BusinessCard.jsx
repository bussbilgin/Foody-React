import { Link } from "react-router-dom";
import "./BusinessCard.scss";

export default function BusinessCard() {
  return (
    <div>
      <section class="container">
        <div class="business-cards">
          <h2>businesses near you</h2>
          <div class="business-card">
            <Link to="/detail" class="business card">
              <figure class="business__image">
                <img src="/photo.jpg" alt="Item Photo" />
              </figure>
              <div class="business__information">
                <p class="business__header">Eta Bal</p>
                <div class="business__review">
                  <p class="business__review-rating">Star</p>
                  <p class="business__review-count">Yorum</p>
                </div>
                <div class="business__address">
                  <p>Cafer Ağa Mahallesi</p>
                </div>
              </div>
            </Link>
            <Link to="/detail" class="business card">
              <figure class="business__image">
                <img src="/photo.jpg" alt="Item Photo" />
              </figure>
              <div class="business__information">
                <p class="business__header">Eta Bal</p>
                <div class="business__review">
                  <p class="business__review-rating">Star</p>
                  <p class="business__review-count">Yorum</p>
                </div>
                <div class="business__address">
                  <p>Cafer Ağa Mahallesi</p>
                </div>
              </div>
            </Link>
            <Link to="/detail" class="business card">
              <figure class="business__image">
                <img src="/photo.jpg" alt="Item Photo" />
              </figure>
              <div class="business__information">
                <p class="business__header">Eta Bal</p>
                <div class="business__review">
                  <p class="business__review-rating">Star</p>
                  <p class="business__review-count">Yorum</p>
                </div>
                <div class="business__address">
                  <p>Cafer Ağa Mahallesi</p>
                </div>
              </div>
            </Link>
            <Link to="/detail" class="business card">
              <figure class="business__image">
                <img src="/photo.jpg" alt="Item Photo" />
              </figure>
              <div class="business__information">
                <p class="business__header">Eta Bal</p>
                <div class="business__review">
                  <p class="business__review-rating">Star</p>
                  <p class="business__review-count">Yorum</p>
                </div>
                <div class="business__address">
                  <p>Cafer Ağa Mahallesi</p>
                </div>
              </div>
            </Link>
            <Link to="/detail" class="business card">
              <figure class="business__image">
                <img src="/photo.jpg" alt="Item Photo" />
              </figure>
              <div class="business__information">
                <p class="business__header">Eta Bal</p>
                <div class="business__review">
                  <p class="business__review-rating">Star</p>
                  <p class="business__review-count">Yorum</p>
                </div>
                <div class="business__address">
                  <p>Cafer Ağa Mahallesi</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

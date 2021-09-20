import "./BusinessDetail.scss";

export default function BusinessDetail() {
  return (
    <div>
      <section class="container detail">
        <div class="business">
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
              <a href="tel:05655666266">05655666266</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

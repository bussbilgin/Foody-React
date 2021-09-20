import "./BuyCards.scss";

export default function BuyCards() {
  return (
    <div>
      <section class="container x">
        <div class="cardswrapper">
          <div class="cards">
            <figure class="cards__image">
              <img src="/icon-menu.svg" alt="Menu Icon" />
            </figure>
            <div class="cards__text">
              <p>Select your food by pictures from thousands of restaurants!</p>
            </div>
          </div>
          <div class="cards">
            <figure class="cards__image">
              <img src="/icon-offer.svg" alt="Offer Icon" />
            </figure>
            <div class="cards__text">
              <p>Benefit from one of hundreds of promotions each week!</p>
            </div>
          </div>
          <div class="cards">
            <figure class="cards__image">
              <img src="/icon-peyment.svg" alt="Peyment Icon" />
            </figure>
            <div class="cards__text">
              <p>Pay by credit card, at the door, and with meal vouchers!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

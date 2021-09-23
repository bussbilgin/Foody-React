import "./BuyCards.scss";

export default function BuyCards() {
  return (
    <div>
      <section className="container x">
        <div className="cardswrapper">
          <div className="cards">
            <figure className="cards__image">
              <img src="/icon-menu.svg" alt="Menu Icon" />
            </figure>
            <div className="cards__text">
              <p>Select your food by pictures from thousands of restaurants!</p>
            </div>
          </div>
          <div className="cards">
            <figure className="cards__image">
              <img src="/icon-offer.svg" alt="Offer Icon" />
            </figure>
            <div className="cards__text">
              <p>Benefit from one of hundreds of promotions each week!</p>
            </div>
          </div>
          <div className="cards">
            <figure className="cards__image">
              <img src="/icon-peyment.svg" alt="Peyment Icon" />
            </figure>
            <div className="cards__text">
              <p>Pay by credit card, at the door, and with meal vouchers!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import "./Partners.scss";

export default function Partners() {
  return (
    <div>
      <section className="partnerswrapper">
        <div className="container">
          <figure>
            <img src="/bgc-sushi.jpg" alt="Sushi Background" />
          </figure>
          <div className="partnerswrapper-slogan">
            <div className="partnerswrapper__text">
              <h3>Own a restaurant?</h3>
              <p>
                Become a FOODY business partner, grow your business at smaller
                costs, increase customer happiness.
              </p>
            </div>

            <div className="partnerswrapper__link">
              <a href="#" target="_blank">
                <button>Apply Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

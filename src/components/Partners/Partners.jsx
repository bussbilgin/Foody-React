import "./Partners.scss";

export default function Partners() {
  return (
    <div>
      <section class="partnerswrapper">
        <div class="container">
          <figure>
            <img src="/bgc-sushi.jpg" alt="Sushi Background" />
          </figure>
          <div class="partnerswrapper-slogan">
            <div class="partnerswrapper__text">
              <h3>Own a restaurant?</h3>
              <p>
                Become a FOODY business partner, grow your business at smaller
                costs, increase customer happiness.
              </p>
            </div>

            <div class="partnerswrapper__link">
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

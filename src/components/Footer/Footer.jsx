import "./Footer.scss";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="container-top">
            <div className="container__links">
              <div className="footer__title">
                <h5>LINKS</h5>
              </div>
              <div className="footer__items">
                <ul>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container__company">
              <div className="footer__title">
                <h5>COMPANY</h5>
              </div>
              <div className="footer__items">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">User Agreement</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container__community">
              <div className="footer__title">
                <h5>COMMUNITY</h5>
              </div>
              <div className="footer__items">
                <ul>
                  <li>
                    <a href="#">Purpose</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Search</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container__address">
              <div className="footer__title">
                <h5>ADDRESS</h5>
                <a
                  href="https://www.google.com/maps/place/%C3%9Csk%C3%BCdar%2F%C4%B0stanbul/@41.0353568,28.9776898,12z/data=!4m5!3m4!1s0x14cac826d524c9f1:0xc14f7612337b7f38!8m2!3d41.0189417!4d29.0576298"
                  target="_blank"
                >
                  Istanbul, TURKEY
                </a>
              </div>
            </div>
            <div className="container__contact">
              <div className="footer__title">
                <h5>CONTACT</h5>
              </div>
              <div className="contact-text">
                Phone :{" "}
                <a href="tel:+90 (216) 000 00 00">+90 (216) 000 00 00</a>
              </div>
              <div className="contact-text">
                Mail : <a href="mailto:info@foody.com">info@foody.com</a>
              </div>
            </div>
          </div>

          <div className="container-bottom">
            <div className="copyright">COPYRIGHT &copy; 2021</div>
            <div className="social-content">
              <span>FOLLOW US</span>
              <a
                className="social linkedin"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <img src="/icon-linkedin.png" alt="Linkedin Icon" />
              </a>
              <a
                className="social facebook"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img src="/icon-facebook.png" alt="Facbook Icon" />
              </a>
              <a
                className="social twitter"
                href="https://twitter.com/"
                target="_blank"
              >
                <img src="/icon-twitter.png" alt="Twitter Icon" />
              </a>
              <a
                className="social instagram"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img src="/icon-instagram.png" alt="Instagram Icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

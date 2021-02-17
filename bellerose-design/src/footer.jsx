import React from "react";
import "./footer.scss";
import Button from "./button.jsx";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-section">
        WORK WITH US
        <hr></hr>
        <form className="form" id="form">
          <div className="info">
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{ borderStyle: "none" }}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              style={{ borderStyle: "none" }}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              style={{ borderStyle: "none" }}
            />
          </div>
          <div className="message">
            <textarea
              type="textarea"
              name="message"
              placeholder="Message"
              style={{ height: "200px", borderStyle: "none" }}
            />
          </div>
          <div className="submit">
            <Button
              text="SUBMIT"
              style={{
                backgroundColor: "white",
                color: "#7C904A",
                fontWeight: "bolder",
                outlineColor: "#7C904A",
              }}
            />
          </div>
        </form>
      </div>
      {/* <div className="bottom-section">
        <div className="review-section">
          <h3 className="review-title">Reviews</h3>
          <p className="review">
            I had a fantastic experience working with Bellerose Interior Design!
            The team took my ideas and made them look elegant and
            professional.I’d recommend working with them especially for kitchen
            updates. I’ve never enjoyed cooking as much as I do now. The flow of
            my workspace is ideal for large meals and entertaining.
          </p>
          <p className="reviewer-name">- Karen</p>
        </div>
        <div className="sitemap-section">
          <h3 className="sitemap-title">Sitemap</h3>
          <div className="sitemap-list">
            <p>Interior Design</p>
            <p>Service Area</p>
            <p>Featured Products</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="service-contact-section">
          <div className="service-section-title">Service Areas</div>
          <div className="service-areas">Boston · Manchester · Providence</div>
          <div className="contact-section">
            <div className="contact-title">Contact</div>
            <div className="contact-info">contact@bellerosedesign.com</div>
          </div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2020 Bellerose Interior Design. All Rights Reserved. | Website +
          Local SEO by Kim Duclos
        </p>
        <div className="social-icons">
          <img
            src="/images/instagram-icon.png"
            alt="Instragram icon"
            className="icon instagram"
          />
          <img
            src="/images/facebook-icon.png"
            alt="Facebook icon"
            className="icon facebook"
          />
          <img
            src="/images/twitter-icon.png"
            alt="Twitter icon"
            className="icon twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

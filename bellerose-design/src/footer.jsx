import React from "react";
import "./footer.scss";
import Button from "./button.jsx";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-section">
        WORK WITH US
        <hr></hr>
        <form className="form">
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
            <input
              type="text"
              name="message"
              placeholder="Message"
              style={{ height: "200px", borderStyle: "none", texAlign:"top" }}
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
      <div className="bottom-section"></div>
    </div>
  );
};

export default Footer;

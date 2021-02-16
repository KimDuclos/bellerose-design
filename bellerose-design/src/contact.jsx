import React from "react";
import "./about.scss";
import Button from "./button.jsx";

const Contact = () => {
  return (
    <div className="contact">
      <div className="top-section">
        <div className="top-green-box">
          <h1>Interior Design in Boston, Manchester and Providence</h1>
          <p>
            Modern living in New England offers so much potential to homeowners.
            Bellerose Interior Designworks with your sense of style, local flair
            and professional techniques to make sure your home is a reflection
            of you and your chosen part of the country.
          </p>
        </div>
        <img src="/images/photo-6-1.png" alt="kitchen" />
        <img src="/images/photo-6-2.png" alt="TV room" />
      </div>
      <div className="main-text">
        <p>Boston - Manchester - Providence</p>
        <p>Monday - Friday 9am - 5pm</p>
        <p className="final-line">By Appointment Only</p>
        <Button
          text="BOOK A CONSULTATION"
          style={{
            backgroundColor: "#7C904A",
            color: "white",
            fontWeight: "bolder",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;

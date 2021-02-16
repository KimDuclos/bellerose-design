import React from "react";
import "./service-area.scss";
import Button from "./button.jsx";

const ServiceArea = () => {
  return (
    <div className="service-area">
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
        <img src="/images/photo-3-1.png" alt="interior design image" />
        <img src="/images/photo-3-2.png" alt="interior design image" />
      </div>
      <div className="main-text">
        <h1>A New England Home from an Experienced Team</h1>
        <p>
          Bring the beauty of New England into your home with Bellerose Interior
          Design. Serving the Boston, Manchesterand Providence areas, the design
          team will come to you for a consultation.
        </p>
        <h2>A Perfectly Designed Home is Worth Having</h2>
        <p>
          Bellerose Design is deeply rooted in the New England interior design
          community. With connections all over, the team has access to a variety
          of resources, materials and expertise. New residents and lifers have
          enjoyed the localtouches applied to their homes.{" "}
        </p>
        <p className="final-paragraph">
          Clients embrace the design process, seeing them first in Sketchup 3-D
          and the coming to life. They are able to fullyunderstand how interior
          design is created and developed by professionals. The resulting design
          is a reflection of timeless beauty and personality.
        </p>
        <Button
          className="content-1-1-btn"
          text="LEARN MORE"
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

export default ServiceArea;

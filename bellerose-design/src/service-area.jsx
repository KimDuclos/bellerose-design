import React from "react";
import "./service-area.scss";
import Button from "./button.jsx";
import { HashLink } from "react-router-hash-link";

const ServiceArea = () => {
  return (
    <div className="service-area">
      <div className="sa-top-section">
        <div className="sa-top-green-box">
          <h1 className="sa-green-box-title">New England Style Interior Design</h1>
          <p className="sa-green-paragraph">
            Modern living in New England offers so much potential to homeowners.
            Bellerose Interior Designworks with your sense of style, local flair
            and professional techniques to make sure your home is a reflection
            of you and your chosen part of the country.
          </p>
        </div>
        <img className="liv-room" src="/images/photo-3-1.png" alt="living room" />
        <img className="office" src="/images/photo-3-2.png" alt="office" />
      </div>
      <div className="sa-main-text">
        <h1 className="sa-title">A New England Home from an Experienced Team</h1>
        <p className="sa-paragraph">
          Bring the beauty of New England into your home with Bellerose Interior
          Design. Serving the Boston, Manchesterand Providence areas, the design
          team will come to you for a consultation.
        </p>
        <h2>A Perfectly Designed Home is Worth Having</h2>
        <p className="sa-paragraph">
          Bellerose Design is deeply rooted in the New England interior design
          community. With connections all over, the team has access to a variety
          of resources, materials and expertise. New residents and lifers have
          enjoyed the localtouches applied to their homes.{" "}
        </p>
        <p className="final-paragraph sa-paragraph">
          Clients embrace the design process, seeing them first in Sketchup 3-D
          and the coming to life. They are able to fullyunderstand how interior
          design is created and developed by professionals. The resulting design
          is a reflection of timeless beauty and personality.
        </p>
        <HashLink to="#form">
          <Button
            className="content-1-1-btn"
            text="BOOK A CONSULTATION"
            style={{
              backgroundColor: "#7C904A",
              color: "white",
              fontWeight: "bolder",
            }}
          />
        </HashLink>
      </div>
    </div>
  );
};

export default ServiceArea;

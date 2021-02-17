import React from "react";
import { HashLink } from "react-router-hash-link";
import "./about.scss";
import Button from "./button.jsx";

const About = () => {
  return (
    <div className="about">
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
        <img src="/images/photo-5-1.png" alt="living room" />
        <img src="/images/photo-5-2.png" alt="office" />
      </div>
      <div className="main-text">
        <h1>Skilled and Practiced Team</h1>
        <p className="about-paragraph">
          The Bellerose Team is a talented group of interior designers who bring
          a professional approach to design withmodern aesthetics with an
          ability to make the client’s true style come out. The team uses a
          technical and creative interior design process to change and develop
          every living area they influence to reach even the most challenging
          design goals.
        </p>
        <p className="about-paragraph">
          As a group of New England natives, the Bellerose Team has been
          converting living spaces for more than 30 years. With deep passions
          and strong educational backgrounds, the team equally loves the
          constant change of design.
        </p>
        <h1>Confident and Caring Influence</h1>
        <p className="final-paragraph about-paragraph">
          The Bellerose Team will evaluate and analyze your lifestyle
          requirements. All of the Bellerose designers are experts in Sketchup
          3-D Modeling to show you the design before any real world changes are
          made. The team will work with you toadjust the design as the project
          moves along.
        </p>
        <HashLink to="#form">
          <Button
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

export default About;

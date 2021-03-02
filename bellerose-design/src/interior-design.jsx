import React from "react";
import "./interior-design.scss";
import Button from "./button.jsx";
import { HashLink } from "react-router-hash-link";

const InteriorDesign = () => {
  return (
    <div className="interior-design">
      <div className="it-top-section">
        <div className="top-green-box">
          <h1 className="green-box-title">Interior Design with Comfort and Compassion</h1>
          <p className="green-box-text" >
            From our first consultation to project completion, The Bellerose
            Team’s professional design techniques will contribute to outstanding
            results for your home. With collectively over 20 years of interior
            design experience, The Bellerose Team can combine your style and and
            design goals with a professional level of creativity. Your Boston,
            Manchester or Providence home will stand out among the rest.
          </p>
        </div>
        <img className="living-room" src="/images/photo-2-1.png" alt="living room" />
        <img className="kitchen" src="/images/photo-2-2.png" alt="kitchen" />
      </div>
      <div className="it-main-text">
        <p className="it-paragraph">
          From simple room redesigns to complete home remodels, Bellerose
          Interior Design offers a wide selection of interior design and
          products to guarantee a wonderful project experiene.{" "}
        </p>
        <h1 className="it-main-title">The Interior Design Procedure</h1>
        <h2>Goal-Oriented Design</h2>
        <p className="it-paragraph">
          The Bellerose Team will evaluate and analyze your lifestyle
          requirements. All of the Bellerose designers are experts in Sketchup
          3-D Modeling to show you the design before any real world changes are
          made. The team will work with you toadjust the design as the project
          moves along.
        </p>
        <p>The Bellerose Team services include the following and more:</p>
        <ul>
          <li>Guidance on designing new construction</li>
          <li>Redesigning an existing property</li>
          <li>Creating outdoor living spaces</li>
          <li>Converting layout of current design</li>
        </ul>
        <p className="it-paragraph">
          These renovations will help you create the home of your dreams in the
          Manchester, Boston and Providence areas.Bellerose Interior Design will
          help you choose fixtures, materials, finishing touches and
          construction details to fityour budget and timeline.
        </p>
        <h2>Large-Scale Home Decoration</h2>
        <p className="it-paragraph">
          Size, color and composition of materials are an important part of a
          well-done interior design plan. These are includedwith every design
          service.
        </p>
        <p className="it-paragraph">
          After discussing your personal style and living needs, Bellerose
          Interior Design will present you with design plans, including
          furniture, paint, fabric, carpeting, window treatments, lighting, and
          other pieces.
        </p>
        <h2>Perfecting the Final Design</h2>
        <p className="it-paragraph">
          Hand-picked artwork, furniture and upholstery is included and added to
          your New England home.
        </p>
        <p className="it-paragraph">
          The final pieces of your home will be added as a part of our interior
          design service. This will bringtogether every part of the design to
          create a final product you’ll love. You won’t have to worry
          aboutshopping for anything. The Bellerose team will take care of it
          for you.
        </p>
        <h2>Design Project Management</h2>
        <p className="it-paragraph">
          The first step in creating your new design is a layout in Sketchup 3-D
          modeling software. From there Bellerose Interior Design will
          coordinate every contractor and builder needed to make that layout a
          reality.
        </p>
        <p className="it-paragraph final-paragraph">
          The Bellerose Team of Boston, MA knows the distinct difference between
          a decorator and a designer. Clients want a professional interior
          designer to revamp their home. It takes more than selecting furniture
          and color. Atrue designer will also make a space highly functional,
          comfortable and beautiful.
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

export default InteriorDesign;

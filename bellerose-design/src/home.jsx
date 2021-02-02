import React from "react";
import Button from "./button.jsx";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="content-1-1-section">
        <img
          className="photo-1-1"
          src="/images/photo-1-1.png"
          alt="interior design"
        />
        <div className="content-1-1">
          <h1>Local, Customized Interior Design</h1>
          <h5>AT A BUDGET YOU CAN AFFORD</h5>
          <div className="divider">
            _______________________________________________
          </div>
          <p>
            For those who wish to live luxuriously, but with homey comforts that
            won't
          </p>
          <p>
            cost a fortune, Bellerose Interior Design creates custom creations
            tailored to
          </p>
          <p>your lifestyle.</p>
          <Button
            className="content-1-1-btn"
            text="LEARN MORE"
            style={{ backgroundColor: "white" }}
          />
        </div>
      </div>

      {/* start second horizontal section below gray divider */}
      <div className="gray-divider">
        DESIGN WITH A TOUCH OF YOUR PERSONAL STYLE
      </div>
      <div className="content-1-2-section">
        <div className="content-1-2-left-section">
          <div className="content-1-2-left-photos">
            <img src="/images/photo-1-2.png" alt="interior design" />
            <img src="/images/photo-1-3.png" alt="interior design" />
          </div>
          <div className="content-1-2-left-text">
            <div className="title">MODERN CONCEPTS WITH FAMILIAR COMFORTS</div>
            <div className="paragraph">
              Highly respected for sophisticated yet soothing design, Bellerose
              Interior Design presents an elegant visionof modern living for
              clients who desire a clean, simple look. The design team is known
              for its ability tocreate dynamic room settings with a detailed
              selection of materials and colors. With careful placement
              ofcomplimentary layers, the interior designs show their complex
              yet basic feel that can be enjoyed for manyyears to come.
            </div>
          </div>
        </div>
        <div className="content-1-2-right-section">
          <img src="/images/photo-1-4.png" alt="interior-design" />
        </div>
        <div className="content-1-3-left-section">
          <img src="photo-1-5.png" alt="interior design" />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./featured-products.scss";

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <div className="top-section">
        <img src="/images/photo-4-1.png" alt="interior design" />
        <div className="top-green-box">
          <h1>Interior Design in Boston, Manchester and Providence</h1>
          <p>
            Modern living in New England offers so much potential to homeowners.
            Bellerose Interior Designworks with your sense of style, local flair
            and professional techniques to make sure your home is a reflection
            of you and your chosen part of the country.
          </p>
        </div>
      </div>
      <div className="photo-section">
        <img
          src="/images/photo-4-2.png"
          alt="kitchen"
          className="kitchen image"
        />
        <img
          src="/images/sunroom.png"
          alt="sunroom"
          className="sunroom image"
        />
        <img
          src="/images/photo-4-3.png"
          alt="lobby"
          className="lobby image container"
        />
        <img src="/images/photo-4-4.png" alt="bar" className="bar image" />
        <img src="/images/photo-4-5.png" alt="nook" className="nook image" />
        <img
          src="/images/photo-4-7.png"
          alt="living rooom"
          className="living-room image"
        />
        <img
          src="/images/photo-4-6.png"
          alt="fancy living room"
          className="fancy-living-room image"
        />
        <img
          src="/images/photo-4-8.png"
          alt="music-area"
          className="music-area image"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;

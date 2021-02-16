import React from "react";
import "./featured-products.scss";

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <div className="top-section">
        <img src="/images/photo-4-1.png" alt="interior design" />
        <div className="top-green-box">
          <h1>Update the text that you need here</h1>
          <p>
            UPDATE THIS Modern living in New England offers so much potential to
            homeowners. Bellerose Interior Designworks with your sense of style,
            local flair and professional techniques to make sure your home is a
            reflection of you and your chosen part of the country.
          </p>
        </div>
      </div>
      <div className="photo-section">
        <img src="/images/photo-4-2.png" alt="kitchen" className="kitchen" />
        <img src="/images/sunroom.png" alt="sunroom" className="sunroom" />
        <img src="/images/photo-4-3.png" alt="lobby" className="lobby" />
        <img src="/images/photo-4-4.png" alt="bar" className="bar" />
        <img src="/images/photo-4-5.png" alt="nook" className="nook" />
        <img
          src="/images/photo-4-7.png"
          alt="living rooom"
          className="living-room"
        />
        <img
          src="/images/photo-4-6.png"
          alt="fancy living room"
          className="fancy-living-room"
        />
        <img src="/images/photo-4-8.png" alt="music-area" className="music-area" />
      </div>
    </div>
  );
};

export default FeaturedProducts;

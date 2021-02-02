import React from "react";
import "./top-bar.scss";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-box">SEARCH</div>
      <div className="locations">Boston &#183; Manchester &#183; Providence</div>
    </div>
  );
};

export default TopBar;

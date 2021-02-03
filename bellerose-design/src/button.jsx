import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <div className="outer-button" outerStyle={props.style}>
      <div className="button" style={props.style}>
        <div className="btn-text">{props.text}</div>
      </div>
    </div>
  );
};

export default Button;

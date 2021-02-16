import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <div className="button" style={props.style}>
      {props.text}
    </div>
  );
};

export default Button;

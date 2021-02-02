import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
      <div className="button">
          {props.text},
      </div>
  ); 
};

export default Button;

import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  var className = "";
  if (props.currentUser) {
    className = classes.DemoButton + " " + classes.ActiveUser;
  } else {
    className = classes.DemoButton;
  }
  return (
    <button
      className={className}
      data-testid={props.testid}
      onClick={props.click}
    >
      {props.label}
    </button>
  );
};

export default Button;

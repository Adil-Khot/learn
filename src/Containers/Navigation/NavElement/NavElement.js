import React, { useState } from "react";
import classes from "./NavElement.module.css";
import { NavLink } from "react-router-dom";

const NavElement = (props) => {
  var className =
    props.value == props.active
      ? classes.NavItems + " " + classes.Active
      : classes.NavItems;
  return (
    <NavLink
      to={"/" + props.value}
      className={className}
      onClick={props.clicked}
    >
      {props.value}
    </NavLink>
  );
};

export default NavElement;

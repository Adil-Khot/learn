import React, { useState } from "react";
import classes from "./Navigation.module.css";
import NavElement from "./NavElement/NavElement";
import logo from "../../images/logo.png";

//make this using function
const Navigation = () => {
  const [elements, setElements] = useState([
    "Home",
    "About Us",
    "Product",
    "Our Team",
    "Contact",
    "Numeric",
  ]);

  const [active, setActive] = useState("");

  const navClick = (e) => {
    console.log("clicked on the navlink");
    setActive(e);
  };

  var items = elements.map((element) => {
    return (
      <NavElement
        value={element}
        clicked={() => navClick(element)}
        active={active}
      />
    );
  });

  return (
    <div className={classes.Navbar}>
      <img width="80px" src={logo} alt="logo" />
      <p>{process.env.REACT_APP_DEV_ENVIRONMENT}</p>
      <div className={classes.NavContainer}>{items}</div>
    </div>
  );
};

export default Navigation;

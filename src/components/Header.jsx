import React from "react";
import Logo from "../assets/investment-calculator-logo.png";
import classes from "../css/Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.image} src={Logo} alt="Money logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;

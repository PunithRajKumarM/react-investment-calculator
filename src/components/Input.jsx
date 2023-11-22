import React from "react";
import classes from "../css/Input.module.css";

function Input({ inputHandler, userValue, children }) {
  return (
    <div className={classes.inputLayout}>
      <div className={classes.input}>
        <label>{children}</label>
        <input
          className={classes.inputBox}
          value={userValue}
          onChange={inputHandler}
          type="number"
          required
        />
      </div>
    </div>
  );
}

export default Input;

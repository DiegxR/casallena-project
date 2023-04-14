import React from "react";
import "./stylesButton.scss";

const Button = ({ style, width = 0, children, action }) => {
  return (
    <button
      onClick={action}
      className={`item ${width !== 0 ? "width" : ""}   ${
        style == 1
          ? "primaryButton"
          : style === 2
          ? "primaryButton__active"
          : style === 3
          ? "labelPrimary"
          : "labelSecondary"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

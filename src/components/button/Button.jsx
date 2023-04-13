import React from "react";
import "./stylesButton.scss";

const Button = ({ style, children, action }) => {
  return (
    <button
      onClick={action}
      className={`item ${
        style == 1
          ? "primaryButton"
          : (style = 2
              ? "primaryButton__active"
              : style === 3
              ? "labelPrimary"
              : "labelSecondary ")
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

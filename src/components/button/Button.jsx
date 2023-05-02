import React from "react";
import "./stylesButton.scss";
import { useNavigate } from "react-router";

const Button = ({ style, width = 0, color = "", children, action }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={action}
      className={`${
        style == 1
          ? "primaryButton"
          : style === 2
          ? "primaryButton__active"
          : style === 3
          ? "labelPrimary"
          : "labelSecondary"
      }`}
      style={{
        width: `${width}`,
        cursor: `${style === 3 || style === 1 ? "pointer" : "none"}`,
        background: `${color ? color : ""}`,
      }}
    >
      {children}
    </button>
  );
};

export default Button;

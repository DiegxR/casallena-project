import React from "react";
import "./stylesButton.scss";

const Button = ({ style, children, action }) => {
  return (
    <button onClick={action} className={style}>
      {children}
    </button>
  );
};

export default Button;

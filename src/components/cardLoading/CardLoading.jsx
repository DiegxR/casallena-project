import React from "react";
import "./stylesCardLoading.scss";
import logo from "../../assets/logo.svg";

const CardLoading = ({ width, height }) => {
  return (
    <figure
      style={{ width: `${width}`, height: `${height}` }}
      className="cardLoading"
    >
      <img src={logo} alt="" />
      <figcaption></figcaption>
    </figure>
  );
};

export default CardLoading;

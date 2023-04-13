import React from "react";
import "./stylesCards.scss";
import Button from "../button/Button";

const Card = ({ type }) => {
  return (
    <>
      {type === 1 ? (
        <figure
          className="Card CardSlider"
          style={{
            backgroundImage:
              "url(https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202021-04-17t172218-1618697022.929)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <article className="CardSlider__sec1">
            <Button style={4} children={"Consigue tus boletas"} />
          </article>

          <figcaption className="CardSlider__sec2">
            <h3>{"Romeo y julieta"}</h3>
            <p>{"Aporte desde 25k. Finaliza el 10 de agosto - Teatro"}</p>
          </figcaption>
        </figure>
      ) : type === 2 ? (
        <figure></figure>
      ) : type === 3 ? (
        <figure></figure>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;

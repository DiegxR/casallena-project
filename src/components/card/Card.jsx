import React, { useContext } from "react";
import "./stylesCards.scss";
import Button from "../button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Appcontext } from "../../router/Router";
import { useNavigate } from "react-router";

const Card = ({ type, data }) => {
  const { width } = useContext(Appcontext);
  const navigate = useNavigate();
  return (
    <>
      {type === 1 ? (
        <figure
          className="Card CardSlider"
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          onClick={() => {
            navigate(`/detail/${data.cod}`);
          }}
        >
          <article className="CardSlider__sec1">
            <Button
              style={4}
              children={"Consigue tus boletas"}
              width={width >= 768 ? "200px" : "150px"}
            />
          </article>

          <figcaption className="CardSlider__sec2">
            <h3>{data.name}</h3>
            <p>{"Aporte desde 25k. Finaliza el 10 de agosto - Teatro"}</p>
          </figcaption>
        </figure>
      ) : type === 2 ? (
        <figure
          className="Card CardObra"
          style={{
            backgroundImage:
              "url(https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202021-04-17t172218-1618697022.929)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {
            navigate("/detail");
          }}
        >
          <article className="CardObra__sec1">
            <Button
              style={4}
              children={"50% Estudiantes"}
              width={width >= 768 ? "150px" : "137px"}
            />
          </article>
          <figcaption className="CardObra__sec2">
            <article className="article1Obra">
              <h3>{"Romeo y julieta"}</h3>
              <p>{"Matacandelas- Medellín"}</p>
            </article>
            <article className="articl2Obra">
              <div>
                <h3>General</h3>
                <h2>{"$25K"}</h2>
              </div>
              <Button style={3} children={"Reserva ahora"} width={1} />
            </article>
          </figcaption>
        </figure>
      ) : type === 3 ? (
        <figure className="Card CardPrincipal">
          <img
            src="https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202021-04-17t172218-1618697022.929"
            alt=""
          />
          <figcaption className="CardPrincipal__sec1">
            <article className="secTextos">
              <h3>El cadáver</h3>
              <p>Pequeño teatro</p>
            </article>
            <article className="secIcons">
              <AiOutlineHeart className="iconHeart" />
            </article>
          </figcaption>
        </figure>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;

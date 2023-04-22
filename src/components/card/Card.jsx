import React, { useContext, useState } from "react";
import "./stylesCards.scss";
import Button from "../button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Appcontext } from "../../router/Router";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { IoIosInformationCircle } from "react-icons/io";

const Card = ({ type, data }) => {
  const { formatterPeso, setShowModal } = useContext(Appcontext);
  const { width } = useContext(Appcontext);
  const { teatros } = useSelector((store) => store.teatros);
  const { user } = useSelector((store) => store.user);
  console.log(data)
  const obtainInfoTeatro = (id) => {
    let teaInfo = [];
    if (teatros.length > 0) {
      teaInfo = teatros.filter((teatro) => teatro.cod === Number(id));

      return teaInfo[0].name;
    }
    return "Teatro plaza";
  };
  const showPrice = (price) => {
    return price.toFixed(2).slice(0, 2);
  };

  const showDesc = (desc) => {
    let descuento = desc.find(
      (item) => item.type === 0 || item.type === 1 || item.type === 2
    );

    if (descuento) {
      return descuento.type === 0
        ? "30% General"
        : descuento.type === 1
        ? "50% Estudiantes"
        : "60% Casa";
    }
    return "Aporte Voluntario";
  };
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
            <p>{`${
              data.price > 0
                ? `Precio: ${formatterPeso.format(data.price)} Finaliza el: ${
                    data.dates[data.dates.length - 1].date
                  } ${obtainInfoTeatro(data.dates[0].theater)}`
                : `Aportes desde: ${formatterPeso.format(
                    data.aporte
                  )} Finaliza el: ${
                    data.dates[data.dates.length - 1].date
                  } ${obtainInfoTeatro(data.dates[0].theater)}`
            }`}</p>
          </figcaption>
        </figure>
      ) : type === 2 ? (
        <figure
          className="Card CardObra"
          style={{
            backgroundImage: `url(${data.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <article className="CardObra__sec1">
            <Button
              style={4}
              children={showDesc(data.desc)}
              width={width >= 768 ? "150px" : "137px"}
            />
            {data.price === 0 ? (
              <IoIosInformationCircle
                className="iconInfo"
                onClick={() => {
                  setShowModal(true);
                }}
              />
            ) : (
              <></>
            )}
          </article>
          <figcaption className="CardObra__sec2">
            <article className="article1Obra">
              <h3>{data.name}</h3>
              <p>{obtainInfoTeatro(data.dates[0].theater)}</p>
            </article>
            <article className="articl2Obra">
              <div>
                <h3>{data.price === 0 ? "Aporte" : "General"}</h3>
                <h2>
                  {data.price === 0
                    ? `${formatterPeso.format(showPrice(data.aporte))} K`
                    : `${formatterPeso.format(showPrice(data.price))} K`}
                </h2>
              </div>
              <section
                style={{ marginTop: "3px", cursor: "pointer" }}
                onClick={() => navigate(`/detail/${data.cod}`)}
              >
                <Button style={3} children={"Reserva ahora"} width={1} />
              </section>
            </article>
          </figcaption>
        </figure>
      ) : type === 3 ? (
        <figure className="Card CardPrincipal">
          <img src={data.img} alt="" />
          <figcaption className="CardPrincipal__sec1">
            <article className="secTextos">
              <h3>{data.name}</h3>
              <p>{obtainInfoTeatro(data.dates[0].theater)}</p>
            </article>
            <article className="secIcons">
              {user.name ? 
              <div>
                {user.favorite.contains(data.cod) ? <AiOutlineHeart className="iconHeart2 secIcons" /> : <AiOutlineHeart className="iconHeart secIcons" />}
              </div> 
              : 
              <></> }
              
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

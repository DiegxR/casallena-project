import React, { useContext, useEffect, useState } from "react";
import "./stylesCards.scss";
import Button from "../button/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { Appcontext } from "../../router/Router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IoIosInformationCircle } from "react-icons/io";
import NoAuth from "../noAuth/NoAuth";
import { handleFavoritesAsync } from "../../redux/actions/userActions";
import { motion } from "framer-motion";
import { getDateVerification } from "../../services/dateActual";

const Card = ({ type, data }) => {
  const { formatterPeso, setShowModal } = useContext(Appcontext);
  const { width } = useContext(Appcontext);
  const { teatros } = useSelector((store) => store.teatros);
  const { user } = useSelector((store) => store.user);
  const [noAuth, setNoAuth] = useState(false);
  const [disponible, setDisponible] = useState(false);

  const dispatch = useDispatch();
  const validateFavorites = (cod) => {
    return user.favorites.includes(cod);
  };
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

  const dateDisponibles = (array) => {
    let today = new Date();
    setDisponible(false);
    array.forEach((item) => {
      let fecha = getDateVerification(item.date);

      if (!(fecha.getTime() < today.getTime())) {
        setDisponible(true);
      }
    });
  };

  useEffect(() => {
    if (data?.dates) dateDisponibles(data?.dates);
  }, [data]);

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
            <article className="secFavCard2">
              {user.name !== "" ? (
                <>
                  {user.favorites.length !== 0 ? (
                    validateFavorites(data.cod) ? (
                      <motion.div
                        initial={{ fontSize: "2px" }}
                        transition={{ duration: 0.2 }}
                        animate={{ fontSize: "16px" }}
                        className="heartRed"
                      >
                        <AiFillHeart
                          className="iconHeart2 secIcons"
                          onClick={() =>
                            dispatch(handleFavoritesAsync(data.cod))
                          }
                        />
                      </motion.div>
                    ) : (
                      <AiOutlineHeart
                        onClick={() => dispatch(handleFavoritesAsync(data.cod))}
                        className="iconHeart secIcons"
                      />
                    )
                  ) : (
                    <AiOutlineHeart
                      onClick={() => dispatch(handleFavoritesAsync(data.cod))}
                      className="iconHeart secIcons"
                    />
                  )}
                </>
              ) : (
                <AiOutlineHeart
                  className="iconHeart secIcons"
                  onClick={() => navigate("/noauth")}
                />
              )}
            </article>
            {data?.price === 0 ? (
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
                <h3>{data?.price === 0 ? "Aporte" : "General"}</h3>
                <h2>
                  {data?.price === 0
                    ? `${formatterPeso.format(showPrice(data?.aporte))} K`
                    : `${formatterPeso.format(showPrice(data?.price))} K`}
                </h2>
              </div>
              <section
                style={{ marginTop: "3px", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/detail/${data.cod}`);
                }}
              >
                {disponible == true ? (
                  <Button style={3} children={"Reserva ahora"} width={1} />
                ) : (
                  <Button
                    style={3}
                    children={"No disponible"}
                    width={1}
                    color="#2d2d2e"
                  />
                )}
              </section>
            </article>
          </figcaption>
        </figure>
      ) : type === 3 ? (
        <figure
          className="Card CardPrincipal"
          onClick={() => {
            navigate(`/detail/${data.cod}`);
          }}
        >
          <img src={data.img} alt="" />
          <figcaption className="CardPrincipal__sec1">
            <article className="secTextos">
              <h3>{data.name}</h3>
              <p>{obtainInfoTeatro(data.dates[0].theater)}</p>
            </article>
            <article className="secIcons">
              {user.name !== "" ? (
                <>
                  {user.favorites.length !== 0 ? (
                    validateFavorites(data.cod) ? (
                      <AiFillHeart
                        className="iconHeart2 "
                        onClick={() => dispatch(handleFavoritesAsync(data.cod))}
                      />
                    ) : (
                      <AiOutlineHeart
                        onClick={() => dispatch(handleFavoritesAsync(data.cod))}
                        className="iconHeart "
                      />
                    )
                  ) : (
                    <AiOutlineHeart
                      onClick={() => dispatch(handleFavoritesAsync(data.cod))}
                      className="iconHeart "
                    />
                  )}
                </>
              ) : (
                <AiOutlineHeart
                  className="iconHeart "
                  onClick={() => navigate("/noauth")}
                />
              )}
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

import React, { useContext, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GiShare } from "react-icons/gi";
import { useNavigate } from "react-router";
import DetailObra from "../../components/detailObra/DetailObra";
import "./playDetail.scss";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentObraAsync } from "../../redux/actions/obrasActions";
import Swal from "sweetalert2";
import { handleFavoritesAsync } from "../../redux/actions/userActions";
import { Appcontext } from "../../router/Router";
import { motion, useAnimate } from "framer-motion";
import { notify } from "../../services/notify";
import { getDateVerification } from "../../services/dateActual";
import SecLoading from "../../components/secLoading/SecLoading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import NoAuth from "../../components/noAuth/NoAuth";

const PlayDetail = () => {
  const { cod } = useParams();
  const dispatch = useDispatch();
  const { currentObra } = useSelector((store) => store.obras);
  const { width } = useContext(Appcontext);

  useEffect(() => {
    dispatch(getCurrentObraAsync(cod));
  }, []);
  useEffect(() => {
    if (currentObra.id) {
      setCurrentInfo(currentObra.data[0]);
      dateDisponibles(currentObra.dates);
    }
    dispatch(handleFavoritesAsync());
  }, [currentObra]);

  const navigate = useNavigate();

  const [currentOpt, setCurrentOpt] = useState(0);
  const [userLogeado, setUserLogeado] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({});
  const [disponible, setDisponible] = useState(false);
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogeado(true);
      }
    });
  }, []);

  const copyURLToClipboard = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    Swal.fire({
      title: "Link de la obra copiado",
      text: "¡Puedes compartilo con tus amigos!",
      color: "#fff",
      background: "#0d1314",
      confirmButtonColor: "#d80416",
      confirmButtonText: "Continuar",
      icon: "success",
      iconColor: "white",
    });
  };
  const obtainDesc = (array) => {
    let desc = "";
    array.forEach((item) => {
      if (item.type === 0) {
        desc = " 30% descuento general";
      } else if (item.type === 1) {
        desc = "50% descuento estudiantes";
      } else if (item.type === 2) {
        desc = "60% descuento de la casa";
      } else {
        desc = "Valor general";
      }
    });
    return desc;
  };
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

  return (
    <>
      {width < 1200 ? (
        currentObra.id ? (
          <motion.section
            initial={{ scale: 0 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1 }}
            className="PlayDetailSec"
            style={{ backgroundImage: `url(${currentObra.imgDetail})` }}
          >
            <div className="arrows">
              <BiArrowBack onClick={() => navigate(-1)} className="arrowLeft" />
              <GiShare onClick={copyURLToClipboard} className="arrowLeft" />
            </div>

            <div className="playDetailContainer">
              <div className="playDetail">
                <img
                  src={currentObra.imgPost}
                  alt=""
                  className="playDetail_img"
                />
                <div className="playDetail_txt">
                  <p className="pDiscount">{obtainDesc(currentObra?.desc)}</p>
                  <h1>{currentObra.name}</h1>
                  <p>{currentObra.description}</p>
                </div>
              </div>

              <div className="dataContainer">
                <div className="data_options">
                  {currentObra.data.map((item, index) => (
                    <section
                      key={index}
                      className={`data_title`}
                      onClick={() => {
                        setCurrentOpt(item.cod);
                        {
                          item.cod > currentOpt
                            ? setAnim(true)
                            : setAnim(false);
                        }
                        setCurrentInfo(item);
                      }}
                    >
                      <h3>{item.name}</h3>
                      <div
                        className={`rectangle ${
                          currentOpt === item.cod ? "" : "hideRectangle"
                        }`}
                      ></div>
                    </section>
                  ))}
                </div>
                <hr />
                <DetailObra
                  op={currentOpt}
                  info={currentInfo}
                  value={currentObra}
                  anim={anim}
                />
              </div>
            </div>
            <div className="reservation">
              <p>No te quedes afuera</p>
              {disponible ? (
                <button
                  onClick={() =>
                    userLogeado
                      ? navigate(`/tickets/${cod}`)
                      : navigate("/noauth")
                  }
                  className="register Sec__btn"
                  style={{
                    borderRadius: "20px",
                    fontSize: "14px",
                    padding: "8px",
                  }}
                >
                  RESERVAR AHORA
                </button>
              ) : (
                <button
                  className="btnDesactiveReserva"
                  onClick={() =>
                    notify(
                      "Aún no hay fechas disponibles",
                      "#d80416",
                      "#d80416"
                    )
                  }
                >
                  NO DISPONIBLE
                </button>
              )}
            </div>
          </motion.section>
        ) : (
          <SecLoading />
        )
      ) : (
        <>
          {currentObra.id ? (
            <motion.section
              initial={{ scale: 0 }}
              transition={{ duration: 0.8 }}
              animate={{ scale: 1 }}
              className="secDetailDesktop"
            >
              <article className="secDetailDesktop__Card">
                <div className="section">
                  <div className="sec1">
                    <div className="arrows">
                      <BiArrowBack
                        onClick={() => navigate(-1)}
                        className="arrowLeft"
                      />
                    </div>
                    <div className="secInfo">
                      <img
                        src={currentObra.imgPost}
                        alt=""
                        className="secInfo_img"
                      />
                      <div className="secInfo_txt">
                        <p className="secInfoDiscount">
                          {obtainDesc(currentObra.desc)}
                        </p>
                        <h1>{currentObra.name}</h1>
                        <p>{currentObra.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="sec2">
                    <div className="arrows">
                      <GiShare
                        onClick={copyURLToClipboard}
                        className="arrowLeft"
                      />
                    </div>
                    <div className="data_options">
                      {currentObra.length !== 0 ? (
                        currentObra.data?.map((item, index) => (
                          <section
                            key={index}
                            className={`data_title`}
                            onClick={() => {
                              setCurrentOpt(item.cod);
                              setCurrentInfo(item);
                              {
                                item.cod > currentOpt
                                  ? setAnim(true)
                                  : setAnim(false);
                              }
                            }}
                          >
                            <h3>{item.name}</h3>
                            <div
                              className={`rectangle ${
                                currentOpt === item.cod ? "" : "hideRectangle"
                              }`}
                            ></div>
                          </section>
                        ))
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="reservation">
                      {disponible ? (
                        <button
                          onClick={() =>
                            userLogeado
                              ? navigate(`/tickets/${cod}`)
                              : navigate("/noauth")
                          }
                          className="registerSec__btn"
                        >
                          RESERVAR AHORA
                        </button>
                      ) : (
                        <button
                          className="btnDesactiveReserva"
                          onClick={() =>
                            notify(
                              "Aún no hay fechas disponibles",
                              "#d80416",
                              "#d80416"
                            )
                          }
                        >
                          NO DISPONIBLE
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="section2">
                  <div className="separador"></div>
                  <section className="info">
                    <DetailObra
                      op={currentOpt}
                      info={currentInfo}
                      value={currentObra}
                      anim={anim}
                    />
                  </section>
                </div>
              </article>
            </motion.section>
          ) : (
            <SecLoading />
          )}
        </>
      )}
    </>
  );
};

export default PlayDetail;

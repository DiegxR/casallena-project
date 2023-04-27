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
    }
    dispatch(handleFavoritesAsync());
  }, [currentObra]);

  const navigate = useNavigate();
  const [currentOpt, setCurrentOpt] = useState(0);
  const [currentInfo, setCurrentInfo] = useState({});

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
    array.forEach((item) => {
      if (item.type === 0) {
        return " 30% descuento general";
      }
      if (item.type === 1) {
        return "50% descuento estudiantes";
      }
      if (item.type === 2) {
        return "60% descuento de la casa";
      }
    });
    return "Valor general";
  };
  return (
    <>
      {width < 1200 ? (
        currentObra.id ? (
          <section
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
                  <p className="pDiscount">50% estudiantes</p>
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
                />
              </div>
            </div>
            <div className="reservation">
              <p>No te quedes afuera</p>
              <button className="registerSec__btn">RESERVAR AHORA</button>
            </div>
          </section>
        ) : (
          <></>
        )
      ) : (
        <>
          {currentObra.id ? (
            <section className="secDetailDesktop">
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
                      <button
                        onClick={() => navigate("/tickets")}
                        className="registerSec__btn"
                      >
                        RESERVAR AHORA
                      </button>
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
                    />
                  </section>
                </div>
              </article>
            </section>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default PlayDetail;

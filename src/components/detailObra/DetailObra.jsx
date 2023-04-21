import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesDetailObra.scss";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { FaTheaterMasks } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import MapContainer from "../MapContainer/MapContainer";

const DetailObra = ({ op = 0, info }) => {
  return (
    <>
      {op === 0 ? (
        <div className="data" style={{ width: "100%" }}>
          <div className="datatxtSlider">
          <p>
            Pieza corta en dos actos que narra la historia de tres amigos y un
            sirviente que, luego de encontrarse en una glamurosa fiesta,
            descubren el cadáver de su anfitrión
          </p>
          <section className="carousel__detail">
            {info.img ? (
              <Carousel
                emulateTouch={true}
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                autoPlay={3000}
                width={"90%"}
                infiniteLoop={true}
                showStatus={false}
              >
                {info.img.map((item, index) => (
                  <figure key={index}>
                    <img
                      src={item}
                      alt=""
                      className="img_carousel"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </figure>
                ))}
              </Carousel>
            ) : (
              <></>
            )}
          </section>
          </div>
          <div className="data_DDGA">
            <div className="data_DDGA--item">
              <AiOutlineClockCircle />
              <p>
                <span>Duración: </span> 105 min
              </p>
            </div>

            <div className="data_DDGA--item">
              <AiOutlineCalendar />
              <p>
                <span>Fecha de inicio: </span> 8 de junio 2022
              </p>
            </div>

            <div className="data_DDGA--item">
              <FaTheaterMasks />
              <p>
                <span>Género: </span> Dramático
              </p>
            </div>

            <div className="data_DDGA--item">
              <BsPersonSquare />
              <p>
                <span>Edad: </span> Niños desde los 10 años en adelante
              </p>
            </div>
          </div>
        </div>
      ) : op === 1 ? (
        <div className="dataContainer">
          <div className="data">
            <MapContainer lat={6.2442} lng={-75.5812} />
          </div>
        </div>
      ) : (
        <div className="dataContainer">
          <div className="data">
            <h4>Información adicional</h4>
            <p>
              El uso del tapacocas tanto dentro como fuera de la sala no es
              obligatorio.
              <br />
              <br />
              Recuerda llegar al teatro con un mínimo de 15 minutos antes de la
              funsión.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailObra;

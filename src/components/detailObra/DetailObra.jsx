import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesDetailObra.scss";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { FaTheaterMasks } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import MapContainer from "../MapContainer/MapContainer";

const DetailObra = ({ op = 0, info, value }) => {
  console.log(info, value)
  return (
    <>
      {op === 0 ? (
        <div className="data" style={{ width: "100%" }}>
          <div className="datatxtSlider">
          <p>
            {info.description}
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
                <span>Duración: </span> {value?.data[0].duration} min
              </p>
            </div>

            <div className="data_DDGA--item">
              <AiOutlineCalendar />
              <p>
                <span>{value?.dates.length > 1 ? 'Fechas disponibles:': 'Fecha disponible:'} </span> {value.dates.map((item, ind)=>(`${item.date}${ind+1 == value.dates.length ? '.' : ', '}`))}
              </p>
            </div>

            <div className="data_DDGA--item">
              <FaTheaterMasks />
              <p>
                <span>Género: </span> {value.gender}
              </p>
            </div>

            <div className="data_DDGA--item">
              <BsPersonSquare />
              <p>
                <span>Edad: </span> {value.data[0].age == 1 ? 'Mayores de edad' : 'Para todo público'}
              </p>
            </div>
          </div>
        </div>
      ) : op === 1 ? (
        <div className="dataContainer">
          <div className="data">
            <MapContainer lat={6.2425332} lng={-75.5745005} />
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

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./stylesDetailObra.scss";

const DetailObra = ({ op = 0, info }) => {
  return (
    <>
      {op === 0 ? (
        <div className="data" style={{ width: "100%" }}>
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
                  <figure>
                    <img
                      src={item}
                      alt=""
                      className="img_carousel"
                      style={{
                        height: "440px",
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
      ) : op === 1 ? (
        <div className="dataContainer">
          <div className="data">
            <p>Cl. 47 #4347, Medellín, La Candelaria</p>
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

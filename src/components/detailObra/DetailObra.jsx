import React from "react";

const DetailObra = ({ op = 0, info = {} }) => {
  return (
    <>
      {op === 0 ? (
        <div className="data">
          <p>
            Pieza corta en dos actos que narra la historia de tres amigos y un
            sirviente que, luego de encontrarse en una glamurosa fiesta,
            descubren el cadáver de su anfitrión
          </p>
          <img
            className="data_img"
            src="https://www.broadwaycollection.com/wp-content/uploads/cache/MoulinRouge_Prod_1920x1080-1z9kf2kuyj2nrc8967qjbv1ctnjotpxqarmcnnqx9mn8.webp"
            alt=""
          />
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

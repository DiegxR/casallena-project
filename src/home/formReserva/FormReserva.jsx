import React from "react";
import "./stylesFormReserva.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

const FormReserva = () => {
  const navigate = useNavigate();
  return (
    <section className="secFormReserva">
      <article className="secFormReserva__header">
        <div className="iconBack">
          <BiArrowBack
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="infoHeader">
          <h3>Confirmación de reserva</h3>
          <h4>
            Tiempo de espera <span>4:00</span>
          </h4>
        </div>
      </article>
      <form action="">
        <article className="sec1">
          <label>
            <h3 className="titleForm">Detalles del contacto</h3>
            <input type="text" placeholder="Nombre" />
            Nombre completo
          </label>
          <label>
            <input type="email" placeholder="Correo" />
            Correo
          </label>
        </article>
        <article className="sec2">
          <h3>Formas de pago</h3>
        </article>
        <article className="sec3">
          <h3>Confirmación</h3>
          <div className="sec3__info">
            <p>O marinero</p>
            <p>Aporte</p>
            <p>Mier., 17 agt. / 8:00 p. m.</p>
            <div className="separador__reserva"></div>
          </div>
        </article>
      </form>
    </section>
  );
};

export default FormReserva;

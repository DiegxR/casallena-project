import React from "react";
import "./stylesFormReserva.scss";

const FormReserva = () => {
  return (
    <section>
      <article>
        <h3>Confirmación de reserva</h3>
        <h4>
          Tiempo de espera <span>4:00</span>
        </h4>
      </article>
      <form action="">
        <article className="sec1">
          <label>
            <input type="text" placeholder="Nombre" />
            Nombre completo
          </label>
          <label>
            <input type="email" placeholder="Correo" />
            Correo
          </label>
        </article>
        <article></article>
      </form>
    </section>
  );
};

export default FormReserva;

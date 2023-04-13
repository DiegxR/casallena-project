import React from "react";
import "./register.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Register = () => {
  return (
    <section className="registerSec">
      <AiOutlineArrowLeft className="arrowLeft" />
      <form className="registerSec__form">
        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="Nombre"
          />
          Nombre
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="Apellidos"
          />
          Apellidos
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="País"
          />
          País
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="Nombre de usuario"
          />
          Nombre de usuario
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="Contraseña"
          />
          Contraseña
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            type="text"
            className="registerSec__input"
            placeholder="Confirmar contraseña"
          />
          Confirmar contraseña
        </label>

        <button className="registerSec__btn">CREAR CUENTA</button>
      </form>
    </section>
  );
};

export default Register;

import React, { useState, useEffect, useContext } from "react";
import { Appcontext } from "../../router/Router";
import "./stylesFormReserva.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import { countryCodes } from "../../services/infoDatabase";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";

const FormReserva = () => {
  const navigate = useNavigate();
  const { formatterPeso } = useContext(Appcontext);
  const dispatch = useDispatch();
  const [code, setCode] = useState("+57");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [codeCel, setCodeCel] = useState(
    countryCodes.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    })
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCodeChange = (code) => {
    setCode(code);
  };

  const validateEmail = (email) => {
    console.log(email);
    const validate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!validate.test(email)) {
      setErrorEmail("Debe ingresar un correo válido por favor");
      console.log("entro");
    } else {
      setErrorEmail("");
    }
  };

  const onSubmit = (data) => {
    data.phone = code + data.phone;
  };

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
            Tiempo de espera: <span>4:00</span>
          </h4>
        </div>
      </article>
      <form onSubmit={handleSubmit(onSubmit)}>
        <article className="sec1">
          <label>
            <h3 className="titleForm">Detalles del contacto</h3>
            <input
              type="text"
              placeholder="Nombre"
              className="input"
              {...register("name", { required: "El nombre es requerido" })}
            />
            <p className="labelInfo"> Nombre completo</p>
            {errors.name ? (
              <span className="errorMsg">{errors.name.message}</span>
            ) : (
              <></>
            )}
          </label>
          <label>
            <input
              type="email"
              placeholder="Correo"
              className="input"
              onInput={(e) => validateEmail(e.target.value)}
              {...register("email", { required: "El email es requerido" })}
            />
            <p className="labelInfo"> Correo</p>
            {errors.email ? (
              <span className="errorMsg">{errors.email.message}</span>
            ) : errorEmail !== "" ? (
              <span className="errorMsg">{errorEmail}</span>
            ) : (
              <></>
            )}
          </label>
          <article className="phone-input">
            <div>
              <select value={code}>
                {codeCel.map((item, index) => (
                  <option
                    value={item.code}
                    key={index}
                    onClick={() => {
                      handleCodeChange(item.code);
                    }}
                  >
                    {item.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Número de teléfono"
                {...register("phone", {
                  required: "El número de celular es requerido",
                })}
              />
            </div>
            <p className="labelInfo">País</p>
            {errors.phone ? (
              <span className="errorMsg">{errors.phone.message}</span>
            ) : (
              <></>
            )}
          </article>
        </article>
        <article className="sec2">
          <h3>Formas de pago</h3>
          <select value={"Paypal"}>
            <option value="Paypal">Paypal</option>
          </select>
        </article>
        <article className="sec3">
          <h3>Confirmación</h3>
          <div className="sec3__info">
            <p>O marinero</p>
            <p>Aporte</p>
            <p>Mier., 17 agt. / 8:00 p. m.</p>
            <div className="separador__reserva"></div>
            <div className="sec3__info__boletas">
              <h3>2 entradas</h3>
              <h3>{formatterPeso.format(40000)}</h3>
            </div>
            <div className="separador__reserva"></div>
            <div className="sec3__info__total">
              <h2>Orden total</h2>
              <h2>{formatterPeso.format(40000)}</h2>
            </div>
          </div>
          <div className="sec3__button">
            <button className={`btnActive`}>Confirmar Reserva</button>
          </div>
        </article>
      </form>
    </section>
  );
};

export default FormReserva;

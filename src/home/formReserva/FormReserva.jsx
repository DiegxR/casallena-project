import React, { useState, useEffect, useContext } from "react";
import { Appcontext } from "../../router/Router";
import "./stylesFormReserva.scss";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import { countryCodes } from "../../services/infoDatabase";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { motion } from 'framer-motion'
import Button from "../../components/button/Button";
import {
  getLocalReserva,
  setLocalReserva,
} from "../../services/localInfoBoletas";
import Swal from "sweetalert2";
import { addDateAsync } from "../../redux/actions/userActions";

const FormReserva = () => {
  const navigate = useNavigate();
  const { formatterPeso, infoReserva, setInfoReserva } = useContext(Appcontext);
  const { id } = useParams();
  const { obras } = useSelector((store) => store.obras);
  const dispatch = useDispatch();
  const [code, setCode] = useState("+57");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [currentObra, setCurrentObra] = useState([]);
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
    Swal.fire({
      title: "Confirma tu pago",
      color: "white",
      showCancelButton: true,
      cancelButtonColor: "#0d1314",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d80416",
      closeButtonAriaLabel: '#d80416',
      confirmButtonText: "Confirmar",
      background: "#02060a"
    }).then((res)=>{
      if(res.isConfirmed){
        data.phone = code + data.phone;
        const reserv = getLocalReserva()
        dispatch(addDateAsync({...data, ...reserv}))
        navigate("/reservation");
      }
    })
  };

  useEffect(() => {
    setCurrentObra(obras.filter((item) => item.cod === Number(id)));
  }, [obras]);
  useEffect(() => {
    console.log(currentObra);
  }, [currentObra]);

  return (
    <motion.section
    initial={{scale: 0}}
    transition={{duration: 0.4}}
    animate={{scale: 1}}
    className="secFormReserva">
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
            <p>
              {currentObra.lenght !== 0 ? currentObra[0]?.name : "O marinero"}
            </p>
            <p>
              {currentObra.length !== 0
                ? currentObra[0]?.price == 0
                  ? "Aporte"
                  : "General"
                : "Sin tipo"}
            </p>
            <p>
              {infoReserva?.currentDate
                ? infoReserva.currentDate
                : "Mier., 17 agt. / 8:00 p. m."}
            </p>
            <div className="separador__reserva"></div>
            <div className="sec3__info__boletas">
              <h3>{infoReserva.boletas} entradas</h3>
              <h3>{formatterPeso.format(infoReserva.price)}</h3>
            </div>
            <div className="separador__reserva"></div>
            <div className="sec3__info__total">
              <h2>Orden total</h2>
              <h2>{formatterPeso.format(infoReserva.total)}</h2>
            </div>
          </div>
          <div className="sec3__button">
            <button className={`btnActive`}>Confirmar Reserva</button>
          </div>
        </article>
      </form>
    </motion.section>
  );
};

export default FormReserva;

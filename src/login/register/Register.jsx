import React, { useEffect, useState } from "react";
import "./register.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmail,
  toggleError,
} from "../../redux/actions/userActions";
import Loading from "../../components/loading/Loading";
import { notify } from "../../services/notify";
const minPass = /^.{6,}$/;
const upperPass = /[A-Z]/;
const specialPass = /[\W_]/;
const Register = () => {
  const navigate = useNavigate();
  const [passWord, setPassWord] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const validatePass = (value) => {
   
    if (!minPass.test(value)) {
      setErrorPass("Debe contener mínimo 6 dígitos");
    } else if (!upperPass.test(value)) {
      setErrorPass("También debe contener mínimo una mayúscula");
    } else if (!specialPass.test(value)) {
      setErrorPass("También debe contener un carácter especial");
    } else {
      setErrorPass("");
      setPassWord(value);
    }
  };

  const validatePasswords = (passWordConf) => {
    if (passWord !== passWordConf) {
    
      setError("passwordConf", { message: "Las contraseñas no coinciden" });
    } else {
      setError("passwordConf", { message: "" });
    }
  };
  const { error, loading } = useSelector((store) => store.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createUserWithEmail(data));
  };
  useEffect(() => {
    if (error.status === true) {
      notify(error.message, "#d80416", "#d80416");
    } else if (error.status === false) {
      dispatch(toggleError());
      navigate("/photouser");
    }
  }, [error]);

  return (
    <motion.section
      initial={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ x: window.innerWidth }}
      animate={{ x: "0%" }}
      className="registerSec"
    >
      <AiOutlineArrowLeft onClick={() => navigate(-1)} className="arrowLeft" />
      <form onSubmit={handleSubmit(onSubmit)} className="registerSec__form">
        <label htmlFor="" className="registerSec__label">
          <input
            {...register("email", { required: "El email es requerido" })}
            type="email"
            className="registerSec__input"
            placeholder="Email"
          />
          Email
          {errors.email ? (
            <span className="errorMsg">{errors.email.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            {...register("location", { required: "La Ciudad es requerida" })}
            type="text"
            className="registerSec__input"
            placeholder="Ciudad"
          />
          Ciudad
          {errors.location ? (
            <span className="errorMsg">{errors.location.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            {...register("name", { required: "El nombre es requerido" })}
            type="text"
            className="registerSec__input"
            placeholder="Nombre de usuario"
          />
          Nombre de usuario
          {errors.name ? (
            <span className="errorMsg">{errors.name.message}</span>
          ) : (
            <></>
          )}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            onInput={(e) => validatePass(e.target.value)}
            type="password"
            className="registerSec__input"
            placeholder="Contraseña"
          />
          Contraseña
          {errors.password ? (
            <span className="errorMsg">{errors.password.message}</span>
          ) : (
            <></>
          )}
          {errorPass !== "" ? (
            <span className="errorMsg">{errorPass}</span>
          ) : (
            ""
          )}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            {...register("passwordConf", { required: "" })}
            type="password"
            className="registerSec__input"
            placeholder="Confirmar contraseña"
            onInput={(e) => validatePasswords(e.target.value)}
          />
          Confirmar contraseña
          {errors.passwordConf ? (
            <span className="errorMsg">{errors.passwordConf.message}</span>
          ) : (
            <></>
          )}
        </label>

        <button type="submit" className="registerSec__btn">
          CREAR CUENTA
        </button>
      </form>
      {loading ? <Loading /> : <></>}
    </motion.section>
  );
};

export default Register;

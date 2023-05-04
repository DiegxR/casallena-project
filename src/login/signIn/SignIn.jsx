import React, { useEffect, useState } from "react";
import "./styles.scss";
import logo from "../../assets/logo.svg";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  loginUserAsync,
  loginWithGoogle,
} from "../../redux/actions/userActions";
import Loading from "../../components/loading/Loading";
import Swal from "sweetalert2";
import { notify } from "../../services/notify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { getUserCollection } from "../../services/getUser";
import { filters, obras, teatros } from "../../services/infoDatabase";
import { uploadArray } from "../../services/uploadCollection";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { user, error, loading } = useSelector((store) => store.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginUserAsync(data));
  };
  useEffect(() => {
    if (error.status === true) {
      notify(error.message, "#d80416", "#d80416");
    }
    onAuthStateChanged(auth, async (user) => {
      if (user) {
    
        const currentUser = await getUserCollection(user.uid);
        navigate("/home");
        dispatch(loginUser(currentUser, { status: false, message: "" }));
      }
    });
  }, []);

  return (
    <motion.section
      initial={{ x: "100%" }}
      transition={{ duration: 1, ease: "easeIn" }}
      exit={{ x: -window.innerWidth }}
      animate={{ x: "0%" }}
      className="login"
    >
      <article className="login_container">
        <figure className="login_title">
          <img src={logo} />
          <h1>CasaLlena</h1>
        </figure>
        <form onSubmit={handleSubmit(onSubmit)} className="login_form">
          <label>
            <input
              {...register("email", { required: "El correo es requerido" })}
              type="text"
              placeholder="Correo electrónico"
            />
            <span>Correo</span>
            {errors.email ? (
              <span className="errorMsg">{errors.email.message}</span>
            ) : (
              <></>
            )}
          </label>
          <label>
            <input
              {...register("password", {
                required: "La constraseña es requerida",
              })}
              type={`${showPass ? "text" : "password"}`}
              placeholder="Contraseña"
            />
            {!showPass ? (
              <AiOutlineEye
                className="login_iconShow"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="login_iconShow"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              />
            )}
            <span>Contraseña</span>
            {errors.password ? (
              <span className="errorMsg">{errors.password.message}</span>
            ) : (
              <></>
            )}
          </label>
          {error.status ? (
            <span className="errorMsg">Datos invalidos</span>
          ) : (
            <></>
          )}
          <div className="login_buttons">
            <button type="button" onClick={() => navigate("/register")}>
              CREAR UNA CUENTA
            </button>
            <button type="submit">ENTREMOS</button>
          </div>
        </form>
        <button
          onClick={() => dispatch(loginWithGoogle())}
          className="login_google"
        >
          <AiOutlineGoogle className="login_google-icon" />
          <span>Entrar con Google</span>
        </button>
      </article>
      {loading ? <Loading /> : <></>}
    </motion.section>
  );
};

export default SignIn;

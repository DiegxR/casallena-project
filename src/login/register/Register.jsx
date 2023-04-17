import React, { useEffect, useState } from "react";
import "./register.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmail, toggleError } from "../../redux/actions/userActions";
import Loading from '../../components/loading/Loading'
import { notify } from "../../services/notify";
const minPass = /^.{6,}$/
const upperPass = /[A-Z]/
const specialPass = /[\W_]/
const Register = () => {
  const navigate = useNavigate()
  const [passWord, setPassWord] = useState('')
  const [errorPass, setErrorPass] = useState('')
  const validatePass = (value) =>{
    console.log(value)
    if(!minPass.test(value)){
      setErrorPass('Debe contener mínimo 6 dígitos')
    }else if(!upperPass.test(value)){
      setErrorPass('También debe contener mínimo una mayúscula')
    }else if(!specialPass.test(value)){
      setErrorPass('También debe contener un carácter especial')
    }else{
      setErrorPass('')
      setPassWord(value)
    }
  }
  
  const validatePasswords = (passWordConf) =>{
    if(passWord !== passWordConf){
      console.log('errorr')
      setError('passwordConf', {message: 'Las contraseñas no coinciden'})
    }else{
      setError('passwordConf', {message: ''})
    }
  }
 const {error, loading} = useSelector(store => store.user)
  const {register, handleSubmit, formState: {errors}, setError} = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) =>{
    dispatch(createUserWithEmail(data))
  }
  useEffect(() => {
    if(error.status === true){
      notify(error.message, '#d80416', '#d80416')
    }else if(error.status === false){
      notify('Ususario creado exitosamente', '#027087', '#d80416')
      dispatch(toggleError())
      navigate('/photouser')
    }
  }, [error])
  
  return (
    <motion.section
      initial={{ x: '100%' }}
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{x: window.innerWidth}}
      animate={{ x: '0%' }}
      className="registerSec">
      <AiOutlineArrowLeft onClick={() => navigate(-1)} className="arrowLeft" />
      <form onSubmit={handleSubmit(onSubmit)} className="registerSec__form">
        <label htmlFor="" className="registerSec__label">
          <input
          {...register('email', {required: 'El email es requerido'})}
            type="email"
            className="registerSec__input"
            placeholder="Email"
          />
          Email
          {errors.email ? <span>{errors.email.message}</span> : <></>}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
          {...register('location', {required: ''})}
            type="text"
            className="registerSec__input"
            placeholder="Ciudad"
          />
          Ciudad
          {errors.location ? <span>{errors.location.message}</span> : <></>}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
          {...register('name', {required: ''})}
            type="text"
            className="registerSec__input"
            placeholder="Nombre de usuario"
          />
          Nombre de usuario
          {errors.location ? <span>{errors.location.message}</span> : <></>}
        </label>

        <label htmlFor="" className="registerSec__label">
          <input
            onInput={(e)=>validatePass(e.target.value)}
            type="password"
            className="registerSec__input"
            placeholder="Contraseña"
          />
          {errorPass !== '' ? <span>{errorPass}</span> : ''}
          Contraseña
        </label>
        <label htmlFor="" className="registerSec__label">
          <input
          {...register('passwordConf', {required: ''})}
            type="password"
            className="registerSec__input"
            placeholder="Confirmar contraseña"
            onInput={e => validatePasswords(e.target.value)}
          />
          Confirmar contraseña
          {errors.passwordConf ? <span>{errors.passwordConf.message}</span> : <></>}
        </label>

        <button type="submit" className="registerSec__btn">CREAR CUENTA</button>
      </form>
      {loading ? <Loading/> : <></>}
    </motion.section>
  );
};

export default Register;

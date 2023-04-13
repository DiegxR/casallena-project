import React from 'react'
import './styles.scss'
import logo from '../../assets/logo.svg'
import { AiOutlineGoogle } from "react-icons/ai";
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate()
  return (
    <motion.section
      initial={{ x: '100%' }}
      transition={{ duration: 1, ease: 'easeIn' }}
      exit={{x: -window.innerWidth}}
      animate={{ x: '0%' }}
    className='login'>
      <article className='login_container'>
        <figure className='login_title'>
          <img src={logo} />
          <h1>CasaLlena</h1>
        </figure>
        <form className='login_form'>
          <label >
            <input type="text" placeholder='Nombre de usuario' />
            <span>Nombre/ correo</span>
          </label>
          <label >
            <input type="password" placeholder='Contraseña' />
            <span>Contraseña</span>
          </label>
          <div className='login_buttons'>
            <button type='button' onClick={()=> navigate('/register')}>CREAR UNA CUENTA</button>
            <button type='submit'>ENTREMOS</button>
          </div>
        </form>
        <button className='login_google'>
          <AiOutlineGoogle className='login_google-icon'/>
          <span>Entrar con Google</span>
        </button>
      </article>
    </motion.section>
  )
}

export default SignIn
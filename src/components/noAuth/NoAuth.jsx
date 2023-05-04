import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAltSlash } from "react-icons/fa";
import './noAuth.scss'
import { motion } from 'framer-motion'
const NoAuth = () => {
    const navigate = useNavigate()
  return (
    <motion.section
    initial={{opacity: 0}}
    transition={{duration: 1}}
    animate={{opacity: 1}}
    className='noAuth'>
        <section className='noAuth_container'>
        <div className='noAuth_iconContainer'>
        <FaUserAltSlash className='noAuth_icon'/>
        <h2 className=''>Aún no has iniciado sesion</h2>
        </div>
        <article className='noAuth_buttons'>
        <button onClick={()=> navigate('/login')}>Iniciar</button>
        <button onClick={()=> navigate('/home')}>Volver</button>
        </article>
        </section>
    </motion.section>
  )
}

export default NoAuth
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAltSlash } from "react-icons/fa";
import './noAuth.scss'

const NoAuth = () => {
    const navigate = useNavigate()
  return (
    <section className='noAuth'>
        <section className='noAuth_container'>
        <div className='noAuth_iconContainer'>
        <FaUserAltSlash className='noAuth_icon'/>
        <h2 className=''>Aún no has iniciado sesion</h2>
        </div>
        <article className='noAuth_buttons'>
        <button onClick={()=> navigate('/login')}>Iniciar</button>
        <button onClick={()=> navigate(-1)}>Volver</button>
        </article>
        </section>
    </section>
  )
}

export default NoAuth
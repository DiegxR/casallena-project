import React, { useEffect } from "react";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { useDispatch, useSelector } from "react-redux";
import './perfil.scss'
import Swal from "sweetalert2";
import { logoutAsync } from "../../redux/actions/userActions";
import { useNavigate } from "react-router";
const Perfil = () => {
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    Swal.fire({
      title: '¿Desea salir de su sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#333',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutAsync())
        navigate('/')
      }
    });
  }
  console.log(user)
  return (
    <main className="perfil">
      <section className="perfil_container">
        <section className="perfil_header">
          <img src={user.photo} alt="" />
          <h2>{user.name}</h2>
          <button onClick={handleLogout}>CERRAR SESIÓN</button>
        </section>
        <article>
          <h3>Perfil</h3>
        </article>
      </section>
      <FooterMenu />
    </main>
  );
};

export default Perfil;

import React, { useEffect } from "react";
import FooterMenu from "../../components/footerMenu/FooterMenu";
import { useDispatch, useSelector } from "react-redux";
import "./perfil.scss";
import Swal from "sweetalert2";
import { logoutAsync } from "../../redux/actions/userActions";
import { useNavigate } from "react-router";
import NoAuth from "../../components/noAuth/NoAuth";
import { AiOutlineFacebook, AiOutlinePlus } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Perfil = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "¿Desea salir de su sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#333",
      confirmButtonText: "Salir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutAsync());
        navigate("/");
      }
    });
  };

  return (
    <>
      {user.name ? (
        <main className="perfil">
          <section className="perfil_container">
            <section className="perfil_header">
              <div className="imgEmailName">
                <img src={user.photo} alt="" />
                <h2>{user.name}</h2>
              </div>
              <button onClick={handleLogout}>CERRAR SESIÓN</button>
            </section>

            <article className="profile_info">
              <div className="profileName">
                <h2>Perfil</h2>
                <p>{user.name}</p>
              </div>

              <div className="contactSMedia">
                <h2>Contacto:</h2>
                <h4>Redes</h4>

                <div className="contactSMedia__container">
                  <div className="contactSMedia__">
                    <BsInstagram className="socialM__icon" />
                    <p>pangie_666</p>
                  </div>

                  <div className="contactSMedia__">
                    <AiOutlineFacebook className="socialM__icon" />
                    <p>user463</p>
                  </div>
                  <AiOutlinePlus className="arrowLeft arrowPlus" />
                </div>
              </div>

              <div className="emailPhone">
                <div className="emailPhone__items">
                  <h4>Correo</h4>
                  <p>{user.email}</p>
                </div>

                <div className="emailPhone__items">
                  <h4>Celular</h4>
                  <p>300 862 6713</p>
                </div>
              </div>

              <button className="registerSec__btn profile__btn">
                GUARDAR DATOS
              </button>
            </article>
          </section>
          <FooterMenu />
        </main>
      ) : (
        <NoAuth />
      )}
    </>
  );
};

export default Perfil;
